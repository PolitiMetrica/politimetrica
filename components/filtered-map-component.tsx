"use client"

import { useState, useEffect } from "react"
import { MapComponent } from "@/components/map-component"
import { getPoliticians, getPoliticiansByProvince, getParties } from "@/lib/data"
import type { Politician } from "@/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { PoliticianCard } from "@/components/politician-card"

export function FilteredMapComponent() {
  const [politicians, setPoliticians] = useState<Politician[]>([])
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null)
  const [selectedParty, setSelectedParty] = useState<string>("")
  const [provincePoliticians, setProvincePoliticians] = useState<Politician[]>([])
  const [parties, setParties] = useState<{ id: string; name: string }[]>([])
  const [highlightedProvinces, setHighlightedProvinces] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  // Cargar todos los políticos y partidos al inicio
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const allPoliticians = await getPoliticians()
        setPoliticians(allPoliticians || [])

        const partiesData = await getParties()
        setParties(partiesData || [])
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Actualizar las provincias destacadas cuando cambia el partido seleccionado
  useEffect(() => {
    if (selectedParty) {
      // Filtrar políticos por partido
      const filteredByParty = politicians.filter((p) => p.party.toLowerCase().includes(selectedParty.toLowerCase()))

      // Obtener las provincias únicas de estos políticos
      const provinces = [...new Set(filteredByParty.map((p) => p.province))]
      setHighlightedProvinces(provinces)
    } else {
      // Si no hay partido seleccionado, mostrar todas las provincias
      setHighlightedProvinces([])
    }
  }, [selectedParty, politicians])

  // Cargar políticos de la provincia seleccionada
  useEffect(() => {
    const fetchProvincePoliticians = async () => {
      if (!selectedProvince) {
        setProvincePoliticians([])
        return
      }

      setLoading(true)
      try {
        let filteredPoliticians = await getPoliticiansByProvince(selectedProvince)

        // Si hay un partido seleccionado, filtrar también por partido
        if (selectedParty) {
          filteredPoliticians = filteredPoliticians.filter((p) =>
            p.party.toLowerCase().includes(selectedParty.toLowerCase()),
          )
        }

        setProvincePoliticians(filteredPoliticians || [])
      } catch (error) {
        console.error("Error fetching province politicians:", error)
        setProvincePoliticians([])
      } finally {
        setLoading(false)
      }
    }

    fetchProvincePoliticians()
  }, [selectedProvince, selectedParty])

  const handleProvinceSelect = (provinceId: string) => {
    setSelectedProvince(provinceId)
  }

  const handlePartyChange = (value: string) => {
    setSelectedParty(value === "all" ? "" : value)
  }

  const handleClearFilters = () => {
    setSelectedProvince(null)
    setSelectedParty("")
    setHighlightedProvinces([])
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="w-full sm:w-64">
          <Select value={selectedParty} onValueChange={handlePartyChange}>
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por partido" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los partidos</SelectItem>
              {parties.map((party) => (
                <SelectItem key={party.id} value={party.id}>
                  {party.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button variant="outline" onClick={handleClearFilters} disabled={!selectedProvince && !selectedParty}>
          Limpiar filtros
        </Button>
      </div>

      {selectedParty && (
        <div className="text-sm text-muted-foreground">
          {highlightedProvinces.length > 0
            ? `Mostrando provincias con políticos del partido seleccionado (${highlightedProvinces.length} provincias)`
            : "No hay políticos de este partido en ninguna provincia"}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <Card className="h-[500px]">
            <CardHeader className="p-4">
              <CardTitle className="text-xl">
                Mapa de Provincias
                {selectedProvince && (
                  <span className="ml-2 text-muted-foreground">
                    - {selectedProvince.charAt(0).toUpperCase() + selectedProvince.slice(1)}
                  </span>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-[420px]">
              <MapComponent
                onProvinceSelect={handleProvinceSelect}
                selectedProvince={selectedProvince}
                highlightedProvinces={highlightedProvinces}
              />
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="h-[500px] overflow-auto">
            <CardHeader className="p-4 sticky top-0 bg-card z-10">
              <CardTitle className="text-xl">
                {selectedProvince
                  ? `Políticos de ${selectedProvince.charAt(0).toUpperCase() + selectedProvince.slice(1)}`
                  : "Selecciona una provincia"}
                {selectedParty && <span className="ml-2 text-muted-foreground">- {selectedParty}</span>}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : provincePoliticians.length > 0 ? (
                <div className="space-y-4">
                  {provincePoliticians.map((politician) => (
                    <PoliticianCard key={politician.id} politician={politician} />
                  ))}
                </div>
              ) : selectedProvince ? (
                <div className="text-center py-8 text-muted-foreground">
                  No se encontraron políticos
                  {selectedParty && " del partido seleccionado"}
                  en esta provincia
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  Selecciona una provincia para ver sus políticos
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
