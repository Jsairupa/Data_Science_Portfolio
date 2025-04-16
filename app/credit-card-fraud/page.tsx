"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ExternalLink, BarChart3, Shield, AlertTriangle, LineChart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CreditCardFraudPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLaunchApp = () => {
    setIsLoading(true)
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
      window.open("https://appcredicardfrauddetection-df3wvwyg38u69zvg456fwh.streamlit.app/", "_blank")
    }, 1500)
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Credit Card Fraud Detection</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          An interactive machine learning application that detects fraudulent credit card transactions using advanced
          machine learning techniques. Explore data patterns, train models, and test real-time fraud detection
          capabilities.
        </p>
        <div className="flex gap-4 mt-6">
          <Button
            onClick={handleLaunchApp}
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Launch Interactive App"} <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" asChild>
            <Link href="#features">Explore Features</Link>
          </Button>
        </div>
      </div>

      <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-16 shadow-xl">
        <Image
          src="/images/credit-card-fraud.png"
          alt="Credit Card Fraud Detection Dashboard"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70" />
        <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-2xl font-bold text-white">Interactive ML Dashboard</h2>
          <p className="text-white/90">Analyze, train, and test fraud detection models in real-time</p>
        </div>
      </div>

      <div id="features" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300">
            <CardHeader className="pb-2">
              <BarChart3 className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Data Exploration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Visualize transaction patterns, explore feature distributions, and understand the characteristics of
                fraudulent vs. legitimate transactions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300">
            <CardHeader className="pb-2">
              <LineChart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Model Training</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Train Random Forest models with customizable parameters, handle class imbalance, and evaluate
                performance with interactive metrics.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300">
            <CardHeader className="pb-2">
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Real-time Detection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Test the model with custom or randomly generated transactions to see fraud detection in action with
                detailed explanations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300">
            <CardHeader className="pb-2">
              <AlertTriangle className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Performance Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Analyze model performance across different scenarios, transaction amounts, and threshold settings with
                interactive visualizations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="overview" className="mb-16">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="methodology">Methodology</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
          <TabsTrigger value="technical">Technical Details</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="p-6 border rounded-md mt-6">
          <h3 className="text-xl font-bold mb-4">Project Overview</h3>
          <p className="mb-4">
            Credit card fraud detection is a critical application of machine learning in the financial industry. This
            project demonstrates how advanced algorithms can identify fraudulent transactions with high accuracy while
            minimizing false positives.
          </p>
          <p>
            The interactive dashboard allows users to explore the data, understand the patterns that distinguish
            fraudulent transactions, and experiment with different model parameters to optimize detection performance.
          </p>
        </TabsContent>

        <TabsContent value="methodology" className="p-6 border rounded-md mt-6">
          <h3 className="text-xl font-bold mb-4">Methodology</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Data preprocessing with feature scaling and class imbalance handling using SMOTE</li>
            <li>Feature selection and dimensionality reduction with PCA</li>
            <li>Model training using Random Forest with hyperparameter optimization</li>
            <li>Threshold optimization to balance precision and recall</li>
            <li>Performance evaluation using confusion matrix, ROC curves, and precision-recall analysis</li>
            <li>Real-time prediction with feature importance explanation</li>
          </ul>
        </TabsContent>

        <TabsContent value="results" className="p-6 border rounded-md mt-6">
          <h3 className="text-xl font-bold mb-4">Key Results</h3>
          <p className="mb-4">The Random Forest model achieved excellent performance metrics:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Card className="bg-muted/50">
              <CardContent className="p-4 text-center">
                <p className="text-sm text-muted-foreground">Accuracy</p>
                <p className="text-2xl font-bold">99.2%</p>
              </CardContent>
            </Card>
            <Card className="bg-muted/50">
              <CardContent className="p-4 text-center">
                <p className="text-sm text-muted-foreground">Precision</p>
                <p className="text-2xl font-bold">92.8%</p>
              </CardContent>
            </Card>
            <Card className="bg-muted/50">
              <CardContent className="p-4 text-center">
                <p className="text-sm text-muted-foreground">Recall</p>
                <p className="text-2xl font-bold">87.5%</p>
              </CardContent>
            </Card>
            <Card className="bg-muted/50">
              <CardContent className="p-4 text-center">
                <p className="text-sm text-muted-foreground">F1 Score</p>
                <p className="text-2xl font-bold">90.1%</p>
              </CardContent>
            </Card>
          </div>
          <p>
            The model successfully identifies fraudulent transactions while maintaining a low false positive rate, which
            is crucial for practical deployment in financial systems.
          </p>
        </TabsContent>

        <TabsContent value="technical" className="p-6 border rounded-md mt-6">
          <h3 className="text-xl font-bold mb-4">Technical Implementation</h3>
          <p className="mb-4">This project was implemented using:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Python for data processing and machine learning (scikit-learn, pandas, numpy)</li>
            <li>Streamlit for the interactive web application</li>
            <li>Plotly and Matplotlib for data visualization</li>
            <li>SMOTE for handling class imbalance</li>
            <li>Random Forest algorithm for classification</li>
            <li>Next.js and React for portfolio integration</li>
          </ul>
          <p className="mt-4">The application is deployed on Streamlit Cloud for easy access and demonstration.</p>
        </TabsContent>
      </Tabs>

      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-6">Try It Yourself</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Launch the interactive dashboard to explore the data, train models with custom parameters, and test real-time
          fraud detection.
        </p>
        <Button
          onClick={handleLaunchApp}
          size="lg"
          className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Launch Interactive App"} <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="border-t pt-10">
        <p className="text-center text-muted-foreground">Created by Sai Rupa Jhade | Data Science Portfolio</p>
      </div>
    </div>
  )
}
