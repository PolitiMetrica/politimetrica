"use client"

import { useState, useEffect } from "react"
import { Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { PoliticianCard } from "@/components/politician-card"
import type { Politician, Province } from "@/lib/types"

interface PoliticiansListProps {
  initialPoliticians: Politician[]
  provinces: Province[]
  parties: { id: string; name: string }[]
}

export function PoliticiansList({ initialPoliticians = [], provinces = [], parties = [] }: PoliticiansListProps) {
  const [selectedProvince, setSelectedProvince] = useState<string>("")
  const [selectedParty, setSelectedParty] = useState<string>("")
  const [filteredPoliticians, setFilteredPoliticians] = useState<Politician[]>(initialPoliticians || [])
  const [visibleCount, setVisibleCount] = useState(6)

  // Aplicar filtros cuando cambien las selecciones
  useEffect(() => {
    let result = [...(initialPoliticians || [])]

    if (selectedProvince) {
      result = result.filter((p) => p.province === selectedProvince)
    }

    if (selectedParty) {
      result = result.filter((p) => p.party.includes(selectedParty))
    }

    setFilteredPoliticians(result)
    // Resetear el contador de visibles cuando cambian los filtros
    setVisibleCount(6)
  }, [selectedProvince, selectedParty, initialPoliticians])

  // Manejador para limpiar filtros
  const handleClearFilters = () => {
    setSelectedProvince("")
    setSelectedParty("")
  }

  // Manejador para cargar más políticos
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6)
  }

  // Políticos visibles actualmente
  const visiblePoliticians = filteredPoliticians?.slice(0, visibleCount) || []
  const hasMore = visibleCount < (filteredPoliticians?.length || 0)

  return (
    <div className="space-y-6">
      {/* Filtros */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <div className="flex items-center gap-2 mb-2">
          <Filter className="h-5 w-5 text-gray-500" />
          <h3 className="font-medium">Filtros</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="province-select" className="block text-sm font-medium text-gray-700 mb-1">
              Provincia
            </label>
            <Select value={selectedProvince} onValueChange={setSelectedProvince}>
              <SelectTrigger id="province-select" className="w-full">
                <SelectValue placeholder="Todas las provincias" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las provincias</SelectItem>
                {provinces.map((province) => (
                  <SelectItem key={province.id} value={province.id}>
                    {province.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="party-select" className="block text-sm font-medium text-gray-700 mb-1">
              Partido Político
            </label>
            <Select value={selectedParty} onValueChange={setSelectedParty}>
              <SelectTrigger id="party-select" className="w-full">
                <SelectValue placeholder="Todos los partidos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los partidos</SelectItem>
                {parties.map((party) => (
                  <SelectItem key={party.id} value={party.name}>
                    {party.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end">
            <Button variant="outline" onClick={handleClearFilters} className="w-full md:w-auto">
              Limpiar filtros
            </Button>
          </div>
        </div>
      </div>

      {/* Lista de políticos */}
      {visiblePoliticians.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePoliticians.map((politician) => (
            <PoliticianCard key={politician.id} politician={politician} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-50 rounded-lg border">
          <p className="text-gray-500">No se encontraron políticos con los filtros seleccionados.</p>
        </div>
      )}

      {/* Botón para cargar más */}
      {hasMore && (
        <div className="text-center mt-6">
          <Button onClick={handleLoadMore} variant="outline">
            Ver más políticos
          </Button>
        </div>
      )}
    </div>
  )
}
