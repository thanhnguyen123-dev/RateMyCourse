import { HydrateClient } from "~/trpc/server";
import HomeScreen from "./_components/home/HomeScreen";
import NavBar from "./_components/NavBar";


export default async function Home() {
  return (
    <HydrateClient >
      <div className="flex flex-col w-full max-w-10xl h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <NavBar />
        <div className="h-screen max-w-10xl flex flex-grow overflow-y-auto overflow-x-auto">
          <HomeScreen />
        </div>
      </div>
    </HydrateClient>
  );
}
