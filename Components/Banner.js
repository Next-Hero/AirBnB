import Image from "next/image";
// import Banner from "../.next/cache/images/"
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <h1 className=" text-5xl text-bold sm:test-lg ">
          Let your curiosity do the booking
        </h1>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-">
          I'm Flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
