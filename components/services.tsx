"use client"

import { useEffect } from "react"
import { Paintbrush, Home } from "lucide-react"

export function Services() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger)

      window.gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      })
    }
  }, [])

  return (
    <section id="services" className="services-section py-24 bg-gradient-to-b from-[#0A0A0A] to-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-bebas)] text-6xl md:text-7xl text-white mb-4 tracking-wide">
            Our Services
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-[#DC143C]"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Interior Painting */}
          <div className="service-card group relative overflow-hidden rounded-2xl bg-[#0f0f0f] border border-[#DC143C]/20 hover:border-[#DC143C] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#DC143C]/30">
            <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative aspect-video overflow-hidden">
              <img
                src="/luxury-modern-interior-room-with-painted-walls.jpg"
                alt="Interior Painting"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
            </div>

            <div className="relative p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#DC143C]/10 rounded-xl flex items-center justify-center group-hover:bg-[#DC143C] transition-colors duration-300">
                  <Paintbrush className="w-8 h-8 text-[#DC143C] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-[family-name:var(--font-bebas)] text-4xl text-white tracking-wide">
                  Interior Painting
                </h3>
              </div>
              <p className="text-white/70 text-lg leading-relaxed">
                Transform your indoor spaces with premium paints and expert craftsmanship. Perfect finishes for walls,
                ceilings, trim, and cabinetry.
              </p>
            </div>
          </div>

          {/* Exterior Painting */}
          <div className="service-card group relative overflow-hidden rounded-2xl bg-[#0f0f0f] border border-[#DC143C]/20 hover:border-[#DC143C] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#DC143C]/30">
            <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative aspect-video overflow-hidden">
              <img
                src="/beautiful-painted-house-exterior-modern-home.jpg"
                alt="Exterior Painting"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
            </div>

            <div className="relative p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#DC143C]/10 rounded-xl flex items-center justify-center group-hover:bg-[#DC143C] transition-colors duration-300">
                  <Home className="w-8 h-8 text-[#DC143C] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-[family-name:var(--font-bebas)] text-4xl text-white tracking-wide">
                  Exterior Painting
                </h3>
              </div>
              <p className="text-white/70 text-lg leading-relaxed">
                Protect and beautify your home's exterior with weather-resistant paints. Enhance curb appeal and
                property value with lasting results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
