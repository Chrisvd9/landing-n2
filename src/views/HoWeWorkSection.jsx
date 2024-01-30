import ApicultoresImg from "../assets/img/agricultor-blw.png";

const HoWeWorkSection = () => {
  return (
    <>
      <div className="divider divider-neutral p-[34px]"></div>
      <div className="flex justify-center items-center pt-12">
        <img src={ApicultoresImg} alt="Apicultores" className="lg:max-w-7xl" />
      </div>
      <div className="lg:flex gap-8 justify-between px-[34px] items-center mb-20">
        <h2 className="w-full bg-gradient-to-r from-[#A0A0A0] to-[#000000] inline-block text-transparent bg-clip-text">
          Who said finance has to be boring?
        </h2>
        <p className="text-xl">
          With Cobalt, managing your business finances is effortless,
          empowering, and anything but boring. Our intuitive platform brings
          clarity to your cash flow, simplifies your financial decision-making,
          and puts the power of advanced financial management right at your
          fingertips. Say no to spreadsheets and tools designed in the 80s.
        </p>
      </div>
      <div className="flex flex-col gap-8 px-[34px]">
        <h2 className="w-full bg-gradient-to-r from-[#A0A0A0] to-[#000000] inline-block text-transparent bg-clip-text">
          Everything you need. Nothing you don’t
        </h2>
        <p className="text-xl lg:w-[685px]">
          Financial management and visibility in one place. Experience a
          flexible toolkit that makes every task feel like a breeze.
        </p>
      </div>
      <div className="divider divider-neutral p-[34px] mt-16"></div>
    </>
  );
};

export default HoWeWorkSection;
