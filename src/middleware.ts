import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request?.nextUrl?.pathname;
    const token = request.cookies.get('master-key')?.value || '';

    const isPublicPath = (path: string) =>
        path === '/' || path === '/login' || path === '/register';

    if (isPublicPath(path) && token) {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
    }

    if (!isPublicPath(path) && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
    ]
};

export const publicRoute = ['/', '/login', '/register'];
