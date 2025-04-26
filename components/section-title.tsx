interface SectionTitleProps {
  title: string
  className?: string
}

export default function SectionTitle({ title, className = "" }: SectionTitleProps) {
  return <h2 className={`text-3xl font-mono font-bold text-green-400 mb-12 ${className}`}>$ ~/ {title}</h2>
}
