"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AIAssistantPage() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Portfolio
            </Link>
          </Button>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">AI-Powered Data Assistant</h1>
          <p className="text-muted-foreground">
            This interactive tool helps data scientists analyze datasets and generate code for data cleaning,
            exploratory data analysis, and model building. Upload a CSV file, describe your task, and let the AI
            assistant suggest Python code and analysis approaches.
          </p>
        </div>

        <Card className="w-full overflow-hidden border border-primary/20">
          {!isIframeLoaded && (
            <div className="flex items-center justify-center h-[600px] bg-muted/30">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                <p className="text-muted-foreground">Loading AI Assistant...</p>
              </div>
            </div>
          )}
          <iframe
            src="https://appaiassistant-n9v3qwjruz8axcewzhvflh.streamlit.app/"
            className={`w-full h-[600px] ${isIframeLoaded ? "block" : "hidden"}`}
            onLoad={() => setIsIframeLoaded(true)}
            title="AI Data Assistant"
          />
        </Card>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">About This Project</h2>
          <p className="text-muted-foreground mb-4">
            This project combines the power of Large Language Models with data science workflows to create an
            intelligent assistant that can help with common data tasks. The application is built with:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
            <li>Streamlit for the interactive web interface</li>
            <li>OpenAI and Ollama for LLM integration via LangChain</li>
            <li>Pandas for data manipulation and analysis</li>
            <li>Custom prompt engineering to generate contextually relevant code</li>
          </ul>
          <p className="text-muted-foreground">
            The assistant can analyze uploaded CSV files and generate Python code for data cleaning, exploratory data
            analysis, and model building with clear, step-by-step explanations.
          </p>
        </div>
      </div>
    </div>
  )
}
