import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Google from "next-auth/providers/google"
import { prisma } from "@/lib/prisma"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn() {
      // If the user doesn't exist in our custom fields, we don't need to do anything here
      // Auth.js Prisma adapter will handle user creation automatically.
      // isApproved defaults to false as per schema.
      return true
    },
    async jwt({ token, user }) {
      if (user) {
        // Query the database to get the isApproved flag for the user
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email || "" },
          select: { isApproved: true },
        })
        token.isApproved = dbUser?.isApproved || false
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.isApproved = token.isApproved as boolean
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
})
