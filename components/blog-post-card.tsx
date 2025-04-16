"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Clock, ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BlogPostCardProps {
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  tags: string[]
  link: string
}

export function BlogPostCard({ title, excerpt, image, date, readTime, tags, link }: BlogPostCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank")
    }
  }

  return (
    <Card
      className="overflow-hidden h-full border-primary/20 hover:border-primary/50 transition-all duration-300 flex flex-col relative bg-background group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Accent line */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-purple-500 z-10 group-hover:h-[calc(100%+4px)] group-hover:-top-[2px] transition-all duration-300"></div>

      {/* Image Container */}
      <div className="relative w-full h-52 overflow-hidden">
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="h-full w-full"
        >
          <Image
            src={image || "/placeholder.svg?height=192&width=384"}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

        {/* Date and read time overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center text-xs text-white/90 z-10">
          <div className="flex items-center gap-1 bg-black/40 px-2 py-1 rounded-full">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1 bg-black/40 px-2 py-1 rounded-full">
            <Clock className="h-3 w-3" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="p-6 flex-grow flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground mb-5 flex-grow line-clamp-3">{excerpt}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-primary/10 hover:bg-primary/20 transition-colors text-xs py-0.5 px-2"
            >
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge
              variant="outline"
              className="bg-primary/10 hover:bg-primary/20 transition-colors text-xs py-0.5 px-2"
            >
              +{tags.length - 3} more
            </Badge>
          )}
        </div>

        {/* Read on Medium button */}
        <Button className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-400 text-white h-10 group-hover:shadow-md group-hover:shadow-primary/20 transition-all duration-300">
          <span className="mr-2">Read on Medium</span>
          <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </CardContent>
    </Card>
  )
}
