"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"

export function ProjectsGrid() {
  const projects = [
    {
      id: "political-polarization",
      title: "Political Polarization Analysis",
      description:
        "Applied advanced NLP techniques and Large Language Models (GPT-4o, Llama 3.2, Mistral AI) to analyze political polarization in YouTube news comments.",
      image: "/images/political-polarization.png",
      tags: ["Python", "NLP", "VADER", "RoBERTa", "YouTube API"],
    },
    {
      id: "virtual-handwriting",
      title: "Virtual Handwriting Smart Board",
      description:
        "Formulated a CNN-based virtual handwriting recognition system using TensorFlow and OpenCV, achieving 98% accuracy and reducing latency by 30% for real-time performance.",
      image: "/images/virtual-handwriting.png",
      tags: ["Python", "TensorFlow", "OpenCV", "CNNs"],
    },
    {
      id: "ai-data-assistant",
      title: "AI-Powered Data Assistant",
      description:
        "Built a Streamlit app that analyzes user-uploaded CSVs and uses LLMs to auto-generate Python code for data cleaning, EDA, and model building with clear, step-by-step explanations.",
      image: "/images/ai-data-assistant.png",
      tags: ["Streamlit", "OpenAI", "LangChain", "Ollama", "Pandas"],
    },
    {
      id: "credit-card-fraud",
      title: "Credit Card Fraud Detection",
      description:
        "Developed ML solution for detecting fraudulent transactions in an imbalanced dataset. Improved model accuracy by 15% through data preprocessing and achieved an F1-Score of 0.92 with 20% reduction in false positives.",
      image: "/images/credit-card-fraud.png",
      tags: ["Python", "Machine Learning", "Random Forest", "Neural Networks", "Snap ML"],
    },
    {
      id: "socio-economic-cancer",
      title: "Socio-Economic Factors & Cancer Rates",
      description:
        "Analyzed correlations between income, poverty, and cancer incidence/mortality in U.S. counties. Revealed regional disparities and suggested targeted interventions for high-risk areas.",
      image: "/images/socio-economic-cancer.png",
      tags: ["Data Science", "Tableau", "R", "Statistical Analysis"],
    },
    {
      id: "housing-data-ames",
      title: "Housing Data Analysis in Ames, Iowa",
      description:
        "Analyzed 1,460 homes to identify factors affecting house prices using T-tests, ANOVA, and linear regression. Found significant price impacts from central air conditioning and neighborhood tiers.",
      image: "/images/housing-data-ames.png",
      tags: ["Regression Analysis", "JMP", "ANOVA", "Hypothesis Testing"],
    },
  ]

  return (
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          whileHover={{ y: -5 }}
          className="h-full flex"
        >
          <ProjectCard
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            id={project.id} // Pass the project ID
          />
        </motion.div>
      ))}
    </div>
  )
}
