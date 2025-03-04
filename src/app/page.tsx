import { HydrateClient } from "~/trpc/server";
import HomeScreen from "./_components/home/HomeScreen";
import NavBar from "./_components/NavBar";
import { useSession } from "next-auth/react";
import Loader from "./_components/ui/Loader";

export default function Home() {
  return (
    <HydrateClient >
      <div className="flex flex-col w-full max-w-10xl h-screen bg-main">
        <NavBar />
        <div className="h-screen max-w-10xl flex flex-grow overflow-y-auto overflow-x-auto">
          <HomeScreen />
        </div>
      </div>
    </HydrateClient>
  );
}
