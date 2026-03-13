import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Google from "next-auth/providers/google"
import { prisma } from "@/lib/prisma"
import { authConfig } from "./auth.config"

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  trustHost: true,
  debug: true, // Keep debug true for now to capture the actual error in Vercel logs
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
