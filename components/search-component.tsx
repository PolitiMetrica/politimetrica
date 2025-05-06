"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import Image from "next/image"

import { Input } from "@/components/ui/input"
import { searchPoliticians } from "@/lib/data"
import type { Politician } from "@/lib/types"

export function SearchComponent() {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Politician[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleSearch = async () => {
      if (query.trim().length < 2) {
        setResults([])
        return
      }

      setIsSearching(true)
      try {
        const searchResults = await searchPoliticians(query)
        setResults(searchResults.slice(0, 5)) // Limitamos a 5 resultados
      } catch (error) {
        console.error("Error al buscar:", error)
      } finally {
        setIsSearching(false)
      }
    }

    const debounceTimer = setTimeout(handleSearch, 300)
    return () => clearTimeout(debounceTimer)
  }, [query])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleInputFocus = () => {
    setShowResults(true)
  }

  const handlePoliticianClick = (id: string) => {
    router.push(`/politicos/${id}`)
    setShowResults(false)
    setQuery("")
  }

  return (
    <div className="relative w-full md:w-64" ref={searchRef}>
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Buscar políticos..."
        className="w-full pl-8"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={handleInputFocus}
      />

      {showResults && (query.trim().length >= 2 || results.length > 0) && (
        <div className="absolute z-10 top-full left-0 right-0 mt-1 bg-white rounded-md border border-politica-navy/20 shadow-lg max-h-60 overflow-y-auto">
          {isSearching ? (
            <div className="p-3 text-center text-sm text-muted-foreground">Buscando...</div>
          ) : results.length > 0 ? (
            <div className="p-1">
              {results.map((politician) => (
                <div
                  key={politician.id}
                  className="flex items-center gap-2 p-2 hover:bg-politica-navy/10 rounded cursor-pointer"
                  onClick={() => handlePoliticianClick(politician.id)}
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
                    <p className="text-xs text-muted-foreground truncate">
                      {politician.party} • {politician.province}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : query.trim().length >= 2 ? (
            <div className="p-3 text-center text-sm text-muted-foreground">No se encontraron resultados</div>
          ) : null}
        </div>
      )}
    </div>
  )
}
