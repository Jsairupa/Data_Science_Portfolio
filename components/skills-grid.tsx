"use client"

import type React from "react"

import { Code, Database, Wrench, Brain } from "lucide-react"
import { motion } from "framer-motion"

interface SkillCategoryProps {
  icon: React.ReactNode
  title: string
  skills: string[]
}

export function SkillsGrid() {
  const skillCategories = [
    {
      icon: <Code className="h-5 w-5 text-primary" />,
      title: "Languages",
      skills: ["Python", "PySpark", "SQL", "R", "SAS"],
    },
    {
      icon: <Wrench className="h-5 w-5 text-primary" />,
      title: "Technologies & Tools",
      skills: ["PyTorch", "scikit-learn", "Linux", "Tableau", "Excel", "Git", "Docker", "JIRA"],
    },
    {
      icon: <Database className="h-5 w-5 text-primary" />,
      title: "Cloud & Databases",
      skills: [
        "SQL Server Management Studio",
        "MySQL",
        "NoSQL (MongoDB)",
        "AWS Fundamentals",
        "Microsoft Azure",
        "Kafka",
        "Kinesis",
        "OpenSearch",
      ],
    },
    {
      icon: <Brain className="h-5 w-5 text-primary" />,
      title: "Core Competencies",
      skills: [
        "Statistical Data Analysis",
        "Data Visualization",
        "Machine Learning",
        "Natural Language Processing",
        "Deep Learning",
        "Conversational AI",
      ],
    },
  ]

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10 pointer-events-none"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} icon={category.icon} title={category.title} skills={category.skills} />
          ))}
        </div>
      </div>
    </div>
  )
}

function SkillCategory({ icon, title, skills }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="border border-primary/20 hover:border-primary/50 rounded-lg p-6 bg-background/50 backdrop-blur shadow-sm transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-purple-500"></div>
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-primary/10 p-2 rounded-md">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm hover:bg-primary/20 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
