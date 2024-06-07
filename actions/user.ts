"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const loginUser = async (email: string, password: string) => {
  return await prisma.user.findUnique({
    where: {
      email: email,
      password: password,
    },
  });
};
