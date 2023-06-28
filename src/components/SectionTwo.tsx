import single from "../assets/single.jpeg";

export const SectionTwo = () => {
  return (
    <div className=" section px-10 py-10 lg:px-32 lg:py-40 min-h-min  bg-zinc-200">
      <div className="number">02</div>
      <div className="   flex lg:flex-row-reverse flex-col-reverse gap-20 justify-between ">
        <div className="photo h-full  lg:w-2/4 w-full">
          <div className="  ">
            <img
              src={single}
              className="object-cover rounded-b-[6.5rem] rounded-tl-[6.5rem]"
              alt=""
            />
          </div>
        </div>
        <div className="paragraph flex flex-col gap-10 lg:w-4/5 w-full  ">
          <div className="title text-3xl lg:text-8xl ">Investment Plans</div>
          <div className="paragraph flex justify-between gap-5 text-sm">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum
              deserunt perspiciatis rerum magnam,
            </div>
            <div className="">
              quas iusto fugiat autem ratione omnis amet, minima excepturi
              illum, quo vel quisquam voluptates quia nisi.
            </div>
          </div>
          <button className="call p-4 rounded-r-lg w-fit rounded-bl-lg bg-sky-600 text-white">
            Get a qoute
          </button>
        </div>
      </div>
    </div>
  );
};