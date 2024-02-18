import React from "react";


export default function Search() {
  return (
    <div className="relative">
      <input
        className="h-8 w-full bg-[#D0D0D0] border-2 rounded-lg pl-8" // Adjust padding for the input field
        type="text"
      />
      <img className="h-4 absolute left-2 top-2" src="search.png"  />
      {/* Adjust positioning for the icon */}
    </div>
  );
}
