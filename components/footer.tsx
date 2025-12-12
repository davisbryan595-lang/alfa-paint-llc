import Image from "next/image"
import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#DC143C]/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Company */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="ALFA PAINT LLC" width={50} height={50} className="w-12 h-12 object-contain" />
            <div>
              <span className="text-white font-[family-name:var(--font-bebas)] text-2xl tracking-wide block">
                ALFA PAINT LLC
              </span>
              <span className="text-white/60 text-sm">Premium Painting Services</span>
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="tel:2672306380"
              className="flex items-center gap-2 text-white/70 hover:text-[#DC143C] transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>267-230-6380</span>
            </a>
            <a
              href="mailto:info@alfapaint.com"
              className="flex items-center gap-2 text-white/70 hover:text-[#DC143C] transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>info@alfapaint.com</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#DC143C]/20 text-center text-white/50 text-sm">
          <p>&copy; 2024 ALFA PAINT LLC. All rights reserved. Licensed & Insured.</p>
        </div>
      </div>
    </footer>
  )
}
