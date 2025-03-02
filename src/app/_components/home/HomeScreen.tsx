import React from 'react';
import { WordRotate } from '../ui/WordRotate';
import HomeSearchBar from './HomeSearchBar';
import { InteractiveHoverButton } from '../ui/ExploreButton';

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-6 py-8 w-full items-center justify-center overflow-y-auto z-50">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-6xl font-bold text-orange-400">RateMyCourse</h1>
        <p className="text-2xl text-slate-600 font-normal">Your favourite destination to review ANU courses</p>
      </div>
      <HomeSearchBar />
      <InteractiveHoverButton>Explore courses</InteractiveHoverButton>
      <WordRotate words={["Write Comment...", "Search...", "Enjoy..."]} />
    </div>
  );
}

export default LandingPage;