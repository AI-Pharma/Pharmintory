// app/(auth)/layout.tsx - For authentication pages
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                {children} {/* No header, sidebar, or footer */}
            </body>
        </html>
    )
}