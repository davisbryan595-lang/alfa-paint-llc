"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="ALFA PAINT LLC" width={50} height={50} className="w-12 h-12 object-contain" />
          <span className="text-white font-[family-name:var(--font-bebas)] text-2xl tracking-wide">ALFA PAINT LLC</span>
        </div>

        <a
          href="tel:2672306380"
          className="flex items-center gap-2 bg-[#DC143C] hover:bg-[#FF3333] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
        >
          <Phone className="w-5 h-5" />
          <span className="hidden sm:inline">267-230-6380</span>
        </a>
      </div>
    </nav>
  )
}
