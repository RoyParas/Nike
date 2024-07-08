import React from "react";
import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return <div className="flex flex-col justify-start">
    <img src={imgURL} width={250} alt={name} className="cursor-pointer" />
    <div className=" flex mt-3 ">
        <img src={star} width={18} alt="star" />
        <p className="px-1 font-montserrat">({rating})</p>
    </div>
    <p className=" font-palanquin font-semibold text-lg leading-normal">{name}</p>
    <p className=" font-montserrat font-semibold text-coral-red">{price}</p>
  </div>;
};

export default PopularProductCard;
