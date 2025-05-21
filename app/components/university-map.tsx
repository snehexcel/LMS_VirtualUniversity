"use client"

import { useEffect, useRef } from "react"

export function UniversityMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Draw campus map
    const drawCampus = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Background
      ctx.fillStyle = "#f0f4f8"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Grass areas
      ctx.fillStyle = "#c6e6c6"
      ctx.beginPath()
      ctx.ellipse(canvas.width * 0.3, canvas.height * 0.3, canvas.width * 0.2, canvas.height * 0.15, 0, 0, Math.PI * 2)
      ctx.fill()

      ctx.beginPath()
      ctx.ellipse(canvas.width * 0.7, canvas.height * 0.7, canvas.width * 0.25, canvas.height * 0.2, 0, 0, Math.PI * 2)
      ctx.fill()

      // Main paths
      ctx.strokeStyle = "#d0d0d0"
      ctx.lineWidth = 8

      // Horizontal path
      ctx.beginPath()
      ctx.moveTo(0, canvas.height * 0.5)
      ctx.lineTo(canvas.width, canvas.height * 0.5)
      ctx.stroke()

      // Vertical path
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.5, 0)
      ctx.lineTo(canvas.width * 0.5, canvas.height)
      ctx.stroke()

      // Buildings
      const buildings = [
        { x: canvas.width * 0.2, y: canvas.height * 0.2, w: 60, h: 40, color: "#a78bfa", name: "Admin" },
        { x: canvas.width * 0.8, y: canvas.height * 0.2, w: 70, h: 50, color: "#93c5fd", name: "Science" },
        { x: canvas.width * 0.2, y: canvas.height * 0.7, w: 80, h: 60, color: "#fca5a5", name: "Arts" },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, w: 65, h: 45, color: "#fdba74", name: "Library" },
        { x: canvas.width * 0.5, y: canvas.height * 0.5, w: 90, h: 70, color: "#86efac", name: "Student Center" },
      ]

      buildings.forEach((building) => {
        // Shadow
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
        ctx.fillRect(building.x + 3, building.y + 3, building.w, building.h)

        // Building
        ctx.fillStyle = building.color
        ctx.fillRect(building.x, building.y, building.w, building.h)

        // Building name
        ctx.fillStyle = "#333"
        ctx.font = "10px Arial"
        ctx.textAlign = "center"
        ctx.fillText(building.name, building.x + building.w / 2, building.y + building.h / 2)
      })

      // Legend
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
      ctx.fillRect(10, canvas.height - 100, 120, 90)
      ctx.strokeStyle = "#ccc"
      ctx.strokeRect(10, canvas.height - 100, 120, 90)

      ctx.fillStyle = "#333"
      ctx.font = "bold 12px Arial"
      ctx.textAlign = "left"
      ctx.fillText("Campus Map", 20, canvas.height - 80)

      ctx.font = "10px Arial"
      const legendItems = [
        { color: "#a78bfa", name: "Admin Building" },
        { color: "#93c5fd", name: "Science Complex" },
        { color: "#fca5a5", name: "Arts Center" },
        { color: "#fdba74", name: "Library" },
      ]

      legendItems.forEach((item, index) => {
        const y = canvas.height - 65 + index * 15
        ctx.fillStyle = item.color
        ctx.fillRect(20, y, 10, 10)
        ctx.fillStyle = "#333"
        ctx.fillText(item.name, 35, y + 8)
      })
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
    <div className="w-full h-full min-h-[300px] rounded-lg overflow-hidden border">
      <canvas ref={canvasRef} className="w-full h-full" style={{ touchAction: "none" }} />
    </div>
  )
}
