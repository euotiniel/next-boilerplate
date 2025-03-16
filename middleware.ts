import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token")?.value;

  const signInUrl = new URL("/auth/login", request.url);
  const dashboardUrl = new URL("/dashboard", request.url);

  if (!token) {
    if (request.nextUrl.pathname === "/") {
      return NextResponse.next();
    }
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(signInUrl);
    }
    return NextResponse.next();
  }

  if (token) {
    if (request.nextUrl.pathname === "/auth/login") {
      return NextResponse.redirect(dashboardUrl);
    }
    
    if (request.nextUrl.pathname === "/") {
      return NextResponse.redirect(dashboardUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/auth/login"],
};
