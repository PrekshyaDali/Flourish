import React, { useRef } from "react";
import RecommendationCard from "../components/RecommendationCard";

export default function Recommendation() {
  return (
    <div className="flex justify-center  ">
      <div className="grid gap-3 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-flow-col xl:justify-stretch ">
        <RecommendationCard
          itemname="Butter Cookies"
          shopname="Rise Bakery"
          price="100"
        />
        <RecommendationCard
          itemname="Butter Cookies"
          shopname="Rise Bakery"
          price="100"
        />
        <RecommendationCard
          itemname="Butter Cookies"
          shopname="Rise Bakery"
          price="100"
        />
        <RecommendationCard
          itemname="Butter Cookies"
          shopname="Rise Bakery"
          price="100"
        />
        <RecommendationCard
          itemname="Butter Cookies"
          shopname="Rise Bakery"
          price="100"
        />
        <RecommendationCard
          itemname="Butter Cookies"
          shopname="Rise Bakery"
          price="100"
        />
        {/* Add more RecommendationCard components as needed */}
      </div>
    </div>
  );
}
