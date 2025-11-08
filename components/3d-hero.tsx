"use client"

import { useEffect, useRef } from "react"

export function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    containerRef.current.appendChild(canvas)

    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number }> = []
    const totalParticles = 100

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize particles
    for (let i = 0; i < totalParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }

    let animationId: number
    const animate = () => {
      // Clear background
      ctx.fillStyle = "rgba(13, 13, 13, 0.15)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() * 0.0001

      // Animated grid background
      ctx.strokeStyle = "rgba(138, 43, 226, 0.08)"
      ctx.lineWidth = 1
      const gridSize = 60
      const offsetX = (time * 20) % gridSize
      const offsetY = (time * 10) % gridSize

      for (let i = -gridSize; i < canvas.width + gridSize; i += gridSize) {
        for (let j = 0; j < canvas.height; j += gridSize) {
          const x = i + offsetX + Math.sin((j + time * 100) * 0.01) * 15
          const waveHeight = Math.cos((i + time * 50) * 0.005) * 8
          ctx.beginPath()
          ctx.moveTo(x, j)
          ctx.lineTo(x + gridSize, j + waveHeight)
          ctx.stroke()
        }
      }

      // Draw particles
      ctx.fillStyle = "rgba(0, 191, 255, 0.6)"
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Opacity pulse
        particle.opacity = Math.sin(time * 2 + particle.x * 0.01) * 0.3 + 0.4

        ctx.globalAlpha = particle.opacity
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw connecting lines
      ctx.strokeStyle = "rgba(138, 43, 226, 0.15)"
      ctx.lineWidth = 0.5
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 150) {
            ctx.globalAlpha = 0.2 * (1 - distance / 150)
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
      canvas.remove()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-screen overflow-hidden z-0"
    />
  )
}
