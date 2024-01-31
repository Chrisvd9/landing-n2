import React from "react";
import Card from "../components/Card";
import AnimatedTitle from "../components/AnimatedTitle";

const ServiceSection = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <section id="services" className="flex flex-col items-center p-[34px]">
      {isMobile ? (
        <h1 className="text-7xl lg:text-[144px] text-center font-bold mb-20">
          Here’s what you can expect from us...
        </h1>
      ) : (
        <AnimatedTitle />
      )}
      <div className="grid w-full auto-rows-[22rem] lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1">
          <Card />
        </div>
        <div className="lg:col-span-1">
          <Card />
        </div>
        <div className="lg:col-span-1">
          <Card />
        </div>
        <div className="lg:col-span-2">
          <Card />
        </div>
        <div className="lg:col-span-1">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
