import PanalImg from "../assets/img/panal-rbg.png";

const Card = () => {
  return (
    <div className="card w-full bg-gradient-to-t from-[#101013] to-[#101013]/85 text-transparent shadow-xl h-full">
      <figure className="z-10 realtive">
        <img src={PanalImg} alt="Panal" className="w-full" />
      </figure>
      <div className="card-body">
        <h3 className="text-[#E4E4E7]">Lorem</h3>
        <p className="text-[#A1A1AA]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. distinctio
          aspernatur beatae ratione aliquam?
        </p>
      </div>
    </div>
  );
};

export default Card;
