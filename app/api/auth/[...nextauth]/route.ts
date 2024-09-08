import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const existingUser = await prisma.user.findUnique({
          where: {
            email: user.email as string,
          },
        });
        if (existingUser) {
          token.user = existingUser;
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    //@ts-ignore
    async signIn({
      user,
    }: {
      user: {
        name: string;
        email: string;
        image: string;
      };
    }) {
      console.log("Going into error");
      await prisma.user.upsert({
        where: {
          email: user.email,
        },
        create: {
          name: user.name,
          email: user.email,
          profile_img: user.image,
        },
        update: {
          profile_img: user.image,
        },
      });
      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
