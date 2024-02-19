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
      <div className="flex space-x-5 bg-[#D0D0D0]">
        <div className="w-28 border-2">
          <Nav></Nav>
        </div>
        <div className="flex-1 h-screen border-2 p-5 space-y-5">
          <Search></Search>
          <Section></Section>
          <Recommendation></Recommendation>
        </div>
        <div className=" xs:w-44 md:w-56 xl:w-64 border-2">
          <LeftCard></LeftCard>
        </div>
      </div>
    </>
  );
}
