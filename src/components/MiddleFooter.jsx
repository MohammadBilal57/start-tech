import React, { useState } from 'react';

const MiddleFooter = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const services = [
    {
      icon: '💻',
      title: 'Custom Software Development',
      description: 'Bespoke software solutions engineered to meet your unique business requirements with cutting-edge technology and scalable architecture.'
    },
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Stunning, responsive websites that captivate your audience and drive conversions with modern design and optimal performance.'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver seamless user experiences across iOS and Android devices.'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Enterprise-grade cloud infrastructure and migration services to enhance scalability, security, and operational efficiency.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with functionality to create intuitive and engaging digital experiences.'
    },
    {
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Ongoing technical support and maintenance services to ensure your digital products remain secure, updated, and performing optimally.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We dive deep into understanding your business goals, target audience, and project requirements to create a comprehensive roadmap.'
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'Our design team creates wireframes and interactive prototypes that bring your vision to life before development begins.'
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'Expert developers build your solution using agile methodologies with continuous testing to ensure quality and performance.'
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: 'We deploy your project seamlessly and provide ongoing support to ensure continued success and optimization.'
    }
  ];

  const footerLinks = {
    company: ['About Us', 'Our Team', 'Careers', 'Blog'],
    services: ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'UI/UX Design'],
    contact: ['info@company.com', '+1 (555) 123-4567', 'Schedule Consultation', 'Support Portal']
  };

  const socialLinks = ['𝕏', 'in', 'f', 'ig'];

  return (
    <div className="bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 text-white font-sans">
      {/* Services Section */}
      <section className="px-6 py-24 bg-slate-900">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-500/10 text-yellow-500 px-5 py-2 rounded-full text-sm mb-5 border border-yellow-500/30">
            ⭐ What We Offer
          </div>
          <h2 className="text-5xl font-bold mb-5 bg-linear-to-r from-white to-yellow-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to transform your digital vision into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className={`rounded-2xl p-10 transition-all duration-400 cursor-pointer border ${
                hoveredService === index
                  ? 'bg-linear-to-br from-yellow-500/5 to-blue-950/50 border-yellow-500 -translate-y-3 shadow-2xl shadow-yellow-500/20'
                  : 'bg-blue-950/50 border-yellow-500/20'
              }`}
            >
              <span className="text-5xl block mb-5">{service.icon}</span>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-5">
                {service.description}
              </p>
              <a href="#" className="text-yellow-500 font-semibold inline-flex items-center hover:gap-2 transition-all">
                Learn More {hoveredService === index && <span className="ml-2">→</span>}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-24 bg-linear-to-br from-blue-950 to-slate-900">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-500/10 text-yellow-500 px-5 py-2 rounded-full text-sm mb-5 border border-yellow-500/30">
            🚀 How We Work
          </div>
          <h2 className="text-5xl font-bold mb-5 bg-linear-to-r from-white to-yellow-500 bg-clip-text text-transparent">
            Our Process
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results every time
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-16 relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-yellow-500 to-yellow-500/20 transform -translate-x-1/2 hidden md:block" />

          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row mb-16 relative ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-5/12 p-8 bg-blue-950/50 border border-yellow-500/20 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-3 text-yellow-500">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Number Circle */}
              <div className="absolute left-1/2 top-8 md:top-auto transform -translate-x-1/2 w-16 h-16 bg-linear-to-br from-yellow-500 to-orange-500 rounded-full display-flex items-center justify-center text-2xl font-bold text-slate-900 border-4 border-slate-900 z-10 hidden md:flex">
                {step.number}
              </div>
              
              {/* Mobile Number */}
              <div className="md:hidden w-16 h-16 bg-linear-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-slate-900 mb-4 mx-auto">
                {step.number}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-linear-to-br from-yellow-500/10 to-transparent text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-5">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Let's collaborate to bring your digital vision to life. Our team is ready to transform your ideas into powerful solutions that drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="#"
              className="px-10 py-4 rounded-lg font-semibold text-base bg-linear-to-r from-yellow-500 to-orange-500 text-slate-900 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-500/40"
            >
              Get Started Today
            </a>
            <a
              href="#"
              className="px-10 py-4 rounded-lg font-semibold text-base bg-transparent text-yellow-500 border-2 border-yellow-500 transition-all hover:bg-yellow-500/10 hover:-translate-y-1"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-yellow-500/20">
        <div className="px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          <div>
            <div className="text-4xl font-bold text-yellow-500 mb-5">
              Logo
            </div>
            <p className="text-gray-400 leading-relaxed mb-5">
              Crafting premium software applications and stunning websites that drive results. Your vision, our expertise.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                    hoveredSocial === index
                      ? 'bg-yellow-500 border-yellow-500 text-slate-900 -translate-y-1'
                      : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-500'
                  }`}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-yellow-500 text-xl mb-5">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-500 text-xl mb-5">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-500 text-xl mb-5">Contact</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="px-6 py-8 border-t border-yellow-500/10 text-center text-gray-400">
          <p>&copy; 2025 Your Company. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </div>
  );
};

export default MiddleFooter;
