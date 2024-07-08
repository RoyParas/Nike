import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <button
      className={`flex justify-center border items-center rounded-ful py-2 px-5 font-montserrat ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="rightArrow"
          className=" ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
