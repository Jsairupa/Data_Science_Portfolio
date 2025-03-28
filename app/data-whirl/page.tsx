"use client"

import Link from "next/link"
import { ArrowLeft, BarChartIcon, Bot, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function DataWhirlPage() {
  const projects = [
    {
      id: "political-polarization",
      title: "Political Polarization Analysis",
      description:
        "Applied advanced NLP techniques and Large Language Models (GPT-4o, Llama 3.2, Mistral AI) to analyze political polarization in YouTube news comments.",
      tags: ["Python", "NLP", "VADER", "RoBERTa", "YouTube API"],
      link: "https://apppolticalpolarization-cxvdqwnxx4usrp534sx9wv.streamlit.app/",
      buttonText: "🧠 Explore Political Insights",
      buttonIcon: "🔍",
    },
    {
      id: "virtual-handwriting",
      title: "Virtual Handwriting Smart Board",
      description:
        "Formulated a CNN-based virtual handwriting recognition system using TensorFlow and OpenCV, achieving 98% accuracy and reducing latency by 30% for real-time performance.",
      tags: ["Python", "TensorFlow", "OpenCV", "CNNs"],
      link: "https://github.com/yourusername/virtual-handwriting",
      buttonText: "Try Handwriting Recognition",
      buttonIcon: "✍️",
    },
    {
      id: "ai-data-assistant",
      title: "AI-Powered Data Assistant",
      description:
        "Built a Streamlit app that analyzes user-uploaded CSVs and uses LLMs to auto-generate Python code for data cleaning, EDA, and model building with clear, step-by-step explanations.",
      tags: ["Streamlit", "OpenAI", "LangChain", "Ollama", "Pandas"],
      link: "https://appaiassistant-n9v3qwjruz8axcewzhvflh.streamlit.app/",
      buttonText: "Chat with AI Assistant",
      buttonIcon: "🤖",
    },
    {
      id: "credit-card-fraud",
      title: "Credit Card Fraud Detection",
      description:
        "Developed ML solution for detecting fraudulent transactions in an imbalanced dataset. Improved model accuracy by 15% through data preprocessing and achieved an F1-Score of 0.92 with 20% reduction in false positives.",
      tags: ["Python", "Machine Learning", "Random Forest", "Neural Networks", "Snap ML"],
      link: "https://appcredicardfrauddetection-df3wvwyg38u69zvg456fwh.streamlit.app/",
      buttonText: "Detect Fraud Patterns",
      buttonIcon: "🔍",
    },
    {
      id: "socio-economic-cancer",
      title: "Socio-Economic Factors & Cancer Rates",
      description:
        "Analyzed correlations between income, poverty, and cancer incidence/mortality in U.S. counties. Revealed regional disparities and suggested targeted interventions for high-risk areas.",
      tags: ["Data Science", "Tableau", "R", "Statistical Analysis"],
      link: "https://rl35ua9znhulbwaygnhpt4.streamlit.app/",
      buttonText: "Analyze Health Correlations",
      buttonIcon: "🧬",
    },
    {
      id: "housing-data-ames",
      title: "Housing Data Analysis in Ames, Iowa",
      description:
        "Analyzed 1,460 homes to identify factors affecting house prices using T-tests, ANOVA, and linear regression. Found significant price impacts from central air conditioning and neighborhood tiers.",
      tags: ["Regression Analysis", "JMP", "ANOVA", "Hypothesis Testing"],
      link: "https://appameshosuing-kxoewafqbyjyrkgse9y5on.streamlit.app/",
      buttonText: "Explore Housing Insights",
      buttonIcon: "🏠",
    },
  ]

  const handleProjectClick = (link: string) => {
    if (link.startsWith("http")) {
      window.open(link, "_blank")
    } else {
      window.location.href = link
    }
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="bg-white/10 text-white border-white/20 hover:bg-white/20"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Portfolio
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Political Polarization Analysis */}
          <div className="relative overflow-hidden rounded-lg border border-purple-500/30 bg-gray-900/60 backdrop-blur-sm hover:border-purple-500/60 transition-all duration-300">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500"></div>

            <div className="p-6 pt-8 pb-4 flex justify-center">
              <div className="relative h-32 w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2 w-full">
                    <div className="bg-red-500/20 p-2 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
                        YT
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="bg-blue-500/20 p-2 rounded-lg flex items-center justify-center">
                        <div className="text-blue-300 text-xs font-bold">GPT-4</div>
                      </div>
                      <div className="bg-purple-500/20 p-2 rounded-lg flex items-center justify-center">
                        <div className="text-purple-300 text-xs font-bold">LLaMa3</div>
                      </div>
                    </div>
                    <div className="bg-teal-500/20 p-2 rounded-lg flex items-center justify-center">
                      <div className="text-teal-300 text-xs font-bold">Mistral</div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-lg bg-blue-500/30 p-2 text-xs"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        transform: "translate(-50%, -50%)",
                        width: `${Math.random() * 60 + 40}px`,
                        height: `${Math.random() * 30 + 20}px`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Political Polarization Analysis</h3>
              <p className="text-gray-300 text-sm mb-4">
                Applied advanced NLP techniques and Large Language Models (GPT-4o, Llama 3.2, Mistral AI) to analyze
                political polarization in YouTube news comments.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "NLP", "VADER", "RoBERTa", "YouTube API"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-blue-900/30 text-blue-200 border-blue-500/30 hover:bg-blue-900/50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button
                onClick={() =>
                  handleProjectClick("https://apppolticalpolarization-cxvdqwnxx4usrp534sx9wv.streamlit.app/")
                }
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                <span className="flex items-center gap-2">
                  <span>🔍</span>
                  Explore Political Insights
                </span>
              </Button>
            </div>
          </div>

          {/* Virtual Handwriting Smart Board */}
          <div className="relative overflow-hidden rounded-lg border border-purple-500/30 bg-gray-900/60 backdrop-blur-sm hover:border-purple-500/60 transition-all duration-300">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500"></div>

            <div className="p-6 pt-8 pb-4 flex justify-center">
              <div className="relative h-32 w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-2">
                      <div className="w-10 h-10 text-yellow-400 flex items-center justify-center">
                        <svg viewBox="0 0 32 32" className="w-full h-full">
                          <path
                            fill="currentColor"
                            d="M1.292 5.856L15.423 1.05c.334-.112.78-.112 1.112 0l14.175 4.806c.89.29.89 1.069 0 1.336L16.535 11.87a2.28 2.28 0 01-1.112 0L1.292 7.192c-.89-.267-.89-1.046 0-1.336zm15.243 9.3c.334.111.78.111 1.112 0l14.175-4.805a.675.675 0 01.89.624v8.945c0 .379-.245.713-.579.847l-13.596 4.806c-.111.044-.245.044-.356.044-.111 0-.245 0-.356-.044l-13.596-4.806a.903.903 0 01-.579-.847V10.95c0-.334.267-.58.579-.624l.267.09 12.039 4.74z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="w-6 h-6 bg-blue-500/30 rounded-sm"></div>
                      <div className="w-6 h-6 bg-blue-500/50 rounded-sm"></div>
                      <div className="w-6 h-6 bg-blue-500/70 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Virtual Handwriting Smart Board</h3>
              <p className="text-gray-300 text-sm mb-4">
                Formulated a CNN-based virtual handwriting recognition system using TensorFlow and OpenCV, achieving 98%
                accuracy and reducing latency by 30% for real-time performance.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "TensorFlow", "OpenCV", "CNNs"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-blue-900/30 text-blue-200 border-blue-500/30 hover:bg-blue-900/50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button
                onClick={() => handleProjectClick("https://github.com/yourusername/virtual-handwriting")}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                <span className="flex items-center gap-2">
                  <span>✍️</span>
                  Try Handwriting Recognition
                </span>
              </Button>
            </div>
          </div>

          {/* AI-Powered Data Assistant */}
          <div className="relative overflow-hidden rounded-lg border border-purple-500/30 bg-gray-900/60 backdrop-blur-sm hover:border-purple-500/60 transition-all duration-300">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500"></div>

            <div className="p-6 pt-8 pb-4 flex justify-center">
              <div className="relative h-32 w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="flex flex-col gap-2">
                      <div className="bg-blue-500/20 p-2 rounded-lg flex items-center justify-center">
                        <BarChartIcon className="h-8 w-8 text-blue-300" />
                      </div>
                      <div className="bg-green-500/20 p-2 rounded-lg flex items-center justify-center">
                        <LineChart className="h-8 w-8 text-green-300" />
                      </div>
                    </div>
                    <div className="bg-purple-500/20 p-2 rounded-lg flex items-center justify-center">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-purple-500/30 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-purple-500/50 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-purple-500/70 flex items-center justify-center text-white">
                              <Bot className="h-5 w-5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">AI-Powered Data Assistant</h3>
              <p className="text-gray-300 text-sm mb-4">
                Built a Streamlit app that analyzes user-uploaded CSVs and uses LLMs to auto-generate Python code for
                data cleaning, EDA, and model building with clear, step-by-step explanations.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Streamlit", "OpenAI", "LangChain", "Ollama", "Pandas"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-blue-900/30 text-blue-200 border-blue-500/30 hover:bg-blue-900/50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button
                onClick={() => handleProjectClick("https://appaiassistant-n9v3qwjruz8axcewzhvflh.streamlit.app/")}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                <span className="flex items-center gap-2">
                  <span>🤖</span>
                  Chat with AI Assistant
                </span>
              </Button>
            </div>
          </div>

          {/* Credit Card Fraud Detection */}
          <div className="relative overflow-hidden rounded-lg border border-purple-500/30 bg-gray-900/60 backdrop-blur-sm hover:border-purple-500/60 transition-all duration-300">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500"></div>

            <div className="p-6 pt-8 pb-4 flex justify-center">
              <div className="relative h-32 w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center space-x-4">
                    <div className="bg-amber-500/20 p-3 rounded-lg">
                      <div className="w-16 h-10 rounded-md bg-gradient-to-r from-amber-600 to-amber-400 flex items-center justify-center relative">
                        <div className="absolute w-4 h-4 rounded-full bg-amber-200 top-1 right-1"></div>
                        <div className="w-12 h-1 bg-amber-200 mt-2"></div>
                      </div>
                    </div>
                    <div className="bg-red-500/20 p-3 rounded-lg flex items-center justify-center">
                      <div className="text-red-400 text-2xl font-bold">!</div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-16">
                  <div className="w-full h-full bg-blue-500/10 rounded-lg flex items-end">
                    <div className="w-4 h-6 bg-blue-500/40 rounded-t-sm mx-1"></div>
                    <div className="w-4 h-8 bg-blue-500/50 rounded-t-sm mx-1"></div>
                    <div className="w-4 h-10 bg-blue-500/60 rounded-t-sm mx-1"></div>
                    <div className="w-4 h-12 bg-blue-500/70 rounded-t-sm mx-1"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Credit Card Fraud Detection</h3>
              <p className="text-gray-300 text-sm mb-4">
                Developed ML solution for detecting fraudulent transactions in an imbalanced dataset. Improved model
                accuracy by 15% through data preprocessing and achieved an F1-Score of 0.92 with 20% reduction in false
                positives.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Machine Learning", "Random Forest", "Neural Networks", "Snap ML"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-blue-900/30 text-blue-200 border-blue-500/30 hover:bg-blue-900/50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button
                onClick={() =>
                  handleProjectClick("https://appcredicardfrauddetection-df3wvwyg38u69zvg456fwh.streamlit.app/")
                }
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                <span className="flex items-center gap-2">
                  <span>🔍</span>
                  Detect Fraud Patterns
                </span>
              </Button>
            </div>
          </div>

          {/* Socio-Economic Factors & Cancer Rates */}
          <div className="relative overflow-hidden rounded-lg border border-purple-500/30 bg-gray-900/60 backdrop-blur-sm hover:border-purple-500/60 transition-all duration-300">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500"></div>

            <div className="p-6 pt-8 pb-4 flex justify-center">
              <div className="relative h-32 w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-3 w-full">
                    <div className="bg-blue-500/20 p-2 rounded-lg flex items-center justify-center">
                      <div className="w-10 h-10">
                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                          <path
                            d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"
                            fill="#60A5FA"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="bg-teal-500/20 p-2 rounded-lg flex items-center justify-center">
                      <div className="w-10 h-10">
                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                          <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3z" fill="#2DD4BF" />
                        </svg>
                      </div>
                    </div>
                    <div className="bg-red-500/20 p-2 rounded-lg flex items-center justify-center">
                      <div className="w-10 h-10">
                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"
                            fill="#F87171"
                          />
                          <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2-2z" fill="#F87171" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full text-center text-gray-400 text-xs font-bold">
                  IN U.S. COUNTIES
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Socio-Economic Factors & Cancer Rates</h3>
              <p className="text-gray-300 text-sm mb-4">
                Analyzed correlations between income, poverty, and cancer incidence/mortality in U.S. counties. Revealed
                regional disparities and suggested targeted interventions for high-risk areas.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Data Science", "Tableau", "R", "Statistical Analysis"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-blue-900/30 text-blue-200 border-blue-500/30 hover:bg-blue-900/50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button
                onClick={() => handleProjectClick("https://rl35ua9znhulbwaygnhpt4.streamlit.app/")}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                <span className="flex items-center gap-2">
                  <span>🧬</span>
                  Analyze Health Correlations
                </span>
              </Button>
            </div>
          </div>

          {/* Housing Data Analysis in Ames, Iowa */}
          <div className="relative overflow-hidden rounded-lg border border-purple-500/30 bg-gray-900/60 backdrop-blur-sm hover:border-purple-500/60 transition-all duration-300">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500"></div>

            <div className="p-6 pt-8 pb-4 flex justify-center">
              <div className="relative h-32 w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-amber-500/20 p-2 rounded-lg">
                        <div className="w-10 h-10">
                          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                            <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3z" fill="#F59E0B" />
                          </svg>
                        </div>
                      </div>
                      <div className="bg-blue-500/20 p-2 rounded-lg">
                        <div className="w-10 h-10">
                          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                            <path
                              d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99l1.5 1.5z"
                              fill="#60A5FA"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1 w-full">
                      <div className="text-center text-xs text-gray-400">Regression</div>
                      <div className="text-center text-xs text-gray-400">Hypothesis</div>
                      <div className="text-center text-xs text-gray-400">ANOVA</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 text-gray-400 text-xs font-bold">IN AMES, IOWA</div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Housing Data Analysis in Ames, Iowa</h3>
              <p className="text-gray-300 text-sm mb-4">
                Analyzed 1,460 homes to identify factors affecting house prices using T-tests, ANOVA, and linear
                regression. Found significant price impacts from central air conditioning and neighborhood tiers.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Regression Analysis", "JMP", "ANOVA", "Hypothesis Testing"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-blue-900/30 text-blue-200 border-blue-500/30 hover:bg-blue-900/50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button
                onClick={() => handleProjectClick("https://appameshosuing-kxoewafqbyjyrkgse9y5on.streamlit.app/")}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                <span className="flex items-center gap-2">
                  <span>🏠</span>
                  Explore Housing Insights
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

