"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenPhrases?: number
  className?: string
}

export function TypingAnimation({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenPhrases = 2000,
  className = "",
}: TypingAnimationProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]

    const timer = setTimeout(
      () => {
        // If paused, wait before starting to delete
        if (isPaused) {
          setIsPaused(false)
          setIsDeleting(true)
          return
        }

        // If deleting
        if (isDeleting) {
          setCurrentText(currentPhrase.substring(0, currentText.length - 1))

          // If deleted everything, move to next phrase
          if (currentText.length === 0) {
            setIsDeleting(false)
            setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
          }
        }
        // If typing
        else {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1))

          // If completed typing the phrase, pause before deleting
          if (currentText.length === currentPhrase.length) {
            setIsPaused(true)
          }
        }
      },
      isPaused ? delayBetweenPhrases : isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases])

  return (
    <div className={className}>
      <span>{currentText}</span>
      <span className="animate-blink">|</span>
    </div>
  )
}
