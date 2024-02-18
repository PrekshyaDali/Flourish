import React from 'react'
import SmallCard from '../components/SmallCard';

export default function Section() {
  return (
    <div className="flex flex-col space-y-5 items-center justify-center lg:flex lg:flex-row lg:space-x-5 lg:space-y-0 lg:justify-center">
      <div className="flex space-x-5">
        <SmallCard img="all.png"></SmallCard>
        <SmallCard img="all.png"></SmallCard>
      </div>
      <div className="flex space-x-5">
        <SmallCard img="all.png"></SmallCard>
        <SmallCard img="all.png"></SmallCard>
      </div>
    </div>
  );
}
