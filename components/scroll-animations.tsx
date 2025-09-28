"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: "fade-in" | "slide-in-left" | "slide-in-right" | "slide-in-up" | "slide-in-down"
  delay?: number
  className?: string
}

export function ScrollAnimation({ children, animation = "fade-in", delay = 0, className = "" }: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const animationClasses = {
    "fade-in": `transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`,
    "slide-in-left": `transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`,
    "slide-in-right": `transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`,
    "slide-in-up": `transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
    "slide-in-down": `transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`,
  }

  return (
    <div ref={ref} className={`${animationClasses[animation]} ${className}`}>
      {children}
    </div>
  )
}
