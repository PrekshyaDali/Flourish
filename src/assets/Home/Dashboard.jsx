import React from "react";
import Nav from "./Nav";
import Search from "./Search";
import SmallCard from "../components/SmallCard";
import LeftCard from "../components/LeftCard";
import Section from "./Section";
import RecommendationCard from "../components/RecommendationCard";
import Recommendation from "./Recommendation";

export default function Dashboard() {
  return (
    <>
      <Nav></Nav>
      <div
        className="w-full h-screen bg-[#D0D0D0] pt-6 pl-36 pr-80 lg:pl-56 lg:pr-96  
      
       space-y-8"
      >
        <Search></Search>
        <Section></Section>
        <Recommendation/>

      
        <div className=" flex justify-end">
          <LeftCard></LeftCard>
        </div>
      </div>
    </>
  );
}
