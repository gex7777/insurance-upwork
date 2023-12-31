import single from "../assets/single.jpeg";
import { Link } from "react-router-dom";

export const SectionTwo = () => {
  return (
    <div className=" text-justify section px-10 py-10 lg:px-32 lg:py-40 min-h-min flex lg:flex-row flex-col gap-10   bg-neutral">
      <div className="paragraph flex flex-col gap-10 lg:w-4/5 w-full  ">
        <div className="title text-3xl lg:text-6xl font-semibold ">
          Find Investment Plans
        </div>
        <div className="paragraph flex flex-col lg:flex-row  gap-5 text-lg">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum
            deserunt perspiciatis rerum magnam,
          </div>
          <div className="">
            quas iusto fugiat autem ratione omnis amet, minima excepturi illum,
            quo vel quisquam voluptates quia nisi.
          </div>
        </div>
        <div className="call text-lg p-4 w-fit rounded-lg bg-primary text-white">
          <Link to={"/contact"}> Contact us</Link>
        </div>
      </div>

      <img
        src={single}
        className="object-cover  h-full  lg:w-2/4 w-full rounded-b-[6.5rem] rounded-tl-[6.5rem]"
        alt=""
      />
    </div>
  );
};
