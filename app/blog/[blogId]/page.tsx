import { getBlogData } from "@/actions/Blog";
import Sliding from "@/components/Sliding";
import { FaPaperPlane } from "react-icons/fa";

const BlogContent = async ({
  params,
}: {
  params: {
    blogId: string;
  };
}) => {
  const blogData = await getBlogData(params.blogId);
  console.log(blogData);
  return (
    <div
      className="flex flex-col w-[95vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] py-5 lg:py-10 m-auto"
      style={{
        background: `
radial-gradient(circle, #ff420050 10%, transparent 10%) center/ 20px 20px
`,
      }}
    >
      <h1 className="judson text-4xl md:text-5xl lg:text-7xl self-start font-semibold text-primary-100 tracking-tighter leading-7 px-2 lg:leading-[3.5rem] my-5 lg:my-10">
        <Sliding>{blogData?.title}</Sliding>
      </h1>
      {blogData?.blog_content.map((ele) => {
        if (ele.paragraph) {
          return (
            <p
              className="text-primary-100 text-sm lg:text-lg mb-4 px-5 md:px-10 lg:px-16"
              key={ele.content_id}
            >
              {ele.paragraph}
            </p>
          );
        }
        if (ele.heading) {
          return (
            <h1
              className="text-primary-100 text-base lg:text-xl mt-4 px-3 md:px-5 lg:px-10 font-bold"
              key={ele.content_id}
            >
              {ele.heading}
            </h1>
          );
        }
        if (ele.image_url) {
          return (
            <div
              className="w-max-xl bg-primary-100 h-[500px] rounded-3xl mx-3 md:mx-10 lg:mx-20 bg-center bg-cover"
              style={{
                backgroundImage: `url('${ele.image_url}')`,
              }}
              key={ele.content_id}
            />
          );
        }
      })}
      <div className="w-full bg-primary-400/50 my-10 rounded-xl p-3 lg:p-5 flex flex-col gap-3">
        <h1 className="judson text-3xl md:text-4xl lg:text-5xl self-start font-semibold text-primary-100 tracking-tighter leading-7 px-2 lg:leading-[3.5rem] flex justify-between w-full items-center">
          <Sliding>What do you think?</Sliding>
          <button className="text-base lg:text-2xl grid place-items-center bg-primary-500 px-4 py-2 rounded-2xl">
            <FaPaperPlane />{" "}
          </button>
        </h1>
        <textarea
          className="rounded-xl text-sm lg:text-base text-primary-100 bg-primary-500 outline-none p-3 placeholder:text-primary-100/50 resize-none"
          rows={7}
          placeholder="Write your thoughts about this blog in a comment"
        ></textarea>
        <div className="mt-4 p-3 lg:p-5 bg-primary-500 text-primary-100 rounded-2xl flex flex-col gap-2  lg:gap-3">
          <div className="flex gap-3 items-center">
            <div
              className="h-8 lg:h-10 aspect-square bg-center bg-cover rounded-full  bg-primary-100/50 bg-blend-overlay"
              style={{
                backgroundImage: `url('https://avatars.githubusercontent.com/u/56167853?v=4')`,
              }}
            />
            <div className="flex flex-col">
              <h1 className="judson text-2xl leading-6">Sparsh Singh</h1>
              <p className="text-primary-100/70 text-sm">
                sparshsingh7586@gmail.com
              </p>
            </div>
          </div>
          <div className="w-full h-[3px] rounded-[100%] bg-primary-400/50" />
          <p className="text-sm lg:text-base">
            This is a very nice blog. I really liked it. Keep up the good work.
          </p>
        </div>
      </div>
    </div>
  );
};
export default BlogContent;
