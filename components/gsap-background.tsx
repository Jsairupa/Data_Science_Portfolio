"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export function GsapBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = window.innerWidth
    const height = window.innerHeight

    // Clear any existing elements
    container.innerHTML = ""

    // Create particles
    const particleCount = Math.min(100, Math.floor((width * height) / 15000))
    const particles = []

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")

      // Random size (mostly small, some larger)
      const sizeRandom = Math.random()
      const size =
        sizeRandom > 0.95
          ? 8 + Math.random() * 8
          : // 5% chance of larger nodes
            sizeRandom > 0.85
            ? 5 + Math.random() * 5
            : // 10% chance of medium nodes
              2 + Math.random() * 3 // 85% chance of small nodes

      // Style the particle
      particle.style.position = "absolute"
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.borderRadius = "50%"

      // Blue color palette with varying opacity
      const hue = 180 + Math.random() * 60 // Range from light blue to deeper blue
      const opacity = 0.5 + Math.random() * 0.5
      particle.style.backgroundColor = `hsla(${hue}, 70%, 60%, ${opacity})`

      // Random starting position across the entire page
      const gridSize = 5
      const cellWidth = width / gridSize
      const cellHeight = height / gridSize

      const cellX = Math.floor(Math.random() * gridSize)
      const cellY = Math.floor(Math.random() * gridSize)

      const x = cellX * cellWidth + Math.random() * cellWidth
      const y = cellY * cellHeight + Math.random() * cellHeight

      particle.style.left = `${x}px`
      particle.style.top = `${y}px`

      // Add to container and store reference
      container.appendChild(particle)
      particles.push(particle)

      // Create GSAP animation
      gsap.to(particle, {
        x: gsap.utils.random(-100, 100),
        y: gsap.utils.random(-100, 100),
        duration: gsap.utils.random(20, 40),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 20,
      })
    }

    // Create connections between particles
    const connectionCount = particleCount * 2 // More connections than particles

    for (let i = 0; i < connectionCount; i++) {
      // Randomly select two particles to connect
      const particleA = particles[Math.floor(Math.random() * particles.length)]
      const particleB = particles[Math.floor(Math.random() * particles.length)]

      if (particleA === particleB) continue // Skip if same particle

      const connection = document.createElement("div")
      connection.style.position = "absolute"
      connection.style.transformOrigin = "0 0"
      connection.style.backgroundColor = "rgba(150, 180, 230, 0.2)"
      connection.style.height = "1px"
      connection.style.zIndex = "-1"

      container.appendChild(connection)

      // Update connection position and size in animation loop
      const updateConnection = () => {
        const rectA = particleA.getBoundingClientRect()
        const rectB = particleB.getBoundingClientRect()

        const x1 = rectA.left + rectA.width / 2
        const y1 = rectA.top + rectA.height / 2
        const x2 = rectB.left + rectB.width / 2
        const y2 = rectB.top + rectB.height / 2

        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
        const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI

        connection.style.width = `${distance}px`
        connection.style.left = `${x1}px`
        connection.style.top = `${y1}px`
        connection.style.transform = `rotate(${angle}deg)`

        // Fade out connections that are too long
        const maxDistance = 200
        const opacity = Math.max(0, 0.2 * (1 - distance / maxDistance))
        connection.style.opacity = opacity.toString()

        if (distance > maxDistance) {
          connection.style.display = "none"
        } else {
          connection.style.display = "block"
        }

        requestAnimationFrame(updateConnection)
      }

      updateConnection()
    }

    // Create floating data elements
    const dataElementCount = 15
    const dataTypes = ["bar", "pie", "line", "scatter"]

    for (let i = 0; i < dataElementCount; i++) {
      const element = document.createElement("div")
      element.style.position = "absolute"
      element.style.width = "40px"
      element.style.height = "40px"
      element.style.opacity = "0.15"

      // Random position
      element.style.left = `${Math.random() * width}px`
      element.style.top = `${Math.random() * height}px`

      // Random data visualization icon
      const dataType = dataTypes[Math.floor(Math.random() * dataTypes.length)]

      if (dataType === "bar") {
        element.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="12" width="4" height="8" fill="#4285F4" />
            <rect x="10" y="8" width="4" height="12" fill="#4285F4" />
            <rect x="17" y="4" width="4" height="16" fill="#4285F4" />
          </svg>
        `
      } else if (dataType === "pie") {
        element.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#4285F4" />
            <path d="M12 2V12L17 17.52C19.84 15.68 22 13.04 22 12C22 6.48 17.52 2 12 2Z" fill="#34A853" />
            <path d="M12 12V22C15.52 22 18.68 20.16 20.84 17.52L12 12Z" fill="#FBBC05" />
          </svg>
        `
      } else if (dataType === "line") {
        element.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 16L8 11L13 16L21 8" stroke="#4285F4" strokeWidth="2" />
            <circle cx="3" cy="16" r="2" fill="#4285F4" />
            <circle cx="8" cy="11" r="2" fill="#4285F4" />
            <circle cx="13" cy="16" r="2" fill="#4285F4" />
            <circle cx="21" cy="8" r="2" fill="#4285F4" />
          </svg>
        `
      } else if (dataType === "scatter") {
        element.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="18" r="2" fill="#4285F4" />
            <circle cx="10" cy="12" r="2" fill="#4285F4" />
            <circle cx="15" cy="5" r="2" fill="#4285F4" />
            <circle cx="18" cy="14" r="2" fill="#4285F4" />
            <circle cx="8" cy="8" r="2" fill="#4285F4" />
          </svg>
        `
      }

      container.appendChild(element)

      // Create GSAP animation
      gsap.to(element, {
        x: gsap.utils.random(-150, 150),
        y: gsap.utils.random(-150, 150),
        rotation: gsap.utils.random(-360, 360),
        duration: gsap.utils.random(30, 60),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 20,
      })
    }

    // Handle window resize
    const handleResize = () => {
      // Update container size
      container.style.width = `${window.innerWidth}px`
      container.style.height = `${document.documentElement.scrollHeight}px`
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
      gsap.killTweensOf("*") // Kill all GSAP animations on cleanup
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1]"
      style={{
        background: "linear-gradient(to bottom right, rgba(240, 245, 255, 1), rgba(230, 240, 255, 1))",
      }}
    />
  )
}

