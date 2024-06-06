"use client";
import { useRef } from "react";

import "./style.css";
import { loginUser } from "@/actions/user";

const Admin: React.FC = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const sendInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await loginUser(
      (email.current as HTMLInputElement).value,
      (password.current as HTMLInputElement).value,
    );
    console.log(user);
  };

  return (
    <div className="h-screen  flex justify-center items-center relative">
      <div
        className="h-screen absolute w-screen z-0 opacity-20 blur-[1px]"
        id="back"
      />
      <form
        className="text-white max-w-[400px] flex flex-col bg-primary-500 p-10 rounded-3xl before:rounded-3xl "
        onSubmit={sendInfo}
        id="fancy-form"
      >
        <h1 className="text-4xl leading-8 text-center font-semibold tracking-tighter">
          Admin Panel
        </h1>
        <p className="text-center text-sm text-primary-700/80">
          Enter your credentials
        </p>
        <input
          ref={email}
          type="email"
          id="email"
          placeholder="Email Address"
          className="rounded-full px-5 py-2 mt-5 text-white placeholder:text-primary-100/50 bg-primary-400"
        />
        <input
          ref={password}
          type="password"
          id="password"
          placeholder="Password"
          className="rounded-full px-5 py-2 mt-5 text-white placeholder:text-primary-100/50 bg-primary-400"
        />
        <button
          className="bg-primary-100
							 text-white 
							 px-4
               mt-4
               text-center
							 py-1
							 tracking-tight 
							 rounded-full 
							 w-fit
							 text-lg
							 outline-none
							 "
        >
          Get Access
        </button>
      </form>
    </div>
  );
};
export default Admin;
