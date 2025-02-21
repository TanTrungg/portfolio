import WorkCard from "../../chip/WorkCard";

const Work = () => {
  return (
    <div id="works" className="container m-auto mt-16">
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">Works</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      <div data-aos="fade-up" className="text-gray-700 font-medium w-[100%]">
        <p>Here are some of my works.</p>
      </div>

      {/* card */}
      <div className="card-wrapper mx-auto w-[95%] sm:w-fit mt-5">
        <div className="card-box grid grid-cols-3 space-y-5 space-x-5 w-full md:grid-cols-2 sm:grid-cols-1 sm:space-x-5 sm:space-y-5">
          <WorkCard />
        </div>
      </div>
    </div>
  );
};

export default Work;
