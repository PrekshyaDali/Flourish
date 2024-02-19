import React from 'react'
import CartCard from './CartCard';

export default function 
() {
  //max-w-56 lg:max-w-64
  return (
    <div className="flex flex-col space-y-5 p-8 fixed right-0 top-0 bg-[#FAFAFF] max-w-sm h-screen">
      <CartCard></CartCard>
      <CartCard></CartCard>
      <CartCard></CartCard>
      <CartCard></CartCard>
    </div>
  );
}
