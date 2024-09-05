import { getBlogData } from "@/actions/Blog";
import Sliding from "@/components/Sliding";

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
    <div className="flex flex-col w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] py-5 lg:py-10 m-auto">
      <h1 className="judson text-4xl md:text-5xl lg:text-7xl self-start font-semibold text-primary-100 tracking-tighter leading-7 lg:leading-[3.5rem] my-5 lg:my-10">
        <Sliding>{blogData?.title}</Sliding>
      </h1>
      {blogData?.blog_content.map((ele) => {
        if (ele.paragraph) {
          return (
            <p
              className="text-primary-100 text-sm lg:text-lg mb-4 px-10 lg:px-16"
              key={ele.content_id}
            >
              {ele.paragraph}
            </p>
          );
        }
        if (ele.heading) {
          return (
            <h1
              className="text-primary-100 text-base lg:text-xl mt-4 px-5 lg:px-10 font-bold"
              key={ele.content_id}
            >
              {ele.heading}
            </h1>
          );
        }
        if (ele.image_url) {
          return (
            <div
              className="w-max-xl bg-primary-100 h-[500px] rounded-3xl mx-10 lg:mx-20 bg-center bg-cover"
              style={{
                backgroundImage: `url('${ele.image_url}')`,
              }}
              key={ele.content_id}
            />
          );
        }
      })}
    </div>
  );
};
export default BlogContent;
