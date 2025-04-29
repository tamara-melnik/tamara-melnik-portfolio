"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import SectionTitle from "./section-title"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-black relative">
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
        <SectionTitle title="contact" />

        <div className="max-w-xl">
          {/* Información de contacto */}
          <div className="bg-white dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200 dark:border-violet-900/20">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-full text-violet-600 dark:text-violet-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Email</h4>
                  <a
                    href="mailto:contact@tamamelnik.com"
                    className="text-violet-600 dark:text-violet-400 hover:underline"
                  >
                    tami.melnik01@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-full text-violet-600 dark:text-violet-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+598 95203470</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-full text-violet-600 dark:text-violet-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Montevideo, Uruguay</p>
                </div>
              </div>
            </div>

            <div className="mt-8"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
