"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Terminal } from "lucide-react"
import SectionTitle from "./section-title"

const projectsData = [
  {
    id: "foxsys",
    title: "Foxsys",
    url: "Foxsys.sh",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "An advanced security CRM tailored for remote concierge services in Uruguay. Foxsys streamlines access control, visitor registration, incident reporting, and communication between residents and operators. Through an intuitive dashboard, users can manage building entries, monitor real-time activity logs, and ensure a secure and efficient environment for gated communities and residential complexes",
    technologies: ["PHP", "javascript", "vue.js", "SQL", "API Rest"],
  },
  {
    id: "fintiate",
    title: "Fintiate",
    url: "Fintiate.sh",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "A comprehensive financial insights platform offering real-time market analysis, trading blogs, and detailed reviews of top-rated trading firms and brokers. Users can access expert trading insights, compare brokers, track market trends, and make informed investment decisions through curated financial content and analysis tools.",
    technologies: ["next", "typescript", "aws", "node", "azure", "express"],
  },
  {
    id: "prime-marketing",
    title: "Prime Marketing Experts",
    url: "Prime Marketing Experts.sh",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "A dynamic digital marketing agency specializing in comprehensive SEO solutions, brand development, and online visibility enhancement. The platform showcases their expertise in search engine optimization, content marketing, social media management, and data-driven marketing strategies. Their services include detailed website analysis, competitor research, keyword optimization, and customized marketing campaigns to help businesses achieve higher rankings and increased organic traffic.",
    technologies: ["next", "typescript", "azure", "aws", "express", "node"],
  },
]

// Mapeo de tecnologías a sus iconos
const techIcons: Record<string, { icon: string; bg: string }> = {
  next: { icon: "N", bg: "bg-black dark:bg-gray-800" },
  typescript: { icon: "TS", bg: "bg-blue-600" },
  node: { icon: "N", bg: "bg-green-600" },
  express: { icon: "EX", bg: "bg-gray-800" },
  aws: { icon: "AWS", bg: "bg-orange-600" },
  azure: { icon: "AZ", bg: "bg-blue-500" },
}

export default function ProjectsSection() {
  const [devMode, setDevMode] = useState(false)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black relative">
      {/* Grid background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(75, 75, 75, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(75, 75, 75, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-12">
          <SectionTitle title="projects" className="mb-0" />
          <div className="flex items-center gap-2">
            <span className="text-gray-600 dark:text-gray-400">Dev Mode</span>
            <Switch checked={devMode} onCheckedChange={setDevMode} className="data-[state=checked]:bg-green-500" />
            <Terminal className="h-5 w-5 text-green-600 dark:text-green-400" />
          </div>
        </div>

        {devMode ? (
          <div className="bg-gray-100 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-green-900/30 rounded-lg p-6 font-mono text-sm">
            <div className="text-green-600 dark:text-green-400 mb-6">Commands</div>

            <div className="mb-4">
              <span className="text-green-600 dark:text-green-400">ls</span>
              <span className="text-gray-600 dark:text-gray-400"> - unlock my featured projects</span>
            </div>

            <div className="mb-4">
              <span className="text-green-600 dark:text-green-400">view [project-name]</span>
              <span className="text-gray-600 dark:text-gray-400"> - discover more about the project</span>
            </div>

            <div className="mb-4">
              <span className="text-green-600 dark:text-green-400">clear</span>
              <span className="text-gray-600 dark:text-gray-400"> - clear terminal</span>
            </div>

            <div className="text-green-600 dark:text-green-400 flex items-center">
              &gt;&gt;&gt;
              <span className="ml-1 animate-pulse">|</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-violet-300 dark:hover:border-violet-900/50 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {/* Header con los círculos de colores */}
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">{project.url}</div>
                </div>

                {/* Imagen del proyecto */}
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                {/* Información del proyecto */}
                <div className="p-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-4 line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className={`w-8 h-8 ${techIcons[tech]?.bg || "bg-gray-700"} rounded flex items-center justify-center text-xs font-bold text-white`}
                        title={tech.charAt(0).toUpperCase() + tech.slice(1)}
                      >
                        {techIcons[tech]?.icon || tech.substring(0, 2).toUpperCase()}
                      </div>
                    ))}
                    {project.technologies.length > 5 && (
                      <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-xs font-bold text-white">
                        + More
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
