import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const contactFormsTable = pgTable("contact_forms", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().$onUpdate(() => new Date()),
});

export type InsertContactForm = typeof contactFormsTable.$inferInsert;
export type SelectContactForm = typeof contactFormsTable.$inferSelect;
