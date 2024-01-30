import BeeImg from "../assets/img/bee-3d-removebg.png";

const AboutSection = () => {
  return (
    <div className="hero h-screen">
      <div className="grid lg:grid-cols-2 px-[34px] place-items-center">
        <div>
          <h2 className="font-bold">
            I partner with venture capital and accelerators — helping shape
            investments as a Design Director.{" "}
          </h2>
          <p className="text-xl py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="text-xl py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <img src={BeeImg} className="max-w-lg xl:max-w-3xl hidden sm:block" />
      </div>
    </div>
  );
};

export default AboutSection;
