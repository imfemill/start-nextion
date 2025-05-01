// app/login/layout.tsx
export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative flex items-center justify-center h-full min-h-screen w-screen bg-[url('/images/auth.png')] bg-white/50 bg-blend-difference bg-cover select-none p-4">
            {children}
            {/* <div className="absolute bottom-4 text-sm md:text-normal text-neutral-500 text-center">
                © 2025, WCG Corporation Pvt. Ltd. All Rights Reserved.
            </div> */}
        </main>
    );
}
