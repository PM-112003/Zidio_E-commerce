const HomeBody = () => {
  return (
    <div className="home">
      <img className="home-img" src="home-image.png" />
      <div className="home-content border-[0.12vw] border-[rgb(99,84,84)] border-dashed border-t-0 p-[2vw] grid grid-cols-2 ">
        <div className="home-content-big flex flex-col">
          <p className="title text-[2.3vw] font-medium">
            Every Hero Requires A Suite
          </p>
          <p className="content text-[1.1vw]">
            We provide you with out latest collections of superhero suites and
            goodies
          </p>
        </div>
        <div className="home-content-small"></div>
        <div className="home-content-small"></div>
        <div className="home-content-small"></div>
        <div className="home-content-small"></div>
      </div>
    </div>
  );
};

export default HomeBody;
