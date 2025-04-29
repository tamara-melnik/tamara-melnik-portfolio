"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import SectionTitle from "./section-title"

// Datos de tecnologías por categoría
const technologies = {
  frontend: [
    //{ name: "React", icon: "react", level: 90 },
    { name: "Next.js", icon: "nextjs", level: 90 },
    { name: "Javascript", icon: "javascript", level: 80 },
    { name: "Tailwind CSS", icon: "tailwind", level: 90 },
    { name: "Angular", icon: "angular", level: 95 },
    { name: "HTML5", icon: "html", level: 95 },
    { name: "CSS3", icon: "css", level: 90 },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs", level: 90 },
    { name: "PHP", icon: "php", level: 90 },
    { name: "MongoDB", icon: "mongodb", level: 75 },
    { name: "PostgreSQL", icon: "postgresql", level: 70 },
  ],
  tools: [
    { name: "Git", icon: "git", level: 85 },
    { name: "Docker", icon: "docker", level: 70 },
    { name: "AWS", icon: "aws", level: 65 },
    { name: "VS Code", icon: "vscode", level: 90 },
  ],
}

// Componente para mostrar una tecnología individual con animación
const TechItem = ({ name, icon, level, index }: { name: string; icon: string; level: number; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
        <div className="flex flex-col items-center">
          {/* Icono de la tecnología */}
          <div className="w-16 h-16 mb-4 relative">
            <div className="absolute inset-0 bg-violet-500/10 dark:bg-violet-500/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <TechIcon name={icon} />
            </div>
          </div>

          {/* Nombre de la tecnología */}
          <h3 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white mb-2">{name}</h3>

          {/* Barra de nivel */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${level}%` }}
              transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
              className="h-2.5 rounded-full bg-gradient-to-r from-violet-600 to-green-500"
            ></motion.div>
          </div>

          {/* Nivel en porcentaje */}
          <span className="text-sm text-gray-600 dark:text-gray-400">{level}%</span>
        </div>

        {/* Efecto de partículas al hacer hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-green-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
      </div>
    </motion.div>
  )
}

// Componente para mostrar iconos de tecnologías
const TechIcon = ({ name }: { name: string }) => {
  // Aquí podrías usar SVGs reales para cada tecnología
  // Por ahora usamos letras como placeholder
  const iconMap: Record<string, string> = {
    react: "⚛️",
    nextjs: "N",
    javascript: "JS",
    tailwind: "TW",
    html: "HTML",
    css: "CSS",
    nodejs: "🌿",
    mongodb: "🍃",
    postgresql: "🐘",
    git: "🔧",
    docker: "🐳",
    aws: "☁️",
    vscode: "🖥️",
    php: "🐘",
    angular: "A",
  }

  return (
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600/20 to-green-500/20 flex items-center justify-center text-xl font-bold text-gray-800 dark:text-white">
      {iconMap[name] || name.substring(0, 2).toUpperCase()}
    </div>
  )
}

// Componente para la animación de partículas flotantes
const ParticlesBackground = () => {
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

    // Crear partículas
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = Math.random() > 0.5 ? "rgba(139, 92, 246, 0.5)" : "rgba(16, 185, 129, 0.5)"
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Rebote en los bordes
        if (this.x < 0 || this.x > canvas.width) {
          this.speedX = -this.speedX
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Crear múltiples partículas
    const particles: Particle[] = []
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle())
    }

    // Animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Actualizar y dibujar partículas
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
}

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof technologies>("frontend")
  const categories = Object.keys(technologies) as Array<keyof typeof technologies>

  return (
    <section id="technologies" className="py-20 bg-gray-50 dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <ParticlesBackground />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title="technologies" />

        {/* Selector de categorías */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-violet-600 to-green-500 text-white shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid de tecnologías */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies[activeCategory].map((tech, index) => (
            <TechItem key={tech.name} {...tech} index={index} />
          ))}
        </div>

        {/* Texto descriptivo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <p className="text-gray-600 dark:text-gray-400">
            My tech stack is constantly evolving. I specialize in modern web development with a focus on performance, accessibility, and exceptional user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
