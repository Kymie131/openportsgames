PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_comment` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`port_id` text NOT NULL,
	`parent_id` text,
	`body` text NOT NULL,
	`status` text DEFAULT 'visible' NOT NULL,
	`sentiment` text,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`parent_id`) REFERENCES `comment`(`id`) ON UPDATE no action ON DELETE cascade,
	CONSTRAINT "comment_status_check" CHECK("__new_comment"."status" in ('visible', 'hidden')),
	CONSTRAINT "comment_sentiment_check" CHECK("__new_comment"."sentiment" is null or "__new_comment"."sentiment" in ('positive', 'negative'))
);
--> statement-breakpoint
INSERT INTO `__new_comment`("id", "user_id", "port_id", "parent_id", "body", "status", "sentiment", "created_at") SELECT "id", "user_id", "port_id", "parent_id", "body", "status", NULL, "created_at" FROM `comment`;--> statement-breakpoint
DROP TABLE `comment`;--> statement-breakpoint
ALTER TABLE `__new_comment` RENAME TO `comment`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE INDEX `comment_portId_status_createdAt_idx` ON `comment` (`port_id`,`status`,`created_at`);--> statement-breakpoint
CREATE INDEX `comment_parentId_idx` ON `comment` (`parent_id`);