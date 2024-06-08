import FakeMarquee from "./FakeMarquee";
import "./css/styles.css";
const CrtDisplay = () => {
  return (
    <div className="h-screen w-full pixel backdrop-opacity-15" id="screen">
      <div id="body" className="w-full h-full pointer-events-none" />
      <FakeMarquee />
      <form className="text-primary-100 text-3xl font-black p-10 rounded-2xl flex flex-col gap-y-3 ">
        <div className="flex gap-5 items-center justify-between">
          <label>Name: </label>
          <input
            type="text"
            className="border-2 text-xl  font-normal border-primary-100 px-5 py-1 bg-transparent outline-none "
            style={{ caretShape: "underscore" }}
          />
        </div>
        <div className="flex gap-5 items-center justify-between">
          <label>Email: </label>
          <input
            type="email"
            className="border-2 text-xl  font-normal border-primary-100 px-5 py-1 bg-transparent outline-none "
            style={{ caretShape: "underscore" }}
          />
        </div>
        <div className="flex gap-5 items-center justify-between">
          <label>Message: </label>
          <textarea className="border-2 text-xl  font-normal border-primary-100 px-5 bg-transparent outline-none "></textarea>
        </div>
        <button className="border-2  border-primary-100 px-5 py-1 bg-transparent outline-none hover:bg-primary-100 hover:text-white duration-200">
          Send enquiry to Sparsh
        </button>
      </form>
    </div>
  );
};
export default CrtDisplay;
