const Banner = () => {
  return (
    <div className="banner relative">
      <div className="h-screen">
        <img className="home-img h-full opacity-55" src="home-image.png" />
      </div>
      <div className="home-content-big absolute bottom-[7rem] left-[3rem] flex flex-col items-start gap-[1rem]">
        <div className="details leading-[3rem]">
          <p className="title text-[3.5rem] font-medium">
            Every Hero Requires A Suite
          </p>
          <p className="content text-[1.1vw]">
            We provide you with out latest collections of superhero suites and
            goodies
          </p>
        </div>
        <button className="border border-white py-[.5rem] px-[1rem] capitalize font-medium rounded-[.5rem] cursor-pointer">
          shop now
        </button>
      </div>
    </div>
  );
};

export default Banner;
