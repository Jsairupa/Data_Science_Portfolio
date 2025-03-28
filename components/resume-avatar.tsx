"use client"

import { useState, useRef, useEffect } from "react"
import { Bot, X, Minimize2, Maximize2, Send, Mic, MicOff } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface Message {
  role: "user" | "assistant"
  content: string
}

export function ResumeAvatar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I'm Sai's virtual assistant. Ask me anything about her skills, experience, or projects!",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Remove the voice-related state variables
  const [isListening, setIsListening] = useState(false)
  const [speechError, setSpeechError] = useState("")
  const recognitionRef = useRef<any>(null)

  // Remove these voice-related state variables
  // const [isSpeaking, setIsSpeaking] = useState(false)
  // const [voiceEnabled, setVoiceEnabled] = useState(true)
  // const synthRef = useRef<SpeechSynthesis | null>(null)

  // Initialize speech recognition and synthesis
  useEffect(() => {
    // Check if browser supports speech recognition
    if (typeof window !== "undefined") {
      // Define SpeechRecognition with proper fallbacks
      const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition

      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition()
        recognitionRef.current.continuous = false
        recognitionRef.current.interimResults = false
        recognitionRef.current.lang = "en-US"

        recognitionRef.current.onresult = (event) => {
          const transcript = event.results[0][0].transcript
          console.log("Recognized speech:", transcript)
          setInput(transcript)
          // Use setTimeout to ensure the UI updates before sending
          setTimeout(() => handleSendMessage(transcript), 300)
        }

        recognitionRef.current.onerror = (event) => {
          console.error("Speech recognition error", event.error)
          setSpeechError(`Error: ${event.error}. Please try again.`)
          setIsListening(false)
        }

        recognitionRef.current.onend = () => {
          console.log("Speech recognition ended")
          setIsListening(false)
        }
      } else {
        console.warn("Speech recognition not supported in this browser")
      }

      // Initialize speech synthesis
      // if (typeof window.speechSynthesis !== 'undefined') {
      //   synthRef.current = window.speechSynthesis;
      // }
    }

    return () => {
      // Cleanup
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort()
        } catch (e) {
          console.error("Error aborting speech recognition:", e)
        }
      }
      // if (synthRef.current) {
      //   synthRef.current.cancel();
      // }
    }
  }, [])

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Resume knowledge base
  const knowledgeBase = {
    skills: [
      "Python",
      "SQL",
      "R",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Data Visualization",
      "Statistical Analysis",
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Power BI",
      "Tableau",
    ],
    education: [
      "Master of Science in Data Science from Rochester Institute of Technology (2023-2025)",
      "Bachelor of Engineering in Computer Science from Amrita Vishwa Vidyapeetham (2019-2023)",
    ],
    experience: [
      "Data Science Intern at Sree Rayalaseema Hi-Strength Hypo Ltd. (June 2022 – April 2023)",
      "Designed predictive sales models improving demand accuracy by 15%",
      "Developed BI dashboards reducing manual reporting by 30%",
      "Performed customer segmentation boosting conversion rates by 20%",
    ],
    projects: [
      "Political Polarization Analysis using NLP and LLMs",
      "Virtual Handwriting Smart Board with CNNs (98% accuracy)",
      "AI-Powered Data Assistant using Streamlit and LangChain",
    ],
    certifications: [
      "IBM Data Science Professional Certificate",
      "Generative AI Course with Langchain and Huggingface",
    ],
    publications: ["Virtual Handwriting Based Smart Board Using Deep Learning (2023, IEEE)"],
    contact: [
      "Email: sj7740@rit.edu",
      "Location: Rochester, NY",
      "Phone: 585-557-9083",
      "LinkedIn: linkedin.com/in/sairupajhade",
      "GitHub: github.com/Jsairupa",
    ],
  }

  // Function to generate response based on user input
  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    // Check for greetings
    if (input.match(/hi|hello|hey|greetings/i)) {
      return "Hello! I'm Sai's virtual assistant. How can I help you today?"
    }

    // Check for questions about skills
    if (input.match(/skills|technologies|tools|programming|languages|frameworks|what can you do/i)) {
      return `Sai is proficient in: ${knowledgeBase.skills.join(", ")}.`
    }

    // Check for education questions
    if (input.match(/education|degree|university|college|school|study|studied/i)) {
      return `Sai's educational background includes: ${knowledgeBase.education.join(". ")}.`
    }

    // Check for experience questions
    if (input.match(/experience|work|job|career|intern|internship/i)) {
      return `Sai's professional experience includes: ${knowledgeBase.experience.join(". ")}.`
    }

    // Check for project questions
    if (input.match(/projects|portfolio|work|built|created|developed/i)) {
      return `Sai has worked on several projects including: ${knowledgeBase.projects.join(". ")}.`
    }

    // Check for certification questions
    if (input.match(/certifications|certificates|certified/i)) {
      return `Sai has earned the following certifications: ${knowledgeBase.certifications.join(", ")}.`
    }

    // Check for publication questions
    if (input.match(/publications|published|papers|research/i)) {
      return `Sai's publications include: ${knowledgeBase.publications.join(", ")}.`
    }

    // Check for contact information
    if (input.match(/contact|email|phone|reach|connect|linkedin|github/i)) {
      return `You can contact Sai through: ${knowledgeBase.contact.join(". ")}.`
    }

    // Check for questions about machine learning
    if (input.match(/machine learning|ml|ai|artificial intelligence|deep learning|neural networks/i)) {
      return "Sai has extensive experience in Machine Learning and AI, including deep learning, NLP, and computer vision. She's worked with TensorFlow, PyTorch, and scikit-learn frameworks to build predictive models and has achieved 98% accuracy in her CNN-based handwriting recognition project."
    }

    // Check for questions about data visualization
    if (input.match(/data visualization|visualize|charts|graphs|tableau|power bi/i)) {
      return "Sai is skilled in data visualization using tools like Tableau, Power BI, Matplotlib, Seaborn, and Plotly. She has experience creating interactive dashboards that reduced manual reporting by 30% in her previous role."
    }

    // Check for questions about NLP
    if (input.match(/nlp|natural language processing|text|language|linguistics/i)) {
      return "Sai has worked extensively with NLP techniques and Large Language Models. Her Political Polarization Analysis project used advanced NLP methods with models like GPT-4o, Llama 3.2, and Mistral AI to analyze sentiment and polarization in text data."
    }

    // Check for questions about data science process
    if (input.match(/data science process|methodology|approach|how do you|workflow/i)) {
      return "Sai follows a comprehensive data science approach that includes problem definition, data collection, preprocessing, exploratory analysis, feature engineering, model development, evaluation, and deployment. She emphasizes the importance of understanding business requirements and communicating insights effectively."
    }

    // Check for questions about availability
    if (input.match(/available|hire|hiring|job|opportunity|looking for work/i)) {
      return "Sai is currently open to new opportunities and collaborations in data science and machine learning. Feel free to reach out to her at sj7740@rit.edu to discuss potential roles or projects."
    }

    // Check for voice assistant questions
    if (input.match(/voice|speak|talk|listen|speech/i)) {
      return "Yes, I can speak and listen! Click the microphone button to speak your question, and I'll respond with voice as well. You can toggle voice features on or off using the speaker button."
    }

    // Default response for unrecognized questions
    return "I don't have specific information about that. Would you like to know about Sai's skills, education, experience, projects, or contact information?"
  }

  // In the handleSendMessage function, remove the voice response part:
  const handleSendMessage = (text?: string) => {
    const messageText = text || input
    if (!messageText.trim()) return

    // Add user message
    const userMessage: Message = { role: "user", content: messageText }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Show typing indicator
    setIsTyping(true)

    // Simulate AI thinking and typing
    setTimeout(
      () => {
        const response = generateResponse(messageText)
        const assistantMessage: Message = { role: "assistant", content: response }
        setMessages((prev) => [...prev, assistantMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    ) // Random delay between 1-2 seconds
  }

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false)
    } else {
      setIsOpen(!isOpen)
    }
  }

  const minimizeChat = () => {
    setIsMinimized(true)
  }

  // Voice assistant functions
  const toggleListening = () => {
    if (isListening) {
      stopListening()
    } else {
      startListening()
    }
  }

  const startListening = () => {
    if (!recognitionRef.current) {
      setSpeechError("Speech recognition is not supported in your browser")
      return
    }

    try {
      // Cancel any ongoing speech synthesis
      // if (synthRef.current) {
      //   synthRef.current.cancel();
      // }

      // Clear any previous errors
      setSpeechError("")

      // Start listening
      recognitionRef.current.start()
      console.log("Started listening")
      setIsListening(true)

      // Set a timeout to stop listening after 10 seconds if no result
      setTimeout(() => {
        if (isListening) {
          stopListening()
          setSpeechError("Didn't hear anything. Please try again.")
        }
      }, 10000)
    } catch (error) {
      console.error("Error starting speech recognition:", error)
      setSpeechError("Could not start listening. Please try again.")
      setIsListening(false)
    }
  }

  const stopListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop()
        console.log("Stopped listening")
      } catch (e) {
        console.error("Error stopping speech recognition:", e)
      }
    }
    setIsListening(false)
  }

  // const toggleVoice = () => {
  //   setVoiceEnabled(!voiceEnabled)

  //   // Stop speaking if turning off voice
  //   if (voiceEnabled && synthRef.current) {
  //     synthRef.current.cancel()
  //     setIsSpeaking(false)
  //   }
  // }

  // const speakText = (text: string) => {
  //   if (!synthRef.current) return

  //   // Cancel any ongoing speech
  //   synthRef.current.cancel()

  //   const utterance = new SpeechSynthesisUtterance(text)
  //   utterance.rate = 1.0
  //   utterance.pitch = 1.0
  //   utterance.volume = 1.0

  //   // Use a female voice if available
  //   const voices = synthRef.current.getVoices()
  //   const femaleVoice = voices.find(
  //     (voice) =>
  //       voice.name.includes("female") ||
  //       voice.name.includes("Samantha") ||
  //       voice.name.includes("Google UK English Female"),
  //   )

  //   if (femaleVoice) {
  //     utterance.voice = femaleVoice
  //   }

  //   utterance.onstart = () => setIsSpeaking(true)
  //   utterance.onend = () => setIsSpeaking(false)
  //   utterance.onerror = () => setIsSpeaking(false)

  //   synthRef.current.speak(utterance)
  // }

  return (
    <>
      {/* Chat button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={toggleChat}
              size="lg"
              className="rounded-full h-14 w-14 bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 shadow-lg"
            >
              <Bot className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-80 md:w-96"
          >
            <Card className="border-primary/20 shadow-xl">
              {/* In the CardHeader, remove the voice toggle button and speaking indicator: */}
              <CardHeader className="bg-gradient-to-r from-primary to-purple-500 text-white p-3 flex flex-row justify-between items-center">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 border-2 border-white">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI Assistant" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-sm">Resume Assistant</h3>
                  </div>
                </div>
                <div className="flex gap-1">
                  {isMinimized ? (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMinimized(false)}
                      className="h-6 w-6 text-white hover:bg-white/20"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={minimizeChat}
                      className="h-6 w-6 text-white hover:bg-white/20"
                    >
                      <Minimize2 className="h-4 w-4" />
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-6 w-6 text-white hover:bg-white/20"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              {!isMinimized && (
                <>
                  <CardContent className="p-0">
                    <div className="h-80 overflow-y-auto p-4 space-y-4">
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg p-3 ${
                              message.role === "user" ? "bg-primary text-white" : "bg-muted"
                            }`}
                          >
                            {message.role === "assistant" && (
                              <div className="flex items-center gap-2 mb-1">
                                <Avatar className="h-5 w-5">
                                  <AvatarFallback>AI</AvatarFallback>
                                </Avatar>
                                <span className="text-xs font-medium">Resume Assistant</span>
                              </div>
                            )}
                            <p className="text-sm">{message.content}</p>
                          </div>
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="max-w-[80%] rounded-lg p-3 bg-muted">
                            <div className="flex items-center gap-2 mb-1">
                              <Avatar className="h-5 w-5">
                                <AvatarFallback>AI</AvatarFallback>
                              </Avatar>
                              <span className="text-xs font-medium">Resume Assistant</span>
                            </div>
                            <div className="flex gap-1">
                              <span className="animate-bounce">●</span>
                              <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
                                ●
                              </span>
                              <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
                                ●
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                      {speechError && (
                        <div className="text-xs text-red-500 text-center">
                          {speechError}. Please try again or type your question.
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                  </CardContent>
                  <CardFooter className="p-3 border-t">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault()
                        handleSendMessage()
                      }}
                      className="flex w-full gap-2"
                    >
                      <Input
                        placeholder="Ask about skills, experience, etc..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant={isListening ? "destructive" : "outline"}
                        onClick={toggleListening}
                        className={`${isListening ? "animate-pulse" : ""}`}
                        title={isListening ? "Stop listening" : "Start voice input"}
                      >
                        {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                      </Button>
                      <Button type="submit" size="icon" disabled={!input.trim() || isTyping}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </CardFooter>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

