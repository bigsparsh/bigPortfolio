"use client";

import { createBlog } from "@/actions/Blog";
import { useRef, useState } from "react";

const AddBlog = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [globalIndex, setGlobalIndex] = useState(0);

  const addImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const newFile = document.createElement("input");
      newFile.type = "file";
      newFile.id = globalIndex + 1 + "_image";
      newFile.name = globalIndex + 1 + "_image";
      newFile.className = "rounded-xl bg-sky-200";
      formRef.current.appendChild(newFile);
      setGlobalIndex((r) => r + 1);
    }
  };
  const addParagraph = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const newPara = document.createElement("textarea");
      newPara.id = globalIndex + 1 + "_para";
      newPara.className = "rounded-xl bg-sky-200";
      newPara.name = globalIndex + 1 + "_para";
      newPara.placeholder = "Enter stuff for para " + newPara.id;
      formRef.current.appendChild(newPara);
      setGlobalIndex((r) => r + 1);
    }
  };

  const submitEverything = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data: {
      total: number;
      title: string;
      sections: {
        index: number;
        para?: string;
        image?: string;
      }[];
    } = {
      total: globalIndex,
      title: (formRef.current?.title as unknown as HTMLInputElement).value,
      sections: [],
    };
    let localIndex = 1;
    while (localIndex <= globalIndex) {
      console.log(formRef.current![localIndex + "_para"]);
      if (formRef.current![localIndex + "_para"]) {
        data.sections.push({
          index: localIndex,
          para: formRef.current![localIndex++ + "_para"].value,
        });
      }
      if (formRef.current![localIndex + "_image"]) {
        data.sections.push({
          index: localIndex,
          image: formRef.current![localIndex++ + "_image"].value,
        });
      }
    }
    console.log(data);
    createBlog(data);
  };

  return (
    <div className="grid place-items-center h-screen w-full bg-sky-900 text-white ">
      <form className="text-black flex flex-col gap-3" ref={formRef}>
        <div className="flex gap-10">
          <button
            className="border border-white p-3 rounded-xl bg-white"
            onClick={addImage}
          >
            Add image
          </button>
          <button
            className="border border-white p-3 rounded-xl bg-white"
            onClick={addParagraph}
          >
            Add paragraph
          </button>
        </div>
        <input
          type="text"
          placeholder="Title"
          className="p-2 m-2 rounded-lg"
          name="title"
        />
        <button
          className="border border-white p-3 rounded-xl bg-white"
          onClick={submitEverything}
        >
          Submit everything
        </button>
      </form>
    </div>
  );
};
export default AddBlog;
