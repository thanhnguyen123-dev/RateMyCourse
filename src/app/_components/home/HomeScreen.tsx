import React from 'react';
import { WordRotate } from '../ui/WordRotate';
import HomeSearchBar from './HomeSearchBar';
import { InteractiveHoverButton } from '../ui/ExploreButton';
import { NumberTicker } from '../ui/NumberTicker';
import HeroSection from './HeroSection';
import StatSection from './StatSection';

const HomeScreen = () => {
  return (
    <div className="flex flex-col py-8 w-full items-center justify-center overflow-y-auto z-50">
      <HeroSection />
      <StatSection />
    </div>
  );
}

export default HomeScreen;