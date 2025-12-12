"use client"

import { useState, useEffect } from "react"
import { Phone } from "lucide-react"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <a
      href="tel:2672306380"
      className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#DC143C] hover:bg-[#FF3333] text-white px-6 py-4 rounded-full shadow-2xl shadow-[#DC143C]/50 transition-all duration-300 hover:scale-110 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <Phone className="w-6 h-6 animate-pulse" />
      <span className="font-bold text-lg hidden sm:inline">Call Now</span>
    </a>
  )
}
