"use client"

import { useRef, useState, useEffect, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Text, Environment, Float, Html } from "@react-three/drei"
import { Vector3 } from "three"
import { Calendar, Download, Github, Linkedin, Mail } from "lucide-react"

// Componente de carga separado para evitar problemas de actualización de estado
function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-24 h-24 border-4 border-t-violet-600 border-green-400 rounded-full animate-spin"></div>
        <p className="mt-4 text-white text-xl">Cargando...</p>
      </div>
    </Html>
  )
}

function Orb() {
  const meshRef = useRef(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
    }
  })

  return (
    <Sphere ref={meshRef} args={[1.5, 32, 32]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

function FloatingText() {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5} position={[0, -0.5, 0]}>
      <Text
        font="/fonts/Inter_Bold.json"
        fontSize={0.8}
        position={[0, -2.5, 0]}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        FULLSTACK DEVELOPER
      </Text>
      <Text
        font="/fonts/Inter_Bold.json"
        fontSize={1.5}
        position={[0, -3.5, 0]}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        TU NOMBRE
      </Text>
    </Float>
  )
}

function SmallOrbs() {
  const orbs = Array(5)
    .fill()
    .map((_, i) => {
      const angle = (i / 5) * Math.PI * 2
      const radius = 3
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      const y = (Math.random() - 0.5) * 2
      const size = 0.2 + Math.random() * 0.2

      return { position: new Vector3(x, y, z), size }
    })

  return (
    <>
      {orbs.map((orb, i) => (
        <Float key={i} speed={2} rotationIntensity={2} floatIntensity={2}>
          <Sphere args={[orb.size, 16, 16]} position={orb.position.toArray()}>
            <meshStandardMaterial
              color={i % 2 === 0 ? "#8b5cf6" : "#10b981"}
              emissive={i % 2 === 0 ? "#8b5cf6" : "#10b981"}
              emissiveIntensity={0.5}
            />
          </Sphere>
        </Float>
      ))}
    </>
  )
}

// Fallback simple para cuando la escena 3D no se puede cargar
function Fallback() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black dark:bg-black">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-green-400">
          TU NOMBRE
        </h1>
        <p className="text-2xl text-gray-800 dark:text-white">FULLSTACK DEVELOPER</p>

        <div className="flex justify-center mt-6 gap-4">
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors"
          >
            <Github size={24} className="text-gray-800 dark:text-white" />
          </a>
          <a
            href="https://linkedin.com/in/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors"
          >
            <Linkedin size={24} className="text-gray-800 dark:text-white" />
          </a>
          <a
            href="mailto:tu-email@ejemplo.com"
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors"
          >
            <Mail size={24} className="text-gray-800 dark:text-white" />
          </a>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-violet-600 to-green-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
          >
            Ver Proyectos
          </a>
          <a
            href="https://calendly.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black dark:bg-black border border-violet-500 rounded-full text-white font-medium hover:bg-violet-900/20 transition-all flex items-center gap-2"
          >
            <Calendar size={18} />
            Agendar una Reunión
          </a>
          <a
            href="/tu-cv.pdf"
            download
            className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-full font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-all flex items-center gap-2"
          >
            <Download size={18} />
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  )
}

export default function HeroScene() {
  const [mounted, setMounted] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Detectar errores en WebGL
    const canvas = document.createElement("canvas")
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")

    if (!gl) {
      console.error("WebGL no está soportado en este navegador")
      setError(true)
    }

    return () => {
      // Limpieza
    }
  }, [])

  // Si hay un error o no está montado, mostrar el fallback
  if (!mounted || error) {
    return <Fallback />
  }

  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        onError={() => setError(true)}
        dpr={[1, 2]} // Limitar DPR para mejor rendimiento
        performance={{ min: 0.5 }} // Ajustar rendimiento
      >
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />

        <Suspense fallback={<Loader />}>
          <Orb />
          <FloatingText />
          <SmallOrbs />
          <Environment preset="night" />
          <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-24 left-0 right-0 text-center flex flex-wrap gap-4 justify-center">
        <a
          href="#projects"
          className="px-6 py-3 bg-gradient-to-r from-violet-600 to-green-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
        >
          Ver Proyectos
        </a>
        <a
          href="https://calendly.com/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-black dark:bg-black border border-violet-500 rounded-full text-white font-medium hover:bg-violet-900/20 transition-all flex items-center gap-2"
        >
          <Calendar size={18} />
          Agendar una Reunión
        </a>
        <a
          href="/tu-cv.pdf"
          download
          className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-full font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-all flex items-center gap-2"
        >
          <Download size={18} />
          Descargar CV
        </a>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="flex gap-4">
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors"
          >
            <Github size={24} className="text-gray-800 dark:text-white" />
          </a>
          <a
            href="https://linkedin.com/in/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors"
          >
            <Linkedin size={24} className="text-gray-800 dark:text-white" />
          </a>
          <a
            href="mailto:tu-email@ejemplo.com"
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors"
          >
            <Mail size={24} className="text-gray-800 dark:text-white" />
          </a>
        </div>
      </div>
    </div>
  )
}
