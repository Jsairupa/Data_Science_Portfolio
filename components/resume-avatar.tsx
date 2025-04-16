"use client"

import { useState, useRef, useEffect } from "react"
import { Bot, X, Minimize2, Maximize2, Send, Mic, MicOff } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { generateResponse } from "./chatbot-knowledge"

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
      content:
        "Hi there! I'm Sai's virtual assistant. I can tell you all about her skills, experience, and projects. Feel free to ask me anything!",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Voice-related state variables
  const [isListening, setIsListening] = useState(false)
  const [speechError, setSpeechError] = useState("")
  const recognitionRef = useRef<any>(null)

  // Add a new state variable for scroll tracking after the other state variables
  const [scrollPosition, setScrollPosition] = useState(0)

  // Initialize speech recognition
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
    }
  }, [])

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Handle sending messages
  const handleSendMessage = (text?: string) => {
    const messageText = text || input
    if (!messageText.trim()) return

    // Add user message
    const userMessage: Message = { role: "user", content: messageText }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Show typing indicator
    setIsTyping(true)

    // First layer of detection for specific data requests
    const lowerCaseMessage = messageText.toLowerCase().trim()

    // Direct pattern matching for highest priority items
    let directResponse: string | null = null

    // Phone number detection
    if (
      /^(phone|number|phone number|cell|mobile|telephone)(\?)?$/i.test(lowerCaseMessage) ||
      /^what('s| is) (her|the) (phone|number|phone number|cell|mobile|telephone)(\?)?$/i.test(lowerCaseMessage) ||
      /^(can i have|give me|tell me) (her|the) (phone|number|phone number|cell|mobile|telephone)(\?)?$/i.test(
        lowerCaseMessage,
      )
    ) {
      directResponse = "585-557-9083"
    }

    // Email detection
    else if (
      /^(email|e-mail|mail|email address)(\?)?$/i.test(lowerCaseMessage) ||
      /^what('s| is) (her|the) (email|e-mail|mail|email address)(\?)?$/i.test(lowerCaseMessage) ||
      /^(can i have|give me|tell me) (her|the) (email|e-mail|mail|email address)(\?)?$/i.test(lowerCaseMessage)
    ) {
      directResponse = "sj7740@rit.edu"
    }

    // LinkedIn detection
    else if (
      /^(linkedin|linked in)(\?)?$/i.test(lowerCaseMessage) ||
      /^what('s| is) (her|the) (linkedin|linked in)(\?)?$/i.test(lowerCaseMessage) ||
      /^(can i have|give me|tell me) (her|the) (linkedin|linked in)(\?)?$/i.test(lowerCaseMessage)
    ) {
      directResponse = "linkedin.com/in/sairupajhade"
    }

    // GitHub detection
    else if (
      /^(github|git)(\?)?$/i.test(lowerCaseMessage) ||
      /^what('s| is) (her|the) (github|git)(\?)?$/i.test(lowerCaseMessage) ||
      /^(can i have|give me|tell me) (her|the) (github|git)(\?)?$/i.test(lowerCaseMessage)
    ) {
      directResponse = "github.com/Jsairupa"
    }

    // Location detection
    else if (
      /^(location|address|where)(\?)?$/i.test(lowerCaseMessage) ||
      /^where (is she|does she live|is she located|is she based)(\?)?$/i.test(lowerCaseMessage) ||
      /^what('s| is) (her|the) (location|address)(\?)?$/i.test(lowerCaseMessage)
    ) {
      directResponse = "Rochester, NY"
    }

    // GPA detection
    else if (
      /^(gpa|grade point average)(\?)?$/i.test(lowerCaseMessage) ||
      /^what('s| is) (her|the) (gpa|grade point average)(\?)?$/i.test(lowerCaseMessage)
    ) {
      directResponse = "3.49/4.0"
    }

    // University detection
    else if (
      /^(university|college|school)(\?)?$/i.test(lowerCaseMessage) ||
      /^where (did|does) she (study|go to school)(\?)?$/i.test(lowerCaseMessage) ||
      /^what (university|college|school) (did|does) she (attend|go to)(\?)?$/i.test(lowerCaseMessage)
    ) {
      directResponse = "Rochester Institute of Technology"
    }

    // Job title detection
    else if (
      /^(job title|position|role)(\?)?$/i.test(lowerCaseMessage) ||
      /^what('s| is| was) (her|the) (job title|position|role)(\?)?$/i.test(lowerCaseMessage)
    ) {
      directResponse = "Data Science Intern"
    }

    // Company detection
    else if (
      /^(company|employer|organization)(\?)?$/i.test(lowerCaseMessage) ||
      /^where (did|does) she work(\?)?$/i.test(lowerCaseMessage) ||
      /^what company (did|does) she work (at|for)(\?)?$/i.test(lowerCaseMessage)
    ) {
      directResponse = "Sree Rayalaseema Hi-Strength Hypo Ltd."
    }

    // If we have a direct response, use it
    if (directResponse) {
      setTimeout(() => {
        const assistantMessage: Message = { role: "assistant", content: directResponse! }
        setMessages((prev) => [...prev, assistantMessage])
        setIsTyping(false)
      }, 500)
    }
    // Otherwise, use the knowledge base
    else {
      setTimeout(
        () => {
          const response = generateResponse(messageText)
          const assistantMessage: Message = { role: "assistant", content: response }
          setMessages((prev) => [...prev, assistantMessage])
          setIsTyping(false)
        },
        500 + Math.random() * 500, // Random delay between 0.5-1 seconds
      )
    }
  }

  // Update the minimizeChat function to support scrolling minimization
  const minimizeChat = () => {
    setIsMinimized(true)
  }

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false)
    } else {
      setIsOpen(!isOpen)
    }
  }

  // Add this useEffect to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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

  // Add a welcome message when the chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 1) {
      // Show typing indicator
      setIsTyping(true)

      // Add welcome message after a short delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "I'd be happy to chat about Sai's background! You can ask me things like 'What's her professional experience?', 'What projects has she worked on?', or 'Tell me about her education.' What would you like to know?",
          },
        ])
        setIsTyping(false)
      }, 1000)
    }
  }, [isOpen])

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
            className="fixed z-50 w-80 md:w-96"
            style={{
              bottom: isMinimized ? "0" : "1.5rem",
              right: "1.5rem",
              transform: isMinimized ? `translateY(${Math.min(80, scrollPosition)}px)` : "none",
            }}
          >
            <Card className="border-primary/20 shadow-xl">
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
                    <div
                      className="bg-gradient-to-r from-primary/90 to-purple-500/90 text-white p-2 rounded-b-lg cursor-pointer flex items-center justify-between"
                      onClick={() => setIsMinimized(false)}
                    >
                      <div className="flex items-center">
                        <Avatar className="h-6 w-6 mr-2">
                          <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                        <span className="text-xs font-medium">Resume Assistant</span>
                      </div>
                      <Maximize2 className="h-4 w-4" />
                    </div>
                  ) : (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={minimizeChat}
                        className="h-6 w-6 text-white hover:bg-white/20"
                      >
                        <Minimize2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(false)}
                        className="h-6 w-6 text-white hover:bg-white/20"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </>
                  )}
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
