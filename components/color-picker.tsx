"use client"

import { useState } from "react"
import { Palette } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const colorThemes = [
  { name: "Violeta/Verde", primary: "#8b5cf6", secondary: "#10b981" },
  { name: "Azul/Cyan", primary: "#3b82f6", secondary: "#06b6d4" },
  { name: "Rosa/Naranja", primary: "#ec4899", secondary: "#f97316" },
  { name: "Rojo/Amarillo", primary: "#ef4444", secondary: "#eab308" },
  { name: "Verde/Azul", primary: "#22c55e", secondary: "#3b82f6" },
]

export default function ColorPicker() {
  const [currentTheme, setCurrentTheme] = useState(0)

  const applyColorTheme = (index: number) => {
    const theme = colorThemes[index]
    document.documentElement.style.setProperty("--primary-color", theme.primary)
    document.documentElement.style.setProperty("--secondary-color", theme.secondary)
    setCurrentTheme(index)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-gray-300 hover:text-violet-400">
          <Palette className="h-5 w-5" />
          <span className="sr-only">Cambiar colores</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-900 border-violet-900/50">
        {colorThemes.map((theme, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => applyColorTheme(index)}
            className={`flex items-center gap-2 ${currentTheme === index ? "text-violet-400" : "text-gray-300"}`}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
              ></div>
              <span>{theme.name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
