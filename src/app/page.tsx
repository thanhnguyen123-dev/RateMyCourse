import { HydrateClient } from "~/trpc/server";
import LandingPage from "./LandingPage";
import NavBar from "./_components/NavBar";


export default async function Home() {
  return (
    <HydrateClient >
      <div className="bg-grey flex flex-col w-full max-w-10xl h-screen">
        <NavBar />
        <div className="h-screen max-w-10xl flex flex-grow overflow-y-auto overflow-x-auto">
          <LandingPage />
        </div>
      </div>
    </HydrateClient>
  );
}
