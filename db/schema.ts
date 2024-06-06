import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";

export const ProjectTable = pgTable("project", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  description: varchar("description").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  githubUrl: varchar("github_url").notNull(),
  websiteUrl: varchar("website_url").notNull(),
  imageUrl: varchar("image_url").notNull(),
});

export const UserTable = pgTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
});
