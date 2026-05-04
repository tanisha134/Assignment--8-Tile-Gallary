import { auth } from "@/lib/auth";

export async function middleware(req) {
  const session = await auth.api.getSession(req);

  if (!session && req.nextUrl.pathname.startsWith("/my-profile")) {
    return Response.redirect(new URL("/login", req.url));
  }

  return Response.next();
}