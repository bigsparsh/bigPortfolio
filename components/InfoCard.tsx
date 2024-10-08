import { FaCodepen, FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Sliding from "./Sliding";
import FadingElement from "./FadingElement";

const InfoCard = ({
  heading,
  content,
  image,
  github,
  codepen,
  hosting,
}: {
  heading: string;
  content: string;
  image: string;
  github?: string;
  codepen?: string;
  hosting?: string;
}) => {
  return (
    <div className="w-[300px] lg:w-[500px] aspect-square grid place-items-center overflow-hidden rounded-3xl relative group shadow-black shadow-2xl">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="h-full w-full bg-contain bg-center group-hover:scale-125 bg-blend-overlay bg-primary-500/70 duration-200 absolute"
      ></div>
      <div className="absolute hidden flex-col gap-2 z-10 w-full h-full p-7 lg:p-10 text-white bg-gradient-to-b from-primary-100/70 to-transparent group-hover:opacity-100 group-hover:flex  opacity-0 duration-200">
        <h1 className="text-2xl lg:text-5xl font-black text-white drop-shadow-xl tracking-tight lg:leading-10 leading-6">
          <FadingElement>
            <Sliding delay={0.05}>{heading}</Sliding>
          </FadingElement>
        </h1>
        <div className="text-xs lg:text-base my-1 lg:my-3 grow line-clamp-[9] overflow-clip text-white text-justify">
          <FadingElement>
            <Sliding delay={0.2}>{content}</Sliding>
          </FadingElement>
        </div>
        <div className="flex gap-3 lg:gap-5 h-fit">
          <FadingElement delay={0.05} down={50}>
            {codepen && (
              <a href={codepen} target="_blank">
                <div className="p-0 lg:p-4 w-[35px] lg:w-[75px] aspect-square rounded-full bg-primary-500 text-white lg:text-3xl text-sm grid place-items-center">
                  <FaCodepen />
                </div>
              </a>
            )}
          </FadingElement>
          <FadingElement delay={0.15} down={50}>
            {github && (
              <a href={github} target="_blank">
                <div className="p-0 lg:p-4 w-[35px] lg:w-[75px] aspect-square rounded-full bg-primary-500 text-white lg:text-3xl text-sm grid place-items-center">
                  <FaGithub />
                </div>
              </a>
            )}
          </FadingElement>
          <FadingElement delay={0.25} down={50}>
            {hosting && (
              <a href={hosting} target="_blank">
                <div className="p-0 lg:p-4 w-[35px] lg:w-[75px] aspect-square rounded-full bg-primary-500 text-white lg:text-3xl text-sm grid place-items-center">
                  <FaArrowUpRightFromSquare />
                </div>
              </a>
            )}
          </FadingElement>
        </div>
      </div>
    </div>
  );
};
export default InfoCard;
