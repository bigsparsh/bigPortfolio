"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const LogoutBtn = () => {
  const session = useSession();
  return (
    <button
      onClick={() => {
        if (session.status === "authenticated") {
          signOut();
        }
        if (session.status === "unauthenticated") {
          signIn("google");
        }
      }}
      className="rounded-full font-sans font-normal lg:font-medium text-base lg:text-2xl text-primary-500 bg-primary-100 tracking-normal px-2 lg:px-4 py-1  lg:py-2"
    >
      {session.status === "authenticated" ? "Log Out" : "Sign In"}
    </button>
  );
};
export default LogoutBtn;
