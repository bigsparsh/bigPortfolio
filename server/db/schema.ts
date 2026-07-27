import { timestamp } from "drizzle-orm/cockroach-core";
import { datetime } from "drizzle-orm/mssql-core";
import { date, pgTable, varchar, uuid, integer, text } from "drizzle-orm/pg-core";

export const ProjectTable = pgTable("project", {
  project_id: uuid().primaryKey(),
  name: varchar({ length: 100 }).notNull(),
  description: varchar({ length: 500 }).notNull(),
  image_url: varchar({ length: 500 }),
  hosted_url: varchar({ length: 500 }),
  github_url: varchar({ length: 500 }).notNull(),
})

export const BlogTable = pgTable("blog", {
  blog_id: uuid().primaryKey(),
  name: varchar({ length: 200 }).notNull(),
  description: varchar({ length: 1000 }).notNull(),
  image_url: varchar({ length: 500 }),
  created_at: timestamp().defaultNow().notNull(),
})

export const BlogContentTable = pgTable("blog-content", {
  content_id: uuid().primaryKey(),
  index: integer().notNull(),
  paragraph: text(),
  image_url: varchar({ length: 500 }),
  heading: text(),
  code: text(),

  blog_id: uuid().notNull().references(() => BlogTable.blog_id, {
    onDelete: 'cascade',
    onUpdate: 'cascade'
  }),
})

export const CommentTable = pgTable("comment", {
  comment_id: uuid().primaryKey(),
  message: text().notNull(),
  name: varchar({ length: 50 }),
  email: varchar({ length: 100 }),
  created_at: timestamp().defaultNow(),

  blog_id: uuid().notNull().references(() => BlogTable.blog_id, {
    onDelete: 'cascade',
    onUpdate: 'cascade'
  })
})

export const EnquiryTable = pgTable("enquiry", {
  enquiry_id: uuid().primaryKey(),
  name: varchar({ length: 50 }),
  email: varchar({ length: 100 }),
  message: text().notNull(),
  created_at: timestamp().defaultNow(),
})