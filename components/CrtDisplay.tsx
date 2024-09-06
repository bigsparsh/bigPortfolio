"use client";
import { useEffect, useRef, useState } from "react";
import FakeMarquee from "./FakeMarquee";
import "./css/styles.css";
import { createEnquiry } from "@/actions/Enquiry";
import Toast from "./Toast";
const CrtDisplay = () => {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const [error, setError] = useState<string>("");

  useEffect(() => {
    window.onclick = () => {
      setError("");
    };
    return () => {
      window.removeEventListener("click", () => { });
    };
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name: name.current?.value as string,
      email: email.current?.value as string,
      message: message.current?.value as string,
    };
    const enquiry = await createEnquiry(data);

    (name.current as HTMLInputElement).value = "";
    (email.current as HTMLInputElement).value = "";
    (message.current as HTMLTextAreaElement).value = "";

    if (!enquiry) {
      setError("There was an error creating the enquiry");
      return;
    }
    setError("Enquiry created successfully");
  };
  return (
    <div className="h-screen w-full pixel backdrop-opacity-15" id="screen">
      {error && <Toast>{error}</Toast>}
      <div id="body" className="w-full h-full pointer-events-none" />
      <FakeMarquee />
      <form
        className="text-primary-100 w-[275px] lg:w-[600px] text-sm md:text-lg lg:text-3xl font-black p-0 lg:p-10 rounded-2xl space-y-2"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-5 items-center justify-between">
          <label>Name: </label>
          <input
            type="text"
            ref={name}
            className="border-2 font-base border-primary-100 px-5 py-0 lg:py-1 bg-transparent outline-none w-min"
            style={{ caretShape: "underscore" }}
          />
        </div>
        <div className="flex gap-5 items-center justify-between">
          <label>Email: </label>
          <input
            ref={email}
            type="email"
            className="border-2 font-normal border-primary-100 px-5 py-0 lg:py-1 bg-transparent outline-none "
            style={{ caretShape: "underscore" }}
          />
        </div>
        <div className="flex gap-5 items-center justify-between">
          <label>Message: </label>
          <textarea
            ref={message}
            className="border-2 font-normal border-primary-100 px-5 py-0 lg:py-1 bg-transparent outline-none "
          ></textarea>
        </div>
        <button className="border-2  border-primary-100 px-5 py-1 bg-transparent outline-none hover:bg-primary-100 hover:text-white duration-200 w-full mt-2">
          Send enquiry to Sparsh
        </button>
      </form>
    </div>
  );
};
export default CrtDisplay;
