import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../Components/Button";
import ShoeCard from "../Components/ShoeCard";
import { statistics, shoes } from "../constants";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["The New Arrival"],
    loop: 0,
    typeSpeed: 150,
    deleteSpeed: 100,
    delaySpeed: 1000,
  });
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container font-montserrat"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 text-4xl font-bold">
          <span className="xl:whitespace-nowrap relative z-10 pr-10">
            {text}
          </span>
          {/* <Cursor /> */}
          <br />
          <span className=" text-coral-red">Nike</span> shoes
        </h1>
        <p className="text-slate-500 mb-6">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label={"Show more"} iconURL={arrowRight} />
        <div className=" flex justify-start item-start flex-wrap w-full mt-10 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className=" text-3xl font-palanquin font-bold ">
                {stat.value}
              </p>
              <p className=" font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex items-center justify-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center bg-contain ">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={500}
          height={600}
          className=" object-contain relative z-10 "
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[3%] xl:-bottom-[9%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImg={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
