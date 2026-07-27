"use client";
import { useRef } from "react";
import Sliding from "./Sliding";
import { FaPaperPlane } from "react-icons/fa";
import { createComment } from "@/actions/Comment";
import { useSession } from "next-auth/react";

const CommentBox = ({ blogId }: { blogId: string | undefined }) => {
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const session = useSession();
  const submitComment = async () => {
    if (
      commentRef.current &&
      commentRef.current.value &&
      session.status === "authenticated"
    ) {
      await createComment(
        commentRef.current?.value,
        blogId as string,
        session.data.user.user_id,
      );
      commentRef.current.value = "";
    }
  };
  return (
    <>
      <h1 className="judson text-3xl md:text-4xl lg:text-5xl self-start font-semibold text-primary-100 tracking-tighter leading-7 px-2 lg:leading-[3.5rem] flex justify-between w-full items-center">
        <Sliding>What do you think?</Sliding>
        <button
          className="text-base lg:text-2xl grid place-items-center bg-primary-500 px-4 py-2 rounded-2xl"
          onClick={submitComment}
        >
          <FaPaperPlane />{" "}
        </button>
      </h1>
      <textarea
        className="rounded-xl text-sm lg:text-base text-primary-100 bg-primary-500 outline-none p-3 placeholder:text-primary-100/50 resize-none"
        rows={7}
        placeholder="Write your thoughts about this blog in a comment"
        ref={commentRef}
      ></textarea>
    </>
  );
};
export default CommentBox;
