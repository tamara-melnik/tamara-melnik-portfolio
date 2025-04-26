import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-green-400 flex items-center justify-center text-white font-bold text-xl">
        {/* Puedes reemplazar esto con tus iniciales o un ícono personalizado */}
        TM
      </div>
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-green-400">
        Tamara Melnik
      </span>
    </Link>
  )
}
