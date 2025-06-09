import { MapPin, Clock, DollarSign, Users } from "lucide-react"

export default function Career() {
  const positions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$120k - $160k",
      description:
        "Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.",
    },
    {
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "Remote / New York",
      type: "Full-time",
      salary: "$130k - $180k",
      description: "Develop cutting-edge AI solutions and integrate machine learning models into production systems.",
    },
    {
      title: "Technical Training Specialist",
      department: "Education",
      location: "Remote / Chicago",
      type: "Full-time",
      salary: "$80k - $110k",
      description: "Create and deliver technical training programs for our professional development courses.",
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Austin",
      type: "Full-time",
      salary: "$110k - $140k",
      description: "Manage cloud infrastructure, CI/CD pipelines, and ensure reliable deployment processes.",
    },
  ]

  const benefits = [
    "Competitive salary and equity packages",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work arrangements and remote options",
    "Professional development and training budget",
    "Unlimited PTO and flexible hours",
    "State-of-the-art equipment and tools",
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a dynamic team that's shaping the future of technology. We're looking for passionate
              individuals who want to make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-lg text-gray-600 mb-6">
                At TechFlow, we believe that great work comes from great people working together. Our culture is built
                on collaboration, innovation, and continuous learning.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Innovation-driven environment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Work-life balance priority</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Continuous learning opportunities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Diverse and inclusive workplace</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Benefits & Perks</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span className="text-sm opacity-90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore exciting opportunities to grow your career with us
            </p>
          </div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 animate-scale-hover">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our streamlined hiring process is designed to be fair, efficient, and transparent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply", description: "Submit your application and resume online" },
              { step: "02", title: "Screen", description: "Initial phone or video screening call" },
              { step: "03", title: "Interview", description: "Technical and cultural fit interviews" },
              { step: "04", title: "Offer", description: "Reference check and job offer" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
