"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createBlog = async (blog: {
  total: number;
  title: string;
  sections: {
    index: number;
    para?: string;
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
      },
    });
  }
  console.log(newBlog);
};
