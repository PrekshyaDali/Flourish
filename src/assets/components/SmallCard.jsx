import React from 'react'

 export default function 
(props) {
  return (
    <div className = "flex justify-center items-center border-2 bg-[#FAFAFF] px-3 h-28 rounded-lg" >
        <img className = "object-fit" src={props.img} alt="" />
    </div>
  )
}
