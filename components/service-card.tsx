import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  color?: "blue" | "green" | "orange"
  duration?: string
  fees?: number
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  color = "blue",
  duration,
  fees,
}: ServiceCardProps) {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:group-hover:bg-blue-900/50",
    green:
      "bg-green-50 text-green-600 group-hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 dark:group-hover:bg-green-900/50",
    orange:
      "bg-orange-50 text-orange-600 group-hover:bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400 dark:group-hover:bg-orange-900/50",
  }

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 animate-scale-hover cursor-pointer">
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${colorClasses[color]}`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>

      {(duration || fees !== undefined) && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          {duration && (
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-1">
              <span className="font-medium">Duration:</span>
              <span className="ml-2">{duration}</span>
            </div>
          )}
          {fees !== undefined && (
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <span className="font-medium">Fees:</span>
              <span className="ml-2">₹{fees.toLocaleString("en-IN")}</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
