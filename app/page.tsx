import Navbar from "@/components/navbar"
import AboutSection from "@/components/about-section"
import CareerSection from "@/components/career-section"
import ProjectsSection from "@/components/projects-section"
import TechnologiesSection from "@/components/technologies-section"
import ContactSection from "@/components/contact-section"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white overflow-hidden relative">
      {/* Grid background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(75, 75, 75, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(75, 75, 75, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <CustomCursor />
      <Navbar />
      <AboutSection />
      <CareerSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
