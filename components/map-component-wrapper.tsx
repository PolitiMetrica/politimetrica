"use client"

import { useEffect, useRef } from "react"

interface MapComponentProps {
  onProvinceSelect: (provinceId: string) => void
  selectedProvince: string | null
  highlightedProvinces: string[]
}

export default function MapComponentWrapper({
  onProvinceSelect,
  selectedProvince,
  highlightedProvinces = [],
}: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Aquí iría la lógica del mapa (puedes dejarlo vacío por ahora)
  }, [selectedProvince, highlightedProvinces])

  return <div ref={mapRef} className="w-full h-full bg-gray-200">Mapa aquí</div>
}
