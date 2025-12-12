import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "ALFA PAINT LLC | Premium Painting Services in South Florida",
  description:
    "Professional interior and exterior painting services in Miami, Fort Lauderdale, Boca Raton, Hollywood, and West Palm Beach. Licensed & insured with 10+ years of experience.",
  keywords:
    "painting services, interior painting, exterior painting, Miami painter, Fort Lauderdale painting, South Florida painter",
  openGraph: {
    title: "ALFA PAINT LLC | Premium Painting Services",
    description: "Transform your space with premium painting services in South Florida",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" async></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js" async></script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
