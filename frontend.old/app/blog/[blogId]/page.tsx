import { getBlogData } from "@/actions/Blog";
import { getComments } from "@/actions/Comment";
import CodePart from "@/components/CodePart";
import CommentBox from "@/components/CommentBox";
import Sliding from "@/components/Sliding";

const BlogContent = async ({
  params,
}: {
  params: {
    blogId: string;
  };
}) => {
  const blogData = await getBlogData(params.blogId);
  const comments = await getComments(params.blogId);
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
        if (ele.code) {
          return (
            <CodePart
              key={ele.content_id}
              showLineNumbers={true}
              language="typescript"
              text={ele.code}
              className="px-3 md:px-10 lg:px-16 my-3"
            />
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
        <CommentBox blogId={blogData?.blog_id} />
        {comments.map((ele) => {
          return (
            <div
              className="mt-4 p-3 lg:p-5 bg-primary-500 text-primary-100 rounded-2xl flex flex-col gap-2  lg:gap-3"
              key={ele.comment_id}
            >
              <div className="flex gap-3 items-center">
                <div
                  className="h-8 lg:h-10 aspect-square bg-center bg-cover rounded-full  bg-primary-100/50 bg-blend-overlay"
                  style={{
                    backgroundImage: `url('${ele.user.profile_img}')`,
                  }}
                />
                <div className="flex flex-col">
                  <h1 className="judson text-2xl leading-6">{ele.user.name}</h1>
                  <p className="text-primary-100/70 text-sm">
                    {ele.user.email}
                  </p>
                </div>
              </div>
              <div className="w-full h-[3px] rounded-[100%] bg-primary-400/50" />
              <p className="text-sm lg:text-base">{ele.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BlogContent;
