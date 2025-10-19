import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "MrBitX - Web & App Development Company | Simple Solutions. Real Results.",
  description:
    "MrBitX is a professional web development and mobile app company. We build high-performance Full Stack websites and Flutter apps that drive real business growth — Simple Solutions. Real Results.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico", // ✅ add this line
  },
  other: {
    "google-site-verification": "8XIwJDtt-_ib07N4b1c38N57FsZfdw3rEv-9B9lgFL4",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
