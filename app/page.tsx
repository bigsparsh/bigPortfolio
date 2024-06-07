import Button from "@/components/Button";
import Draggable from "@/components/Draggable";
import FadingElement from "@/components/FadingElement";
import FullPageShowCase from "@/components/FullPageShowCase";
import Loading from "@/components/Loading";
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
      <section className="p-5 lg:p-7 xl:p-10">
        <nav className="text-primary-200 flex text-base lg:text-xl xl:text-2xl judson ">
          <a
            href=""
            className="px-3 py-1 lg:py-3 lg:px-7 xl:py-5 xl:px-10 text-white rounded-t-xl lg:rounded-t-2xl xl:rounded-t-3xl bg-fixed bg-center bg-no-repeat bg-blend-soft-light bg-primary-300"
            style={{ backgroundImage: "url('//picsum.photos/1920/1080')" }}
          >
            <Sliding delay={0.3}>Home</Sliding>
          </a>
          <a
            href=""
            className="px-3 py-1 lg:py-3 lg:px-7 xl:py-5 xl:px-10 text-white rounded-t-xl lg:rounded-t-2xl xl:rounded-t-3xl "
          >
            <Sliding delay={0.15}>Contacts</Sliding>
          </a>
          <a
            href=""
            className="px-3 py-1 lg:py-3 lg:px-7 xl:py-5 xl:px-10 text-white rounded-t-xl lg:rounded-t-2xl xl:rounded-t-3xl "
          >
            <Sliding>About me</Sliding>
          </a>
        </nav>
        <div
          className="w-full p-7 lg:p-10 xl:p-20 rounded-b-[35px] rounded-tr-[35px] lg:rounded-b-[65px] lg:rounded-tr-[65px] xl:rounded-b-[75px] xl:rounded-tr-[75px] bg-fixed bg-center bg-no-repeat bg-blend-soft-light bg-primary-300"
          style={{ backgroundImage: "url('//picsum.photos/1920/1080')" }}
        >
          <FadingElement>
            <h1 className="text-5xl lg:text-6xl xl:text-8xl mb-2 lg:mb-4 xl:mb-6 judson tracking-[-0.065em] text-white xl:leading-[0.75] lg:leading-[0.75] leading-[0.75]">
              <Sliding>Welcome to</Sliding>
              <Sliding delay={0.15}>Sparsh Singh&apos;s</Sliding>
              <Sliding delay={0.3}>Portfolio</Sliding>
            </h1>
            <Button
              className="judson text-xl bg-primary-500"
              activeBorder="bg-primary-100"
              normalBorder="bg-white"
            >
              Explore Projects
            </Button>
          </FadingElement>
        </div>
      </section>
      <section className=" px-5 lg:px-7 xl:px-10 pb-10">
        <div className="w-full p-3 lg:p-4 xl:p-5 rounded-[35px] lg:rounded-[65px] xl:rounded-[75px] bg-gradient-to-b lg:bg-gradient-to-r from-primary-400 to-primary-500 flex flex-col lg:flex-row gap-5 lg:gap-7 xl:gap-10">
          <div className="flex flex-col text-white judson basis-1/2 gap-3 lg:gap-4 xl:gap-5 text-base lg:text-xl xl:text-2xl">
            <FadingElement>
              <Draggable>
                <div className="bg-primary-500 rounded-full py-4 px-8 lg:py-5 lg:px-9 xl:py-5 xl:px-10 flex flex-col gap-1 lg:gap-2">
                  <Sliding>Frontend</Sliding>
                  <Loading end="75%" />
                </div>
              </Draggable>
            </FadingElement>
            <FadingElement>
              <Draggable>
                <div className="bg-primary-500 rounded-full py-4 px-8 lg:py-5 lg:px-9 xl:py-5 xl:px-10 flex flex-col gap-1 lg:gap-2">
                  <Sliding delay={0.15}>Backend</Sliding>
                  <Loading end="85%" />
                </div>
              </Draggable>
            </FadingElement>
            <FadingElement>
              <div className="flex w-full gap-0 lg:gap-4 xl:gap-5">
                <Draggable>
                  <div className="bg-primary-500 rounded-l-3xl lg:rounded-full py-4 px-8 lg:py-5 lg:px-9 xl:py-5 xl:px-10 flex flex-col gap-1 lg:gap-2 basis-1/2">
                    <Sliding className="self-center" delay={0.3}>
                      <h1 className="text-center">Projects </h1>
                    </Sliding>
                    <Sliding className="self-center" delay={0.45}>
                      <h1 className="text-primary-200  text-5xl lg:text-6xl xl:text-7xl font-black font-sans ">
                        12
                      </h1>
                    </Sliding>
                  </div>
                </Draggable>
                <Draggable>
                  <div className="bg-primary-500 rounded-r-3xl lg:rounded-full py-4 px-8 lg:py-5 lg:px-9 xl:py-5 xl:px-10 flex flex-col gap-1 lg:gap-2 basis-1/2 ">
                    <Sliding className="self-center" delay={0.6}>
                      <h1 className="text-center">Tech</h1>
                    </Sliding>
                    <Sliding className="self-center">
                      <h1 className="text-primary-200 text-5xl lg:text-6xl xl:text-7xl font-black font-sans ">
                        12
                      </h1>
                    </Sliding>
                  </div>
                </Draggable>
              </div>
            </FadingElement>
          </div>
          <div className="text-white basis-1/2 flex justify-center items-center p-3 lg:p-0 ">
            <FadingElement>
              <Sliding delay={0.15}>
                <h1 className=" text-2xl lg:text-3xl xl:text-4xl judson">
                  About me
                </h1>
              </Sliding>
              <hr className="my-2 xl:my-3" />
              <div className="text-justify line-clamp-6 text-sm lg:text-base">
                <Sliding className="m-0 lg:m-5" delay={0.3}>
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                  reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                  mollit ex esse exercitation amet. Nisi anim cupidatat
                  excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                  est aliquip amet voluptate voluptate dolor minim nulla est
                  proident. Nostrud officia pariatur ut officia. Sit irure elit
                  esse ea nulla sunt Aliqua reprehenderit commodo ex non
                  excepteur duis sunt velit enim. Voluptate laboris sint
                  cupidatat ullamco ut ea consectetur et est culpa et culpa
                  duis. <br />
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
    </>
  );
}
