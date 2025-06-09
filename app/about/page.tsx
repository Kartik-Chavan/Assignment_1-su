import { Users, Target, Award, Heart } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that drive real business value.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships with our clients.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in all our business relationships.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "15+ years in software development and business strategy",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Expert in AI/ML and cloud architecture with 12+ years experience",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Training",
      description: "Passionate educator with 10+ years in professional development",
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      description: "Full-stack developer specializing in React and Python",
    },
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About TechFlow Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a passionate team of technology experts dedicated to helping businesses and individuals succeed in
              the digital world through innovative solutions and comprehensive training.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses and individuals with cutting-edge technology solutions and world-class training
                programs that drive innovation, growth, and success in an ever-evolving digital landscape.
              </p>
              <p className="text-lg text-gray-600">
                We believe that technology should be accessible, understandable, and transformative. That's why we focus
                on creating solutions that not only solve today's challenges but also prepare our clients for tomorrow's
                opportunities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg opacity-90">
                To be the leading technology partner that bridges the gap between complex technical solutions and
                real-world business needs, making advanced technology accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 animate-scale-hover">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals passionate about technology and education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center animate-scale-hover">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
