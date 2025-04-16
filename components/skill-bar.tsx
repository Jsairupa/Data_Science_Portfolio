"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface SkillBarProps {
  name: string
  value: number
}

export function SkillBar({ name, value }: SkillBarProps) {
  const [width, setWidth] = useState(0)
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      setWidth(value)
      controls.start({ width: `${value}%`, transition: { duration: 1, ease: "easeOut" } })
    }
  }, [controls, inView, value])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{value}%</span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          className="h-full rounded-full bg-gradient-to-r from-primary to-purple-500"
        />
      </div>
    </div>
  )
}
