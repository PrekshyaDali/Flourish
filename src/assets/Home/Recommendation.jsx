import React from 'react'
import RecommendationCard from '../components/RecommendationCard'

export default function Recommendation() {
  return (
    <div className="flex flex-col space-y-5 xl:flex-row space-x-5 xl:space-y-0">
      <div className="flex space-x-5">
        <RecommendationCard
          itemname="Butter Cookies"
          shopname="Rise Bakery"
          price="100"
        />
        <RecommendationCard
          itemname="Butter Cookies"
          shopname="Rise Bakery"
          price="100"
        />
        <RecommendationCard
          itemname="Butter Cookies"
          shopname="Rise Bakery"
          price="100"
        />
      </div>
      <div className="flex space-x-5">
        <RecommendationCard
          itemname="Butter Cookies"
          shopname="Rise Bakery"
          price="100"
        />
        <RecommendationCard
          itemname="Butter Cookies"
          shopname="Rise Bakery"
          price="100"
        />
      
      </div>
    </div>
  );
}
