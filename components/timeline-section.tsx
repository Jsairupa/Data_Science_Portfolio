import type { ReactNode } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

interface TimelineSectionProps {
  id: string
  title: string
  description: string
  icon: ReactNode
  children: ReactNode
}

export function TimelineSection({ id, title, description, icon, children }: TimelineSectionProps) {
  return (
    <section id={id} className="py-16 md:py-20 backdrop-blur-sm">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <span className="bg-primary/10 text-primary p-3 rounded-full mr-3">{icon}</span>
              {title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
          </div>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">{children}</div>
      </div>
    </section>
  )
}
