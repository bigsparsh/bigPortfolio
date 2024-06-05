import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { migrate } from "drizzle-orm/neon-http/migrator";

const postgres = neon(process.env.DATABASE_URL!);
const db = drizzle(postgres);

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: "./migrations/" });
    console.log("Migration completed");
  } catch (error) {
    console.error("Error during migration:", error);
    process.exit(1);
  }
};

main();
