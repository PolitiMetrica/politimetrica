"use client"

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BarChart2, Info, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { PremiumContent } from "@/components/premium-content"
import { getPoliticians, getPoliticianById, comparePoliticians } from "@/lib/data"
import { SourcesInfo } from "@/components/sources-info"
import { MethodologyInfo } from "@/components/methodology-info"
import type { Politician } from "@/lib/types"

export default function CompararPage() {
  const searchParams = useSearchParams()
  const initialId = searchParams.get("id")

  const [politicians, setPoliticians] = useState<Politician[]>([])
  const [selectedPoliticians, setSelectedPoliticians] = useState<Politician[]>([])
  const [loading, setLoading] = useState(true)
  const [activeSelector, setActiveSelector] = useState<number | null>(null)
  const [comparisonData, setComparisonData] = useState<any>(null)

  // Referencias para detectar clics fuera de los selectores
  const selectorRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const allPoliticians = await getPoliticians()
        setPoliticians(allPoliticians || [])

        if (initialId) {
          const politician = await getPoliticianById(initialId)
          if (politician) {
            setSelectedPoliticians([politician])
          }
        }
      } catch (error) {
        console.error("Error fetching politicians:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [initialId])

  // Efecto para cerrar el selector al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        activeSelector !== null &&
        selectorRefs.current[activeSelector] &&
        !selectorRefs.current[activeSelector]?.contains(event.target as Node)
      ) {
        setActiveSelector(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeSelector])

  // Efecto para actualizar los datos de comparación cuando cambian los políticos seleccionados
  useEffect(() => {
    const updateComparisonData = async () => {
      if (selectedPoliticians.length >= 2) {
        try {
          const ids = selectedPoliticians.map((p) => p.id)
          const data = await comparePoliticians(ids)
          setComparisonData(data.comparisonData)
        } catch (error) {
          console.error("Error al obtener datos de comparación:", error)
        }
      } else {
        setComparisonData(null)
      }
    }

    updateComparisonData()
  }, [selectedPoliticians])

  const handleAddPolitician = async (id: string) => {
    if (selectedPoliticians.length >= 3) {
      return
    }

    if (selectedPoliticians.some((p) => p.id === id)) {
      return
    }

    const politician = await getPoliticianById(id)
    if (politician) {
      setSelectedPoliticians([...selectedPoliticians, politician])
      setActiveSelector(null) // Cerrar el selector después de seleccionar
    }
  }

  const handleRemovePolitician = (id: string) => {
    setSelectedPoliticians(selectedPoliticians.filter((p) => p.id !== id))
  }

  const toggleSelector = (index: number) => {
    setActiveSelector(activeSelector === index ? null : index)
  }

  // Filtrar políticos que ya están seleccionados
  const availablePoliticians = politicians.filter((p) => !selectedPoliticians.some((sp) => sp.id === p.id))

  return (
    <main className="container mx-auto py-6 space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-politica-navy">Comparar Políticos</h1>
      </div>

      {/* Añadir componentes de fuentes y metodología */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-politica-navy/20">
          <CardContent className="p-6">
            <SourcesInfo />
          </CardContent>
        </Card>
        <Card className="border-politica-navy/20">
          <CardContent className="p-6">
            <MethodologyInfo />
          </CardContent>
        </Card>
      </div>

      <Card className="border-politica-navy/20">
        <CardHeader>
          <CardTitle className="text-politica-navy">Selecciona políticos para comparar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Select onValueChange={(value) => handleAddPolitician(value)} disabled={selectedPoliticians.length >= 3}>
                <SelectTrigger className="border-politica-navy/20">
                  <SelectValue placeholder="Seleccionar político" />
                </SelectTrigger>
                <SelectContent>
                  {politicians.map((politician) => (
                    <SelectItem
                      key={politician.id}
                      value={politician.id}
                      disabled={selectedPoliticians.some((p) => p.id === politician.id)}
                    >
                      {politician.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-muted-foreground flex items-center">
              <Info className="h-4 w-4 mr-2" />
              Puedes comparar hasta 3 políticos
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {selectedPoliticians.map((politician) => (
              <Card key={politician.id} className="relative border-politica-navy/20">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 h-6 w-6 text-politica-burgundy hover:bg-politica-burgundy/10"
                  onClick={() => handleRemovePolitician(politician.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <CardContent className="p-4 flex flex-col items-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mb-2">
                    <Image
                      src={politician.image || "/placeholder.svg"}
                      alt={politician.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-center text-politica-navy">{politician.name}</h3>
                  <p className="text-sm text-muted-foreground text-center">{politician.party}</p>
                </CardContent>
              </Card>
            ))}

            {Array.from({ length: 3 - selectedPoliticians.length }).map((_, index) => (
              <div key={`empty-${index}`} className="relative" ref={(el) => (selectorRefs.current[index] = el)}>
                <Card
                  className={`border-dashed border-politica-slate/30 cursor-pointer hover:border-politica-navy/50 hover:bg-politica-navy/5 transition-colors ${activeSelector === index ? "border-politica-navy" : ""}`}
                  onClick={() => toggleSelector(index)}
                >
                  <CardContent className="p-4 flex flex-col items-center justify-center h-[140px]">
                    <div className="bg-muted rounded-full p-3 mb-2">
                      <Plus className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">Añadir político</p>
                  </CardContent>
                </Card>

                {/* Selector de políticos que aparece al hacer clic */}
                {activeSelector === index && (
                  <div className="absolute z-10 top-full left-0 right-0 mt-1 bg-white rounded-md border border-politica-navy/20 shadow-lg max-h-60 overflow-y-auto">
                    {availablePoliticians.length > 0 ? (
                      <div className="p-1">
                        {availablePoliticians.map((politician) => (
                          <div
                            key={politician.id}
                            className="flex items-center gap-2 p-2 hover:bg-politica-navy/10 rounded cursor-pointer"
                            onClick={() => handleAddPolitician(politician.id)}
                          >
                            <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                src={politician.image || "/placeholder.svg"}
                                alt={politician.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-politica-navy truncate">{politician.name}</p>
                              <p className="text-xs text-muted-foreground truncate">{politician.party}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-3 text-center text-sm text-muted-foreground">
                        No hay más políticos disponibles
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedPoliticians.length > 0 && (
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-3 bg-politica-slate/10">
            <TabsTrigger
              value="general"
              className="data-[state=active]:bg-politica-navy data-[state=active]:text-white"
            >
              General
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

          <TabsContent value="general" className="mt-6">
            <Card className="border-politica-navy/20">
              <CardHeader>
                <CardTitle className="text-politica-navy">Comparación General</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-4 text-politica-slate">Experiencia Política (años)</h3>
                    <div className="space-y-4">
                      {selectedPoliticians.map((politician) => (
                        <div key={politician.id} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{politician.name}</span>
                            <span>{politician.experience} años</span>
                          </div>
                          <Progress
                            value={politician.experience * 5}
                            className="h-2"
                            indicatorClassName="bg-politica-navy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator className="bg-politica-slate/20" />

                  <div>
                    <h3 className="text-sm font-medium mb-4 text-politica-slate">Propuestas Cumplidas (%)</h3>
                    <div className="space-y-4">
                      {selectedPoliticians.map((politician) => (
                        <div key={politician.id} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{politician.name}</span>
                            <span>{politician.proposalsFulfilled}%</span>
                          </div>
                          <Progress
                            value={politician.proposalsFulfilled}
                            className="h-2"
                            indicatorClassName="bg-politica-burgundy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator className="bg-politica-slate/20" />

                  <div>
                    <h3 className="text-sm font-medium mb-4 text-politica-slate">Índice de Aprobación (%)</h3>
                    <div className="space-y-4">
                      {selectedPoliticians.map((politician) => (
                        <div key={politician.id} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{politician.name}</span>
                            <span>{politician.approvalRating}%</span>
                          </div>
                          <Progress
                            value={politician.approvalRating}
                            className="h-2"
                            indicatorClassName="bg-politica-gold"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="propuestas" className="mt-6">
            <Card className="border-politica-navy/20">
              <CardHeader>
                <CardTitle className="text-politica-navy">Comparación de Propuestas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-politica-slate/20">
                        <th className="text-left py-2 px-4 font-medium text-politica-navy">Categoría</th>
                        {selectedPoliticians.map((politician) => (
                          <th key={politician.id} className="text-left py-2 px-4 font-medium text-politica-navy">
                            {politician.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-politica-slate/20">
                        <td className="py-2 px-4 font-medium">Economía</td>
                        {selectedPoliticians.map((politician) => (
                          <td key={politician.id} className="py-2 px-4">
                            {politician.proposals
                              .filter((p) => p.category === "Economía")
                              .map((p, i) => (
                                <div key={i} className="mb-2 last:mb-0">
                                  <div className="flex items-center gap-2">
                                    <Badge
                                      variant={
                                        p.status === "Cumplida"
                                          ? "default"
                                          : p.status === "En progreso"
                                            ? "outline"
                                            : "secondary"
                                      }
                                      className={
                                        p.status === "Cumplida"
                                          ? "bg-politica-navy text-white"
                                          : p.status === "En progreso"
                                            ? "border-politica-gold text-politica-gold"
                                            : ""
                                      }
                                    >
                                      {p.status}
                                    </Badge>
                                    <span className="text-sm">{p.title}</span>
                                  </div>
                                </div>
                              ))}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-politica-slate/20">
                        <td className="py-2 px-4 font-medium">Educación</td>
                        {selectedPoliticians.map((politician) => (
                          <td key={politician.id} className="py-2 px-4">
                            {politician.proposals
                              .filter((p) => p.category === "Educación")
                              .map((p, i) => (
                                <div key={i} className="mb-2 last:mb-0">
                                  <div className="flex items-center gap-2">
                                    <Badge
                                      variant={
                                        p.status === "Cumplida"
                                          ? "default"
                                          : p.status === "En progreso"
                                            ? "outline"
                                            : "secondary"
                                      }
                                      className={
                                        p.status === "Cumplida"
                                          ? "bg-politica-navy text-white"
                                          : p.status === "En progreso"
                                            ? "border-politica-gold text-politica-gold"
                                            : ""
                                      }
                                    >
                                      {p.status}
                                    </Badge>
                                    <span className="text-sm">{p.title}</span>
                                  </div>
                                </div>
                              ))}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-politica-slate/20">
                        <td className="py-2 px-4 font-medium">Salud</td>
                        {selectedPoliticians.map((politician) => (
                          <td key={politician.id} className="py-2 px-4">
                            {politician.proposals
                              .filter((p) => p.category === "Salud")
                              .map((p, i) => (
                                <div key={i} className="mb-2 last:mb-0">
                                  <div className="flex items-center gap-2">
                                    <Badge
                                      variant={
                                        p.status === "Cumplida"
                                          ? "default"
                                          : p.status === "En progreso"
                                            ? "outline"
                                            : "secondary"
                                      }
                                      className={
                                        p.status === "Cumplida"
                                          ? "bg-politica-navy text-white"
                                          : p.status === "En progreso"
                                            ? "border-politica-gold text-politica-gold"
                                            : ""
                                      }
                                    >
                                      {p.status}
                                    </Badge>
                                    <span className="text-sm">{p.title}</span>
                                  </div>
                                </div>
                              ))}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analisis" className="mt-6">
            <PremiumContent>
              <Card className="border-politica-navy/20">
                <CardHeader>
                  <CardTitle className="text-politica-navy">Análisis Comparativo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-4 text-politica-slate">Evaluación por Categorías</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm mb-2 text-politica-navy">Gestión Económica</h4>
                          <div className="space-y-2">
                            {selectedPoliticians.map((politician) => (
                              <div key={politician.id} className="space-y-1">
                                <div className="flex justify-between text-sm">
                                  <span>{politician.name}</span>
                                  <div className="flex items-center">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                      <BarChart2
                                        key={i}
                                        className={`h-4 w-4 ${
                                          i <
                                          (
                                            politician.analysis?.categories.find((c) => c.name === "Gestión Económica")
                                              ?.rating || 0
                                          )
                                            ? "text-politica-navy"
                                            : "text-muted-foreground"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                                <Progress
                                  value={
                                    (politician.analysis?.categories.find((c) => c.name === "Gestión Económica")
                                      ?.rating || 0) * 20
                                  }
                                  className="h-2"
                                  indicatorClassName="bg-politica-navy"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm mb-2 text-politica-navy">Transparencia</h4>
                          <div className="space-y-2">
                            {selectedPoliticians.map((politician) => (
                              <div key={politician.id} className="space-y-1">
                                <div className="flex justify-between text-sm">
                                  <span>{politician.name}</span>
                                  <div className="flex items-center">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                      <BarChart2
                                        key={i}
                                        className={`h-4 w-4 ${
                                          i <
                                          (
                                            politician.analysis?.categories.find((c) => c.name === "Transparencia")
                                              ?.rating || 0
                                          )
                                            ? "text-politica-burgundy"
                                            : "text-muted-foreground"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                                <Progress
                                  value={
                                    (politician.analysis?.categories.find((c) => c.name === "Transparencia")?.rating ||
                                      0) * 20
                                  }
                                  className="h-2"
                                  indicatorClassName="bg-politica-burgundy"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm mb-2 text-politica-navy">Liderazgo</h4>
                          <div className="space-y-2">
                            {selectedPoliticians.map((politician) => (
                              <div key={politician.id} className="space-y-1">
                                <div className="flex justify-between text-sm">
                                  <span>{politician.name}</span>
                                  <div className="flex items-center">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                      <BarChart2
                                        key={i}
                                        className={`h-4 w-4 ${
                                          i <
                                          (
                                            politician.analysis?.categories.find((c) => c.name === "Liderazgo")
                                              ?.rating || 0
                                          )
                                            ? "text-politica-gold"
                                            : "text-muted-foreground"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                                <Progress
                                  value={
                                    (politician.analysis?.categories.find((c) => c.name === "Liderazgo")?.rating || 0) *
                                    20
                                  }
                                  className="h-2"
                                  indicatorClassName="bg-politica-gold"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator className="bg-politica-slate/20" />

                    <div>
                      <h3 className="text-sm font-medium mb-4 text-politica-slate">Recomendación</h3>
                      <Card className="bg-politica-navy/5 border-politica-navy/20">
                        <CardContent className="p-4">
                          <p className="text-sm">
                            Basado en nuestro análisis,{" "}
                            {selectedPoliticians.length > 1
                              ? `${selectedPoliticians[0].name} muestra mejores indicadores en general, especialmente en términos de cumplimiento de propuestas y gestión económica.`
                              : `Para obtener una recomendación, por favor selecciona al menos dos políticos para comparar.`}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </PremiumContent>
          </TabsContent>
        </Tabs>
      )}
    </main>
  )
}
