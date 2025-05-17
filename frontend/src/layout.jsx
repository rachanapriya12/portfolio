import { Providers } from "./providers"
import "./globals.css"

export const metadata = {
title: "Rachana Priya Martha - Full Stack Developer",
description:
"Portfolio of Rachana Priya Martha, a Full Stack Developer specializing in AI-driven applications and web solutions.",
}

export default function RootLayout({ children }) {
return (
<html lang="en" suppressHydrationWarning>
    <body className="min-h-screen bg-background font-sans antialiased">
    <Providers>{children}</Providers>
    </body>
</html>
)
}
