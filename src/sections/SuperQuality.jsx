import React from "react";
import Button from "../Components/Button";
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="">
        <h1 className="text-4xl font-palanquin font-bold">
          We Provide You <span className="text-coral-red">Super Quality</span> Shoes
        </h1>
        <p className="mt-6 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance. </p>
        <p className="mt-4 lg:max-w-lg info-text mb-4"> Our dedication to detail and excellence ensures your satisfaction</p>
        <Button label={"View Details"} />
      </div>
      <div className="flex justify-center items-center">
        <img src={shoe8} alt="shoes" width={800}  className="object-contain"/>
      </div>
    </section>
  );
};

export default SuperQuality;
