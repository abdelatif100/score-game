import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Google from "next-auth/providers/google"
import { prisma } from "@/lib/prisma"
import { authConfig } from "./auth.config"

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  trustHost: true,
  debug: process.env.NODE_ENV === "development" || true, // Temporarily true to debug Vercel
  callbacks: {
    ...authConfig.callbacks,
    async jwt({ token, user, trigger }) {
      if (user) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email || "" },
          select: { isApproved: true },
        })
        token.isApproved = dbUser?.isApproved || false
      } else if (trigger === "update") {
        const dbUser = await prisma.user.findUnique({
          where: { email: token.email || "" },
          select: { isApproved: true },
        })
        token.isApproved = dbUser?.isApproved || false
      }
      return token
    },
  },
})
