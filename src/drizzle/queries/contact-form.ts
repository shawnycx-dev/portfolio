import { db } from "@/drizzle";
import { contactFormsTable, type InsertContactForm } from "@/drizzle/schema";

export async function insertContactForm({ name, email, message }: InsertContactForm) {
  return await db.insert(contactFormsTable).values({
    name,
    email,
    message
  });
}