"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  id?: string // Add project ID to allow custom styling
}

export function ProjectCard({ title, description, image, tags, id }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Custom styling for specific projects
  const getCustomImageStyles = () => {
    switch (id) {
      case "political-polarization":
        return {
          height: "280px",
          objectPosition: "center 0%", // Show the top portion of the image
        }
      case "ai-data-assistant":
        return {
          height: "280px",
          objectPosition: "center 0%", // Show the top portion of the image
        }
      case "socio-economic-cancer":
        return {
          height: "280px",
          objectPosition: "center 0%", // Show the top portion of the image
        }
      default:
        return {
          height: "280px",
          objectPosition: "top",
        }
    }
  }

  // Get custom styles
  const customStyles = getCustomImageStyles()

  return (
    <Card
      className="overflow-hidden h-full border-primary/20 hover:border-primary/50 transition-all duration-300 flex flex-col relative bg-background"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-purple-500 z-10"></div>

      {/* Image Container - With consistent height across all projects */}
      <div className="relative w-full overflow-hidden" style={{ height: customStyles.height }}>
        <motion.div
          animate={{ scale: isHovered ? 1.03 : 1 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="h-full w-full"
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            style={{ objectPosition: customStyles.objectPosition }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Content Section - Below the image */}
      <CardContent className="p-6 flex-grow flex flex-col">
        {/* Clear title at the top of the content section */}
        <h3 className="text-xl font-bold mb-3">{title}</h3>

        {/* Description with consistent spacing */}
        <p className="text-sm text-muted-foreground mb-5 flex-grow">{description}</p>

        {/* Tags Section - Limited to 4 tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-primary/10 hover:bg-primary/20 transition-colors text-xs py-0.5 px-2"
            >
              {tag}
            </Badge>
          ))}
          {tags.length > 4 && (
            <Badge
              variant="outline"
              className="bg-primary/10 hover:bg-primary/20 transition-colors text-xs py-0.5 px-2"
            >
              +{tags.length - 4} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
