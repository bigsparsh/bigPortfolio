import CrtDisplay from "@/components/CrtDisplay";
import Draggable from "@/components/Draggable";
import FadingElement from "@/components/FadingElement";
import FullPageShowCase from "@/components/FullPageShowCase";
import Loading from "@/components/Loading";
import NavBar from "@/components/Navbar";
import ScrollingShowcase from "@/components/ScrollingShowcase";
import Sliding from "@/components/Sliding";
import { FaAws, FaCloudflare, FaPython } from "react-icons/fa";
import { FaNodeJs, FaReact } from "react-icons/fa6";
import {
  SiDjango,
  SiExpress,
  SiFastapi,
  SiGooglecloud,
  SiMongodb,
} from "react-icons/si";

export default async function Home() {
  return (
    <>
      <section className="p-3 lg:p-7 xl:p-10">
        <NavBar />
      </section>
      <section className=" px-3 lg:px-7 xl:px-10 pb-10">
        <div className="w-full p-2 lg:p-4 xl:p-5 rounded-[35px] lg:rounded-[65px] xl:rounded-[75px] bg-gradient-to-b lg:bg-gradient-to-r from-primary-400 to-primary-500 flex flex-col lg:flex-row gap-5 lg:gap-7 xl:gap-10">
          <div className="flex flex-col text-white judson basis-1/2 gap-2 lg:gap-4 xl:gap-5 text-base lg:text-xl xl:text-2xl">
            <FadingElement>
              <Draggable>
                <div className="bg-primary-500 rounded-full py-2 px-4 lg:py-5 lg:px-9 xl:py-5 xl:px-10 flex flex-col gap-0 lg:gap-2">
                  <Sliding className="px-2">Frontend</Sliding>
                  <Loading end="75%" />
                </div>
              </Draggable>
            </FadingElement>
            <FadingElement>
              <Draggable>
                <div className="bg-primary-500 rounded-full py-2 px-4 lg:py-5 lg:px-9 xl:py-5 xl:px-10 flex flex-col gap-0 lg:gap-2">
                  <Sliding className="px-2" delay={0.15}>
                    Backend
                  </Sliding>
                  <Loading end="85%" />
                </div>
              </Draggable>
            </FadingElement>
            <FadingElement>
              <div className="flex w-full gap-0 lg:gap-4 xl:gap-5">
                <Draggable>
                  <div className="bg-primary-500 rounded-l-3xl lg:rounded-full py-2 px-8 lg:py-5 lg:px-9 xl:py-5 xl:px-10 flex flex-col gap-0 lg:gap-2 basis-1/2">
                    <Sliding className="self-center" delay={0.3}>
                      <h1 className="text-center">Projects </h1>
                    </Sliding>
                    <Sliding className="self-center" delay={0.45}>
                      <h1 className="text-primary-200 text-3xl lg:text-6xl xl:text-7xl font-black font-sans ">
                        12
                      </h1>
                    </Sliding>
                  </div>
                </Draggable>
                <Draggable>
                  <div className="bg-primary-500 rounded-r-3xl lg:rounded-full py-2 px-8 lg:py-5 lg:px-9 xl:py-5 xl:px-10 flex flex-col gap-0 lg:gap-2 basis-1/2 ">
                    <Sliding className="self-center" delay={0.6}>
                      <h1 className="text-center">Tech</h1>
                    </Sliding>
                    <Sliding className="self-center">
                      <h1 className="text-primary-200 text-3xl lg:text-6xl xl:text-7xl font-black font-sans ">
                        12
                      </h1>
                    </Sliding>
                  </div>
                </Draggable>
              </div>
            </FadingElement>
          </div>
          <div className="text-primary-100 basis-1/2 flex justify-center items-center p-2 lg:p-0 ">
            <FadingElement>
              <Sliding delay={0.15}>
                <h1 className=" text-xl font-semibold lg:text-3xl xl:text-4xl judson">
                  About me
                </h1>
              </Sliding>
              <hr className="my-1 lg:my-2 xl:my-3 border-primary-200" />
              <div className="line-clamp-6 lg:line-clamp-[11] text-xs lg:text-base leading-4 ">
                <Sliding className="m-0 lg:m-5" delay={0.3}>
                  I am a student of Computer Science engineering and I am a very
                  passionate and enthusiastic person. My skill set has been
                  growing for years and through those years I have mastered
                  several web technologies, currently I intend to venture into
                  the world of advanced backends and devops using bleeding edge
                  technologies and learn to implement them myslef. I excel at
                  system design and love to solve complex problems and reverse
                  engineer applications in order to undersand their
                  architecture.
                  <br />
                </Sliding>
                <Sliding className="mx-0 lg:mx-5" delay={0.45}>
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                  reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                  mollit ex esse exercitation amet. Nisi anim cupidatat
                  excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                  est aliquip amet voluptate voluptate dolor minim nulla est
                  proident. Nostrud officia pariatur ut officia. Sit irure elit
                  esse ea nulla sunt ex occaecat reprehenderit commodo officia
                  dolor Lorem duis laboris cupidatat officia voluptate. Culpa
                  cupidatat ullamco ut ea consectetur et est culpa et culpa
                  duis.
                </Sliding>
              </div>
            </FadingElement>
          </div>
        </div>
      </section>
      <FullPageShowCase
        icon={
          <>
            <FaReact />
            <FaNodeJs />
            <SiMongodb />
            <SiExpress />
          </>
        }
      >
        MERN
      </FullPageShowCase>
      <FullPageShowCase
        icon={
          <>
            <FaPython />
            <SiFastapi />
            <SiDjango />
          </>
        }
      >
        PYTHON
      </FullPageShowCase>
      <FullPageShowCase
        icon={
          <>
            <FaAws />
            <FaCloudflare />
            <SiGooglecloud />
          </>
        }
      >
        CLOUD
      </FullPageShowCase>
      <ScrollingShowcase />
      <CrtDisplay></CrtDisplay>
    </>
  );
}
