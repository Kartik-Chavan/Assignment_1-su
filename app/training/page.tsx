import { Code, Database, Cpu, Brain, Zap, Users } from "lucide-react"
import ServiceCard from "@/components/service-card"

export default function Training() {
  const courses = [
    {
      icon: Code,
      title: "C Programming",
      description:
        "Master the fundamentals of C programming, memory management, pointers, and system-level programming concepts.",
      color: "blue" as const,
    },
    {
      icon: Cpu,
      title: "C++ Development",
      description: "Object-oriented programming, STL, advanced C++ features, and modern C++ standards (C++17/20).",
      color: "green" as const,
    },
    {
      icon: Database,
      title: "Java Enterprise",
      description:
        "Complete Java development from basics to enterprise applications with Spring Framework and microservices.",
      color: "blue" as const,
    },
    {
      icon: Code,
      title: "React Mastery",
      description:
        "Modern React development, hooks, state management, Next.js, and building scalable web applications.",
      color: "orange" as const,
    },
    {
      icon: Zap,
      title: "Python Complete",
      description:
        "Python programming from basics to advanced topics including web development, data science, and automation.",
      color: "green" as const,
    },
    {
      icon: Brain,
      title: "Generative AI",
      description:
        "Hands-on training with LLMs, prompt engineering, AI integration, and building AI-powered applications.",
      color: "orange" as const,
    },
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Professional Training</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training programs designed to elevate your technical skills and advance your career in the
              ever-evolving world of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert-led courses covering the most in-demand technologies and skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <ServiceCard
                key={index}
                title={course.title}
                description={course.description}
                icon={course.icon}
                color={course.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Training?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of real-world experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hands-on Projects</h3>
              <p className="text-gray-600">Build real applications and gain practical experience with every course</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Support</h3>
              <p className="text-gray-600">Get guidance on career advancement and job placement assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have advanced their careers with our training programs
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Enroll Now
          </button>
        </div>
      </section>
    </div>
  )
}
