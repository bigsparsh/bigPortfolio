import Sliding from "@/components/Sliding";
import Image from "next/image";

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
        <div className="grid grid-cols-2 p-10">
          <div className="flex gap-10">
            <Image
              src="https://picsum.photos/1920/1080"
              alt="My photo"
              width={100}
              height={100}
            />
          </div>
          <div>rjqskhdjksadkh</div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
