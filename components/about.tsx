"use client"

import { useEffect } from "react"
import { Award, Users, Zap, Heart } from "lucide-react"

const achievements = [
  {
    icon: Award,
    number: "500+",
    label: "Projects Completed",
    description: "Residential and commercial painting projects across South Florida",
  },
  {
    icon: Users,
    number: "50+",
    label: "Happy Clients",
    description: "Trusted by homeowners and businesses year after year",
  },
  {
    icon: Zap,
    number: "10+",
    label: "Years Experience",
    description: "Over a decade of professional painting excellence",
  },
  {
    icon: Heart,
    number: "100%",
    label: "Satisfaction Guaranteed",
    description: "We stand behind every project with complete quality assurance",
  },
]

export function About() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger)

      // About title animation
      window.gsap.from(".about-title", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 75%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      })

      // About content animation
      window.gsap.from(".about-content-left", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 70%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      // About image animation
      window.gsap.from(".about-content-right", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 70%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      // Achievement cards animation
      window.gsap.from(".achievement-card", {
        scrollTrigger: {
          trigger: ".achievements-section",
          start: "top 70%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      })
    }
  }, [])

  return (
    <>
      {/* Main About Section */}
      <section id="about" className="about-section py-24 bg-gradient-to-b from-[#0A0A0A] to-[#1a1a1a] relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#DC143C] rounded-full blur-[150px] opacity-5 -translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="about-title font-[family-name:var(--font-bebas)] text-6xl md:text-7xl text-white mb-4 tracking-wide">
              About ALFA
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-24 h-1 bg-[#DC143C]"></div>
            </div>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">
              Transforming spaces with excellence, integrity, and passion since our founding
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-24">
            {/* Content */}
            <div className="about-content-left space-y-6">
              <div>
                <h3 className="font-[family-name:var(--font-bebas)] text-4xl text-white mb-4 tracking-wide">
                  Our Story
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  ALFA PAINT LLC was founded with a simple mission: to bring professional, high-quality painting services
                  to South Florida homeowners and businesses. What started as a small team of passionate painters has
                  grown into a trusted name in residential and commercial painting.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-bebas)] text-4xl text-white mb-4 tracking-wide">
                  Our Mission
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  We believe that every space deserves to look its absolute best. Our mission is to deliver exceptional
                  painting services that exceed expectations, enhance property value, and transform spaces into
                  environments our clients love. We're committed to professionalism, reliability, and outstanding customer service.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-bebas)] text-4xl text-white mb-4 tracking-wide">
                  Why Choose Us
                </h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#DC143C] rounded-full"></span>
                    <span>Licensed, bonded, and fully insured for your protection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#DC143C] rounded-full"></span>
                    <span>Premium paints and materials from trusted brands</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#DC143C] rounded-full"></span>
                    <span>Meticulous attention to detail on every project</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#DC143C] rounded-full"></span>
                    <span>Quick turnaround times without compromising quality</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#DC143C] rounded-full"></span>
                    <span>Dedicated customer support and project management</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="about-content-right">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#DC143C]/30 group">
                <img
                  src="https://images.pexels.com/photos/6773501/pexels-photo-6773501.jpeg"
                  alt="Professional painting team"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white font-[family-name:var(--font-bebas)] text-3xl tracking-wide">
                    Expert Team Ready to Transform Your Space
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section py-24 bg-[#0A0A0A] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC143C] rounded-full blur-[150px] opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon
              return (
                <div
                  key={idx}
                  className="achievement-card group relative overflow-hidden rounded-2xl bg-[#0f0f0f] border border-[#DC143C]/20 hover:border-[#DC143C] p-8 transition-all duration-500 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative">
                    <div className="w-14 h-14 bg-[#DC143C]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#DC143C] transition-colors duration-300">
                      <Icon className="w-7 h-7 text-[#DC143C] group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="font-[family-name:var(--font-bebas)] text-5xl text-white mb-2 tracking-wide group-hover:text-[#DC143C] transition-colors duration-300">
                      {achievement.number}
                    </h3>

                    <p className="font-[family-name:var(--font-bebas)] text-xl text-white mb-3 tracking-wide">
                      {achievement.label}
                    </p>

                    <p className="text-white/60 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
