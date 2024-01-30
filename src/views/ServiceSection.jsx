import React from "react";
import Card from "../components/Card";

const ServiceSection = () => {
  return (
    <div className="flex flex-col items-center p-[34px]">
      <h1 className="text-7xl lg:text-[144px] text-center font-bold mb-20">
        Here’s what you can expect from us...
      </h1>
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
    </div>
  );
};

export default ServiceSection;
