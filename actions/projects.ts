"use server";

import db from "@/db";
import { ProjectTable } from "@/db/schema";

export const getProjects = async () => {
  return await db.select().from(ProjectTable);
};
