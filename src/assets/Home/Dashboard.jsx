import React from "react";
import Nav from "./Nav";
import Search from "./Search";

export default function Dashboard() {
  return <div className="w-full h-screen bg-[#D0D0D0] pl-32 pt-5 pr-5">
    <Nav></Nav>
    <Search></Search>
  </div>;
}
