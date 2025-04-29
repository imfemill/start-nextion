// app/login/layout.tsx
export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <main className="p-4">{children}</main>
            </body>
        </html>
    );
}
