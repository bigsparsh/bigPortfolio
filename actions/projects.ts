"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getProjects = async () => {
  return await prisma.project.findMany();
};

export const createProject = async (body: {
  name: string;
  description: string;
  githubUrl: string;
  websiteUrl: string;
  imageUrl: string;
}) => {
  return await prisma.project.create({
    data: {
      name: body.name,
      description: body.description,
      github_url: body.githubUrl,
      hosted_url: body.websiteUrl,
      image_url: body.imageUrl,
    },
  });
};
