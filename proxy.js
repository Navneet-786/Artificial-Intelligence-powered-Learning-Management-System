import { clerkMiddleware } from "@clerk/nextjs/server";
import { createRouteMatcher } from "@clerk/nextjs/server";

/**
 * Define which routes are protected
 * Any route matching these patterns will require authentication
 *
 * /dashboard        → protected
 * /dashboard/...    → protected
 * /forum            → protected
 * /forum/...        → protected
 */
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/forum(.*)"]);

/**
 * Clerk middleware runs on every request matched by `config.matcher`
 *
 * auth  → contains authentication helpers (auth(), protect(), etc.)
 * req   → incoming request object
 */
export default clerkMiddleware(async (auth, req) => {
  /**
   * If the requested route is protected,
   * force the user to be authenticated.
   *
   * If user is NOT logged in:
   * → Clerk automatically redirects to Sign In page
   */
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

/**
 * Middleware configuration
 * Controls which routes this middleware runs on
 */
export const config = {
  matcher: [
    /**
     * Run middleware on all routes EXCEPT:
     * - Next.js internal files (_next)
     * - Static assets (css, js, images, fonts, etc.)
     *
     * This keeps middleware fast and avoids unnecessary checks
     */
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",

    /**
     * Always run middleware for API and tRPC routes
     * This ensures backend APIs are also protected
     */
    "/(api|trpc)(.*)",
  ],
};
