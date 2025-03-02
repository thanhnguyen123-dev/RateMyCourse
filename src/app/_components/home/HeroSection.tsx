import React from 'react';
import { WordRotate } from '../ui/WordRotate'
import { InteractiveHoverButton } from '../ui/ExploreButton'
import HomeSearchBar from './HomeSearchBar'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full py-12">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-6xl font-bold text-orange-400">RateMyCourse</h1>
        <p className="text-2xl text-slate-600 font-normal">Your favourite destination to review ANU courses</p>
      </div>
      <HomeSearchBar />
      <InteractiveHoverButton>Explore courses</InteractiveHoverButton>
      <WordRotate words={["Search courses", "Add ratings", "Leave comments"]} />
    </div>
  )
}

export default HeroSection