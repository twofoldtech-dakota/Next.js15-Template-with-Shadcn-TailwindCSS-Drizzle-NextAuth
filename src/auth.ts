import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import { db } from "./db/index"
import { accounts, sessions, users, verificationTokens } from "./db/schema"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  providers: [Github],
})