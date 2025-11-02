import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to from-black via-gray-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRDcwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <span className="text-yellow-200 text-sm font-medium">Premium Services Available</span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Elevate Your Digital Presence
            <br />
            <span className="bg-linear-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Software & Web Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            We craft premium software applications and stunning websites that drive results. Your vision, our expertise.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button className="group relative px-8 py-4 bg-linear-to-r from-yellow-500 to-amber-600 text-black rounded-lg font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-linear-to-r from-amber-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button className="px-8 py-4 bg-yellow-500/10 backdrop-blur-sm text-yellow-500 rounded-lg font-semibold text-lg border border-yellow-500/30 hover:bg-yellow-500/20 transition-all hover:scale-105">
              View Portfolio
            </button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="bg-yellow-500/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-6 hover:bg-yellow-500/10 transition-all group">
              <div className="text-4xl font-bold bg-linear-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-2">200+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="bg-yellow-500/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-6 hover:bg-yellow-500/10 transition-all group">
              <div className="text-4xl font-bold bg-linear-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-2">150+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="bg-yellow-500/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-6 hover:bg-yellow-500/10 transition-all group">
              <div className="text-4xl font-bold bg-linear-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-2">5+ Years</div>
              <div className="text-gray-400">Industry Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-yellow-500/50" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}