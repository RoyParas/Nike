import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg }) => {
  const HandleClick = () =>{
    if(bigShoeImg != imgURL.bigShoe){
      changeBigShoeImg(imgURL.bigShoe);
    }
  }
  return (
    <div
      className={`border-2 rounded-xl ${ bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`}
       onClick={HandleClick} 
    >
      <div className=" flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40 max-sm:p-4">
        <img src={imgURL.thumbnail} alt="shoe collection" width={120} className='object-contain'/>
      </div>
    </div>
  );
};

export default ShoeCard;
