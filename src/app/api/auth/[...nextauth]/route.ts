/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { authConfig } from "~/server/auth/config";
import NextAuth from "next-auth";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
