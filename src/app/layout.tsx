import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import Provider from "./provider";
export const metadata: Metadata = {
  title: "RateMyCourse",
  description: "RateMyCourse is a platform for students to rate and review ANU courses",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} h-full`}>
      <body className="w-full min-h-screen">
        <TRPCReactProvider>
          <Provider>{children}</Provider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
