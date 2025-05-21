"use client"

import { useEffect, useRef } from "react"

export function CampusIllustration() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Draw campus illustration
    const drawCampus = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Sky
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.6)
      gradient.addColorStop(0, "#a78bfa")
      gradient.addColorStop(1, "#c4b5fd")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height * 0.6)

      // Ground
      ctx.fillStyle = "#d1fae5"
      ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height * 0.4)

      // Sun
      ctx.fillStyle = "#fef3c7"
      ctx.beginPath()
      ctx.arc(canvas.width * 0.8, canvas.height * 0.2, 40, 0, Math.PI * 2)
      ctx.fill()

      // Main building
      ctx.fillStyle = "#f5f5f4"
      ctx.fillRect(canvas.width * 0.3, canvas.height * 0.3, canvas.width * 0.4, canvas.height * 0.4)

      // Building details
      ctx.fillStyle = "#a78bfa"
      // Roof
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.25, canvas.height * 0.3)
      ctx.lineTo(canvas.width * 0.5, canvas.height * 0.15)
      ctx.lineTo(canvas.width * 0.75, canvas.height * 0.3)
      ctx.fill()

      // Windows
      ctx.fillStyle = "#bfdbfe"
      const windowWidth = 20
      const windowHeight = 30
      const windowsPerRow = 5
      const windowRows = 3
      const buildingWidth = canvas.width * 0.4
      const buildingHeight = canvas.height * 0.4
      const buildingX = canvas.width * 0.3
      const buildingY = canvas.height * 0.3

      for (let row = 0; row < windowRows; row++) {
        for (let col = 0; col < windowsPerRow; col++) {
          const x = buildingX + (col + 1) * (buildingWidth / (windowsPerRow + 1)) - windowWidth / 2
          const y = buildingY + (row + 1) * (buildingHeight / (windowRows + 1)) - windowHeight / 2
          ctx.fillRect(x, y, windowWidth, windowHeight)
        }
      }

      // Door
      ctx.fillStyle = "#7c3aed"
      ctx.fillRect(buildingX + buildingWidth / 2 - 15, buildingY + buildingHeight - 40, 30, 40)

      // Path
      ctx.fillStyle = "#d6d3d1"
      ctx.beginPath()
      ctx.moveTo(buildingX + buildingWidth / 2, buildingY + buildingHeight)
      ctx.lineTo(buildingX + buildingWidth / 2 - 30, canvas.height)
      ctx.lineTo(buildingX + buildingWidth / 2 + 30, canvas.height)
      ctx.fill()

      // Trees
      const drawTree = (x: number, y: number, size: number) => {
        // Trunk
        ctx.fillStyle = "#92400e"
        ctx.fillRect(x - size / 10, y - size / 2, size / 5, size / 2)

        // Leaves
        ctx.fillStyle = "#84cc16"
        ctx.beginPath()
        ctx.arc(x, y - size / 2, size / 3, 0, Math.PI * 2)
        ctx.fill()
      }

      drawTree(canvas.width * 0.15, canvas.height * 0.7, 50)
      drawTree(canvas.width * 0.85, canvas.height * 0.7, 60)
      drawTree(canvas.width * 0.2, canvas.height * 0.8, 40)
      drawTree(canvas.width * 0.8, canvas.height * 0.8, 45)

      // Text
      ctx.fillStyle = "#1e293b"
      ctx.font = "bold 16px Arial"
      ctx.textAlign = "center"
      ctx.fillText("VIRTUAL UNIVERSITY", canvas.width / 2, canvas.height * 0.25)
    }

    // Initial draw
    drawCampus()

    // Redraw on resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      drawCampus()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <canvas ref={canvasRef} className="w-full h-full rounded-xl border shadow-lg" style={{ touchAction: "none" }} />
  )
}
