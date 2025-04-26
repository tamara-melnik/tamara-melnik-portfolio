import { Calendar, MapPin, Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import SectionTitle from "./section-title"
import Image from "next/image"

// Datos de ejemplo - reemplaza con tu información real
const careerData = [
  {
    title: "Ssr Fullstack Developer",
    company: "Paycorr",
    logo: "/images/companies/paycorr_logo.svg",
    period: "April 2024 - Now",
    location: "Hybrid - Montevideo, Uruguay",
    type: "Full-time",
    description:
      "Specialized in full-stack development with Angular, JavaScript, Node.js, and SQL/NoSQL databases. Skilled in implementing scalable and secure architectures, performance optimization, and RESTful API development.",
    skills: ["Angular", "Node.js", "Javascript", "SQL", "AWS"],
  },
  {
    title: "Fullstack Developer",
    company: "FlowLabs",
    logo: "/images/companies/flowlabs_logo.png",
    period: "Set 2022 - Set 2023",
    location: "Hybrid - Montevideo, Uruguay",
    type: "Full-time",
    description:
      "Web application development using PHP, Vue, and PostgreSQL. Implemented authentication and authorization, integrated third-party APIs, and optimized database queries. Developed a custom CRM system for a security company, tailoring features to their specific operational needs and workflows.",
    skills: ["PHP", "Vue", "PostgreSQL", "Docker", "CI/CD"],
  },
  {
    title: "FullStack Developer",
    company: "Globant",
    logo: "/images/companies/globant_logo.png",
    period: "Dec 2021 - July 2022",
    location: "Remote - Montevideo, Uruguay",
    type: "Full-time",
    description:
      "User interface development using Java, HTML, CSS, and JavaScript, with a focus on responsive design, performance optimization, and web accessibility. Additionally, provided continuous client support, maintaining close communication with clients and collaborating with an international team.",
    skills: ["HTML", "CSS", "JavaScript", "JAVA", "SQL"],
  },
]

export default function CareerSection() {
  return (
    <section id="career" className="py-20 bg-gray-50 dark:bg-black relative">
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
        <SectionTitle title="career" />

        <div className="relative">
          {/* Línea de tiempo vertical */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-600 to-green-500 transform -translate-x-1/2"></div>

          {careerData.map((job, index) => (
            <div key={index} className="relative mb-16">
              {/* Punto en la línea de tiempo */}
              <div className="absolute left-1/2 top-10 w-4 h-4 rounded-full bg-violet-500 transform -translate-x-1/2 z-10"></div>

              <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}>
                {/* Espacio para mantener la línea de tiempo centrada en móviles */}
                <div className="md:w-1/2"></div>

                {/* Tarjeta de experiencia */}
                <div className="md:w-1/2">
                  <div className="bg-white dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-violet-900/20 rounded-xl p-6 shadow-lg hover:shadow-violet-500/10 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center relative">
                        <Image
                          src={job.logo || "/placeholder.svg"}
                          alt={`${job.company} logo`}
                          fill
                          className="object-contain p-1"
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{job.title}</h3>
                        <p className="text-violet-600 dark:text-violet-400">{job.company}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-violet-600 dark:text-violet-400" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-violet-600 dark:text-violet-400" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} className="text-violet-600 dark:text-violet-400" />
                        <span>{job.type}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="bg-gray-100/50 dark:bg-gray-800/50 text-violet-600 dark:text-violet-300 border-violet-200 dark:border-violet-900/50 hover:bg-violet-100 dark:hover:bg-violet-900/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
