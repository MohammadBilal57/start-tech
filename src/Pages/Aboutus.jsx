import { useState, useEffect } from 'react'

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values = [
    {
      title: "Innovation",
      description: "We push boundaries and embrace cutting-edge technologies to deliver solutions that set you apart.",
      icon: "💡"
    },
    {
      title: "Excellence",
      description: "Quality is non-negotiable. Every line of code, every design element is crafted to perfection.",
      icon: "⭐"
    },
    {
      title: "Partnership",
      description: "Your success is our success. We work alongside you as true partners in your digital journey.",
      icon: "🤝"
    },
    {
      title: "Transparency",
      description: "Clear communication, honest timelines, and no hidden surprises. That's our promise.",
      icon: "🔍"
    }
  ]

  const team = [
    {
      name: "Abdul Haseeb",
      role: "CEO & Founder",
      description: "15+ years building digital products for Fortune 500 companies"
    },
    {
      name: "Muhammad Bilal",
      role: "Head of Development",
      description: "Full-stack expert specializing in scalable web applications"
    },
    {
      name: "Marcus Williams",
      role: "Creative Director",
      description: "Award-winning designer with a passion for user experience"
    },
  ]

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-black via-gray-900 to-black overflow-hidden py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-block mb-6">
              <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase">About Us</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              We Build Digital
              <br />
              <span className="bg-linear-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                Experiences That Matter
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A team of passionate developers and designers committed to transforming your vision into powerful digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-yellow-500">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  Founded in 2019, we started with a simple mission: to help businesses thrive in the digital age through exceptional software and web solutions.
                </p>
                <p>
                  What began as a small team of three passionate developers has grown into a full-service digital agency. We've delivered over 200 successful projects, helping startups launch their dreams and enterprises scale their operations.
                </p>
                <p>
                  Today, we're proud to be trusted partners for businesses across industries, from e-commerce to healthcare, fintech to education. Our commitment to excellence and innovation remains unwavering.
                </p>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-yellow-500 to-amber-600 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-gray-900 border border-yellow-500/20 rounded-2xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">🚀</div>
                      <div>
                        <div className="text-3xl font-bold text-yellow-500">200+</div>
                        <div className="text-gray-400">Projects Completed</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">👥</div>
                      <div>
                        <div className="text-3xl font-bold text-yellow-500">150+</div>
                        <div className="text-gray-400">Satisfied Clients</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">🏆</div>
                      <div>
                        <div className="text-3xl font-bold text-yellow-500">25+</div>
                        <div className="text-gray-400">Industry Awards</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-linear-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-yellow-500">Core Values</span>
            </h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-yellow-500/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-6 hover:bg-yellow-500/10 transition-all hover:scale-105 hover:border-yellow-500/40 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-yellow-500 mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet Our <span className="text-yellow-500">Team</span>
            </h2>
            <p className="text-xl text-gray-300">The experts behind your success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-black border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition-all hover:scale-105 "
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-linear-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center text-4xl font-bold text-black">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">{member.name}</h3>
                <p className="text-yellow-500 text-center mb-3 font-semibold">{member.role}</p>
                <p className="text-gray-400 text-center text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-yellow-500">Next Project?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's bring your vision to life with cutting-edge software and web solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-4 bg-linear-to-r from-yellow-500 to-amber-600 text-black rounded-lg font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50">
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-linear-to-r from-amber-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button className="px-8 py-4 bg-yellow-500/10 backdrop-blur-sm text-yellow-500 rounded-lg font-semibold text-lg border border-yellow-500/30 hover:bg-yellow-500/20 transition-all hover:scale-105">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}