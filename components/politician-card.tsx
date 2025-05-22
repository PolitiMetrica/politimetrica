"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { BarChart2, Award, CheckCircle } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Politician } from "@/lib/types"

interface PoliticianCardProps {
  politician: Politician
}

export function PoliticianCard({ politician }: PoliticianCardProps) {
  const [imgSrc, setImgSrc] = useState(politician.image || "/placeholder.svg")

  const handleError = () => {
    setImgSrc("/placeholder.svg")
  }

  // Obtener el nombre de la provincia para mostrar
  const getProvinceName = (provinceId: string): string => {
    const provinceMap: Record<string, string> = {
      pichincha: "Pichincha",
      guayas: "Guayas",
      azuay: "Azuay",
      bolivar: "Bolívar",
      canar: "Cañar",
      carchi: "Carchi",
      cotopaxi: "Cotopaxi",
      chimborazo: "Chimborazo",
      "el-oro": "El Oro",
      esmeraldas: "Esmeraldas",
      galapagos: "Galápagos",
      imbabura: "Imbabura",
      loja: "Loja",
      "los-rios": "Los Ríos",
      manabi: "Manabí",
      "morona-santiago": "Morona Santiago",
      napo: "Napo",
      pastaza: "Pastaza",
      tungurahua: "Tungurahua",
      "zamora-chinchipe": "Zamora Chinchipe",
      sucumbios: "Sucumbíos",
      orellana: "Orellana",
      "santo-domingo": "Santo Domingo",
      "santa-elena": "Santa Elena",
    }

    return provinceMap[provinceId] || provinceId
  }

  return (
    <Card className="overflow-hidden border-politica-slate/20 hover:border-politica-navy/30 transition-colors">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={imgSrc}
            alt={politician.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Imagen oculta para detectar error */}
          <img
            src={imgSrc}
            alt=""
            onError={handleError}
            style={{ display: "none" }}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-politica-navy/90 to-transparent p-4">
            <h3 className="text-white font-bold text-xl">{politician.name}</h3>
            <p className="text-white/80 text-sm">{politician.currentPosition}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="outline" className="border-politica-navy/30 text-politica-navy">
            {politician.party}
          </Badge>
          <Badge variant="outline" className="border-politica-slate/30 text-politica-slate">
            {getProvinceName(politician.province)}
          </Badge>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-politica-burgundy" />
            <span className="text-sm">Experiencia: {politician.experience} años</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-politica-navy" />
            <span className="text-sm">Propuestas cumplidas: {politician.proposalsFulfilled}%</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart2 className="h-4 w-4 text-politica-gold" />
            <span className="text-sm">Índice de aprobación: {politician.approvalRating}%</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Link href={`/politicos/${politician.id}`}>
          <Button
            variant="outline"
            size="sm"
            className="border-politica-navy/30 text-politica-navy hover:bg-politica-navy/10"
          >
            Ver Perfil
          </Button>
        </Link>
        <Link href={`/comparar?id=${politician.id}`}>
          <Button
            variant="ghost"
            size="sm"
            className="text-politica-slate hover:text-politica-navy hover:bg-politica-navy/10"
          >
            Comparar
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
