"use client"

import { useRef, useEffect } from "react"
import { Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar el tamaño del canvas
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Crear manos luminosas
    class Hand {
      x: number
      y: number
      size: number
      opacity: number
      speed: number
      angle: number
      rotationSpeed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = 30 + Math.random() * 40
        this.opacity = 0.1 + Math.random() * 0.4
        this.speed = 0.2 + Math.random() * 0.3
        this.angle = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.01
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed
        this.angle += this.rotationSpeed

        // Rebote en los bordes
        if (this.x < 0 || this.x > canvas.width) {
          this.angle = Math.PI - this.angle
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.angle = -this.angle
        }
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)

        // Dibujar mano estilizada con efecto de brillo
        ctx.beginPath()
        ctx.shadowBlur = 15
        ctx.shadowColor = "rgba(139, 92, 246, 0.8)"

        // Forma de mano simplificada
        ctx.moveTo(0, -this.size / 2)
        ctx.lineTo(-this.size / 4, 0)
        ctx.lineTo(-this.size / 8, this.size / 2)
        ctx.lineTo(0, this.size / 3)
        ctx.lineTo(this.size / 8, this.size / 2)
        ctx.lineTo(this.size / 4, 0)
        ctx.closePath()

        // Gradiente para el efecto luminoso
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity + 0.2})`)
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${this.opacity})`)
        gradient.addColorStop(1, "rgba(16, 185, 129, 0)")

        ctx.fillStyle = gradient
        ctx.fill()
        ctx.restore()
      }
    }

    // Crear múltiples manos
    const hands: Hand[] = []
    for (let i = 0; i < 5; i++) {
      hands.push(new Hand())
    }

    // Animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Fondo oscuro con efecto de desvanecimiento
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Actualizar y dibujar manos
      hands.forEach((hand) => {
        hand.update()
        hand.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section id="about" className="min-h-screen pt-20 pb-10 relative overflow-hidden flex items-center">
      {/* Canvas para la animación de manos */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-12 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Columna de texto */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block">Hi! I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-green-400">
                Tamara Melnik
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              Fullstack developer specialized in creating modern web experiences with a focus on performance,
              accessibility and beautiful design. Passionate about turning ideas into functional and elegant solutions.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                className="bg-gradient-to-r from-violet-600 to-green-500 hover:opacity-90 text-white"
                size="lg"
                asChild
              >
                <a href="#technologies">
                  View Skills <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-violet-500 text-gray-800 dark:text-white hover:bg-violet-100 dark:hover:bg-violet-900/20"
                asChild
              >
                <a href="/tamara-melnik-cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Columna de imagen */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Círculo de fondo con gradiente */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-violet-600/20 to-green-400/20 blur-xl"></div>

              {/* Imagen de perfil */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <Image
                  src="/images/profile/tamara-profile.png"
                  alt="Tamara Melnik"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>

              {/* Destellos decorativos */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-violet-500/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 -left-10 w-16 h-16 bg-green-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
