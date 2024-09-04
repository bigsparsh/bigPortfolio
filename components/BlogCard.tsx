import Sliding from "./Sliding";

const BlogCard = ({
  title,
  tags,
  description,
  image,
}: {
  title: string;
  tags: string[];
  description: string;
  image: string;
}) => {
  return (
    <div className="flex gap-3 bg-primary-500/80 backdrop-blur rounded-3xl overflow-clip border-8 border-primary-100">
      <div
        className="basis-1/3 bg-center bg-cover relative before:absolute brefore:content[''] before:bg-gradient-to-tr before:from-primary-100/50 before:to-primary-500/50  before:w-full before:h-full border-r-8 border-primary-100"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      >
        <button className="bg-primary-100 text-xl tracking-tighter pl-3 pb-2 pr-2 pt-1 rounded-bl-3xl absolute right-0 before:content[''] before:absolute before:rounded-tr-3xl before:border-t-8 before:border-r-8 before:border-primary-100 before:w-5 before:h-5 before:top-[-8px] before:left-[-12px] after:content[''] after:absolute after:rounded-tr-3xl after:border-t-8 after:border-r-8 after:border-primary-100 after:w-5 after:h-5 after:bottom-[-12px] after:right-[-7px]">
          <Sliding delay={0.7}>Open</Sliding>
        </button>
      </div>
      <div className="flex flex-col p-5 basis-2/3">
        <h1 className="text-3xl judson font-semibold text-primary-100 mb-3 tracking-tight leading-7">
          <Sliding>{title}</Sliding>
        </h1>
        <div className="flex gap-3 mb-3 text-sm">
          {tags.map((tag, index) => (
            <Sliding delay={index * 0.15} key={tag}>
              <div className="bg-primary-100 px-3 rounded-xl">{tag}</div>
            </Sliding>
          ))}
        </div>
        <div className="text-primary-100 leading-5">
          <Sliding delay={0.5}>{description}</Sliding>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
