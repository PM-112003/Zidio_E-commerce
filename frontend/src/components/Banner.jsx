import Product_card from "./utilities/Product_card";


const Banner = () => {
  return (
    <div className="w-full h-screen flex flex-col">
        
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

        </div>

        <div className="w-full h-auto p-5 flex flex-col items-center bg-slate-950">
            {/* Heading of section : trending */}
            <div className="text-5xl font-medium mb-10">Most Popular in men</div>
            <div className="w-[80%] h-auto py-5 flex flex-col items-center">

              {/* men t-shirt products based on ratings */}
              <div className="flex">
              <Product_card 
                image="Men_shirt_1.webp"
                brand="Bewakoof®"
                title="Men's Chocolate Brown Iron Truck Graphic T-shirt"
                price={699}
                originalPrice={1899}
                discount="63% OFF"
                rating={4.5}
              />

              <Product_card 
                image="Men_shirt_2.webp"
                brand="Bewakoof®"
                title="Black Panther shirt"
                price={999}
                originalPrice={2999}
                rating={4.5}
              />


              </div>

            </div>
        </div>
    </div>
  );
};

export default Banner;
