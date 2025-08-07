"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedHeading } from "@/components/animated-heading"
import { ScrollReveal } from "@/components/scroll-reveal"

const skillsData = {
  "Languages": [
    "Python", "PySpark", "R", "SQL", "NoSQL", "SAS", "Bash"
  ],
  "Technologies & Tools": [
    "PyTorch", "scikit-learn", "Flask (API development)", "Streamlit", "LangChain", 
    "LangGraph", "AutoGen", "Linux", "Hadoop", "Spark", "Tableau", "Power BI", 
    "Excel", "Git", "Docker", "JIRA", "VSCode"
  ],
  "Cloud & Databases": [
    "AWS (EC2, RDS, S3)", "Microsoft Azure (Databricks, Data Factory, Data Lake Storage)", 
    "SQL Server", "Kafka", "Kinesis", "OpenSearch"
  ],
  "Core Competencies": [
    "Data Analysis", "Machine Learning", "Deep Learning", "NLP", "Generative AI", 
    "Agentic AI Architectures", "Multi-Agent Systems", "RAG", "AI/LLM Applications", 
    "Computer Vision", "Data Engineering", "Statistical Modeling", "Explainable AI", 
    "Dashboarding", "ETL Pipelines"
  ]
}

const categoryIcons = {
  "Languages": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  "Technologies & Tools": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
  ),
  "Cloud & Databases": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
    </svg>
  ),
  "Core Competencies": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
    </svg>
  )
}

export function SkillsGrid() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <AnimatedHeading className="text-center">
          <h2 className="text-3xl font-bold mb-2">Skills & Expertise</h2>
        </AnimatedHeading>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills, tools, and competencies in data science, machine learning, and AI development.
        </p>
      </ScrollReveal>

      <div className="grid gap-8 md:grid-cols-2">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <ScrollReveal key={category}>
            <Card className="relative border-primary/20 hover:border-primary/50 transition-all duration-300 h-full">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-purple-500"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    {categoryIcons[category as keyof typeof categoryIcons]}
                  </div>
                  <h3 className="text-xl font-bold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200 text-sm py-1 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
