"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createBlog = async (blog: {
  total: number;
  title: string;
  sections: {
    index: number;
    para?: string;
    heading?: string;
    code?: string;
    image?: string;
  }[];
}) => {
  const newBlog = await prisma.blog.create({
    data: {
      title: blog.title,
      description: "This is a blog",
      image_url: "https://www.google.com",
    },
  });
  for (let i = 0; i < blog.total; i++) {
    await prisma.blogContent.create({
      data: {
        blog_id: newBlog.blog_id,
        index: blog.sections[i].index,
        paragraph: blog.sections[i].para,
        image_url: blog.sections[i].image,
        heading: blog.sections[i].heading,
        code: blog.sections[i].code,
      },
    });
  }
};

export const getBlogList = async () => {
  return await prisma.blog.findMany({});
};

export const getBlogData = async (blog_id: string) => {
  return await prisma.blog.findUnique({
    where: {
      blog_id,
    },
    include: {
      blog_content: {
        orderBy: {
          index: "asc",
        },
      },
    },
  });
};
