"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  className?: string
  duration?: number
}

export function AnimatedCounter({ value, suffix = "", className = "", duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const countRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView) return

    const startTime = performance.now()
    const startValue = 0
    const endValue = value

    const updateCount = (timestamp: number) => {
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smoother animation
      const easeOutQuad = (t: number) => t * (2 - t)
      const easedProgress = easeOutQuad(progress)

      const currentValue = Math.floor(startValue + (endValue - startValue) * easedProgress)

      if (currentValue !== countRef.current) {
        countRef.current = currentValue
        setCount(currentValue)
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(updateCount)
      }
    }

    rafRef.current = requestAnimationFrame(updateCount)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [inView, value, duration])

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  )
}

