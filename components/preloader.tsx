"use client"

import { useEffect, useState } from "react"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialize GSAP animation after it loads
    const initAnimation = () => {
      if (typeof window !== "undefined" && window.gsap) {
        const tl = window.gsap.timeline({
          onComplete: () => setIsLoading(false),
        })

        tl.from(".paint-can", {
          y: -100,
          opacity: 0,
          duration: 0.6,
          ease: "bounce.out",
        })
          .to(".paint-pour", {
            height: "100%",
            duration: 1.2,
            ease: "power2.inOut",
          })
          .to(
            ".preloader-text",
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
            },
            "-=0.8",
          )
      } else {
        // Fallback if GSAP doesn't load
        setTimeout(() => setIsLoading(false), 2000)
      }
    }

    // Wait for GSAP to load
    if (typeof window !== "undefined") {
      if (window.gsap) {
        initAnimation()
      } else {
        let checkGsap: NodeJS.Timeout | null = null
        let timeoutId: NodeJS.Timeout | null = null

        checkGsap = setInterval(() => {
          if (window.gsap && checkGsap) {
            clearInterval(checkGsap)
            checkGsap = null
            if (timeoutId) {
              clearTimeout(timeoutId)
              timeoutId = null
            }
            initAnimation()
          }
        }, 100)

        timeoutId = setTimeout(() => {
          if (checkGsap) {
            clearInterval(checkGsap)
            checkGsap = null
          }
          setIsLoading(false)
        }, 3000)

        return () => {
          if (checkGsap) {
            clearInterval(checkGsap)
          }
          if (timeoutId) {
            clearTimeout(timeoutId)
          }
        }
      }
    }
  }, [])

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0A0A0A] flex items-center justify-center transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      suppressHydrationWarning
    >
      <div className="relative flex flex-col items-center">
        {/* Paint Can */}
        <div className="paint-can relative w-24 h-24 mb-4">
          <div className="absolute inset-0 bg-[#DC143C] rounded-lg opacity-20 blur-xl"></div>
          <svg viewBox="0 0 100 100" className="relative z-10">
            <path
              d="M20 40 L80 40 L80 90 C80 95 75 95 70 95 L30 95 C25 95 20 95 20 90 Z"
              fill="#DC143C"
              stroke="#FF3333"
              strokeWidth="2"
            />
            <rect x="35" y="20" width="30" height="5" rx="2" fill="#DC143C" />
            <path d="M35 20 L40 35 L60 35 L65 20" fill="none" stroke="#FF3333" strokeWidth="2" />
          </svg>
        </div>

        {/* Paint Pour */}
        <div className="relative w-2 h-32 bg-[#0A0A0A] overflow-hidden">
          <div
            className="paint-pour absolute bottom-0 w-full bg-gradient-to-b from-[#FF3333] to-[#DC143C]"
            style={{ height: "0%" }}
          ></div>
        </div>

        {/* Loading Text */}
        <p className="preloader-text mt-8 text-white text-2xl font-[family-name:var(--font-bebas)] tracking-wider opacity-0 translate-y-4">
          Loading Perfection...
        </p>
      </div>
    </div>
  )
}
