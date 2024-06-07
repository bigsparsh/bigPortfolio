import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { config } from "dotenv";

config({
  path: ".env.local",
});

const queryClient = postgres(process.env.DATABASE_URL!);
const db = drizzle(queryClient);
export default db;
