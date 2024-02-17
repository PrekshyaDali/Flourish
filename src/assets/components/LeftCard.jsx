import React from 'react'
import CartCard from './CartCard';

export default function 
() {
  return (
    <div className="flex flex-col space-y-5 p-8 fixed right-0 top-0 bg-[#FAFAFF] max-w-72  h-screen">
      <CartCard></CartCard>
      <CartCard></CartCard>
      <CartCard></CartCard>
      <CartCard></CartCard>
    </div>
  );
}
