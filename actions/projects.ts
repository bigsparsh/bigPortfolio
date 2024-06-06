"use server";

import db from "@/db";
import { ProjectTable } from "@/db/schema";

export const getProjects = async () => {
  return await db.select().from(ProjectTable);
};

export const createProject = async (body: {
  name: string;
  description: string;
  githubUrl: string;
  websiteUrl: string;
  imageUrl: string;
  createdAt?: Date;
}) => {
  return await db.insert(ProjectTable).values(body).returning({});
};
