import Button from "@/components/Button";
import FadingElement from "@/components/FadingElement";

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
            Home
          </a>
          <a href="" className="py-5 px-10">
            Contact
          </a>
          <a href="" className="py-5 px-10">
            About me
          </a>
        </nav>
        <div
          className="w-full px-20 py-20 rounded-b-[75px] rounded-tr-[75px] bg-fixed bg-center bg-no-repeat bg-blend-soft-light bg-[#A63200]"
          style={{ backgroundImage: "url('//picsum.photos/1920/1080')" }}
        >
          <FadingElement>
            <h1 className="text-8xl mb-6 judson tracking-[-0.065em] text-white leading-[75px]">
              Welcome to <br /> Sparsh Singh&apos;s <br />
              Portfolio
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
    </>
  );
}
