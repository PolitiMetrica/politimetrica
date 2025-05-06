import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart2, MapPin, Search, Shield, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SubscriptionBannerWrapper } from "@/components/subscription-banner"

export default function HomePage() {
  return (
    <main className="container mx-auto py-6 space-y-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-politica-navy leading-tight">
              Transparencia y análisis político para Ecuador
            </h1>
            <p className="text-lg text-muted-foreground">
              Politimétrica es la primera plataforma dedicada a medir, analizar y evaluar el desempeño de los políticos
              ecuatorianos con datos objetivos y transparentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/politicos">
                <Button size="lg" className="w-full sm:w-auto">
                  Explorar políticos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/metodologia">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Conocer metodología
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Politimétrica - Análisis político ecuatoriano"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ¿Qué es Politimétrica? */}
      <section className="py-12 bg-politica-navy/5 rounded-lg">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-politica-navy mb-4">¿Qué es Politimétrica?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Una plataforma innovadora que utiliza datos y métricas para evaluar objetivamente a los políticos
              ecuatorianos, promoviendo la transparencia y la rendición de cuentas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-politica-navy/20">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-politica-navy/10 p-3 rounded-full mb-4">
                  <BarChart2 className="h-8 w-8 text-politica-navy" />
                </div>
                <h3 className="text-xl font-bold text-politica-navy mb-2">Análisis de Datos</h3>
                <p className="text-muted-foreground">
                  Recopilamos y analizamos datos sobre propuestas, cumplimiento y desempeño de los políticos
                  ecuatorianos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-politica-navy/20">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-politica-navy/10 p-3 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-politica-navy" />
                </div>
                <h3 className="text-xl font-bold text-politica-navy mb-2">Transparencia</h3>
                <p className="text-muted-foreground">
                  Promovemos la transparencia en la política ecuatoriana mediante información accesible y verificable.
                </p>
              </CardContent>
            </Card>

            <Card className="border-politica-navy/20">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-politica-navy/10 p-3 rounded-full mb-4">
                  <Users className="h-8 w-8 text-politica-navy" />
                </div>
                <h3 className="text-xl font-bold text-politica-navy mb-2">Participación Ciudadana</h3>
                <p className="text-muted-foreground">
                  Facilitamos herramientas para que los ciudadanos puedan tomar decisiones informadas sobre sus
                  representantes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-politica-navy mb-4">Nuestras Herramientas</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Descubre las diferentes formas en que puedes explorar y analizar la información política en nuestra
              plataforma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <div className="bg-politica-navy/10 p-3 rounded-full">
                <Search className="h-6 w-6 text-politica-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-politica-navy mb-2">Directorio de Políticos</h3>
                <p className="text-muted-foreground mb-3">
                  Explora nuestro completo directorio de políticos ecuatorianos con información detallada sobre su
                  trayectoria, propuestas y cumplimiento.
                </p>
                <Link href="/politicos">
                  <Button variant="link" className="p-0 h-auto text-politica-navy">
                    Ver directorio
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-politica-navy/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-politica-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-politica-navy mb-2">Mapa Político</h3>
                <p className="text-muted-foreground mb-3">
                  Visualiza la distribución geográfica de los políticos por provincia y partido político en nuestro mapa
                  interactivo.
                </p>
                <Link href="/politicos">
                  <Button variant="link" className="p-0 h-auto text-politica-navy">
                    Explorar mapa
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-politica-navy/10 p-3 rounded-full">
                <BarChart2 className="h-6 w-6 text-politica-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-politica-navy mb-2">Comparador de Políticos</h3>
                <p className="text-muted-foreground mb-3">
                  Compara hasta 3 políticos simultáneamente para evaluar su desempeño, propuestas y cumplimiento de
                  manera objetiva.
                </p>
                <Link href="/comparar">
                  <Button variant="link" className="p-0 h-auto text-politica-navy">
                    Comparar políticos
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-politica-navy/10 p-3 rounded-full">
                <Shield className="h-6 w-6 text-politica-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-politica-navy mb-2">Metodología Transparente</h3>
                <p className="text-muted-foreground mb-3">
                  Conoce en detalle cómo evaluamos a los políticos, nuestras fuentes de información y los criterios que
                  utilizamos.
                </p>
                <Link href="/metodologia">
                  <Button variant="link" className="p-0 h-auto text-politica-navy">
                    Ver metodología
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Suscripción */}
      <SubscriptionBannerWrapper />

      {/* Llamado a la acción final */}
      <section className="py-12 bg-politica-navy text-white rounded-lg">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Comienza a explorar la política ecuatoriana</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Descubre, analiza y compara a los políticos ecuatorianos con datos objetivos y transparentes.
          </p>
          <Link href="/politicos">
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Explorar ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
