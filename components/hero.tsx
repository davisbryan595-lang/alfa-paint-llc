"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export function Hero() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger)

      const tl = window.gsap.timeline({ delay: 2.2 })

      // Paint roller wipe effect on title
      tl.from(".hero-title", {
        xPercent: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.1,
      })
        .from(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6",
        )
        .from(
          ".hero-locations",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .from(
          ".hero-buttons button",
          {
            opacity: 0,
            y: 30,
            scale: 0.8,
            duration: 0.6,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "-=0.4",
        )
    }
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/6970025/pexels-photo-6970025.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85"></div>
      </div>

      {/* Animated background paint strokes */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#DC143C] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF3333] rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title - Paint Roller Wipe */}
          <h1 className="hero-title font-[family-name:var(--font-bebas)] text-7xl md:text-9xl text-white mb-6 leading-none tracking-tight">
            ALFA PAINT LLC
          </h1>

          {/* Red Drip Divider */}
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-1 bg-[#DC143C]">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-8 bg-gradient-to-b from-[#DC143C] to-transparent"></div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="hero-subtitle text-3xl md:text-5xl text-white/90 font-[family-name:var(--font-bebas)] mb-4 tracking-wide">
            Interior & Exterior Painting
          </p>

          {/* Locations */}
          <p className="hero-locations text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Miami • Fort Lauderdale • Boca Raton • Hollywood • West Palm Beach
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group relative bg-[#DC143C] hover:bg-[#FF3333] text-white text-xl px-12 py-7 rounded-xl font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#DC143C]/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-6 h-6" />
                Free Estimate
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF3333] to-[#DC143C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] text-xl px-12 py-7 rounded-xl font-bold transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <a href="tel:2672306380" className="flex items-center gap-2">
                <Phone className="w-6 h-6" />
                Call 267-230-6380
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#DC143C] rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
