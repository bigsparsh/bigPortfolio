"use client";
const Button = ({
  children,
  normalBorder,
  activeBorder,
  className,
}: {
  children: string;
  normalBorder: string;
  activeBorder: string;
  className?: string;
}) => {
  return (
    <div className="relative w-fit h-fit group/button bg-none">
      <button
        className={
          " text-white px-5 py-1 lg:px-7 lg:py-2 xl:px-10 xl:py-3 rounded-full text-sm lg:text-lg xl:text-xl outline-none z-10 relative " +
          className
        }
      >
        {children}
      </button>
      <div
        className={
          " absolute w-5 h-5 rounded-full z-0 duration-200 opacity-0 group-hover/button:opacity-100 group-hover/button:w-[105%] group-hover/button:h-[110%] group-hover/button:bottom-[-5%] group-hover/button:left-[-2.5%] bottom-0 left-0 " +
          normalBorder
        }
      ></div>
      <div
        className={
          " absolute w-5 h-5 z-0 rounded-full duration-200 opacity-0 group-active/button:opacity-100 group-active/button:w-[105%] group-active/button:h-[110%] group-active/button:top-[-5%] group-active/button:right-[-2.5%] top-0 right-0 " +
          activeBorder
        }
      ></div>
    </div>
  );
};
export default Button;
