import Button from "@/components/Button";
import FadingElement from "@/components/FadingElement";
import Loading from "@/components/Loading";
import Sliding from "@/components/Sliding";

export default function Home() {
  return (
    <>
      <section className="p-10">
        <nav className="text-[#C23706] flex text-2xl judson ">
          <a
            href=""
            className="py-5  px-10 text-white rounded-t-3xl bg-fixed bg-center bg-no-repeat bg-blend-soft-light bg-[#A63200]"
            style={{ backgroundImage: "url('//picsum.photos/1920/1080')" }}
          >
            <Sliding delay={0.3}>Home</Sliding>
          </a>
          <a href="" className="py-5 px-10">
            <Sliding delay={0.15}>Contacts</Sliding>
          </a>
          <a href="" className="py-5 px-10">
            <Sliding>About me</Sliding>
          </a>
        </nav>
        <div
          className="w-full px-20 py-20 rounded-b-[75px] rounded-tr-[75px] bg-fixed bg-center bg-no-repeat bg-blend-soft-light bg-[#A63200]"
          style={{ backgroundImage: "url('//picsum.photos/1920/1080')" }}
        >
          <FadingElement>
            <h1 className="text-8xl mb-6 judson tracking-[-0.065em] text-white leading-[75px]">
              <Sliding>Welcome to</Sliding>
              <Sliding delay={0.15}>Sparsh Singh&apos;s</Sliding>
              <Sliding delay={0.3}>Portfolio</Sliding>
            </h1>
            <Button
              className="judson text-xl"
              activeBorder="#FF4200"
              background="#2E0800"
              normalBorder="white"
            >
              Explore Projects
            </Button>
          </FadingElement>
        </div>
      </section>
      <section className="px-10">
        <div className="w-full p-5 rounded-[75px] bg-gradient-to-r from-[#8A2400] to-[#2E0800] flex gap-10">
          <div className="flex flex-col text-white judson basis-1/2 gap-5">
            <FadingElement>
              <div className="bg-[#2E0800] rounded-full text-2xl py-5 px-10 flex flex-col gap-2">
                <Sliding> TypeScript + React</Sliding>
                <Loading end="75%" />
              </div>
            </FadingElement>
            <FadingElement>
              <div className="bg-[#2E0800] rounded-full text-2xl py-5 px-10 flex flex-col gap-2">
                <Sliding delay={0.15}>Node JS</Sliding>
                <Loading end="21%" />
              </div>
            </FadingElement>
            <FadingElement>
              <div className="flex w-full gap-5">
                <div className="bg-[#2E0800] rounded-full text-2xl py-5 px-10 flex flex-col gap-2 basis-1/2">
                  <Sliding className="self-center" delay={0.3}>
                    <h1 className="text-center">Projects Completed</h1>
                  </Sliding>
                  <Sliding className="self-center" delay={0.45}>
                    <h1 className="text-[#C23706] text-7xl font-black font-sans ">
                      12
                    </h1>
                  </Sliding>
                </div>
                <div className="bg-[#2E0800] rounded-full text-2xl py-5 px-10 flex flex-col gap-2 basis-1/2 ">
                  <Sliding className="self-center" delay={0.6}>
                    <h1 className="text-center">Technologies</h1>
                  </Sliding>
                  <Sliding className="self-center">
                    <h1 className="text-[#C23706] text-7xl font-black font-sans ">
                      12
                    </h1>
                  </Sliding>
                </div>
              </div>
            </FadingElement>
          </div>
          <div className="text-white basis-1/2 flex justify-center items-center">
            <FadingElement>
              <Sliding delay={0.15}>
                <h1 className="text-4xl judson">About me</h1>
              </Sliding>
              <hr className="my-3" />
              <div className="text-justify">
                <Sliding className="m-5" delay={0.3}>
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
                <Sliding className="mx-5" delay={0.45}>
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
    </>
  );
}
