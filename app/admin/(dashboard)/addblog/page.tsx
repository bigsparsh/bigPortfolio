"use client";

import { createBlog } from "@/actions/Blog";
import { useRef, useState } from "react";
import { FaCode, FaHeading, FaImages, FaParagraph } from "react-icons/fa";
import { FaTextSlash } from "react-icons/fa6";

const AddBlog = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [globalIndex, setGlobalIndex] = useState(0);
  const [elements, setElements] = useState<
    {
      type: "image" | "heading" | "para" | "code";
      index: number;
      name: string;
    }[]
  >([]);

  const addImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formRef.current) {
      setElements([
        ...elements,
        {
          type: "image",
          index: globalIndex + 1,
          name: globalIndex + 1 + "_image",
        },
      ]);
      setGlobalIndex((r) => r + 1);
    }
  };
  const addParagraph = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formRef.current) {
      setElements([
        ...elements,
        {
          type: "para",
          index: globalIndex + 1,
          name: globalIndex + 1 + "_para",
        },
      ]);
      setGlobalIndex((r) => r + 1);
    }
  };
  const addHeading = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formRef.current) {
      setElements([
        ...elements,
        {
          type: "heading",
          index: globalIndex + 1,
          name: globalIndex + 1 + "_heading",
        },
      ]);
      setGlobalIndex((r) => r + 1);
    }
    console.log(elements);
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
        heading?: string;
        code?: string;
      }[];
    } = {
      total: globalIndex,
      title: (formRef.current?.title as unknown as HTMLTextAreaElement).value,
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
      if (formRef.current![localIndex + "_heading"]) {
        data.sections.push({
          index: localIndex,
          heading: formRef.current![localIndex++ + "_heading"].value,
        });
      }
    }
    console.log(data);
    createBlog(data);
  };

  return (
    <div className="grid place-items-center h-screen w-full bg-sky-900 text-white ">
      <form className="text-black flex flex-col gap-3" ref={formRef}>
        <div className="flex flex-col gap-3 fixed top-1/3 left-10">
          <button
            className="border border-white p-3 rounded-xl bg-white w-fit"
            onClick={addImage}
          >
            <FaImages />
          </button>

          <button
            className="border border-white p-3 rounded-xl bg-white w-fit"
            onClick={addHeading}
          >
            <FaHeading />
          </button>

          <button
            className="border border-white p-3 rounded-xl bg-white w-fit"
            onClick={addParagraph}
          >
            <FaParagraph />
          </button>

          <button
            className="border border-white p-3 rounded-xl bg-white w-fit"
            disabled
          >
            <FaCode />
          </button>
        </div>
        <div className="relative self-center">
          <div className="absolute top-2 left-[-40px] p-3 rounded-xl bg-white w-fit z-10">
            <FaTextSlash />
          </div>
          <textarea
            placeholder="title"
            className="p-2 m-2 rounded-lg "
            name="title"
          ></textarea>
        </div>
        {elements?.map((ele) => {
          if (ele.type === "heading") {
            return (
              <div className="relative" key={ele.name}>
                <div className="flex items-center justify-center gap-2 absolute top-2 left-[-40px] p-3 rounded-xl bg-white w-fit z-10">
                  <FaHeading />
                </div>
                <textarea
                  placeholder="Heading"
                  className="p-2 m-2 rounded-lg w-full"
                  name={ele.name}
                ></textarea>
              </div>
            );
          }

          if (ele.type === "para") {
            return (
              <div className="relative" key={ele.name}>
                <div className="flex items-center justify-center gap-2 absolute top-2 left-[-40px] p-3 rounded-xl bg-white w-fit z-10">
                  <FaParagraph />
                </div>
                <textarea
                  placeholder="Paragraph"
                  className="p-2 m-2 rounded-lg w-full"
                  name={ele.name}
                ></textarea>
              </div>
            );
          }

          if (ele.type === "image") {
            return (
              <div className="relative" key={ele.name}>
                <div className="flex items-center justify-center gap-2 absolute top-2 left-[-40px] p-3 rounded-xl bg-white w-fit z-10">
                  <FaImages />
                </div>
                <input
                  type="file"
                  accept="*.png"
                  name={ele.name}
                  className="p-2 m-2 rounded-lg w-full bg-white"
                />
              </div>
            );
          }
        })}
        <button
          className="border border-white p-3 rounded-xl bg-white w-fit self-center"
          onClick={submitEverything}
        >
          Submit everything
        </button>
      </form>
    </div>
  );
};
export default AddBlog;
