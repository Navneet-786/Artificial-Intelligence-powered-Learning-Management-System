import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_23ApxljSriBH@ep-gentle-forest-ajncwpaz-pooler.c-3.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  },
});
