"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createComment = async (
  message: string,
  blog_id: string,
  user_id: string,
) => {
  if (message && blog_id && user_id) {
    const newComment = await prisma.comments.create({
      data: {
        message,
        blog_id,
        user_id,
      },
      include: {
        user: true,
      },
    });
    return newComment;
  }
  return null;
};

export const getComments = async (blog_id: string) => {
  const comments = await prisma.comments.findMany({
    where: {
      blog_id,
    },
    include: {
      user: true,
    },
  });
  return comments;
};
