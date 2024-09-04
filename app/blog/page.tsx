import Sliding from "@/components/Sliding";
import BlogCard from "@/components/BlogCard";
import SideAppear from "@/components/SideAppear";

const Blog = () => {
  return (
    <div className="h-screen flex flex-col">
      <h1 className="judson text-7xl p-10 self-start font-semibold text-primary-100 tracking-tight ">
        <Sliding>The Blog</Sliding>
      </h1>
      <div
        className="grow overflow-auto"
        style={{
          background:
            "radial-gradient(#0000, #2e0800 100%), repeating-conic-gradient( from 45deg, #8a2400 0deg 90deg, #2e0800 90deg 180deg)",
          backgroundSize: "100%,  200px 200px",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 p-10 gap-5">
          <SideAppear appearFrom="left" delay={0}>
            <BlogCard
              title="How I scaled my realtime app to 1 million users."
              description="So this is where I tell you how a chatting application I built in 2019 scaled to 1 million users in 2021. I will be sharing the architecture, the challenges and the solutions I used to scale the app. I will also be sharing the tools I used to monitor the app and how I optimized the app for performance. I will also be sharing the tools I used to monitor the app and how I optimized the app for performance. I will also be sharing the tools I used to monitor the app and how I optimized the app for performance.
"
              tags={["Node.js", "Socket.io", "Redis", "Docker"]}
              image="https://picsum.photos/1920/1080"
            />
          </SideAppear>
          <SideAppear appearFrom="right" delay={0.1}>
            <BlogCard
              title="How I scaled my realtime app to 1 million users."
              description="So this is where I tell you how a chatting application I built in 2019 scaled to 1 million users in 2021. I will be sharing the architecture, the challenges and the solutions I used to scale the app. I will also be sharing the tools I used to monitor the app and how I optimized the app for performance. I will also be sharing the tools I used to monitor the app and how I optimized the app for performance. I will also be sharing the tools I used to monitor the app and how I optimized the app for performance.
"
              tags={["Node.js", "Socket.io", "Redis", "Docker"]}
              image="https://picsum.photos/1920/1080"
            />{" "}
          </SideAppear>
          <SideAppear delay={0.2}>
            <BlogCard
              title="How I scaled my realtime app to 1 million users."
              description="So this is where I tell you how a chatting application I built in 2019 scaled to 1 million users in 2021. I will be sharing the architecture, the challenges and the solutions I used to scale the app. I will also be sharing the tools I used to monitor the app and how I optimized the app for performance. I will also be sharing the tools I used to monitor the app and how I optimized the app for performance. I will also be sharing the tools I used to monitor the app and how I optimized the app for performance.
"
              tags={["Node.js", "Socket.io", "Redis", "Docker"]}
              image="https://picsum.photos/1920/1080"
            />
          </SideAppear>
        </div>
      </div>
    </div>
  );
};
export default Blog;
