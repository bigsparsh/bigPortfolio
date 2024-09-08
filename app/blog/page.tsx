import Sliding from "@/components/Sliding";
import BlogCard from "@/components/BlogCard";
import SideAppear from "@/components/SideAppear";
import { getBlogList } from "@/actions/Blog";
import LogoutBtn from "@/components/LogoutBtn";

const Blog = async () => {
  const blogs = await getBlogList();
  return (
    <div className="h-screen flex flex-col">
      <div className="judson text-4xl lg:text-7xl p-5 lg:p-10 self-start font-semibold text-primary-100 tracking-tight flex justify-between items-center w-full">
        <Sliding>The Blog</Sliding>
        <LogoutBtn />
      </div>
      <div
        className="grow overflow-x-clip"
        style={{
          background:
            "radial-gradient(#0000, #2e0800 100%), repeating-conic-gradient( from 45deg, #8a2400 0deg 90deg, #2e0800 90deg 180deg)",
          backgroundSize: "100%,  200px 200px",
        }}
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 p-5 lg:p-10 gap-3 lg:gap-5">
          {blogs.map((ele, index) => {
            return (
              <SideAppear
                appearFrom={index % 2 == 0 ? "left" : "right"}
                delay={index * 0.1}
                key={ele.blog_id}
              >
                <BlogCard
                  blog_id={ele.blog_id}
                  title={ele.title}
                  description={ele.description}
                  tags={["Node.js", "Socket.io", "Redis", "Docker"]}
                  image={ele.image_url}
                />
              </SideAppear>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Blog;
