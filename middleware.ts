import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isApproved = req.auth?.user?.isApproved

  const isApiAuthRoute = req.nextUrl.pathname.startsWith("/api/auth")
  const isPublicRoute = !req.nextUrl.pathname.startsWith("/admin")
  const isPendingPage = req.nextUrl.pathname === "/admin/pending"

  if (isApiAuthRoute || isPublicRoute) {
    return NextResponse.next()
  }

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.nextUrl))
  }

  if (isLoggedIn && !isApproved && !isPendingPage) {
    return NextResponse.redirect(new URL("/admin/pending", req.nextUrl))
  }

  if (isLoggedIn && isApproved && isPendingPage) {
    return NextResponse.redirect(new URL("/admin", req.nextUrl))
  }

  return NextResponse.next()
})

// Optional: Don't run middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
