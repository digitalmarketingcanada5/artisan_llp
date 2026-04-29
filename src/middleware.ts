import { NextRequest, NextResponse } from "next/server";

const BYPASS_COOKIE = "maintenance-bypass";

export function middleware(request: NextRequest) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";

  if (!isMaintenanceMode) {
    return NextResponse.next();
  }

  const bypassToken = process.env.MAINTENANCE_BYPASS_TOKEN;
  const queryToken = request.nextUrl.searchParams.get("preview");
  const cookieToken = request.cookies.get(BYPASS_COOKIE)?.value;

  if (bypassToken && (queryToken === bypassToken || cookieToken === bypassToken)) {
    const response = NextResponse.next();
    if (queryToken === bypassToken) {
      response.cookies.set(BYPASS_COOKIE, bypassToken, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
    }
    return response;
  }

  if (request.nextUrl.pathname === "/maintenance") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/maintenance";
  url.search = "";

  return NextResponse.rewrite(url, {
    status: 503,
    headers: { "Retry-After": "3600" },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico)$).*)"],
};
