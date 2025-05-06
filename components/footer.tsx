import Link from "next/link"
import { Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { LogoComponent } from "@/components/logo-component"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <LogoComponent size="medium" />
            <p className="text-sm text-muted-foreground">
              Plataforma para la medición y evaluación de políticos ecuatorianos.
            </p>
            <div className="flex space-x-2">
              <Link href="https://x.com/PolitiMetrica" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter/X</span>
                </Button>
              </Link>
              <Link href="https://www.tiktok.com/@politimetrica" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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
                  <span className="sr-only">TikTok</span>
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/politicos"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Políticos
                </Link>
              </li>
              <li>
                <Link
                  href="/comparar"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Comparar
                </Link>
              </li>
              <li>
                <Link
                  href="/metodologia"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Metodología
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/suscripcion"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Planes de suscripción
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contacto</h3>
            <address className="not-italic space-y-2">
              <p className="text-sm text-muted-foreground">Tulcán, Ecuador</p>
              <p className="text-sm text-muted-foreground">politimetrica@gmail.com</p>
            </address>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Politimétrica. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
