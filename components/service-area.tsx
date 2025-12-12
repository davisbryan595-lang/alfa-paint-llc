"use client"

import { useEffect } from "react"
import { MapPin } from "lucide-react"

const cities = [
  "Miami",
  "Fort Lauderdale",
  "Boca Raton",
  "Hollywood",
  "West Palm Beach",
  "Coral Springs",
  "Pompano Beach",
  "Deerfield Beach",
]

export function ServiceArea() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger)

      window.gsap.from(".city-badge", {
        scrollTrigger: {
          trigger: ".service-area-section",
          start: "top 70%",
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
      })

      window.gsap.from(".map-container", {
        scrollTrigger: {
          trigger: ".service-area-section",
          start: "top 70%",
        },
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power3.out",
      })
    }
  }, [])

  return (
    <section id="service-area" className="service-area-section py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC143C] rounded-full blur-[150px] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-bebas)] text-6xl md:text-7xl text-white mb-4 tracking-wide">
            Service Area
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-24 h-1 bg-[#DC143C]"></div>
          </div>
          <p className="text-white/70 text-xl">Proudly serving South Florida</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Map Visual */}
          <div className="map-container relative mb-12 p-12 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-3xl border border-[#DC143C]/30">
            <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-10">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                {/* Simplified Florida map outline */}
                <path
                  d="M 50 50 L 350 50 L 350 250 L 250 280 L 150 270 L 50 250 Z"
                  fill="none"
                  stroke="#DC143C"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                {/* Coverage area highlight */}
                <circle cx="200" cy="150" r="100" fill="#DC143C" opacity="0.2" />
                <circle cx="200" cy="150" r="80" fill="#DC143C" opacity="0.3" />
                <circle cx="200" cy="150" r="60" fill="#DC143C" opacity="0.4" />
              </svg>
            </div>

            <div className="relative text-center">
              <MapPin className="w-20 h-20 text-[#DC143C] mx-auto mb-4" />
              <p className="text-white/90 text-2xl font-[family-name:var(--font-bebas)] tracking-wide">
                South Florida Coverage
              </p>
            </div>
          </div>

          {/* City Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="city-badge group relative px-6 py-3 bg-[#0f0f0f] border border-[#DC143C]/30 rounded-full hover:bg-[#DC143C] hover:border-[#DC143C] transition-all duration-300 cursor-default"
              >
                <span className="text-white font-semibold text-lg group-hover:scale-110 inline-block transition-transform">
                  {city}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
