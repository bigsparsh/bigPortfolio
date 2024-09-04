"use client";

import { useRef, useState } from "react";

const AddBlog = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const addImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const newFile = document.createElement("input");
      newFile.type = "file";
      newFile.id = imageIndex + 1 + "_image";
      newFile.name = imageIndex + 1 + "_image";
      newFile.className = "rounded-xl bg-sky-200";
      formRef.current.appendChild(newFile);
      setImageIndex((r) => r + 1);
    }
  };
  const addParagraph = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const newPara = document.createElement("textarea");
      newPara.id = paragraphIndex + 1 + "_para";
      newPara.className = "rounded-xl bg-sky-200";
      newPara.name = paragraphIndex + 1 + "_para";
      newPara.placeholder = "Enter stuff for para " + newPara.id;
      formRef.current.appendChild(newPara);
      setParagraphIndex((r) => r + 1);
    }
  };

  const submitEverything = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data: any = {
      title: (formRef.current?.title as unknown as HTMLInputElement).value,
      sections: [],
    };
    const paras = 0;
    const images = 0;
    let count = 0;
    while (paras != paragraphIndex && images != imageIndex) {
      if (paras != paragraphIndex) {
        count++;
        data.sections.push({
          index: count,
          para: null,
          image: formRef.current![paras + "_para"].value,
        });
        paras++;
      }
      if (images != )
    }
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
