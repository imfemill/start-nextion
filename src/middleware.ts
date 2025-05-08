import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// List of public routes accessible without auth
export const publicRoutes = ['/', '/login', '/register', '/forgot-password'];

// List of paths or prefixes accessible to everyone (including public folder files)
const alwaysAllowedPaths = [
    '/favicon.ico',
    '/robots.txt',
    '/sitemap.xml',
    '/images', // static images folder (if any)
    '/public', // explicitly allow /public folder (if you serve files here)
    '/_next/static', // Next.js static files
    '/_next/image' // Next.js image optimization
];

// Helper: check if the path starts with any prefix in the list
function pathStartsWith(path: string, prefixes: string[]) {
    return prefixes.some((prefix) => path === prefix || path.startsWith(prefix + '/'));
}

// Helper: check if path is a public route (exact match)
function isPublicRoute(path: string) {
    return publicRoutes.includes(path);
}

// Middleware function
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const token = request.cookies.get('master-key')?.value || '';

    // Allow always allowed paths without auth
    if (pathStartsWith(path, alwaysAllowedPaths)) {
        return NextResponse.next();
    }

    // If path is public route and user is logged in, redirect to dashboard
    if (isPublicRoute(path) && token) {
        // Avoid redirect loop
        if (path !== '/dashboard') {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    }

    // If path is protected and user is not logged in, redirect to login
    if (!isPublicRoute(path) && !token) {
        // Avoid redirect loop
        if (path !== '/login') {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    // Otherwise, allow request to proceed
    return NextResponse.next();
}

// Matcher to exclude API routes, Next.js internals, and static files
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|images|public).*)'
    ]
};
