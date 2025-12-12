"use client"

import { useEffect } from "react"
import { Paintbrush, Home } from "lucide-react"

export function Services() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger)

      // Section title animation
      window.gsap.from(".services-title", {
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 75%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      })

      // Service cards animation with stagger
      window.gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 70%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
      })

      // Add hover animations to service cards
      const serviceCards = document.querySelectorAll(".service-card")
      serviceCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          window.gsap.to(card.querySelector(".service-card-image"), {
            scale: 1.15,
            duration: 0.6,
            ease: "power2.out",
          })

          window.gsap.to(card.querySelector(".service-card-overlay"), {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          })
        })

        card.addEventListener("mouseleave", () => {
          window.gsap.to(card.querySelector(".service-card-image"), {
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
          })

          window.gsap.to(card.querySelector(".service-card-overlay"), {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          })
        })
      })
    }
  }, [])

  return (
    <section id="services" className="services-section py-24 bg-gradient-to-b from-[#1a1a1a] via-[#0f0f0f] to-[#0A0A0A] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#DC143C] rounded-full blur-[150px] opacity-5 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="services-title font-[family-name:var(--font-bebas)] text-6xl md:text-7xl text-white mb-4 tracking-wide">
            Our Services
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-[#DC143C]"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Interior Painting */}
          <div className="service-card group relative overflow-hidden rounded-2xl bg-[#0f0f0f] border border-[#DC143C]/20 hover:border-[#DC143C] transition-all duration-500 cursor-pointer">
            <div className="service-card-overlay absolute inset-0 bg-gradient-to-br from-[#DC143C]/10 to-transparent opacity-0 transition-opacity duration-500"></div>

            <div className="service-card-image relative aspect-video overflow-hidden">
              <img
                src="/luxury-modern-interior-room-with-painted-walls.jpg"
                alt="Interior Painting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent"></div>
            </div>

            <div className="relative p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#DC143C]/10 rounded-xl flex items-center justify-center group-hover:bg-[#DC143C] transition-colors duration-300 flex-shrink-0">
                  <Paintbrush className="w-7 h-7 md:w-8 md:h-8 text-[#DC143C] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-[family-name:var(--font-bebas)] text-2xl md:text-4xl text-white tracking-wide">
                  Interior Painting
                </h3>
              </div>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-4">
                Transform your indoor spaces with premium paints and expert craftsmanship. Perfect finishes for walls, ceilings, trim, and cabinetry. Our interior painting services include:
              </p>
              <ul className="text-white/60 text-sm space-y-2">
                <li>• Residential living rooms, bedrooms, and bathrooms</li>
                <li>• Commercial office spaces and retail locations</li>
                <li>• Cabinet and furniture refinishing</li>
                <li>• Accent walls and creative finishes</li>
              </ul>
            </div>
          </div>

          {/* Exterior Painting */}
          <div className="service-card group relative overflow-hidden rounded-2xl bg-[#0f0f0f] border border-[#DC143C]/20 hover:border-[#DC143C] transition-all duration-500 cursor-pointer">
            <div className="service-card-overlay absolute inset-0 bg-gradient-to-br from-[#DC143C]/10 to-transparent opacity-0 transition-opacity duration-500"></div>

            <div className="service-card-image relative aspect-video overflow-hidden">
              <img
                src="/beautiful-painted-house-exterior-modern-home.jpg"
                alt="Exterior Painting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent"></div>
            </div>

            <div className="relative p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#DC143C]/10 rounded-xl flex items-center justify-center group-hover:bg-[#DC143C] transition-colors duration-300 flex-shrink-0">
                  <Home className="w-7 h-7 md:w-8 md:h-8 text-[#DC143C] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-[family-name:var(--font-bebas)] text-2xl md:text-4xl text-white tracking-wide">
                  Exterior Painting
                </h3>
              </div>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-4">
                Protect and beautify your home's exterior with weather-resistant paints. Enhance curb appeal and property value with lasting results.
              </p>
              <ul className="text-white/60 text-sm space-y-2">
                <li>• House siding and exterior walls</li>
                <li>• Deck and fence staining</li>
                <li>• Garage doors and trim work</li>
                <li>• Pressure washing and surface prep</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
