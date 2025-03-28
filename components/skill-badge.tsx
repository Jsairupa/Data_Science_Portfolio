import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  // Determine the variant based on the skill level
  const getVariant = () => {
    if (level >= 90) return "default"
    if (level >= 80) return "secondary"
    return "outline"
  }

  return (
    <Badge variant={getVariant()} className="px-3 py-1">
      {name}
    </Badge>
  )
}

