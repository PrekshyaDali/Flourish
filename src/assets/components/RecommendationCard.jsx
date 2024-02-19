import React from "react";
import Button from "./Button";

export default function RecommendationCard (props) {
  return (
    <div className=" pb-2 px-3 h-fit max-w-56 border-2 bg-[#FAFAFF] rounded-lg flex-col justify-center items-center">

      <div className="flex p-5 pb-2 flex-col items-center space-y-1 justify-center">
        <img className="h-16 lg:h-18" src="buttercookies.png" alt="" />
        <p className="font-semibold text-sm md:text-xs">{props.itemname}</p>
        <p className=" text-gray-400 text-sm md:text-xs">{props.shopname}</p>
        <p className="font-bold sm:text-sm"> {props.price}</p>
      </div>
      <div className="flex justify-center ">
        <Button name="Add to cart"></Button>
      </div>
    </div>
  );
}
