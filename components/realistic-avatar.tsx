"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface RealisticAvatarProps {
  className?: string
  pointing?: boolean
  speaking?: boolean
  message?: string
}

export function RealisticAvatar({
  className = "",
  pointing = true,
  speaking = false,
  message = "Hello there!",
}: RealisticAvatarProps) {
  const [blinking, setBlinking] = useState(false)
  const [mouthMoving, setMouthMoving] = useState(false)

  // Handle random blinking
  useEffect(() => {
    const blinkInterval = setInterval(
      () => {
        setBlinking(true)
        setTimeout(() => setBlinking(false), 200)
      },
      Math.random() * 3000 + 2000,
    ) // Random blink between 2-5 seconds

    return () => clearInterval(blinkInterval)
  }, [])

  // Handle mouth animation when speaking
  useEffect(() => {
    if (speaking) {
      const mouthInterval = setInterval(() => {
        setMouthMoving((prev) => !prev)
      }, 150)

      return () => clearInterval(mouthInterval)
    }
  }, [speaking])

  return (
    <div className={`relative ${className}`}>
      {/* Speech bubble when speaking */}
      {speaking && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-24 -left-32 bg-white rounded-2xl p-3 shadow-md w-48 z-10"
        >
          <div className="text-gray-800 text-sm">{message}</div>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45"></div>
        </motion.div>
      )}

      <svg
        width="200"
        height="240"
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Neck and shoulders */}
        <path
          d="M80 140C80 140 75 150 75 160C75 170 80 180 90 180C100 180 110 180 120 180C130 180 135 170 135 160C135 150 130 140 130 140"
          fill="#f2c4a1"
        />

        {/* Clothing - blouse/top */}
        <path
          d="M70 160C70 160 65 170 65 180C65 190 65 200 65 210C65 220 135 220 140 210C145 200 145 180 145 170C145 160 135 160 135 160"
          fill="#e86ed0"
        />

        {/* Clothing details - collar, folds */}
        <path d="M75 160C75 160 85 170 100 170C115 170 125 160 125 160" stroke="#d64bbd" strokeWidth="1" fill="none" />
        <path d="M80 180C80 180 90 190 100 190C110 190 120 180 120 180" stroke="#d64bbd" strokeWidth="1" fill="none" />

        {/* Head shape with realistic proportions */}
        <ellipse cx="100" cy="100" rx="30" ry="40" fill="#f2c4a1" />

        {/* Hair with volume and style */}
        <path
          d="M70 100C70 80 80 60 100 60C120 60 130 80 130 100C130 110 130 120 130 120C130 120 120 130 100 130C80 130 70 120 70 120C70 120 70 110 70 100Z"
          fill="#4a3222"
        />

        {/* Hair highlights and details */}
        <path d="M70 90C70 90 80 70 100 70C120 70 130 90 130 90" stroke="#5d4430" strokeWidth="1.5" fill="none" />
        <path d="M75 100C75 100 85 80 100 80C115 80 125 100 125 100" stroke="#5d4430" strokeWidth="1.5" fill="none" />

        {/* Hair bangs/fringe */}
        <path d="M75 80C75 80 85 70 100 70C115 70 125 80 125 80" fill="#4a3222" />
        <path d="M80 75C80 75 90 65 100 65C110 65 120 75 120 75" fill="#4a3222" />

        {/* Face features - eyebrows */}
        <path d="M85 85C85 85 90 83 95 85" stroke="#3a2a1b" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M115 85C115 85 110 83 105 85" stroke="#3a2a1b" strokeWidth="1.5" strokeLinecap="round" />

        {/* Eyes - whites */}
        <ellipse cx="90" cy="92" rx="5" ry={blinking ? 0.5 : 3} fill="white" />
        <ellipse cx="110" cy="92" rx="5" ry={blinking ? 0.5 : 3} fill="white" />

        {/* Eyes - iris and pupils */}
        <circle cx="90" cy="92" r={blinking ? 0 : 2.5} fill="#5b3b24" />
        <circle cx="110" cy="92" r={blinking ? 0 : 2.5} fill="#5b3b24" />

        {/* Eyes - pupils */}
        <circle cx="90" cy="92" r={blinking ? 0 : 1} fill="#000000" />
        <circle cx="110" cy="92" r={blinking ? 0 : 1} fill="#000000" />

        {/* Eyes - highlights */}
        <circle cx="91.5" cy="91" r={blinking ? 0 : 0.8} fill="white" />
        <circle cx="111.5" cy="91" r={blinking ? 0 : 0.8} fill="white" />

        {/* Eyes - eyelashes */}
        <path
          d="M85 90C85 90 83 88 82 89"
          stroke="#3a2a1b"
          strokeWidth="1"
          strokeLinecap="round"
          style={{ display: blinking ? "none" : "block" }}
        />
        <path
          d="M87 88C87 88 86 86 85 86"
          stroke="#3a2a1b"
          strokeWidth="1"
          strokeLinecap="round"
          style={{ display: blinking ? "none" : "block" }}
        />
        <path
          d="M115 90C115 90 117 88 118 89"
          stroke="#3a2a1b"
          strokeWidth="1"
          strokeLinecap="round"
          style={{ display: blinking ? "none" : "block" }}
        />
        <path
          d="M113 88C113 88 114 86 115 86"
          stroke="#3a2a1b"
          strokeWidth="1"
          strokeLinecap="round"
          style={{ display: blinking ? "none" : "block" }}
        />

        {/* Nose with subtle shading */}
        <path
          d="M100 95C100 95 102 100 102 105C102 110 100 112 98 112"
          stroke="#e8b696"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Mouth - adjusts based on speaking state */}
        {mouthMoving ? (
          <ellipse cx="100" cy="115" rx="7" ry="3" fill="#c86e6e" />
        ) : (
          <path
            d="M93 115C93 115 97 117 100 117C103 117 107 115 107 115"
            stroke="#c86e6e"
            strokeWidth="2"
            fill="none"
          />
        )}

        {/* Cheeks with subtle blush */}
        <ellipse cx="85" cy="105" rx="5" ry="3" fill="#f2a9a9" fillOpacity="0.3" />
        <ellipse cx="115" cy="105" rx="5" ry="3" fill="#f2a9a9" fillOpacity="0.3" />

        {/* Chin and jawline definition */}
        <path
          d="M85 120C85 120 90 125 100 125C110 125 115 120 115 120"
          stroke="#e8b696"
          strokeWidth="0.5"
          fill="none"
        />

        {/* Pointing arm if enabled */}
        {pointing && (
          <>
            {/* Arm with proper anatomy */}
            <path
              d="M130 150C130 150 150 145 170 135C190 125 195 120 195 120"
              stroke="#f2c4a1"
              strokeWidth="12"
              strokeLinecap="round"
            />

            {/* Hand with fingers */}
            <circle cx="195" cy="120" r="6" fill="#f2c4a1" />
            <path d="M198 115C198 115 202 112 204 112" stroke="#f2c4a1" strokeWidth="3" strokeLinecap="round" />
            <path d="M200 120C200 120 205 120 207 120" stroke="#f2c4a1" strokeWidth="3" strokeLinecap="round" />
          </>
        )}

        {/* Subtle face shadows for depth */}
        <path d="M80 100C80 100 85 110 90 115" stroke="#e8b696" strokeWidth="0.5" fill="none" />
        <path d="M120 100C120 100 115 110 110 115" stroke="#e8b696" strokeWidth="0.5" fill="none" />
      </svg>
    </div>
  )
}
