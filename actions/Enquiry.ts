"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createEnquiry = async (body: {
  name: string;
  email: string;
  message: string;
}) => {
  return await prisma.enquiry.create({
    data: {
      name: body.name,
      email: body.email,
      message: body.message,
    },
  });
};
