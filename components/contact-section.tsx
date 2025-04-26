"use client"

import type React from "react"

import { useState } from "react"
import { Send, Mail, Phone, MapPin, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SectionTitle from "./section-title"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Aquí iría la lógica real de envío del formulario
    console.log("Form submitted:", formState)

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", subject: "", message: "" })

    // Resetear el estado después de mostrar el mensaje de éxito
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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

          {/* Formulario de contacto */}
          <div className="bg-white dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200 dark:border-violet-900/20">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send a Message</h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <Check size={32} className="text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Message Sent!</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet-600 to-green-500 hover:opacity-90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
