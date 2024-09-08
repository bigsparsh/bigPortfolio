"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

const Page = () => {
  const session = useSession();
  const router = useRouter();
  if (session.status === "authenticated") router.push("/");
  return (
    <div
      className="h-screen bg-fixed bg-center bg-no-repeat bg-blend-soft-light bg-primary-300 grid place-items-center"
      style={{ backgroundImage: "url('//picsum.photos/1920/1080')" }}
    >
      <div className="bg-primary-500 text-primary-100 p-10 rounded-3xl space-y-5 w-min-md border-8 border-primary-100">
        <h1 className="judson text-5xl tracking-tight font-semibold">
          To continue you must Sign In
        </h1>
        <button
          className="w-full outline-none flex justify-between bg-primary-400 rounded-3xl py-3 text-xl px-5 items-center text-white/70 tracking-tight hover:bg-primary-300 duration-200"
          onClick={() => {
            signIn("google");
          }}
        >
          Google Sign In{" "}
          <div>
            <FaGoogle />
          </div>
        </button>
      </div>
    </div>
  );
};
export default Page;
