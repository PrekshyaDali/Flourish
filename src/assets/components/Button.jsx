import React from 'react'

export default function Button(props) {
  return <button type = "submit" className=" px-6 py-1 border-2 bg-[#F9B131] rounded-xl text-md font-semibold ">{props.name}</button>;
}
