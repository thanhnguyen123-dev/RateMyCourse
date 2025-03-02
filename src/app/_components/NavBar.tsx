"use client";

import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();

  const handleClickHome = () => {
    router.push("/");
  }

  return (
    <div className="flex w-full justify-between items-center sticky top-0 border-b-2 py-3 px-10 border-gray-200 z-1000">
      <div 
        role="button"
        className="flex items-center"
        onClick={handleClickHome}
      >
        <span className="text-4xl font-bold text-orange-400">RateMyCourse</span>
      </div>
      <div className="flex items-center gap-12 text-md text-slate-600">
        <div
          role="button"
          className="font-semibold"
        >
          Courses
        </div>
        <div
          role="button"
          className="font-semibold"
        >
          Terms and Conditions
        </div>
        <div
          role="button"
          className="font-semibold"
        >
          Sign up
        </div>
      </div>
    </div>
  );
}

export default NavBar;