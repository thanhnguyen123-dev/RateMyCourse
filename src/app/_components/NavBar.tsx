"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Avatar from "./ui/Avatar";
import Loader from "./ui/Loader";


const NavBar = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleClickHome = () => {
    router.push("/");
  }

  const handleClickSignIn = () => {
    router.push("/signin");
  }

  const handleClickCourses = () => {
    router.push("/courses");
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
          onClick={handleClickCourses}
        >
          Courses
        </div>
        <div
          role="button"
          className="font-semibold"
        >
          Terms and Conditions
        </div>
        { !session ? (
            <div
            role="button"
            className="font-semibold"
            onClick={handleClickSignIn}
          >
            Sign in
          </div>
        ) : (
          <Avatar />
        )}
      </div>
    </div>
  );
}

export default NavBar;