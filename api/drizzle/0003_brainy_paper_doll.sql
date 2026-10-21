CREATE TABLE `missing_port` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`game` text NOT NULL,
	`platform` text NOT NULL,
	`url` text,
	`notes` text,
	`user_id` text NOT NULL,
	`status` text DEFAULT 'open' NOT NULL,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	CONSTRAINT "missing_port_status_check" CHECK("missing_port"."status" in ('open', 'done', 'hidden'))
);
--> statement-breakpoint
CREATE INDEX `missing_port_status_createdAt_idx` ON `missing_port` (`status`,`created_at`);--> statement-breakpoint
CREATE TABLE `missing_port_comment` (
	`id` text PRIMARY KEY NOT NULL,
	`missing_port_id` text NOT NULL,
	`user_id` text NOT NULL,
	`parent_id` text,
	`body` text NOT NULL,
	`status` text DEFAULT 'visible' NOT NULL,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	FOREIGN KEY (`missing_port_id`) REFERENCES `missing_port`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`parent_id`) REFERENCES `missing_port_comment`(`id`) ON UPDATE no action ON DELETE cascade,
	CONSTRAINT "missing_port_comment_status_check" CHECK("missing_port_comment"."status" in ('visible', 'hidden'))
);
--> statement-breakpoint
CREATE INDEX `missing_port_comment_missingId_status_createdAt_idx` ON `missing_port_comment` (`missing_port_id`,`status`,`created_at`);--> statement-breakpoint
CREATE INDEX `missing_port_comment_parentId_idx` ON `missing_port_comment` (`parent_id`);--> statement-breakpoint
ALTER TABLE `comment` ADD `parent_id` text REFERENCES comment(id);--> statement-breakpoint
CREATE INDEX `comment_parentId_idx` ON `comment` (`parent_id`);