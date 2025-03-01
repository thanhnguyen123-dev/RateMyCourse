import { api, HydrateClient } from "~/trpc/server";
import LandingPage from "./LandingPage";
import { useSession } from "next-auth/react";


export default async function Home() {
  return (
    <HydrateClient>
      <LandingPage />
    </HydrateClient>
  );
}
