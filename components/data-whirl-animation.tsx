"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Brain, BarChartIcon as ChartBar, Bot, CreditCard, LineChart, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
}

interface DataPoint {
  x: number
  y: number
  size: number
  color: string
  connections: number[]
}

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  buttonText: string
  icon: React.ReactNode
}

export function DataWhirlAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isExploring, setIsExploring] = useState(false)
  const [showProjects, setShowProjects] = useState(false)

  // Project data
  const projects: Project[] = [
    {
      id: "political-polarization",
      title: "Political Polarization Analysis",
      description:
        "Applied advanced NLP techniques and Large Language Models (GPT-4o, Llama 3.2, Mistral AI) to analyze political polarization in YouTube news comments.",
      image: "/images/political-polarization.png",
      tags: ["Python", "NLP", "VADER", "RoBERTa", "YouTube API"],
      link: "https://apppolticalpolarization-cxvdqwnxx4usrp534sx9wv.streamlit.app/",
      buttonText: "🧠 Explore Political Insights",
      icon: <Brain className="h-4 w-4" />,
    },
    {
      id: "virtual-handwriting",
      title: "Virtual Handwriting Smart Board",
      description:
        "Formulated a CNN-based virtual handwriting recognition system using TensorFlow and OpenCV, achieving 98% accuracy and reducing latency by 30% for real-time performance.",
      image: "/images/virtual-handwriting.png",
      tags: ["Python", "TensorFlow", "OpenCV", "CNNs"],
      link: "https://github.com/yourusername/virtual-handwriting",
      buttonText: "✍️ Try Handwriting Recognition",
      icon: <ChartBar className="h-4 w-4" />,
    },
    {
      id: "ai-data-assistant",
      title: "AI-Powered Data Assistant",
      description:
        "Built a Streamlit app that analyzes user-uploaded CSVs and uses LLMs to auto-generate Python code for data cleaning, EDA, and model building with clear, step-by-step explanations.",
      image: "/images/ai-data-assistant.png",
      tags: ["Streamlit", "OpenAI", "LangChain", "Ollama", "Pandas"],
      link: "https://appaiassistant-n9v3qwjruz8axcewzhvflh.streamlit.app/",
      buttonText: "🤖 Chat with AI Assistant",
      icon: <Bot className="h-4 w-4" />,
    },
    {
      id: "credit-card-fraud",
      title: "Credit Card Fraud Detection",
      description:
        "Developed ML solution for detecting fraudulent transactions in an imbalanced dataset. Improved model accuracy by 15% through data preprocessing and achieved an F1-Score of 0.92 with 20% reduction in false positives.",
      image: "/images/credit-card-fraud.png",
      tags: ["Python", "Machine Learning", "Random Forest", "Neural Networks", "Snap ML"],
      link: "https://appcredicardfrauddetection-df3wvwyg38u69zvg456fwh.streamlit.app/",
      buttonText: "🔍 Detect Fraud Patterns",
      icon: <CreditCard className="h-4 w-4" />,
    },
    {
      id: "socio-economic-cancer",
      title: "Socio-Economic Factors & Cancer Rates",
      description:
        "Analyzed correlations between income, poverty, and cancer incidence/mortality in U.S. counties. Revealed regional disparities and suggested targeted interventions for high-risk areas.",
      image: "/images/socio-economic-cancer.png",
      tags: ["Data Science", "Tableau", "R", "Statistical Analysis"],
      link: "https://rl35ua9znhulbwaygnhpt4.streamlit.app/",
      buttonText: "🧬 Analyze Health Correlations",
      icon: <LineChart className="h-4 w-4" />,
    },
    {
      id: "housing-data-ames",
      title: "Housing Data Analysis in Ames, Iowa",
      description:
        "Analyzed 1,460 homes to identify factors affecting house prices using T-tests, ANOVA, and linear regression. Found significant price impacts from central air conditioning and neighborhood tiers.",
      image: "/images/housing-data-ames.png",
      tags: ["Regression Analysis", "JMP", "ANOVA", "Hypothesis Testing"],
      link: "https://appameshosuing-kxoewafqbyjyrkgse9y5on.streamlit.app/",
      buttonText: "🏠 Explore Housing Insights",
      icon: <Home className="h-4 w-4" />,
    },
  ]

  useEffect(() => {
    if (showProjects) return // Don't run canvas animation when showing projects

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Create particles
    const particles: Particle[] = []
    const dataPoints: DataPoint[] = []
    const particleCount = Math.min(100, Math.floor((window.innerWidth * window.innerHeight) / 15000))

    // Create data points (larger, static points)
    for (let i = 0; i < 15; i++) {
      dataPoints.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 3 + Math.random() * 5,
        color: `hsl(${180 + Math.random() * 60}, 80%, 60%)`,
        connections: [],
      })
    }

    // Connect data points
    for (let i = 0; i < dataPoints.length; i++) {
      const connectionCount = 2 + Math.floor(Math.random() * 3)
      for (let j = 0; j < connectionCount; j++) {
        if (dataPoints[i].connections.length < 5) {
          let targetIdx
          do {
            targetIdx = Math.floor(Math.random() * dataPoints.length)
          } while (targetIdx === i || dataPoints[i].connections.includes(targetIdx))

          dataPoints[i].connections.push(targetIdx)
        }
      }
    }

    // Create particles (smaller, moving points)
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 0.5 + Math.random() * 1.5,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        color: `hsl(${180 + Math.random() * 60}, 80%, 60%)`,
        opacity: 0.1 + Math.random() * 0.4,
      })
    }

    // Animation function
    const animate = () => {
      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = "rgba(15, 23, 42, 0.2)" // Dark blue background with transparency
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw connections between data points
      ctx.lineWidth = 0.5
      for (let i = 0; i < dataPoints.length; i++) {
        const point = dataPoints[i]
        for (const targetIdx of point.connections) {
          const targetPoint = dataPoints[targetIdx]
          const distance = Math.hypot(targetPoint.x - point.x, targetPoint.y - point.y)

          // Only draw connections within a certain distance
          if (distance < 300) {
            const opacity = 1 - distance / 300
            ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.2})`
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(targetPoint.x, targetPoint.y)
            ctx.stroke()
          }
        }
      }

      // Update and draw data points
      for (const point of dataPoints) {
        // Slowly move data points
        point.x += (Math.random() - 0.5) * 0.2
        point.y += (Math.random() - 0.5) * 0.2

        // Keep within bounds
        if (point.x < 0) point.x = 0
        if (point.x > canvas.width) point.x = canvas.width
        if (point.y < 0) point.y = 0
        if (point.y > canvas.height) point.y = canvas.height

        // Draw data point
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2)
        ctx.fillStyle = point.color
        ctx.fill()

        // Draw glow effect
        const gradient = ctx.createRadialGradient(point.x, point.y, point.size * 0.5, point.x, point.y, point.size * 4)
        gradient.addColorStop(0, `${point.color.replace(")", ", 0.4)")}`)
        gradient.addColorStop(1, `${point.color.replace(")", ", 0)")}`)

        ctx.beginPath()
        ctx.arc(point.x, point.y, point.size * 4, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }

      // Update and draw particles
      for (const particle of particles) {
        // Move particles
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color.replace(")", `, ${particle.opacity})`)
        ctx.fill()
      }

      // Create whirl effect when exploring
      if (isExploring) {
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2

        // Move particles toward center in a spiral
        for (const particle of particles) {
          const dx = centerX - particle.x
          const dy = centerY - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance > 50) {
            // Add a slight attraction to the center
            particle.speedX += (dx / distance) * 0.02
            particle.speedY += (dy / distance) * 0.02

            // Add a perpendicular force for spiral effect
            particle.speedX += (-dy / distance) * 0.01
            particle.speedY += (dx / distance) * 0.01
          }

          // Limit speed
          const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY)
          if (speed > 2) {
            particle.speedX = (particle.speedX / speed) * 2
            particle.speedY = (particle.speedY / speed) * 2
          }
        }

        // Move data points in a circular pattern
        for (const point of dataPoints) {
          const dx = centerX - point.x
          const dy = centerY - point.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance > 100) {
            // Move toward center
            point.x += dx * 0.01
            point.y += dy * 0.01

            // Add circular motion
            point.x += -dy * 0.005
            point.y += dx * 0.005
          }
        }
      }

      if (!showProjects) {
        requestAnimationFrame(animate)
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [isExploring, showProjects])

  const handleTryMeClick = () => {
    setIsExploring(true)
    // After a short delay, show the projects
    setTimeout(() => {
      setShowProjects(true)
    }, 1000)
  }

  const handleBackClick = () => {
    setShowProjects(false)
    setIsExploring(false)
  }

  const handleProjectClick = (project: Project) => {
    if (project.link.startsWith("http")) {
      window.open(project.link, "_blank")
    } else {
      window.location.href = project.link
    }
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0f172a]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <AnimatePresence>
        {!showProjects && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Welcome to Data Fun Zone - Sai Rupa Jhade
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300 max-w-2xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Explore the fascinating world of data visualization through interactive and engaging experiences.
            </motion.p>

            <motion.button
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
              onClick={handleTryMeClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try me
            </motion.button>
          </motion.div>
        )}

        {showProjects && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 py-12 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full max-w-7xl">
              <div className="flex justify-between items-center mb-8">
                <motion.h2
                  className="text-3xl font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Interactive Projects
                </motion.h2>
                <motion.button
                  className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                  onClick={handleBackClick}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back
                </motion.button>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className="overflow-hidden h-full border-primary/20 hover:border-primary/50 transition-all duration-300 flex flex-col relative bg-gray-800/50 backdrop-blur-sm cursor-pointer"
                      onClick={() => handleProjectClick(project)}
                    >
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-purple-500"></div>
                      <div className="relative aspect-video w-full overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className="h-full w-full"
                        >
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                      </div>
                      <div className="p-6 flex-grow">
                        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                        <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="bg-primary/10 text-gray-200 hover:bg-primary/20 transition-colors"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="p-6 pt-0">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full hover:bg-primary/10 hover:text-primary transition-all duration-300 text-gray-200 border-gray-600 font-medium"
                        >
                          <span className="flex items-center gap-2">
                            {project.icon}
                            {project.buttonText}
                          </span>
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

