import Link from "next/link"
import { BarChart3, Users, TrendingUp, Database } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Integrity Foundation
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Data Management & Growth Tracking Platform
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Go to Dashboard
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <FeatureCard
            icon={<Database className="w-12 h-12 text-blue-600" />}
            title="Data Management"
            description="Efficiently manage and organize all foundation data in one place"
          />
          <FeatureCard
            icon={<TrendingUp className="w-12 h-12 text-green-600" />}
            title="Growth Tracking"
            description="Monitor growth metrics and track progress over time"
          />
          <FeatureCard
            icon={<BarChart3 className="w-12 h-12 text-purple-600" />}
            title="Analytics"
            description="Visualize data with interactive charts and reports"
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-orange-600" />}
            title="Team Collaboration"
            description="Work together with your team in real-time"
          />
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
