"use client"

import dynamic from "next/dynamic"

// Importa dinámicamente el mapa de Leaflet (evita problemas de SSR)
const LeafletMap = dynamic(() => import("./leaflet-map"), { ssr: false })

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
  return (
    <LeafletMap
      onProvinceSelect={onProvinceSelect}
      selectedProvince={selectedProvince}
    />
  )
}
