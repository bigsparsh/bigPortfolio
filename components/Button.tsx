"use client";
const Button = ({
  children,
  normalBorder,
  activeBorder,
  background,
}: {
  children: string;
  normalBorder: string;
  background: string;
  activeBorder: string;
}) => {
  return (
    <div className="relative w-fit h-fit group/button bg-none">
      <button
        style={{ backgroundColor: background }}
        className="
							 text-white 
							 px-10 
							 py-3 
							 tracking-tight 
							 rounded-full 
							 text-xl
							 outline-none
							 relative
							 "
      >
        {children}
      </button>
      <div
        style={{ backgroundColor: normalBorder }}
        className="
								absolute
								w-5
								h-5
							rounded-full
        z-[-1]
								duration-200
							opacity-0
							group-hover/button:opacity-100
							group-hover/button:w-[105%]
							group-hover/button:h-[110%]
							group-hover/button:bottom-[-5%]
							group-hover/button:left-[-2.5%]
							bottom-0
							left-0
								"
      ></div>
      <div
        style={{ backgroundColor: activeBorder }}
        className="
								absolute
								w-5
								h-5
              z-[-1]
							rounded-full
								duration-200
							opacity-0
							group-active/button:opacity-100
							group-active/button:w-[105%]
							group-active/button:h-[110%]
							group-active/button:top-[-5%]
							group-active/button:right-[-2.5%]
							top-0
							right-0
								"
      ></div>
    </div>
  );
};
export default Button;
