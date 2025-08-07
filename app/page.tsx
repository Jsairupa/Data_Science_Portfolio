"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, GraduationCap, Briefcase } from 'lucide-react'
import { useEffect } from "react"
import { useState } from "react"
import { Menu, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedHeading } from "@/components/animated-heading"
import { GsapBackground } from "@/components/gsap-background"
import { TimelineItem } from "@/components/timeline-item"
import { TimelineSection } from "@/components/timeline-section"
import { AnimatedCounter } from "@/components/animated-counter"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ProjectCard } from "@/components/project-card"
import { SkillsGrid } from "@/components/skills-grid"
import { ResumeAvatar } from "@/components/resume-avatar"
import { BlogPostCard } from "@/components/blog-post-card"
import { TypingAnimation } from "@/components/typing-animation"

export default function Home() {
  // Add this useEffect for smooth scrolling with header offset
  useEffect(() => {
    // Function to handle smooth scrolling with offset
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Check if the clicked element is a navigation link or a child of a navigation link
      const linkElement = target.tagName === "A" ? target : target.closest("a")

      if (linkElement && linkElement.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const targetId = linkElement.getAttribute("href")

        if (targetId) {
          const targetElement = document.querySelector(targetId)

          if (targetElement) {
            // Get header height to offset the scroll position
            const headerHeight = document.querySelector("header")?.offsetHeight || 0
            // Add extra padding to ensure the section is clearly visible
            const extraPadding = 20
            const targetPosition =
              targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - extraPadding

            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            })
          }
        }
      }
    }

    // Add event listener to handle navigation clicks
    document.addEventListener("click", handleNavClick)

    // Clean up event listener
    return () => {
      document.removeEventListener("click", handleNavClick)
    }
  }, [])

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Global background animation */}
      <GsapBackground />

      {/* Data Playground Chatbot Icon */}
      <div className="fixed bottom-24 right-6 z-40">
        <Link href="/data-whirl">
          <div className="group relative flex flex-col items-center">
            {/* Chat message bubble */}
            <div className="absolute -top-24 -left-36 w-40 h-auto bg-gradient-to-br from-teal-500 to-blue-400 rounded-2xl shadow-md flex items-center justify-center p-3 border border-teal-300">
              {/* Pointer triangle */}
              <div className="absolute -bottom-2 right-5 w-3 h-3 bg-blue-400 transform rotate-45"></div>

              {/* Text inside bubble */}
              <div className="text-center z-10">
                <p className="text-white font-medium text-xs">Data Playground is here!</p>
                <p className="text-white/80 text-[10px] mt-0.5">Come, let's play!</p>
              </div>
            </div>

            {/* Chatbot Icon */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-teal-500 to-blue-400 flex items-center justify-center shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                <line x1="8" x2="8" y1="15" y2="15"></line>
                <line x1="16" x2="16" y1="15" y2="15"></line>
              </svg>
            </div>
          </div>
        </Link>
      </div>

      {/* Resume Avatar Chat */}
      <ResumeAvatar />

      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-md bg-gradient-to-r from-primary to-purple-500">
              <Image src="/images/sr-logo.png" alt="SR Logo" width={32} height={32} className="object-contain" />
            </div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Sai Rupa Jhade
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-primary transition-colors">
              Education
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 transition-all duration-300 hidden md:flex"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="container py-4 space-y-4 bg-background/95 backdrop-blur">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="#about"
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 rounded-md hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 rounded-md hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skills
                </Link>
                <Link
                  href="#education"
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 rounded-md hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Education
                </Link>
                <Link
                  href="#experience"
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 rounded-md hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience
                </Link>
                <Link
                  href="#projects"
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 rounded-md hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="#blog"
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 rounded-md hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="#contact"
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 rounded-md hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
              <div className="pt-2 border-t">
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 transition-all duration-300"
                >
                  <a href="#contact">Get in Touch</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-2xl space-y-6">
              <AnimatedHeading>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Sai Rupa Jhade
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 mt-2">
                    Data Scientist
                  </span>
                </h1>
              </AnimatedHeading>
              <TypingAnimation
                phrases={[
                  "Data Scientist | AI & ML Enthusiast | NLP & Predictive Analytics",
                  "Transforming data into decisions with science and code",
                  "Building intelligent systems that make an impact",
                ]}
                className="text-xl text-muted-foreground"
                typingSpeed={70}
                deletingSpeed={30}
                delayBetweenPhrases={3000}
              />
              <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 transition-all duration-300"
                  asChild
                >
                  <a href="#projects">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <Button variant="ghost" size="sm" asChild className="rounded-full">
              <a href="#about">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </a>
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/30 backdrop-blur-sm">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-background/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-purple-500"></div>
                <CardContent className="p-6 text-center">
                  <AnimatedCounter value={1} className="text-3xl font-bold text-primary" />
                  <p className="text-sm text-muted-foreground mt-2">Year Experience</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-purple-500"></div>
                <CardContent className="p-6 text-center">
                  <AnimatedCounter value={3} className="text-3xl font-bold text-primary" />
                  <p className="text-sm text-muted-foreground mt-2">Conversational AI Projects</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-purple-500"></div>
                <CardContent className="p-6 text-center">
                  <AnimatedCounter value={6} className="text-3xl font-bold text-primary" />
                  <p className="text-sm text-muted-foreground mt-2">Major Projects</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-purple-500"></div>
                <CardContent className="p-6 text-center">
                  <AnimatedCounter value={98} suffix="%" className="text-3xl font-bold text-primary" />
                  <p className="text-sm text-muted-foreground mt-2">ML Model Accuracy</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-28 backdrop-blur-sm">
          <div className="container">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 rounded-full blur opacity-75 animate-pulse"></div>
                    <div className="relative h-64 w-64 rounded-full overflow-hidden border-4 border-background">
                      <Image src="/images/sai-profile.png" alt="Sai Rupa Jhade" fill className="object-cover" />
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-6">
                  <AnimatedHeading>
                    <h2 className="text-3xl font-bold">About Me</h2>
                  </AnimatedHeading>
                  <p className="text-muted-foreground">
                    I'm a Data Science graduate student at RIT with a deep curiosity for how machines learn and how data
                    can be transformed into intelligent action. My foundation in Computer Science from Amrita Vishwa
                    Vidyapeetham helps me approach problems with both logic and creativity.
                  </p>
                  <p className="text-muted-foreground">
                    I'm not just fascinated by models, I'm driven to build them. My interests span across natural
                    language processing, conversational AI, and applied machine learning, where I love translating raw
                    datasets into real, working systems.
                  </p>
                  <p className="text-muted-foreground">
                    Whether it's building an LLM-powered assistant or extracting insight from unstructured text, I care
                    about one thing: creating data-driven solutions that actually make an impact. I'm still learning but
                    I'm learning fast, and building as I go.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 md:py-28 bg-muted/30 backdrop-blur-sm">
          <div className="container">
            <ScrollReveal>
              <SkillsGrid />
            </ScrollReveal>
          </div>
        </section>

        {/* Education Section */}
        <TimelineSection
          id="education"
          title="Education"
          description="My academic journey in the field of data science and computer science."
          icon={<GraduationCap size={24} />}
        >
          <ScrollReveal>
            <TimelineItem
              title="Master of Science in Data Science"
              organization="Rochester Institute of Technology"
              period="Aug 2023 – Dec 2025"
              location="Rochester, NY"
              description="GPA: 3.49/4.0. Courses: Applied Statistics, Foundation of Data Science, Database Design Implementation, Data Warehousing, Applied Data Science, Advanced Political Data Science, Cloud Computing and Big Data Analytics."
              icon={<GraduationCap size={18} />}
            />
          </ScrollReveal>
          <ScrollReveal>
            <TimelineItem
              title="Bachelor of Engineering, Computer Science and Engineering"
              organization="Amrita Vishwa Vidyapeetham"
              period="Aug 2019 – May 2023"
              location="Coimbatore, India"
              description="GPA: 8.23/10.0. Courses: Computer Science Fundamentals, Data Structures & Algorithms and Machine Learning."
              icon={<GraduationCap size={18} />}
            />
          </ScrollReveal>
        </TimelineSection>

        {/* Experience Section */}
        <TimelineSection
          id="experience"
          title="Experience"
          description="My professional experience in data science and technology."
          icon={<Briefcase size={24} />}
        >
          <ScrollReveal>
            <TimelineItem
              title="Technical Operations Assistant"
              organization="Rochester Institute of Technology - GCCIS"
              period="July 2023 – Present"
              location="Rochester, NY"
              description={[
                "Resolved 100+ technical support tickets related to data science tools and environments (JupyterHub, Python, SQL, AWS, Azure), enhancing system uptime and tool accessibility for students and faculty.",
                "Automated diagnostic workflows using Python, reducing response time for common support requests by 40% and minimizing manual intervention.",
                "Analyzed support ticket metadata using SQL and Python to identify recurring issues, leading to a 25% drop in repeat incidents through targeted optimizations.",
                "Created internal dashboards to track system usage and recurring issues, enabling faster ticket resolution and better capacity planning.",
                "Collaborated with faculty and IT staff to test and troubleshoot new tool integrations, ensuring compatibility with course delivery and lab environments.",
                "Documented standard operating procedures (SOPs) for tool setup, user onboarding, and issue resolution, improving team efficiency and knowledge transfer."
              ]}
              icon={<Briefcase size={18} />}
            />
          </ScrollReveal>
          <ScrollReveal>
            <TimelineItem
              title="Junior Data Scientist"
              organization="Sree Rayalaseema Hi-Strength Hypo Ltd. (SRHHL)"
              period="June 2022 – April 2023"
              location="Hyderabad, India"
              description={[
                "Developed and deployed forecasting models (ARIMA, XGBoost, Facebook Prophet) to predict chemical product demand, improving forecast accuracy by 15% and minimizing supply chain disruptions.",
                "Engineered and validated automated data pipelines in Python and SQL to clean and preprocess sales and inventory data, reducing manual reporting errors by 35%.",
                "Performed unsupervised customer segmentation using K-Means and DBSCAN, identifying high-value customer cohorts and enabling a 20% increase in targeted campaign conversions.",
                "Built interactive dashboards to visualize inventory flow, demand spikes, and customer clusters, reducing reporting effort by 30%.",
                "Extracted insights from 100K+ transaction records using advanced SQL (Window Functions, CTEs), supporting anomaly detection and strategic planning.",
                "Collaborated with cross-functional teams to translate raw data into actionable insights, contributing to a 5% increase in quarterly revenue."
              ]}
              icon={<Briefcase size={18} />}
            />
          </ScrollReveal>
        </TimelineSection>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-28 backdrop-blur-sm">
          <div className="container">
            <ScrollReveal>
              <AnimatedHeading className="text-center">
                <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
              </AnimatedHeading>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                A selection of my data science projects, showcasing my skills in machine learning, data analysis, and AI
                applications.
              </p>
            </ScrollReveal>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              <ScrollReveal>
                <ProjectCard
                  id="political-polarization"
                  title="Political Polarization Analysis"
                  description="Applied advanced NLP techniques and Large Language Models (GPT-4o, Llama 3.2, Mistral AI) to analyze political polarization in YouTube news comments."
                  image="/images/political-polarization.png"
                  tags={["Python", "NLP", "VADER", "RoBERTa", "YouTube API"]}
                />
              </ScrollReveal>

              <ScrollReveal>
                <ProjectCard
                  id="virtual-handwriting"
                  title="Virtual Handwriting Smart Board"
                  description="Formulated a CNN-based virtual handwriting recognition system using TensorFlow and OpenCV, achieving 98% accuracy and reducing latency by 30% for real-time performance."
                  image="/images/virtual-handwriting.png"
                  tags={["Python", "TensorFlow", "OpenCV", "CNNs"]}
                />
              </ScrollReveal>

              <ScrollReveal>
                <ProjectCard
                  id="ai-data-assistant"
                  title="AI-Powered Data Assistant"
                  description="Built a Streamlit app that analyzes user-uploaded CSVs and uses LLMs to auto-generate Python code for data cleaning, EDA, and model building with clear, step-by-step explanations."
                  image="/images/ai-data-assistant.png"
                  tags={["Streamlit", "OpenAI", "LangChain", "Ollama", "Pandas"]}
                />
              </ScrollReveal>

              <ScrollReveal>
                <ProjectCard
                  id="credit-card-fraud"
                  title="Credit Card Fraud Detection"
                  description="Developed ML solution for detecting fraudulent transactions in an imbalanced dataset. Improved model accuracy by 15% through data preprocessing and achieved an F1-Score of 0.92 with 20% reduction in false positives."
                  image="/images/credit-card-fraud.png"
                  tags={["Python", "Machine Learning", "Random Forest", "Neural Networks", "Snap ML"]}
                />
              </ScrollReveal>

              <ScrollReveal>
                <ProjectCard
                  id="socio-economic-cancer"
                  title="Socio-Economic Factors & Cancer Rates"
                  description="Analyzed correlations between income, poverty, and cancer incidence/mortality in U.S. counties. Revealed regional disparities and suggested targeted interventions for high-risk areas."
                  image="/images/socio-economic-cancer.png"
                  tags={["Data Science", "Tableau", "R", "Statistical Analysis"]}
                />
              </ScrollReveal>

              <ScrollReveal>
                <ProjectCard
                  id="housing-data-ames"
                  title="Housing Data Analysis in Ames, Iowa"
                  description="Analyzed 1,460 homes to identify factors affecting house prices using T-tests, ANOVA, and linear regression. Found significant price impacts from central air conditioning and neighborhood tiers."
                  image="/images/housing-data-ames.png"
                  tags={["Regression Analysis", "JMP", "ANOVA", "Hypothesis Testing"]}
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 md:py-28 bg-muted/30 backdrop-blur-sm">
          <div className="container">
            <ScrollReveal>
              <AnimatedHeading className="text-center">
                <h2 className="text-3xl font-bold mb-2">Latest Blog Posts</h2>
              </AnimatedHeading>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Thoughts, insights, and tutorials on data science, machine learning, and AI from my Medium blog.
              </p>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              <ScrollReveal>
                <BlogPostCard
                  title="Understanding the RAG Process: What Happens Behind the Scenes?"
                  excerpt="Dive into the mechanics of Retrieval Augmented Generation (RAG) and learn how it enables LLMs to access and reason with external knowledge beyond their training data."
                  image="https://sjc.microlink.io/OwHi2uFlAcE309mMYkNAL04SEx9EYcRetixb1xOXi-YMDuLAhE5g6vGzI2i8VWVFJW42dJHCkZhJdKVDukng-g.jpeg"
                  date="Apr 10, 2024"
                  readTime="7 min read"
                  tags={["RAG", "LangChain", "LLM", "Vector Database", "Embeddings"]}
                  link="https://medium.com/@jsairupa/understanding-the-rag-process-what-happens-behind-the-scenes-e36bd6a90293"
                />
              </ScrollReveal>

              <ScrollReveal>
                <BlogPostCard
                  title="Your First LangChain App: Build a Simple Q&A Bot in Python"
                  excerpt="A step-by-step guide to building your first Q&A chatbot using LangChain and Python, perfect for beginners looking to get started with LLM application development."
                  image="/images/qa-bot-python.png"
                  date="Apr 4, 2024"
                  readTime="4 min read"
                  tags={["LangChain", "Python", "Chatbot", "LLM", "Tutorial"]}
                  link="https://medium.com/@jsairupa/your-first-langchain-app-build-a-simple-q-a-bot-in-python-3c03fe762ee6"
                />
              </ScrollReveal>

              <ScrollReveal>
                <BlogPostCard
                  title="What is LangChain and Why Should Beginners Care?"
                  excerpt="A beginner-friendly introduction to LangChain, explaining what it is, why it matters, and how it can help you build powerful AI applications with less effort."
                  image="https://sjc.microlink.io/a6Xp3mW9fKDpVp61QEJCeXavrdyr0ygEbxSNYEnhAN96MZG9bZts0CsgCm48Qnh-RHSE4dQbTzNNzNVh2-NidQ.jpeg"
                  date="Apr 1, 2024"
                  readTime="3 min read"
                  tags={["LangChain", "AI", "Python", "Beginners", "LLMs"]}
                  link="https://medium.com/@jsairupa/what-is-langchain-and-why-should-beginners-care-ab2971a8ccaf"
                />
              </ScrollReveal>
            </div>

            <div className="mt-12 text-center">
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-400 text-white"
              >
                <a href="https://medium.com/@jsairupa" target="_blank" rel="noopener noreferrer">
                  View All Blog Posts
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Certifications & Publications Section */}
        <section id="certifications" className="py-20 md:py-28 bg-muted/30 backdrop-blur-sm">
          <div className="container">
            <ScrollReveal>
              <AnimatedHeading className="text-center">
                <h2 className="text-3xl font-bold mb-2">Certifications & Publications</h2>
              </AnimatedHeading>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Professional certifications and academic publications that demonstrate my expertise and contributions to
                the field.
              </p>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ScrollReveal>
                <Card className="relative border-primary/20 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-purple-500"></div>
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
                          <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
                          <circle cx="12" cy="12" r="2"></circle>
                          <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
                          <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">IBM Data Science Professional Certificate</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Comprehensive certification covering data analysis, visualization, machine learning, and data
                      science methodologies.
                    </p>
                    <a
                      href="https://www.coursera.org/account/accomplishments/specialization/O0AZE98CQZHG"
                      className="text-primary flex items-center hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1"
                      >
                        <path d="M7 17L17 7"></path>
                        <path d="M7 7h10v10"></path>
                      </svg>
                    </a>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="relative border-primary/20 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-purple-500"></div>
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">
                        Publication: Virtual Handwriting Based Smart Board Using Deep Learning
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Jhade, S.R., et al. (2023). Published in 2023 i-PACT. IEEE.
                    </p>
                    <a
                      href="https://ieeexplore.ieee.org/document/10434425"
                      className="text-primary flex items-center hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Publication
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1"
                      >
                        <path d="M7 17L17 7"></path>
                        <path d="M7 7h10v10"></path>
                      </svg>
                    </a>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pt-24 pb-20 md:pt-32 md:pb-28 bg-muted/30 backdrop-blur-sm">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto text-center">
                <AnimatedHeading>
                  <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                </AnimatedHeading>
                <p className="text-muted-foreground mb-8">
                  I'm currently open to new opportunities and collaborations in data science and machine learning. Feel
                  free to reach out!
                </p>
                <Card className="overflow-hidden border-primary/20 hover:border-primary/50 transition-all duration-300 bg-background/50 backdrop-blur relative max-w-lg mx-auto">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-purple-500"></div>
                  <CardContent className="p-8">
                    <div className="grid gap-6">
                      <div className="flex flex-col items-center gap-4">
                        {/* Email */}
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            asChild
                          >
                            <a href="mailto:sj7740@rit.edu">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-mail"
                              >
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                              </svg>
                            </a>
                          </Button>
                          <span className="text-muted-foreground">sj7740@rit.edu</span>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            asChild
                          >
                            <a href="https://linkedin.com/in/sairupajhade" target="_blank" rel="noopener noreferrer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-linkedin"
                              >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                              </svg>
                            </a>
                          </Button>
                          <span className="text-muted-foreground">linkedin.com/in/sairupajhade</span>
                        </div>

                        {/* Medium */}
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            asChild
                          >
                            <a href="https://medium.com/@jsairupa" target="_blank" rel="noopener noreferrer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-book-open"
                              >
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                              </svg>
                            </a>
                          </Button>
                          <span className="text-muted-foreground">medium.com/@jsairupa</span>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            asChild
                          >
                            <a href="tel:5855579083">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-phone"
                              >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                              </svg>
                            </a>
                          </Button>
                          <span className="text-muted-foreground">585-557-9083</span>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-map-pin"
                            >
                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                          </Button>
                          <span className="text-muted-foreground">Rochester, NY</span>
                        </div>
                      </div>

                      <div className="mt-6 text-center">
                        <p className="text-sm text-muted-foreground">
                          Prefer email for initial contact. Available for remote or on-site opportunities.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  )
}
