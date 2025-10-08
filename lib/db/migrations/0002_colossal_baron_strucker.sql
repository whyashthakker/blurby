ALTER TABLE "license_keys" ADD COLUMN "license_type" varchar(20) DEFAULT 'lifetime' NOT NULL;--> statement-breakpoint
ALTER TABLE "license_keys" ADD COLUMN "stripe_subscription_id" text;--> statement-breakpoint
ALTER TABLE "teams" ADD COLUMN "subscription_cancel_at" timestamp;--> statement-breakpoint
ALTER TABLE "teams" ADD COLUMN "subscription_canceled_at" timestamp;--> statement-breakpoint
ALTER TABLE "teams" ADD COLUMN "subscription_ended_at" timestamp;--> statement-breakpoint
ALTER TABLE "license_keys" ADD CONSTRAINT "license_keys_stripe_subscription_id_unique" UNIQUE("stripe_subscription_id");