import { useState, useEffect } from 'react'

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Custom websites that captivate and convert. From landing pages to complex web applications.",
      features: [
        "Responsive Design",
        "E-commerce Integration",
        "CMS Development",
        "Progressive Web Apps"
      ],
      price: "Starting at $5,000"
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: [
        "iOS & Android Apps",
        "React Native",
        "Flutter Development",
        "App Store Deployment"
      ],
      price: "Starting at $15,000"
    },
    {
      icon: "⚙️",
      title: "Custom Software",
      description: "Tailored software solutions designed to solve your unique business challenges.",
      features: [
        "Business Automation",
        "Enterprise Solutions",
        "API Integration",
        "Database Design"
      ],
      price: "Starting at $20,000"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user satisfaction and drive engagement.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing"
      ],
      price: "Starting at $3,000"
    },
    {
      icon: "🛒",
      title: "E-commerce Solutions",
      description: "Complete online store solutions with secure payment processing and inventory management.",
      features: [
        "Shopify Development",
        "WooCommerce",
        "Payment Gateway Integration",
        "Inventory Management"
      ],
      price: "Starting at $8,000"
    },
    {
      icon: "🔌",
      title: "API Development",
      description: "Robust and scalable APIs that power seamless integrations and data exchange.",
      features: [
        "RESTful APIs",
        "GraphQL",
        "Third-party Integrations",
        "API Documentation"
      ],
      price: "Starting at $6,000"
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: [
        "AWS & Azure",
        "Cloud Migration",
        "DevOps Services",
        "Server Management"
      ],
      price: "Starting at $10,000"
    },
    {
      icon: "🔒",
      title: "Security & Maintenance",
      description: "Keep your applications secure, updated, and performing at their best.",
      features: [
        "Security Audits",
        "Regular Updates",
        "Performance Optimization",
        "24/7 Monitoring"
      ],
      price: "Starting at $500/month"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into your business goals, target audience, and project requirements."
    },
    {
      step: "02",
      title: "Planning",
      description: "Detailed project roadmap with timelines, milestones, and resource allocation."
    },
    {
      step: "03",
      title: "Design",
      description: "Create stunning mockups and prototypes for your approval before development."
    },
    {
      step: "04",
      title: "Development",
      description: "Our expert developers bring your vision to life with clean, efficient code."
    },
    {
      step: "05",
      title: "Testing",
      description: "Rigorous quality assurance to ensure everything works flawlessly."
    },
    {
      step: "06",
      title: "Launch",
      description: "Smooth deployment and post-launch support to ensure success."
    }
  ]

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "Next.js", category: "Framework" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Tailwind", category: "CSS" },
    { name: "TypeScript", category: "Language" },
    { name: "GraphQL", category: "API" },
    { name: "Firebase", category: "Backend" }
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
              <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase">Our Services</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Solutions Tailored
              <br />
              <span className="bg-linear-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                To Your Success
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to deployment, we provide comprehensive software and web solutions that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(selectedService === index ? null : index)}
                className={`bg-yellow-500/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-6 hover:bg-yellow-500/10 transition-all hover:scale-105 hover:border-yellow-500/40 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                
                {selectedService === index && (
                  <div className="mt-4 space-y-3 animate-fadeIn">
                    <div className="border-t border-yellow-500/20 pt-4">
                      <h4 className="text-yellow-500 font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <span className="text-yellow-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t border-yellow-500/20 pt-4">
                      <p className="text-yellow-500 font-bold">{service.price}</p>
                    </div>
                  </div>
                )}
                
                <button className="mt-4 text-yellow-500 text-sm font-semibold hover:text-yellow-400 transition-colors">
                  {selectedService === index ? "Show Less ↑" : "Learn More →"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-linear-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-yellow-500">Process</span>
            </h2>
            <p className="text-xl text-gray-300">A proven methodology that delivers exceptional results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative bg-black border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition-all group"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-linear-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center text-black font-bold text-lg">
                  {item.step}
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technologies We <span className="text-yellow-500">Master</span>
            </h2>
            <p className="text-xl text-gray-300">Cutting-edge tools and frameworks to build your vision</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-yellow-500/5 border border-yellow-500/20 rounded-full px-6 py-3 hover:bg-yellow-500/10 hover:border-yellow-500/40 transition-all hover:scale-105 group"
              >
                <span className="text-white font-semibold">{tech.name}</span>
                <span className="text-yellow-500 text-sm ml-2">• {tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose <span className="text-yellow-500">Our Services?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-">
                    <div className="w-12 h-12 bg-linear-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center text-2xl">
                      🏆
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Award-Winning Team</h3>
                    <p className="text-gray-400">Our developers and designers have won multiple industry awards for excellence.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-">
                    <div className="w-12 h-12 bg-linear-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center text-2xl">
                      ⏱️
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">On-Time Delivery</h3>
                    <p className="text-gray-400">98% of our projects are delivered on or before the deadline.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-">
                    <div className="w-12 h-12 bg-linear-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center text-2xl">
                      💰
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Transparent Pricing</h3>
                    <p className="text-gray-400">No hidden fees. You know exactly what you're paying for from day one.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-">
                    <div className="w-12 h-12 bg-linear-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center text-2xl">
                      🔄
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Agile Methodology</h3>
                    <p className="text-gray-400">Flexible development process with regular updates and iterations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-yellow-500 to-amber-600 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-gray-900 border border-yellow-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Success Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Client Satisfaction</span>
                      <span className="text-yellow-500 font-bold">98%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-linear-to-r from-yellow-500 to-amber-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Project Success Rate</span>
                      <span className="text-yellow-500 font-bold">95%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-linear-to-r from-yellow-500 to-amber-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">On-Time Delivery</span>
                      <span className="text-yellow-500 font-bold">98%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-linear-to-r from-yellow-500 to-amber-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Client Retention</span>
                      <span className="text-yellow-500 font-bold">92%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-linear-to-r from-yellow-500 to-amber-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            Ready to Get <span className="text-yellow-500">Started?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-4 bg-linear-to-r from-yellow-500 to-amber-600 text-black rounded-lg font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50">
              <span className="relative z-10">Request a Quote</span>
              <div className="absolute inset-0 bg-linear-to-r from-amber-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button className="px-8 py-4 bg-yellow-500/10 backdrop-blur-sm text-yellow-500 rounded-lg font-semibold text-lg border border-yellow-500/30 hover:bg-yellow-500/20 transition-all hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}