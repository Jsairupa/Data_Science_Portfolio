"use client"

import { useEffect, useRef } from "react"

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to cover the entire document
    const setDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    setDimensions()
    window.addEventListener("resize", setDimensions)

    // Create a gradient background
    const createGradientBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(240, 245, 255, 1)")
      gradient.addColorStop(1, "rgba(230, 240, 255, 1)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    // Digital rain effect
    class DigitalRain {
      columns: number[]
      drops: { x: number; y: number; length: number; speed: number; char: string; color: string }[]

      constructor() {
        // Create columns
        this.columns = []
        const columnCount = Math.floor(canvas.width / 20) // One column every 20px

        for (let i = 0; i < columnCount; i++) {
          this.columns.push(0)
        }

        // Create initial drops
        this.drops = []
        this.createDrops()
      }

      createDrops() {
        // Add new drops randomly
        for (let i = 0; i < this.columns.length; i++) {
          if (Math.random() < 0.03) {
            // 3% chance to create a new drop in each column
            const length = 5 + Math.floor(Math.random() * 15) // Random length between 5-20
            const speed = 1 + Math.random() * 3 // Random speed

            // Random character (numbers, letters, or data symbols)
            const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+-*/=<>[]{}()&%$#@!?"
            const char = chars[Math.floor(Math.random() * chars.length)]

            // Color in blue range
            const hue = 180 + Math.random() * 60 // Blue to light blue
            const color = `hsla(${hue}, 70%, 60%, ${0.1 + Math.random() * 0.3})`

            this.drops.push({
              x: i * 20,
              y: -20, // Start above the canvas
              length,
              speed,
              char,
              color,
            })
          }
        }
      }

      update() {
        // Create new drops
        this.createDrops()

        // Update existing drops
        for (let i = this.drops.length - 1; i >= 0; i--) {
          const drop = this.drops[i]

          // Move drop down
          drop.y += drop.speed

          // Remove drops that have moved off screen
          if (drop.y > canvas.height) {
            this.drops.splice(i, 1)
          }
        }
      }

      draw() {
        for (const drop of this.drops) {
          ctx.font = "14px monospace"
          ctx.fillStyle = drop.color

          // Draw the character
          ctx.fillText(drop.char, drop.x, drop.y)

          // Draw trailing characters with fading opacity
          for (let i = 1; i < drop.length; i++) {
            const opacity = 1 - i / drop.length
            ctx.fillStyle = drop.color.replace(/[\d.]+\)$/, `${opacity * 0.3})`)
            ctx.fillText(drop.char, drop.x, drop.y - i * 14)
          }
        }
      }
    }

    // Floating data visualization elements
    class DataElement {
      x: number
      y: number
      type: string
      size: number
      color: string
      speed: number
      angle: number
      rotation: number
      rotationSpeed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height

        // Different types of data visualization elements
        const types = ["bar", "pie", "line", "scatter"]
        this.type = types[Math.floor(Math.random() * types.length)]

        this.size = 20 + Math.random() * 40

        // Color in blue/purple range
        const hue = 180 + Math.random() * 80
        this.color = `hsla(${hue}, 70%, 60%, ${0.1 + Math.random() * 0.2})`

        this.speed = 0.2 + Math.random() * 0.5
        this.angle = Math.random() * Math.PI * 2
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
      }

      update() {
        // Move element
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed

        // Rotate element
        this.rotation += this.rotationSpeed

        // Wrap around edges
        if (this.x < -this.size) this.x = canvas.width + this.size
        if (this.x > canvas.width + this.size) this.x = -this.size
        if (this.y < -this.size) this.y = canvas.height + this.size
        if (this.y > canvas.height + this.size) this.y = -this.size
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.fillStyle = this.color
        ctx.strokeStyle = this.color.replace(/[\d.]+\)$/, "0.5)")
        ctx.lineWidth = 1

        if (this.type === "bar") {
          // Bar chart
          const barWidth = this.size / 5
          const barCount = 5

          for (let i = 0; i < barCount; i++) {
            const barHeight = ((Math.sin(i * 0.7) + 1) * this.size) / 2
            ctx.fillRect((i - barCount / 2) * barWidth, -barHeight / 2, barWidth * 0.8, barHeight)
          }
        } else if (this.type === "pie") {
          // Pie chart
          const segments = 3 + Math.floor(Math.random() * 3)
          const anglePerSegment = (Math.PI * 2) / segments

          for (let i = 0; i < segments; i++) {
            ctx.beginPath()
            ctx.moveTo(0, 0)
            ctx.arc(0, 0, this.size / 2, i * anglePerSegment, (i + 1) * anglePerSegment)
            ctx.closePath()
            ctx.fill()
            ctx.stroke()
          }
        } else if (this.type === "line") {
          // Line chart
          const pointCount = 6

          ctx.beginPath()

          for (let i = 0; i < pointCount; i++) {
            const x = (i - pointCount / 2) * (this.size / pointCount)
            const y = (Math.sin(i * 0.8) * this.size) / 3

            if (i === 0) {
              ctx.moveTo(x, y)
            } else {
              ctx.lineTo(x, y)
            }
          }

          ctx.stroke()
        } else if (this.type === "scatter") {
          // Scatter plot
          const pointCount = 8

          for (let i = 0; i < pointCount; i++) {
            const x = (Math.random() - 0.5) * this.size
            const y = (Math.random() - 0.5) * this.size

            ctx.beginPath()
            ctx.arc(x, y, 2, 0, Math.PI * 2)
            ctx.fill()
          }
        }

        ctx.restore()
      }
    }

    // Create digital rain
    const digitalRain = new DigitalRain()

    // Create data visualization elements
    const dataElements = []
    const elementCount = Math.min(20, Math.floor((canvas.width * canvas.height) / 40000))

    for (let i = 0; i < elementCount; i++) {
      dataElements.push(new DataElement())
    }

    // Animation
    function animate() {
      // Clear canvas with gradient background
      createGradientBackground()

      // Update and draw digital rain
      digitalRain.update()
      digitalRain.draw()

      // Update and draw data elements
      for (const element of dataElements) {
        element.update()
        element.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    // Update canvas height when document height changes
    const resizeObserver = new ResizeObserver(() => {
      setDimensions()
    })

    resizeObserver.observe(document.body)

    return () => {
      window.removeEventListener("resize", setDimensions)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1]"
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%" }}
    />
  )
}

