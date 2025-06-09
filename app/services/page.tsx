import { Code, Brain, Smartphone } from "lucide-react"
import ServiceCard from "@/components/service-card"

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Java Development",
      description:
        "Enterprise-grade Java applications with Spring Boot, microservices architecture, and scalable backend solutions.",
      color: "blue" as const,
    },
    {
      icon: Code,
      title: "Python Solutions",
      description:
        "Data science, web development with Django/Flask, automation scripts, and machine learning implementations.",
      color: "green" as const,
    },
    {
      icon: Smartphone,
      title: "React Development",
      description:
        "Modern, responsive web applications using React, Next.js, and TypeScript for optimal user experiences.",
      color: "blue" as const,
    },
    {
      icon: Brain,
      title: "AI & LLM Integration",
      description:
        "Custom AI solutions, chatbots, natural language processing, and large language model implementations.",
      color: "orange" as const,
    },
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Software Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge software development services tailored to your business needs. We specialize in modern
              technologies that drive innovation and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Technologies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work with the latest technologies to deliver robust, scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures quality, efficiency, and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and architecture" },
              { step: "03", title: "Development", description: "Building your solution with best practices" },
              { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
