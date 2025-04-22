const Banner = () => {
  return (
    <div className="banner relative">
      <div className="h-screen">
        <img className="home-img opacity-80" src="home-image.jpg" />
        <div class="yellow-overlay"></div>
      </div>
      <div className="home-content-big absolute top-[32vw] left-[4vw] flex flex-col items-start gap-[1vw]">
        <div className="details">
          <p className="title text-[3.5vw] font-medium">
            Every Hero Requires A Suite
          </p>
          <p className="content text-[1.2vw]">
            We provide you with out latest collections of superhero suites and goodies
          </p>
        </div>
        <button className="border border-white py-[.5vw] px-[1vw] capitalize rounded-[.5vw] cursor-pointer">
          shop now
        </button>
      </div>
      <div >
        <h1 className="product-section text-[3.5vw] font-medium">Product Section</h1>
      </div>
    </div>
  );
};

export default Banner;
