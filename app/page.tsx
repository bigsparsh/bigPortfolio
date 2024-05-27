import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <section className="p-10">
        <nav className="text-[#C23706] text-xl">
          <a href="">Home</a>
          <a href="">Contact</a>
          <a href="">About me</a>
        </nav>
        <div
          className="w-full px-20 py-20 rounded-[100px]"
          style={{ backgroundImage: "url('550452.jpg')" }}
        >
          <h1 className="text-7xl judson tracking-tighter text-white leading-[60px]">
            Welcome to <br />
            Sparsh Singh&apos;s <br />
            Portfolio
          </h1>
          <Button
            activeBorder="#FF4200"
            background="#2E0800"
            normalBorder="white"
          >
            Explore Projects
          </Button>
        </div>
      </section>
    </>
  );
}
