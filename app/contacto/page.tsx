import type { Metadata } from "next"
import { Mail, MapPin } from "lucide-react"

import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contacto | Politimétrica",
  description: "Ponte en contacto con nosotros para cualquier consulta o sugerencia.",
}

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Contacto</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
            <p className="text-muted-foreground mb-6">
              Estamos aquí para responder cualquier pregunta que puedas tener sobre Politimétrica. Completa el
              formulario y te responderemos lo antes posible.
            </p>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Información de contacto</h2>
            <div className="bg-card rounded-lg shadow-sm p-6 border">
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-politica-navy mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-lg">Dirección</h3>
                    <p className="text-muted-foreground">Tulcán, Ecuador</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-politica-navy mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-muted-foreground">politimetrica@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
              <p className="text-muted-foreground mb-4">
                Mantente al día con nuestras últimas actualizaciones y análisis políticos.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://x.com/PolitiMetrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-accent rounded-full p-3 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@politimetrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-accent rounded-full p-3 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                    <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                    <path d="M15 8v8a4 4 0 0 1-4 4" />
                    <line x1="15" y1="4" x2="15" y2="12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
