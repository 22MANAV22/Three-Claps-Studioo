import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: "THREE CLAPS - Premium Film Production Studio | Cinematic Excellence",
  description:
    "Award-winning film production studio creating premium cinematic experiences. Feature films, documentaries, commercials, and innovative visual storytelling.",
  keywords: "film production, cinematography, premium studio, film director, visual effects",
  generator: "v0.app",
  creator: "THREE CLAPS Studios",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://threeclapsstudio.com",
    title: "THREE CLAPS - Premium Film Production Studio",
    description: "Crafting cinematic excellence through premium production and storytelling",
    images: [
      {
        url: "/luxury-film-poster-dramatic.jpg",
        width: 1200,
        height: 630,
        alt: "THREE CLAPS Studios",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#0b0b0d" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#0b0b0d" media="(prefers-color-scheme: light)" />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
