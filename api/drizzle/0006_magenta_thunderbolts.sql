CREATE TABLE `favorite` (
	`user_id` text NOT NULL,
	`port_id` text NOT NULL,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	PRIMARY KEY(`user_id`, `port_id`),
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `favorite_portId_idx` ON `favorite` (`port_id`);--> statement-breakpoint
CREATE INDEX `favorite_userId_createdAt_idx` ON `favorite` (`user_id`,`created_at`);