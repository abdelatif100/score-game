import type { NextAuthConfig } from "next-auth"

export const authConfig = {
  providers: [], // Empty array for middleware/edge, will be merged in auth.ts
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.isApproved = token.isApproved as boolean
      }
      return session
    },
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isApproved = auth?.user?.isApproved

      const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth")
      const isPublicRoute = !nextUrl.pathname.startsWith("/admin")
      const isPendingPage = nextUrl.pathname === "/admin/pending"

      if (isApiAuthRoute || isPublicRoute) {
        return true
      }

      if (!isLoggedIn) {
        return false // Redirect to login automatically
      }

      if (!isApproved && !isPendingPage) {
        return Response.redirect(new URL("/admin/pending", nextUrl))
      }

      if (isApproved && isPendingPage) {
        return Response.redirect(new URL("/admin", nextUrl))
      }

      return true
    },
  },
} satisfies NextAuthConfig
