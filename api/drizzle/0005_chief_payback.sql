CREATE TABLE `moderation_log` (
	`id` text PRIMARY KEY NOT NULL,
	`actor_id` text,
	`action` text NOT NULL,
	`target_type` text NOT NULL,
	`target_id` text NOT NULL,
	`note` text,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	FOREIGN KEY (`actor_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE set null,
	CONSTRAINT "moderation_log_action_check" CHECK("moderation_log"."action" in ('report.dismiss', 'report.resolve', 'report.reopen', 'comment.hide', 'comment.show', 'comment.delete', 'missing_comment.hide', 'missing_comment.show', 'missing_comment.delete', 'missing_port.status', 'user.role', 'user.delete')),
	CONSTRAINT "moderation_log_target_type_check" CHECK("moderation_log"."target_type" in ('report', 'comment', 'missing_comment', 'missing_port', 'user'))
);
--> statement-breakpoint
CREATE INDEX `moderation_log_createdAt_idx` ON `moderation_log` (`created_at`);--> statement-breakpoint
CREATE INDEX `moderation_log_action_createdAt_idx` ON `moderation_log` (`action`,`created_at`);--> statement-breakpoint
CREATE INDEX `moderation_log_actorId_idx` ON `moderation_log` (`actor_id`);--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_report` (
	`id` text PRIMARY KEY NOT NULL,
	`comment_id` text NOT NULL,
	`user_id` text NOT NULL,
	`reason` text NOT NULL,
	`status` text DEFAULT 'open' NOT NULL,
	`note` text,
	`resolved_by` text,
	`resolved_at` integer,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	FOREIGN KEY (`comment_id`) REFERENCES `comment`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`resolved_by`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE set null,
	CONSTRAINT "report_status_check" CHECK("__new_report"."status" in ('open', 'dismissed', 'resolved'))
);
--> statement-breakpoint
INSERT INTO `__new_report`("id", "comment_id", "user_id", "reason", "status", "note", "resolved_by", "resolved_at", "created_at") SELECT "id", "comment_id", "user_id", "reason", 'open', NULL, NULL, NULL, "created_at" FROM `report`;--> statement-breakpoint
DROP TABLE `report`;--> statement-breakpoint
ALTER TABLE `__new_report` RENAME TO `report`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE INDEX `report_createdAt_idx` ON `report` (`created_at`);--> statement-breakpoint
CREATE INDEX `report_status_createdAt_idx` ON `report` (`status`,`created_at`);--> statement-breakpoint
CREATE UNIQUE INDEX `report_commentId_userId_unique` ON `report` (`comment_id`,`user_id`);