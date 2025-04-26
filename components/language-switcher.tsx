"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

type Language = "es" | "en"

interface LanguageSwitcherProps {
  onLanguageChange?: (language: Language) => void
}

export default function LanguageSwitcher({ onLanguageChange }: LanguageSwitcherProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("es")

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language)
    if (onLanguageChange) {
      onLanguageChange(language)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-gray-300 hover:text-violet-400">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Cambiar idioma</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-900 border-violet-900/50">
        <DropdownMenuItem
          onClick={() => handleLanguageChange("es")}
          className={`flex items-center gap-2 ${currentLanguage === "es" ? "text-violet-400" : "text-gray-300"}`}
        >
          <span className="text-sm">🇪🇸 Español</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange("en")}
          className={`flex items-center gap-2 ${currentLanguage === "en" ? "text-violet-400" : "text-gray-300"}`}
        >
          <span className="text-sm">🇺🇸 English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
