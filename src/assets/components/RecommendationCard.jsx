import React from "react";
import Button from "./Button";

export default function RecommendationCard (props) {
  return (
    <div className="p-5 space-y-3 h-fit w-fit border-2 bg-[#FAFAFF]  rounded-lg flex-col justify-center items-center">
      <div className = "flex flex-col items-center">
        <img className="h-16" src="buttercookies.png" alt="" />
        <p className="font-semibold">{props.itemname}</p>
        <p className="text-sm text-gray-400">{props.shopname}</p>
        <p className="font-bold"> {props.price}</p>
      </div>
      <Button name="Add to cart"></Button>
    </div>
  );
}
