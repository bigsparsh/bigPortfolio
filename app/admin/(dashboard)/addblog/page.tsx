"use client";

import { createBlog } from "@/actions/Blog";
import { useRef, useState } from "react";
import { FaCode, FaHeading, FaImages, FaParagraph } from "react-icons/fa";
import { FaTextSlash } from "react-icons/fa6";
import axios from "axios";

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

  const addCode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formRef.current) {
      setElements([
        ...elements,
        {
          type: "code",
          index: globalIndex + 1,
          name: globalIndex + 1 + "_code",
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
  };

  const submitEverything = async (e: React.MouseEvent<HTMLButtonElement>) => {
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
        const formdata = new FormData();
        const file =
          formRef.current![localIndex++ + "_image"].files[0] || "NO IMAGE";
        formdata.append("upload_preset", "image_preset");
        formdata.append("file", file);
        formdata.append("folder", "post");
        const req: any = await axios.post(
          "https://api.cloudinary.com/v1_1/desdv6f1q/image/upload",
          formdata,
        );

        data.sections.push({
          index: localIndex,
          image: req.data.secure_url,
        });
      }
      if (formRef.current![localIndex + "_heading"]) {
        data.sections.push({
          index: localIndex,
          heading: formRef.current![localIndex++ + "_heading"].value,
        });
      }
      if (formRef.current![localIndex + "_code"]) {
        data.sections.push({
          index: localIndex,
          code: formRef.current![localIndex++ + "_code"].value,
        });
      }
    }
    createBlog(data);
    setElements([]);
  };

  return (
    <div className="grid place-items-center h-screen w-full bg-primary-500 text-white ">
      <form className="text-black flex flex-col gap-3" ref={formRef}>
        <div className="flex flex-col gap-3 fixed top-1/3 left-10 text-primary-100">
          <button
            className="border border-primary-100 p-3 rounded-xl bg-primary-400 w-fit"
            onClick={addImage}
          >
            <FaImages />
          </button>

          <button
            className="border border-primary-100 p-3 rounded-xl bg-primary-400 w-fit"
            onClick={addHeading}
          >
            <FaHeading />
          </button>

          <button
            className="border border-primary-100 p-3 rounded-xl bg-primary-400 w-fit"
            onClick={addParagraph}
          >
            <FaParagraph />
          </button>

          <button
            className="border border-primary-100 p-3 rounded-xl bg-primary-400 w-fit"
            onClick={addCode}
          >
            <FaCode />
          </button>
        </div>

        <div className="flex flex-col gap-3 fixed top-1/3 right-10 text-primary-100">
          <button
            className="border border-primary-100 p-3 rounded-xl bg-primary-500 w-fit self-center outline-none"
            onClick={submitEverything}
          >
            Submit
          </button>
        </div>
        <div className="relative self-center">
          <div className="absolute top-2 left-[-40px] p-3 rounded-xl bg-primary-400 text-primary-100 w-fit z-10">
            <FaTextSlash />
          </div>
          <textarea
            placeholder="title"
            className="p-2 m-2 rounded-lg w-[70vw] bg-primary-400/50 text-primary-100 outline-none focus:ring-4 ring-primary-100"
            rows={3}
            name="title"
          ></textarea>
        </div>
        {elements?.map((ele) => {
          if (ele.type === "heading") {
            return (
              <div className="relative" key={ele.name}>
                <div className="flex items-center justify-center gap-2 absolute top-2 left-[-40px] p-3 rounded-xl bg-primary-400 text-primary-100 w-fit z-10">
                  <FaHeading />
                </div>
                <textarea
                  placeholder="Heading"
                  className="p-2 m-2 rounded-lg w-[70vw] bg-primary-400/50 text-primary-100 outline-none focus:ring-4 ring-primary-100"
                  rows={3}
                  name={ele.name}
                ></textarea>
              </div>
            );
          }

          if (ele.type === "para") {
            return (
              <div className="relative" key={ele.name}>
                <div className="flex items-center justify-center gap-2 absolute top-2 left-[-40px] p-3 rounded-xl bg-primary-400 text-primary-100 w-fit z-10">
                  <FaParagraph />
                </div>
                <textarea
                  placeholder="Paragraph"
                  className="p-2 m-2 rounded-lg w-[70vw] bg-primary-400/50 text-primary-100 outline-none focus:ring-4 ring-primary-100"
                  rows={3}
                  name={ele.name}
                ></textarea>
              </div>
            );
          }

          if (ele.type === "image") {
            return (
              <div className="relative" key={ele.name}>
                <div className="flex items-center justify-center gap-2 absolute top-2 left-[-40px] p-3 rounded-xl bg-primary-400 text-primary-100 w-fit z-10">
                  <FaImages />
                </div>
                <input
                  type="file"
                  accept="*.png"
                  name={ele.name}
                  className="p-2 m-2 rounded-lg w-[70vw] bg-primary-400/50 text-primary-100 outline-none focus:ring-4 ring-primary-100 file:rounded-xl file:text-sm file:text-primary-100 file:bg-primary-500 file:px-5 file:py-2 file:border-none file:mr-10"
                />
              </div>
            );
          }

          if (ele.type === "code") {
            return (
              <div className="relative" key={ele.name}>
                <div className="flex items-center justify-center gap-2 absolute top-2 left-[-40px] p-3 rounded-xl bg-primary-400 text-primary-100 w-fit z-10">
                  <FaCode />
                </div>
                <textarea
                  placeholder="Code"
                  className="p-2 m-2 rounded-lg w-[70vw] bg-primary-400/50 text-primary-100 outline-none focus:ring-4 ring-primary-100"
                  rows={10}
                  name={ele.name}
                ></textarea>
              </div>
            );
          }
        })}
      </form>
    </div>
  );
};
export default AddBlog;
