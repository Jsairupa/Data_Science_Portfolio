"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AmesHousingPage() {
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
          <h1 className="text-3xl font-bold mb-4">Ames Housing Market Analysis</h1>
          <p className="text-muted-foreground">
            This interactive dashboard visualizes how different factors affect housing prices in Ames, Iowa. Simply
            click the "Analyze Dataset" button to explore the impact of central air conditioning, neighborhood tiers,
            and other key features on home values through statistical analysis and data visualization.
          </p>
        </div>

        <Card className="w-full overflow-hidden border border-primary/20">
          {!isIframeLoaded && (
            <div className="flex items-center justify-center h-[600px] bg-muted/30">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                <p className="text-muted-foreground">Loading Ames Housing Analysis...</p>
              </div>
            </div>
          )}
          <iframe
            src="https://appameshosuing-kxoewafqbyjyrkgse9y5on.streamlit.app/"
            className={`w-full h-[600px] ${isIframeLoaded ? "block" : "hidden"}`}
            onLoad={() => setIsIframeLoaded(true)}
            title="Ames Housing Analysis"
          />
        </Card>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">About This Project</h2>
          <p className="text-muted-foreground mb-4">
            This project analyzes housing data from Ames, Iowa to identify key factors that influence home prices. The
            analysis includes:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
            <li>Statistical analysis of 1,460 homes using T-tests, ANOVA, and linear regression</li>
            <li>Visualization of price distributions across different neighborhoods</li>
            <li>Quantification of the impact of central air conditioning on home values</li>
            <li>Identification of neighborhood tiers and their effect on pricing</li>
            <li>Interactive exploration of various housing features and their correlation with sale prices</li>
          </ul>
          <p className="text-muted-foreground">
            The findings reveal significant price impacts from central air conditioning (approximately $10,000 increase)
            and neighborhood classification (over $20,000 in price variation between tiers). ANOVA tests confirmed
            statistically significant differences in mean sale prices across these groupings.
          </p>
        </div>
      </div>
    </div>
  )
}

