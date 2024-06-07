"use client";
import { createProject } from "@/actions/projects";
import { useRef } from "react";

const Dashboard = () => {
  const name = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const githubUrl = useRef<HTMLInputElement>(null);
  const websiteUrl = useRef<HTMLInputElement>(null);
  const imageUrl = useRef<HTMLInputElement>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const project = await createProject({
      name: name.current?.value || "",
      description: description.current?.value || "",
      githubUrl: githubUrl.current?.value || "",
      websiteUrl: websiteUrl.current?.value || "",
      imageUrl: imageUrl.current?.value || "",
    });
    console.log(project);
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form
        className="w-[500px] h-fit p-10 rounded-3xl bg-primary-400/50 flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter the name of the project"
          ref={name}
          className="rounded-full bg-primary-400 px-4 py-2 placeholder:text-white/50 text-white"
        />
        <input
          type="text"
          placeholder="Enter information about the project"
          ref={description}
          className="rounded-full bg-primary-400 px-4 py-2 placeholder:text-white/50 text-white"
        />
        <input
          type="text"
          placeholder="Enter the website url if it is hosted somewhere"
          ref={websiteUrl}
          className="rounded-full bg-primary-400 px-4 py-2 placeholder:text-white/50 text-white"
        />
        <input
          type="text"
          placeholder="Enter the github url where the source code is"
          ref={githubUrl}
          className="rounded-full bg-primary-400 px-4 py-2 placeholder:text-white/50 text-white"
        />
        <input
          type="text"
          placeholder="Add a screenshot url"
          ref={imageUrl}
          className="rounded-full bg-primary-400 px-4 py-2 placeholder:text-white/50 text-white"
        />
        <button className="px-4 py-2 bg-primary-100 text-white rounded-full h-fit self-end">
          Add +{" "}
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
