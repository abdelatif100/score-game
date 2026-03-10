import * as React from "react"
import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  className?: string
  style?: React.CSSProperties
}

export function FeatureCard({ title, description, icon: Icon, className, style }: FeatureCardProps) {
  return (
    <Card 
      className={`group relative overflow-hidden border-border/40 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 ${className}`}
      style={style}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <CardHeader>
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110 group-hover:bg-primary/20">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl font-bold tracking-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
