"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger)

      window.gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 70%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      window.gsap.from(".contact-info", {
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 70%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section
      id="contact"
      className="contact-section py-24 bg-gradient-to-b from-[#0A0A0A] to-[#1a1a1a] relative overflow-hidden"
    >
      {/* Background paint splash */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-[#DC143C] rounded-full blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-bebas)] text-6xl md:text-7xl text-white mb-4 tracking-wide">
            Get Your Free Quote
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-24 h-1 bg-[#DC143C]"></div>
          </div>
          <p className="text-white/70 text-xl mb-3">Let's transform your space together</p>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Ready to start your painting project? Fill out the form below or call us directly for immediate assistance.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#0f0f0f] border-[#DC143C]/30 text-white placeholder:text-white/40 h-14 text-lg rounded-xl focus:border-[#DC143C] transition-colors"
                />
              </div>

              <div className="relative">
                <Input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#0f0f0f] border-[#DC143C]/30 text-white placeholder:text-white/40 h-14 text-lg rounded-xl focus:border-[#DC143C] transition-colors"
                />
              </div>

              <div className="relative">
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-[#0f0f0f] border-[#DC143C]/30 text-white placeholder:text-white/40 h-14 text-lg rounded-xl focus:border-[#DC143C] transition-colors"
                />
              </div>

              <div className="relative">
                <Textarea
                  placeholder="Tell us about your project..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#0f0f0f] border-[#DC143C]/30 text-white placeholder:text-white/40 min-h-32 text-lg rounded-xl focus:border-[#DC143C] transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-[#DC143C] to-[#FF3333] hover:from-[#FF3333] hover:to-[#DC143C] text-white text-xl py-7 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#DC143C]/50"
              >
                <Send className="w-6 h-6 mr-2" />
                Get Free Quote
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info space-y-8">
            <div className="bg-[#0f0f0f] border border-[#DC143C]/30 rounded-2xl p-8 hover:border-[#DC143C] transition-colors duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#DC143C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-8 h-8 text-[#DC143C]" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-white mb-2 tracking-wide">
                    Call Us
                  </h3>
                  <a href="tel:2672306380" className="text-white/70 text-xl hover:text-[#DC143C] transition-colors">
                    267-230-6380
                  </a>
                  <p className="text-white/50 mt-1">Mon-Sat: 7am - 7pm</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0f0f0f] border border-[#DC143C]/30 rounded-2xl p-8 hover:border-[#DC143C] transition-colors duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#DC143C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-8 h-8 text-[#DC143C]" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-white mb-2 tracking-wide">
                    Email Us
                  </h3>
                  <a
                    href="mailto:info@alfapaint.com"
                    className="text-white/70 text-xl hover:text-[#DC143C] transition-colors"
                  >
                    info@alfapaint.com
                  </a>
                  <p className="text-white/50 mt-1">24/7 response time</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0f0f0f] border border-[#DC143C]/30 rounded-2xl p-8 hover:border-[#DC143C] transition-colors duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#DC143C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-8 h-8 text-[#DC143C]" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-white mb-2 tracking-wide">
                    Service Area
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Miami, Fort Lauderdale, Boca Raton, Hollywood, West Palm Beach & surrounding areas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
