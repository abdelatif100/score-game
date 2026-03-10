import { LayoutDashboard, ShoppingBag, Info, ShieldCheck, Zap, Users } from "lucide-react"
import { FeatureCard } from "@/components/ui/feature-card"

const features = [
  {
    title: "Player Dashboard",
    description: "Track your progress, achievements, and gaming stats in one centralized, sleek interface designed for performance.",
    icon: LayoutDashboard,
  },
  {
    title: "Curated Catalog",
    description: "Explore a hand-picked selection of the latest gaming gear, hardware, and digital assets optimized for your setup.",
    icon: ShoppingBag,
  },
  {
    title: "Store Info & Support",
    description: "Access detailed product specifications, store hours, and direct support to ensure your gear is always top-tier.",
    icon: Info,
  },
  {
    title: "Secure Transactions",
    description: "Shop with confidence using our industry-leading encryption and secure payment gateways for all your gaming needs.",
    icon: ShieldCheck,
  },
  {
    title: "Instant Rewards",
    description: "Earn points with every purchase and activity, unlocking exclusive discounts and early access to new drops.",
    icon: Zap,
  },
  {
    title: "Community Driven",
    description: "Join a thriving ecosystem of gamers, share reviews, and participate in community-only tournaments and events.",
    icon: Users,
  },
]

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Everything You Need to <span className="text-primary">Dominate</span>
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            We provide the tools, the gear, and the community to take your gaming to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
