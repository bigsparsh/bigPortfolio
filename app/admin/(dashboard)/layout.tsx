"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const session = useSession();
  if (session.status === "unauthenticated") router.push("/api/auth/signin");
  return <>{children}</>;
};
export default Layout;
