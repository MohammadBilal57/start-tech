"use client"

import { useState } from "react"

export default function Navbar() {

   const handleGetStarted = () => {
    window.location.href = "/getstarted"
  }

  const [activeLink, setActiveLink] = useState("homepage")

  const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "About Us", href: "/Aboutus", id: "about" },
    { name: "Services", href: "/Services", id: "services" },
    { name: "Contact", href: "/Contact", id: "contact" },
  ]

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-">
            <a href="#" className="text-2xl font-bold bg-linear-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Logo
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveLink(link.id)}
                className={`font-medium transition-colors ${
                  activeLink === link.id
                    ? "bg-linear-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent"
                    : "bg-linear-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={handleGetStarted}
            className="bg-black text-yellow-400 hover:bg-gray-900 border-2 border-yellow-400 hover:border-yellow-300 font-semibold px-6 py-2 transition-all duration-200 ease-in-out"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}