import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialButtonsProps {
  className?: string
  iconSize?: number
  variant?: "default" | "ghost" | "outline"
}

export default function SocialButtons({ className = "", iconSize = 20, variant = "ghost" }: SocialButtonsProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button variant={variant} size="icon" className="text-gray-300 hover:text-violet-400 rounded-full" asChild>
        <a href="https://github.com/tamara-melnik" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github size={iconSize} />
        </a>
      </Button>
      <Button variant={variant} size="icon" className="text-gray-300 hover:text-violet-400 rounded-full" asChild>
        <a
          href="https://www.linkedin.com/in/tamara-melnik/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={iconSize} />
        </a>
      </Button>
    </div>
  )
}
