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
          {/* Embedded Google Map */}
          <div className="map-container relative mb-12 overflow-hidden rounded-3xl border-2 border-[#DC143C]/30 h-96 md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.6892340933444!2d-80.19384032345389!3d25.76168807662444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b3d3b3d3b3d3%3A0x0!2sMiami%2C%20Florida!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "24px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg pointer-events-none">
              <p className="text-white font-semibold">South Florida Service Area</p>
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
