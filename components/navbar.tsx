"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Why Choose", href: "#why" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md py-3" : "bg-[#0A0A0A]/50 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Image src="/logo.png" alt="ALFA PAINT LLC" width={50} height={50} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            <span className="text-white font-[family-name:var(--font-bebas)] text-lg md:text-2xl tracking-wide">ALFA PAINT LLC</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-white font-semibold transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DC143C] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <a
            href="tel:2672306380"
            className="hidden md:flex items-center gap-2 bg-[#DC143C] hover:bg-[#FF3333] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#DC143C]/50"
          >
            <Phone className="w-5 h-5" />
            <span>267-230-6380</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-[#DC143C]/20 animate-in slide-in-from-top-2 duration-300">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/80 hover:text-white text-left py-3 px-4 rounded-lg hover:bg-[#DC143C]/10 transition-colors duration-300 font-semibold"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:2672306380"
                className="flex items-center gap-2 justify-center bg-[#DC143C] hover:bg-[#FF3333] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 mt-2"
              >
                <Phone className="w-5 h-5" />
                <span>267-230-6380</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
