/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const handleClickCourse = (courseCode: string) => {
    router.push(`/courses/${courseCode}`);
  }

  return (
    <div>
      <div>This is the courses page</div>
      <div className="flex flex-col gap-4">
        <button onClick={() => handleClickCourse("CS101")}>CS101</button>
        <button onClick={() => handleClickCourse("CS102")}>CS102</button>
      </div>
    </div>
  );
}

export default page;