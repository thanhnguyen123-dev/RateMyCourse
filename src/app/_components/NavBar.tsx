"use client";

import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();

  const handleClickHome = () => {
    router.push("/");
  }

  return (
    <div className="flex w-full justify-between items-center sticky top-0 border py-4 px-8 border-gray-200 z-1000">
      <div className="flex items-center">
        <span className="text-4xl font-bold text-orange-400">RateMyCourse</span>
      </div>
      <div className="flex items-center gap-12">
        <div
          role="button"
          onClick={handleClickHome}
          className="text-lg font-semibold"
        >
          Home
        </div>
        <div
          role="button"
          className="text-lg font-semibold"
        >
          Courses
        </div>
        <div
          role="button"
          className="text-lg font-semibold"
        >
          About
        </div>
      </div>
    </div>
  );
}

export default NavBar;