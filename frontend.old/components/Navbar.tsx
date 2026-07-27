"use client";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";
import Sliding from "./Sliding";
import FadingElement from "./FadingElement";
import Button from "./Button";

const NavBar = () => {
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  return (
    <>
      <nav className="text-primary-200 flex text-sm lg:text-xl xl:text-2xl judson w-4/5 md:w-1/2 lg:w-1/2 relative ">
        <motion.div
          className="px-3 w-1/3 py-1 lg:py-3 lg:px-7 xl:py-5 xl:px-10 text-white rounded-t-xl lg:rounded-t-2xl xl:rounded-t-3xl bg-fixed bg-center bg-no-repeat bg-blend-soft-light bg-primary-300 absolute h-full "
          style={{
            backgroundImage: "url('//picsum.photos/1920/1080')",
            pointerEvents: "none",
          }}
          ref={scope}
        />
        <Link
          href="/"
          className="px-3 py-1 lg:py-3 lg:px-7 xl:py-5 xl:px-10 text-white rounded-t-xl lg:rounded-t-2xl xl:rounded-t-3xl flex-1 grid place-items-center"
          onMouseEnter={() => {
            animate(scope.current, { left: "0" }, { duration: 1 });
            animate2(
              scope2.current,
              { borderStartStartRadius: "0" },
              { duration: 1, type: "spring" },
            );
          }}
          onMouseLeave={() => {
            animate2(scope2.current, { borderStartStartRadius: "0" });
            animate(scope.current, { left: "0" }, { duration: 1 });
          }}
        >
          <Sliding delay={0.3}>Home</Sliding>
        </Link>
        <Link
          href="/blog"
          className="px-3 py-1 lg:py-3 lg:px-7 xl:py-5 xl:px-10 text-white rounded-t-xl lg:rounded-t-2xl xl:rounded-t-3xl flex-1 grid place-items-center"
          onMouseEnter={() => {
            animate(
              scope.current,
              { left: "33%" },
              { duration: 1, type: "spring", damping: 12 },
            );
            animate2(scope2.current, { borderStartStartRadius: "3rem" });
          }}
          onMouseLeave={() => {
            animate(scope.current, { left: "0" }, { duration: 1 });
            animate2(
              scope2.current,
              { borderStartStartRadius: "0" },
              { duration: 1, type: "spring" },
            );
          }}
        >
          <Sliding delay={0.15}>Blog</Sliding>
        </Link>
        <Link
          href="/"
          className="px-3 py-1 lg:py-3 lg:px-7 xl:py-5 xl:px-10 text-white rounded-t-xl lg:rounded-t-2xl xl:rounded-t-3xl flex-1 grid place-items-center text-nowrap"
          onMouseEnter={() => {
            animate2(scope2.current, { borderStartStartRadius: "3rem" });
            animate(
              scope.current,
              { left: "66%" },
              { duration: 1, type: "spring", damping: 12 },
            );
          }}
          onMouseLeave={() => {
            animate(
              scope.current,
              { left: "0" },
              { duration: 1, type: "spring", damping: 12 },
            );
            animate2(
              scope2.current,
              { borderStartStartRadius: "0" },
              { duration: 1, type: "spring" },
            );
          }}
        >
          <Sliding>About me</Sliding>
        </Link>
      </nav>

      <div
        className="w-full p-7 lg:p-10 xl:p-20 rounded-b-[35px] rounded-tr-[35px] lg:rounded-b-[65px] lg:rounded-tr-[65px] xl:rounded-b-[75px] xl:rounded-tr-[75px] bg-fixed bg-center bg-no-repeat bg-blend-soft-light bg-primary-300 relative overflow-clip"
        style={{ backgroundImage: "url('//picsum.photos/1920/1080')" }}
        ref={scope2}
      >
        <FadingElement>
          <h1 className="text-4xl lg:text-6xl xl:text-8xl mb-2 lg:mb-4 xl:mb-6 judson tracking-[-0.065em] text-white xl:leading-[0.75] lg:leading-[0.75] leading-[0.75]">
            <Sliding>Welcome to</Sliding>
            <Sliding delay={0.15}>Sparsh Singh&apos;s</Sliding>
            <Sliding delay={0.3}>Portfolio</Sliding>
          </h1>
          <Button
            className="judson text-base lg:text-xl bg-primary-500"
            activeBorder="bg-primary-100"
            normalBorder="bg-white"
          >
            Explore Projects
          </Button>
        </FadingElement>
      </div>
    </>
  );
};

export default NavBar;
