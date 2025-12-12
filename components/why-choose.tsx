"use client"

import { useEffect } from "react"
import { Shield, Clock, Sparkles, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully certified and insured for your peace of mind and protection",
    image: "https://images.pexels.com/photos/4792500/pexels-photo-4792500.jpeg",
  },
  {
    icon: Clock,
    title: "10+ Years Experience",
    description: "Over a decade of delivering exceptional painting services across South Florida",
    image: "https://images.pexels.com/photos/11953905/pexels-photo-11953905.jpeg",
  },
  {
    icon: Sparkles,
    title: "Premium Paints",
    description: "Only the highest quality paints and materials for lasting, beautiful results",
    image: "https://images.pexels.com/photos/6890399/pexels-photo-6890399.jpeg",
  },
  {
    icon: CheckCircle,
    title: "Clean Work Guaranteed",
    description: "Meticulous preparation, execution, and cleanup on every single project",
    image: "https://images.pexels.com/photos/7481270/pexels-photo-7481270.jpeg",
  },
]

export function WhyChoose() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger)

      // Section title animation
      window.gsap.from(".why-section-title", {
        scrollTrigger: {
          trigger: ".why-section",
          start: "top 75%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      })

      // Feature cards entrance animation
      window.gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: ".why-section",
          start: "top 70%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      })

      // Add interactive hover animations to feature cards
      const featureCards = document.querySelectorAll(".feature-card")
      featureCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          window.gsap.to(card, {
            y: -10,
            boxShadow: "0 30px 60px rgba(220, 20, 60, 0.3)",
            duration: 0.3,
            ease: "power2.out",
          })

          window.gsap.to(card.querySelector(".feature-card-image"), {
            scale: 1.1,
            duration: 0.5,
            ease: "power2.out",
          })

          window.gsap.to(card.querySelector(".feature-card-icon"), {
            scale: 1.2,
            rotate: 5,
            duration: 0.3,
            ease: "back.out(1.7)",
          })
        })

        card.addEventListener("mouseleave", () => {
          window.gsap.to(card, {
            y: 0,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            duration: 0.3,
            ease: "power2.out",
          })

          window.gsap.to(card.querySelector(".feature-card-image"), {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          })

          window.gsap.to(card.querySelector(".feature-card-icon"), {
            scale: 1,
            rotate: 0,
            duration: 0.3,
            ease: "power2.out",
          })
        })
      })
    }
  }, [])

  return (
    <section id="why" className="why-section py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0A0A0A] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC143C] rounded-full blur-[150px] opacity-5 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="why-section-title font-[family-name:var(--font-bebas)] text-6xl md:text-7xl text-white mb-4 tracking-wide">
            Why Choose ALFA
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-[#DC143C]"></div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="feature-card group relative overflow-hidden rounded-2xl bg-[#0f0f0f] border border-[#DC143C]/20 hover:border-[#DC143C] transition-all duration-500 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="feature-card-image relative aspect-[4/3] overflow-hidden">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/50 to-transparent"></div>
                </div>

                <div className="relative p-6">
                  <div className="feature-card-icon w-14 h-14 bg-[#DC143C]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#DC143C] transition-colors duration-300 origin-center">
                    <Icon className="w-7 h-7 text-[#DC143C] group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-white mb-2 tracking-wide">
                    {feature.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
