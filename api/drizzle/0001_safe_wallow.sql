CREATE TABLE `rate_limit` (
	`key` text PRIMARY KEY NOT NULL,
	`window_start` integer NOT NULL,
	`count` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `rating` (
	`user_id` text NOT NULL,
	`port_id` text NOT NULL,
	`stars` integer NOT NULL,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	PRIMARY KEY(`user_id`, `port_id`),
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	CONSTRAINT "rating_stars_check" CHECK("rating"."stars" between 1 and 5)
);
--> statement-breakpoint
CREATE INDEX `rating_portId_idx` ON `rating` (`port_id`);