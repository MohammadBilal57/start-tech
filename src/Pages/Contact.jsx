import { useState, useEffect } from 'react'

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for reaching out! We\'ll get back to you within 24 hours.')
  }

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      detail: "hello@yourcompany.com",
      link: "mailto:hello@yourcompany.com"
    },
    {
      icon: "📞",
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "📍",
      title: "Visit Us",
      detail: "123 Tech Street, Silicon Valley, CA 94025",
      link: "#"
    },
    {
      icon: "🕒",
      title: "Working Hours",
      detail: "Mon - Fri: 9AM - 6PM PST",
      link: "#"
    }
  ]

  const services = [
    "Web Development",
    "Mobile App Development",
    "Custom Software",
    "UI/UX Design",
    "E-commerce Solutions",
    "API Development",
    "Cloud Solutions",
    "Consulting"
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
              <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase">Get In Touch</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Let's Build Something
              <br />
              <span className="bg-linear-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? We'd love to hear about it. Drop us a message and let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className={`bg-yellow-500/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-6 hover:bg-yellow-500/10 transition-all hover:scale-105 hover:border-yellow-500/40 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="text-4xl mb-3">{info.icon}</div>
                <h3 className="text-yellow-500 font-semibold mb-2 group-hover:text-yellow-400 transition-colors">{info.title}</h3>
                <p className="text-gray-300 text-sm">{info.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Form and Info */}
      <section className="py-20 bg-linear-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="bg-black border border-yellow-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Send Us a <span className="text-yellow-500">Message</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2 text-sm font-medium">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-yellow-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2 text-sm font-medium">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-yellow-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2 text-sm font-medium">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-yellow-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                        placeholder="+92 "
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2 text-sm font-medium">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-yellow-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Service Interested In *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-yellow-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Project Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-yellow-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full bg-gray-900 border border-yellow-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full group relative px-8 py-4 bg-linear-to-r from-yellow-500 to-amber-600 text-black rounded-lg font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50"
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-linear-to-r from-amber-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Info */}
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="sticky top-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why <span className="text-yellow-500">Choose Us?</span>
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-">
                      <div className="w-12 h-12 bg-linear-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center text-2xl">
                        ⚡
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Fast Response Time</h3>
                      <p className="text-gray-400">We respond to all inquiries within 24 hours, guaranteed.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-">
                      <div className="w-12 h-12 bg-linear-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center text-2xl">
                        💼
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Expert Consultation</h3>
                      <p className="text-gray-400">Free 30-minute consultation to discuss your project needs.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-">
                      <div className="w-12 h-12 bg-linear-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center text-2xl">
                        🎯
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Tailored Solutions</h3>
                      <p className="text-gray-400">Custom strategies designed specifically for your business goals.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-">
                      <div className="w-12 h-12 bg-linear-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center text-2xl">
                        🔒
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">NDA Protection</h3>
                      <p className="text-gray-400">Your ideas are safe with us. We sign NDAs before any discussion.</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 bg-gray-900 border border-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all hover:scale-110">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-gray-900 border border-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all hover:scale-110">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-gray-900 border border-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all hover:scale-110">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-gray-900 border border-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all hover:scale-110">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="text-yellow-500">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-6 hover:bg-yellow-500/10 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">How long does a typical project take?</h3>
              <p className="text-gray-400">Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex software can take 3-6 months. We'll provide a detailed timeline during consultation.</p>
            </div>

            <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-6 hover:bg-yellow-500/10 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">What is your pricing structure?</h3>
              <p className="text-gray-400">We offer flexible pricing based on project scope. We can work on fixed-price, hourly, or retainer basis. Get in touch for a customized quote.</p>
            </div>

            <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-6 hover:bg-yellow-500/10 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">Do you provide ongoing support?</h3>
              <p className="text-gray-400">Yes! We offer maintenance and support packages to ensure your software stays updated, secure, and performing optimally.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}