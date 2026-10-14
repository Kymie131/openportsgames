CREATE TABLE `comment` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`port_id` text NOT NULL,
	`body` text NOT NULL,
	`status` text DEFAULT 'visible' NOT NULL,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	CONSTRAINT "comment_status_check" CHECK("comment"."status" in ('visible', 'hidden'))
);
--> statement-breakpoint
CREATE INDEX `comment_portId_status_createdAt_idx` ON `comment` (`port_id`,`status`,`created_at`);--> statement-breakpoint
CREATE TABLE `report` (
	`id` text PRIMARY KEY NOT NULL,
	`comment_id` text NOT NULL,
	`user_id` text NOT NULL,
	`reason` text NOT NULL,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	FOREIGN KEY (`comment_id`) REFERENCES `comment`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `report_createdAt_idx` ON `report` (`created_at`);--> statement-breakpoint
CREATE UNIQUE INDEX `report_commentId_userId_unique` ON `report` (`comment_id`,`user_id`);