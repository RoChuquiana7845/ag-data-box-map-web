import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token")
  const isAuthPage = request.nextUrl.pathname.startsWith("/auth")
  const isApiRoute = request.nextUrl.pathname.startsWith("/api")
  const isPublicRoute = request.nextUrl.pathname === "/"

  // Allow public routes and auth pages without token
  if (isPublicRoute || isApiRoute || (!token && isAuthPage)) {
    return NextResponse.next()
  }

  // Redirect to login if accessing protected route without token
  if (!token && !isAuthPage) {
    const loginUrl = new URL("/auth/login", request.url)
    loginUrl.searchParams.set("from", request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Redirect to dashboard if accessing auth pages with valid token
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}

