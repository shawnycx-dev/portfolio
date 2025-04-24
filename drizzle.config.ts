import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({
  path: [".env.local", ".env"],
});

export default defineConfig({
  schema: "./src/drizzle/schema.ts",
  out: "./supabase/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});