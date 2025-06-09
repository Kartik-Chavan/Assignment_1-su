import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  color?: "blue" | "green" | "orange"
}

export default function ServiceCard({ title, description, icon: Icon, color = "blue" }: ServiceCardProps) {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
    green: "bg-green-50 text-green-600 group-hover:bg-green-100",
    orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-100",
  }

  return (
    <div className="group bg-white rounded-xl shadow-md p-6 animate-scale-hover cursor-pointer">
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${colorClasses[color]}`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
