import React from 'react'
import Button from './Button'

export default function CartCard() {
  return (
    <div className="flex items-center space-x-3 p-3 h-36 w-56 shadow-lg rounded-lg">
      <div>
        <img src="buter.png" alt="" />
        <Button></Button>
      </div>
      <div>
        <h1 className="font-semibold ">Butter</h1>
        <p className="text-xs text-gray-400">rose Bakery</p>
        <span className = "font-semibold">Rs.100</span>
      </div>
    </div>
  );
}
