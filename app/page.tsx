"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Eye, MapPin } from "lucide-react"
import { useEffect } from "react"
import { useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedHeading } from "@/components/animated-heading"
import { GsapBackground } from "@/components/gsap-background"
import { TimelineItem } from "@/components/timeline-item"
import { AnimatedCounter } from "@/components/animated-counter"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ProjectCard } from "@/components/project-card"
import { SkillsGrid } from "@/components/skills-grid"
import { ResumeAvatar } from "@/components/resume-avatar"

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
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#certifications" className="text-sm font-medium hover:text-primary transition-colors">
              Certifications
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
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
                  href="#experience"
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 rounded-md hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience
                </Link>
                <Link
                  href="#certifications"
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 rounded-md hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Certifications
                </Link>
                <Link
                  href="#projects"
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 rounded-md hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
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
              <p className="text-xl text-muted-foreground animate-fade-in">
                Transforming complex data into actionable insights through machine learning and AI.
              </p>
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
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary hover:bg-primary/10 transition-all duration-300"
                  asChild
                >
                  <Link href="/resume" target="_blank">
                    <Eye className="mr-2 h-4 w-4" /> View Resume
                  </Link>
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
                  <AnimatedCounter value={15} suffix="%" className="text-3xl font-bold text-primary" />
                  <p className="text-sm text-muted-foreground mt-2">Forecast Accuracy Improvement</p>
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
                    I'm a Data Science graduate student at Rochester Institute of Technology with a passion for machine
                    learning, statistical analysis, and data visualization. With a background in Computer Science and
                    Engineering from Amrita Vishwa Vidyapeetham, I approach data problems with both technical expertise
                    and creative thinking.
                  </p>
                  <p className="text-muted-foreground">
                    My research interests include natural language processing, deep learning, and conversational AI. I'm
                    currently focused on developing advanced machine learning models for political data analysis and
                    exploring the applications of Large Language Models.
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Rochester, NY</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 transition-colors">
                      Data Science
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 transition-colors">
                      Machine Learning
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 transition-colors">
                      NLP
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 transition-colors">
                      Deep Learning
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 transition-colors">
                      Conversational AI
                    </Badge>
                  </div>
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

        {/* Experience Section */}
        <section id="experience" className="py-20 md:py-28 backdrop-blur-sm">
          <div className="container">
            <ScrollReveal>
              <AnimatedHeading className="text-center">
                <h2 className="text-3xl font-bold mb-2">Education & Experience</h2>
              </AnimatedHeading>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                My academic journey and professional experience in the field of data science.
              </p>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-8">
                <ScrollReveal>
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <span className="bg-primary/20 text-primary p-2 rounded-md mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-graduation-cap"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                      </svg>
                    </span>
                    Education
                  </h3>
                </ScrollReveal>

                <ScrollReveal>
                  <TimelineItem
                    title="Master of Science in Data Science"
                    organization="Rochester Institute of Technology"
                    period="Aug 2023 – Dec 2025"
                    location="Rochester, NY"
                    description="GPA: 3.49/4.0. Courses: Applied Statistics, Foundation of Data Science, Database Design Implementation, Data Warehousing, Applied Data Science, Advanced Political Data Science, Cloud Computing, Big Data Analytics."
                  />
                </ScrollReveal>

                <ScrollReveal>
                  <TimelineItem
                    title="Bachelor of Engineering, Computer Science and Engineering"
                    organization="Amrita Vishwa Vidyapeetham"
                    period="Aug 2019 – May 2023"
                    location="Coimbatore, India"
                    description="GPA: 8.23/10.0. Focused on computer science fundamentals, data structures, algorithms, and machine learning."
                  />
                </ScrollReveal>
              </div>

              <div className="space-y-8">
                <ScrollReveal>
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <span className="bg-primary/20 text-primary p-2 rounded-md mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-briefcase"
                      >
                        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </span>
                    Experience
                  </h3>
                </ScrollReveal>

                <ScrollReveal>
                  <TimelineItem
                    title="Data Science Intern"
                    organization="Sree Rayalaseema Hi-Strength Hypo Ltd. (SRHHL)"
                    period="June 2022 – April 2023"
                    location="Hyderabad, India"
                    description={[
                      "Designed and deployed predictive sales models using ARIMA, XGBoost, and Prophet, improving demand accuracy by 15% and optimizing supply chain forecasting to reduce stockouts.",
                      "Developed interactive business intelligence dashboards (Tableau, Power BI) to monitor real-time sales performance, cutting manual reporting by 30% and enabling faster decision-making.",
                      "Performed customer segmentation using K-Means clustering and DBSCAN, enabling targeted marketing campaigns, which boosted conversion rates by 20% and optimized pricing strategies, leading to a 5% increase in revenue.",
                    ]}
                  />
                </ScrollReveal>
              </div>
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
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Generative AI Course with Langchain and Huggingface</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Advanced course on building generative AI applications using Langchain and Huggingface
                      transformers.
                    </p>
                    <a
                      href="https://www.udemy.com/certificate/UC-b73234ce-40f2-40c8-a4fa-92dc9836b0fd/"
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

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ScrollReveal>
                <ProjectCard
                  title="Political Polarization Analysis"
                  description="Applied advanced NLP techniques and Large Language Models (GPT-4o, Llama 3.2, Mistral AI) to analyze political polarization in YouTube news comments."
                  image="/images/political-polarization.png"
                  tags={["Python", "NLP", "VADER", "RoBERTa", "YouTube API"]}
                />
              </ScrollReveal>

              <ScrollReveal>
                <ProjectCard
                  title="Virtual Handwriting Smart Board"
                  description="Formulated a CNN-based virtual handwriting recognition system using TensorFlow and OpenCV, achieving 98% accuracy and reducing latency by 30% for real-time performance."
                  image="/images/virtual-handwriting.png"
                  tags={["Python", "TensorFlow", "OpenCV", "CNNs"]}
                />
              </ScrollReveal>

              <ScrollReveal>
                <ProjectCard
                  title="AI-Powered Data Assistant"
                  description="Built a Streamlit app that analyzes user-uploaded CSVs and uses LLMs to auto-generate Python code for data cleaning, EDA, and model building with clear, step-by-step explanations."
                  image="/images/ai-data-assistant.png"
                  tags={["Streamlit", "OpenAI", "LangChain", "Ollama", "Pandas"]}
                />
              </ScrollReveal>

              <ScrollReveal>
                <ProjectCard
                  title="Credit Card Fraud Detection"
                  description="Developed ML solution for detecting fraudulent transactions in an imbalanced dataset. Improved model accuracy by 15% through data preprocessing and achieved an F1-Score of 0.92 with 20% reduction in false positives."
                  image="/images/credit-card-fraud.png"
                  tags={["Python", "Machine Learning", "Random Forest", "Neural Networks", "Snap ML"]}
                />
              </ScrollReveal>

              <ScrollReveal>
                <ProjectCard
                  title="Socio-Economic Factors & Cancer Rates"
                  description="Analyzed correlations between income, poverty, and cancer incidence/mortality in U.S. counties. Revealed regional disparities and suggested targeted interventions for high-risk areas."
                  image="/images/socio-economic-cancer.png"
                  tags={["Data Science", "Tableau", "R", "Statistical Analysis"]}
                />
              </ScrollReveal>

              <ScrollReveal>
                <ProjectCard
                  title="Housing Data Analysis in Ames, Iowa"
                  description="Analyzed 1,460 homes to identify factors affecting house prices using T-tests, ANOVA, and linear regression. Found significant price impacts from central air conditioning and neighborhood tiers."
                  image="/images/housing-data-ames.png"
                  tags={["Regression Analysis", "JMP", "ANOVA", "Hypothesis Testing"]}
                />
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
                <Card className="overflow-hidden border-primary/20 hover:border-primary/50 transition-all duration-300 bg-background/50 backdrop-blur relative">
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

