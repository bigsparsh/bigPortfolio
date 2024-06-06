"use server";

import db from "@/db";
import { UserTable } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export const loginUser = async (email: string, password: string) => {
  try {
    const user = await db
      .select()
      .from(UserTable)
      .where(and(eq(UserTable.email, email), eq(UserTable.password, password)));
    return user;
  } catch (e) {
    return false;
  }
};
