import { useState, useEffect } from 'react'

export default function GetStartedPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDetails: '',
    features: [],
    referral: ''
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        features: checked 
          ? [...prev.features, value]
          : prev.features.filter(f => f !== value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
    alert('Thank you! We\'ll contact you within 24 hours to discuss your project.')
  }

  const projectTypes = [
    { value: 'web', label: 'Website', icon: '💻', description: 'Custom website or web application' },
    { value: 'mobile', label: 'Mobile App', icon: '📱', description: 'iOS or Android application' },
    { value: 'software', label: 'Custom Software', icon: '⚙️', description: 'Enterprise or business software' },
    { value: 'ecommerce', label: 'E-commerce', icon: '🛒', description: 'Online store solution' },
    { value: 'design', label: 'UI/UX Design', icon: '🎨', description: 'Design services only' },
    { value: 'other', label: 'Other', icon: '✨', description: 'Tell us what you need' }
  ]

  const budgetRanges = [
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k+', label: '$100,000+' }
  ]

  const timelines = [
    { value: 'urgent', label: 'ASAP (1-2 weeks)' },
    { value: 'fast', label: 'Fast (1-2 months)' },
    { value: 'standard', label: 'Standard (2-4 months)' },
    { value: 'flexible', label: 'Flexible (4+ months)' }
  ]

  const featuresList = [
    'User Authentication',
    'Payment Integration',
    'Admin Dashboard',
    'Real-time Features',
    'API Integration',
    'Analytics',
    'Push Notifications',
    'Social Media Integration'
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
              <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase">Let's Begin</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Start Your Project
              <br />
              <span className="bg-linear-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                In Just 4 Steps
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tell us about your vision and we'll transform it into reality. Get a personalized quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-8 bg-black border-b border-yellow-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${
                  currentStep >= step 
                    ? 'bg-linear-to-r from-yellow-500 to-amber-600 border-yellow-500 text-black' 
                    : 'bg-gray-900 border-yellow-500/20 text-gray-500'
                }`}>
                  {currentStep > step ? '✓' : step}
                </div>
                {step < 4 && (
                  <div className={`flex-1 h-1 mx-2 transition-all ${
                    currentStep > step ? 'bg-linear-to-r from-yellow-500 to-amber-600' : 'bg-gray-800'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <span className={`text-sm ${currentStep >= 1 ? 'text-yellow-500' : 'text-gray-500'}`}>Project Type</span>
            <span className={`text-sm ${currentStep >= 2 ? 'text-yellow-500' : 'text-gray-500'}`}>Budget & Timeline</span>
            <span className={`text-sm ${currentStep >= 3 ? 'text-yellow-500' : 'text-gray-500'}`}>Your Details</span>
            <span className={`text-sm ${currentStep >= 4 ? 'text-yellow-500' : 'text-gray-500'}`}>Project Info</span>
          </div>
        </div>
      </section>

      {/* Form Steps */}
      <section className="py-20 bg-linear-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black border border-yellow-500/20 rounded-2xl p-8 md:p-12">
            
            {/* Step 1: Project Type */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">What type of project do you need?</h2>
                  <p className="text-gray-400">Select the option that best describes your project</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {projectTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setFormData({ ...formData, projectType: type.value })}
                      className={`p-6 rounded-xl border-2 transition-all text-left hover:scale-105 ${
                        formData.projectType === type.value
                          ? 'bg-yellow-500/10 border-yellow-500'
                          : 'bg-gray-900 border-yellow-500/20 hover:border-yellow-500/40'
                      }`}
                    >
                      <div className="text-4xl mb-3">{type.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{type.label}</h3>
                      <p className="text-gray-400 text-sm">{type.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Budget & Timeline */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Budget & Timeline</h2>
                  <p className="text-gray-400">Help us understand your project scope</p>
                </div>

                <div>
                  <label className="block text-white text-lg font-semibold mb-4">What's your budget range?</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {budgetRanges.map((budget) => (
                      <button
                        key={budget.value}
                        onClick={() => setFormData({ ...formData, budget: budget.value })}
                        className={`p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                          formData.budget === budget.value
                            ? 'bg-yellow-500/10 border-yellow-500 text-yellow-500'
                            : 'bg-gray-900 border-yellow-500/20 text-white hover:border-yellow-500/40'
                        }`}
                      >
                        {budget.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white text-lg font-semibold mb-4">When do you need it?</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {timelines.map((time) => (
                      <button
                        key={time.value}
                        onClick={() => setFormData({ ...formData, timeline: time.value })}
                        className={`p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                          formData.timeline === time.value
                            ? 'bg-yellow-500/10 border-yellow-500 text-yellow-500'
                            : 'bg-gray-900 border-yellow-500/20 text-white hover:border-yellow-500/40'
                        }`}
                      >
                        {time.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Your Contact Information</h2>
                  <p className="text-gray-400">We'll use this to get in touch with you</p>
                </div>

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
                        placeholder="John Doe"
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
                        placeholder="john@example.com"
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
                        placeholder="+1 (555) 123-4567"
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
                </div>
              </div>
            )}

            {/* Step 4: Project Details */}
            {currentStep === 4 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Tell Us About Your Project</h2>
                  <p className="text-gray-400">The more details you provide, the better we can help</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Project Description *</label>
                    <textarea
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      rows="6"
                      className="w-full bg-gray-900 border border-yellow-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                      placeholder="Describe your project, goals, target audience, and any specific requirements..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-4 text-sm font-medium">Key Features (Select all that apply)</label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {featuresList.map((feature) => (
                        <label key={feature} className="flex items-center gap-3 p-3 bg-gray-900 border border-yellow-500/20 rounded-lg hover:border-yellow-500/40 cursor-pointer transition-all">
                          <input
                            type="checkbox"
                            name="features"
                            value={feature}
                            checked={formData.features.includes(feature)}
                            onChange={handleChange}
                            className="w-5 h-5 text-yellow-500 bg-gray-800 border-yellow-500/20 rounded focus:ring-yellow-500"
                          />
                          <span className="text-white">{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">How did you hear about us?</label>
                    <select
                      name="referral"
                      value={formData.referral}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-yellow-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="google">Google Search</option>
                      <option value="social">Social Media</option>
                      <option value="referral">Friend/Colleague Referral</option>
                      <option value="advertisement">Advertisement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12 pt-8 border-t border-yellow-500/20">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentStep === 1
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/30 hover:bg-yellow-500/20 hover:scale-105'
                }`}
              >
                ← Previous
              </button>

              {currentStep < 4 ? (
                <button
                  onClick={nextStep}
                  className="group relative px-8 py-3 bg-linear-to-r from-yellow-500 to-amber-600 text-black rounded-lg font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50"
                >
                  <span className="relative z-10">Next Step →</span>
                  <div className="absolute inset-0 bg-linear-to-r from-amber-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="group relative px-8 py-3 bg-linear-to-r from-yellow-500 to-amber-600 text-black rounded-lg font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50"
                >
                  <span className="relative z-10">Submit Project →</span>
                  <div className="absolute inset-0 bg-linear-to-r from-amber-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              )}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-white font-semibold mb-2">Quick Response</h3>
              <p className="text-gray-400 text-sm">Get a reply within 24 hours</p>
            </div>
            <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-white font-semibold mb-2">Free Consultation</h3>
              <p className="text-gray-400 text-sm">30-minute strategy call included</p>
            </div>
            <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-white font-semibold mb-2">NDA Available</h3>
              <p className="text-gray-400 text-sm">Your ideas are protected</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}