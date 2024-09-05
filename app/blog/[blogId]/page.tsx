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
    <div className="flex flex-col p-10">
      <h1 className="judson text-7xl  self-start font-semibold text-primary-100 tracking-tighter leading-[3.5rem] my-10">
        <Sliding>{blogData?.title}</Sliding>
      </h1>
      {blogData?.blog_content.map((ele) => {
        if (ele.paragraph) {
          return (
            <p
              className="text-primary-100 text-lg my-4 px-10"
              key={ele.content_id}
            >
              {ele.paragraph}
            </p>
          );
        }
        if (ele.image_url) {
          return (
            <div
              className="w-max-xl bg-primary-100 h-[500px] rounded-3xl mx-20 bg-center bg-cover"
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
