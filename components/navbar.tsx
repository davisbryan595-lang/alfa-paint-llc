"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import Link from "next/link"

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

  useEffect(() => {
    // GSAP logo animation
    if (typeof window !== "undefined" && window.gsap) {
      // Entrance animation
      window.gsap.from(".navbar-logo", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)",
      })

      // Hover animation
      const logo = document.querySelector(".navbar-logo")
      if (logo) {
        logo.addEventListener("mouseenter", () => {
          window.gsap.to(".navbar-logo", {
            scale: 1.1,
            duration: 0.4,
            ease: "back.out(1.7)",
          })
        })

        logo.addEventListener("mouseleave", () => {
          window.gsap.to(".navbar-logo", {
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.7)",
          })
        })
      }
    }
  }, [])

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Gallery", href: "#gallery" },
    { label: "Why Choose", href: "#why" },
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
          <Link href="/" className="flex items-center flex-shrink-0 hover:opacity-80 transition-opacity duration-300">
            <Image src="https://cdn.builder.io/api/v1/image/assets%2F52da5d68f89948b9bbd69807a376ed7b%2F0418b1b4af2c4951a3eb3d0036b09ac5?format=webp&width=800" alt="ALFA PAINT LLC" width={160} height={160} className="navbar-logo w-32 h-32 md:w-40 md:h-40 object-contain cursor-pointer" />
          </Link>

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
