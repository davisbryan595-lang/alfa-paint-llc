"use client"

import { useEffect } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    name: "Basic Package",
    price: "$1.50",
    unit: "per sq ft",
    description: "Perfect for single rooms and smaller projects",
    features: [
      "Interior wall painting",
      "Single color application",
      "Basic surface prep",
      "Standard paint quality",
      "Project completion in 2-4 days",
      "Basic clean-up included",
    ],
    popular: false,
  },
  {
    name: "Standard Package",
    price: "$2.50",
    unit: "per sq ft",
    description: "Most popular choice for comprehensive painting",
    features: [
      "Interior & exterior walls",
      "Multiple color options",
      "Thorough surface preparation",
      "Premium paint quality",
      "Caulking & trim work",
      "Protection of furniture",
      "Meticulous clean-up",
      "1-year warranty included",
    ],
    popular: true,
  },
  {
    name: "Premium Package",
    price: "$3.50",
    unit: "per sq ft",
    description: "Ultimate luxury painting experience",
    features: [
      "All Standard features included",
      "Architectural paint finishes",
      "Custom color consulting",
      "Specialty coatings & finishes",
      "Cabinet & furniture painting",
      "Textured surface application",
      "Premium protective coatings",
      "3-year warranty included",
      "Priority scheduling",
    ],
    popular: false,
  },
]

const serviceAddOns = [
  { name: "Popcorn Ceiling Removal", price: "$0.75/sq ft" },
  { name: "Pressure Washing", price: "$150-300" },
  { name: "Drywall Repair", price: "$150-500" },
  { name: "Cabinet Painting", price: "$2.00/sq ft" },
  { name: "Deck Staining", price: "$1.25/sq ft" },
  { name: "Custom Murals", price: "Custom Quote" },
]

export function Pricing() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger)

      // Pricing title animation
      window.gsap.from(".pricing-title", {
        scrollTrigger: {
          trigger: ".pricing-section",
          start: "top 75%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      })

      // Pricing cards animation
      window.gsap.from(".pricing-card", {
        scrollTrigger: {
          trigger: ".pricing-section",
          start: "top 70%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      })

      // Add ons animation
      window.gsap.from(".addon-card", {
        scrollTrigger: {
          trigger: ".addons-section",
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      })
    }
  }, [])

  return (
    <>
      {/* Pricing Section */}
      <section id="pricing" className="pricing-section py-24 bg-gradient-to-b from-[#1a1a1a] via-[#0f0f0f] to-[#0A0A0A] relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#DC143C] rounded-full blur-[150px] opacity-5 -translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="pricing-title font-[family-name:var(--font-bebas)] text-6xl md:text-7xl text-white mb-4 tracking-wide">
              Transparent Pricing
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-24 h-1 bg-[#DC143C]"></div>
            </div>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">
              Flexible packages designed to meet your project needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className="pricing-card group relative overflow-hidden rounded-3xl bg-[#0f0f0f] border-2 transition-all duration-500"
                style={{
                  borderColor: plan.popular ? "#DC143C" : "rgba(220, 20, 60, 0.2)",
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#DC143C] to-[#FF3333] text-white px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative p-8 md:p-10">
                  <h3 className="font-[family-name:var(--font-bebas)] text-3xl text-white mb-2 tracking-wide">
                    {plan.name}
                  </h3>
                  <p className="text-white/60 mb-6 text-sm">{plan.description}</p>

                  <div className="mb-8">
                    <div className="text-5xl font-bold text-white mb-1">{plan.price}</div>
                    <p className="text-white/60 text-sm">{plan.unit}</p>
                  </div>

                  <Button
                    className={`w-full mb-8 text-lg py-6 rounded-xl font-bold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#DC143C] to-[#FF3333] hover:from-[#FF3333] hover:to-[#DC143C] text-white hover:scale-105 hover:shadow-2xl hover:shadow-[#DC143C]/50"
                        : "bg-[#DC143C]/20 border border-[#DC143C]/50 text-white hover:bg-[#DC143C] hover:border-[#DC143C]"
                    }`}
                  >
                    Get Started
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#DC143C] flex-shrink-0 mt-0.5" />
                        <span className="text-white/80 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#0f0f0f] border border-[#DC143C]/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-white/70 text-center">
              💡 <span className="text-white font-semibold">Free Estimate:</span> Contact us for a personalized quote based on your specific project needs and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="addons-section py-24 bg-[#0A0A0A] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC143C] rounded-full blur-[150px] opacity-5 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="font-[family-name:var(--font-bebas)] text-5xl text-white mb-4 tracking-wide">
              Popular Add-ons
            </h3>
            <p className="text-white/70 text-lg">Enhance your project with our additional services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceAddOns.map((addon, idx) => (
              <div
                key={idx}
                className="addon-card group relative overflow-hidden rounded-2xl bg-[#0f0f0f] border border-[#DC143C]/20 hover:border-[#DC143C] p-6 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <h4 className="font-[family-name:var(--font-bebas)] text-xl text-white mb-2 tracking-wide">
                    {addon.name}
                  </h4>
                  <p className="text-[#DC143C] font-bold text-lg">{addon.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-white/60 text-lg">
              Questions about pricing? <span className="text-[#DC143C] font-semibold">Call us at 267-230-6380</span> for a free consultation
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
