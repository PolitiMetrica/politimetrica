import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Award, BarChart2, CheckCircle, Clock, FileText, MapPin, Share2, Star, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { getPoliticianById } from "@/lib/data"
import { PremiumContent } from "@/components/premium-content"
import { SocialButton } from "@/components/social-button"
import { SourcesInfo } from "@/components/sources-info"
import { MethodologyInfo } from "@/components/methodology-info"

export default async function PoliticianPage({ params }: { params: { id: string } }) {
  const politician = await getPoliticianById(params.id)

  if (!politician) {
    notFound()
  }

  return (
    <main className="container mx-auto py-6 space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-politica-navy">Perfil del Político</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-politica-navy/20">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src={politician.image || "/placeholder.svg"}
                  alt={politician.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-politica-navy">{politician.name}</h2>
              <p className="text-muted-foreground">{politician.currentPosition}</p>

              <div className="flex flex-wrap gap-2 justify-center mt-2">
                <Badge variant="outline" className="border-politica-navy/30 text-politica-navy">
                  {politician.party}
                </Badge>
                <Badge variant="outline" className="border-politica-slate/30 text-politica-slate">
                  {politician.province}
                </Badge>
              </div>

              {/* Botones de redes sociales */}
              <div className="flex justify-center gap-2 mt-4">
                <SocialButton
                  network="facebook"
                  url={`https://facebook.com/${politician.name.toLowerCase().replace(/\s+/g, ".")}`}
                  ariaLabel={`Facebook de ${politician.name}`}
                />
                <SocialButton
                  network="instagram"
                  url={`https://instagram.com/${politician.name.toLowerCase().replace(/\s+/g, "")}`}
                  ariaLabel={`Instagram de ${politician.name}`}
                />
                <SocialButton
                  network="tiktok"
                  url={`https://tiktok.com/@${politician.name.toLowerCase().replace(/\s+/g, "")}`}
                  ariaLabel={`TikTok de ${politician.name}`}
                />
              </div>

              <Separator className="my-4 bg-politica-slate/20" />

              <div className="w-full space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-politica-burgundy" />
                    <span className="text-sm">Experiencia</span>
                  </div>
                  <span className="font-medium">{politician.experience} años</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-politica-navy" />
                    <span className="text-sm">Propuestas cumplidas</span>
                  </div>
                  <span className="font-medium">{politician.proposalsFulfilled}%</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <BarChart2 className="h-4 w-4 text-politica-gold" />
                    <span className="text-sm">Aprobación</span>
                  </div>
                  <span className="font-medium">{politician.approvalRating}%</span>
                </div>
              </div>

              <div className="flex gap-2 mt-6 w-full">
                <Button className="flex-1" variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Compartir
                </Button>
                <Link href={`/comparar?id=${politician.id}`} className="flex-1">
                  <Button className="w-full" size="sm" variant="navy">
                    Comparar
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="border-politica-navy/20">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3 text-politica-navy">Información Personal</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <User className="h-4 w-4 text-politica-burgundy mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Edad</p>
                    <p className="text-sm text-muted-foreground">{politician.age} años</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-politica-navy mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Lugar de nacimiento</p>
                    <p className="text-sm text-muted-foreground">{politician.birthplace}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-politica-gold mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Inicio en política</p>
                    <p className="text-sm text-muted-foreground">{politician.careerStart}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Añadir componente de fuentes de información */}
          <Card className="border-politica-navy/20">
            <CardContent className="p-6">
              <SourcesInfo />
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="biografia" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-politica-slate/10">
              <TabsTrigger
                value="biografia"
                className="data-[state=active]:bg-politica-navy data-[state=active]:text-white"
              >
                Biografía
              </TabsTrigger>
              <TabsTrigger
                value="trayectoria"
                className="data-[state=active]:bg-politica-navy data-[state=active]:text-white"
              >
                Trayectoria
              </TabsTrigger>
              <TabsTrigger
                value="propuestas"
                className="data-[state=active]:bg-politica-navy data-[state=active]:text-white"
              >
                Propuestas
              </TabsTrigger>
              <TabsTrigger
                value="analisis"
                className="data-[state=active]:bg-politica-navy data-[state=active]:text-white"
              >
                Análisis
              </TabsTrigger>
            </TabsList>

            <TabsContent value="biografia" className="mt-6 space-y-4">
              <div className="prose max-w-none">
                <h3 className="text-politica-navy">Biografía</h3>
                <p>{politician.biography}</p>
              </div>
            </TabsContent>

            <TabsContent value="trayectoria" className="mt-6 space-y-4">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-politica-navy">Cargos Ocupados</h3>
                <div className="space-y-4">
                  {politician.career.map((position, index) => (
                    <Card key={index} className="border-politica-navy/20">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-politica-navy">{position.title}</h4>
                            <p className="text-sm text-muted-foreground">{position.organization}</p>
                          </div>
                          <Badge variant="outline" className="border-politica-gold/50 text-politica-gold">
                            {position.period}
                          </Badge>
                        </div>
                        <p className="text-sm mt-2">{position.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="propuestas" className="mt-6 space-y-4">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-politica-navy">Propuestas Principales</h3>
                <div className="space-y-4">
                  {politician.proposals.map((proposal, index) => (
                    <Card key={index} className="border-politica-navy/20">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-politica-navy">{proposal.title}</h4>
                          <Badge
                            variant={
                              proposal.status === "Cumplida"
                                ? "default"
                                : proposal.status === "En progreso"
                                  ? "outline"
                                  : "secondary"
                            }
                            className={
                              proposal.status === "Cumplida"
                                ? "bg-politica-navy text-white"
                                : proposal.status === "En progreso"
                                  ? "border-politica-gold text-politica-gold"
                                  : ""
                            }
                          >
                            {proposal.status}
                          </Badge>
                        </div>
                        <p className="text-sm mb-3">{proposal.description}</p>
                        {proposal.progress !== undefined && (
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span>Progreso</span>
                              <span>{proposal.progress}%</span>
                            </div>
                            <Progress
                              value={proposal.progress}
                              className="h-2"
                              indicatorClassName={
                                proposal.status === "Cumplida"
                                  ? "bg-politica-navy"
                                  : proposal.status === "En progreso"
                                    ? "bg-politica-gold"
                                    : "bg-muted"
                              }
                            />
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analisis" className="mt-6 space-y-4">
              <PremiumContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-politica-navy">Análisis de Desempeño</h3>
                  </div>

                  {/* Añadir componente de metodología */}
                  <MethodologyInfo />

                  <Card className="border-politica-navy/20">
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-4 text-politica-navy">Evaluación por Categorías</h4>
                      <div className="space-y-4">
                        {politician.analysis?.categories.map((category, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>{category.name}</span>
                              <div className="flex items-center">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < category.rating
                                        ? "text-politica-gold fill-politica-gold"
                                        : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <Progress
                              value={category.rating * 20}
                              className="h-2"
                              indicatorClassName="bg-politica-gold"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-politica-navy/20">
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2 text-politica-navy">Análisis Detallado</h4>
                      <p className="text-sm">{politician.analysis?.detailed}</p>
                    </CardContent>
                  </Card>

                  <Card className="border-politica-navy/20">
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2 text-politica-navy">Fortalezas y Debilidades</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <h5 className="text-sm font-medium mb-2 text-politica-navy">Fortalezas</h5>
                          <ul className="space-y-1">
                            {politician.analysis?.strengths.map((strength, index) => (
                              <li key={index} className="text-sm flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                                <span>{strength}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium mb-2 text-politica-navy">Debilidades</h5>
                          <ul className="space-y-1">
                            {politician.analysis?.weaknesses.map((weakness, index) => (
                              <li key={index} className="text-sm flex items-start gap-2">
                                <FileText className="h-4 w-4 text-politica-burgundy mt-0.5" />
                                <span>{weakness}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </PremiumContent>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
