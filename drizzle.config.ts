import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  schema: "./src/db/schema.ts",   // apni schema file ka path
  out: "./drizzle",                // migrations output folder
  dialect: "postgresql",           // 👈 yeh important hai
  
  dbCredentials: {
    url: process.env.DATABASE_URL!,  // env se DB URL
  },
});
