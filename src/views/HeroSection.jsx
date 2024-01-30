import PanalImg from "../assets/img/panal-rbg.png";
import Brands from "../components/Brands";

const HeroSection = () => {
  return (
    <>
      <div className="hero h-screen">
        <div className="grid lg:grid-cols-2 px-[34px] place-items-center">
          <div>
            <h2 className="font-bold bg-gradient-to-r from-[#A0A0A0] to-[#000000] inline-block text-transparent bg-clip-text">
              Master Bees, Supreme Honey: Unparalleled Flavor.
            </h2>
            <p className="text-xl py-6 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <button className="btn text-lg hover:bg-black transition-all duration-500">
              READ MORE
            </button>
          </div>
          <img
            src={PanalImg}
            className="max-w-lg xl:max-w-3xl hidden sm:block"
          />
        </div>
      </div>
      <Brands />
    </>
  );
};

export default HeroSection;
