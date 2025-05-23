"use client"

import { useEffect, useRef, useState } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import ecuadorGeoJson from "@/lib/ecuador-provinces.json" // Necesitarás este archivo GeoJSON

interface MapComponentProps {
  onProvinceSelect: (provinceId: string) => void
  selectedProvince: string | null
  highlightedProvinces: string[]
}

export default function MapComponent({
  onProvinceSelect,
  selectedProvince,
  highlightedProvinces = [],
}: MapComponentProps) {
  const mapRef = useRef<L.Map | null>(null)
  const geoJsonLayerRef = useRef<L.GeoJSON | null>(null)
  const [mapInitialized, setMapInitialized] = useState(false)

  // Inicializar el mapa
  useEffect(() => {
    if (typeof window === "undefined") return

    // Si el mapa ya está inicializado, no lo volvemos a crear
    if (mapInitialized) return

    // Crear el mapa si no existe
    if (!mapRef.current) {
      // Coordenadas aproximadas del centro de Ecuador
      const ecuadorCenter = [-1.8312, -78.1834]
      
      mapRef.current = L.map("map", {
        center: ecuadorCenter,
        zoom: 7,
        zoomControl: true,
        attributionControl: true,
      })

      // Añadir capa base de OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current)

      setMapInitialized(true)
    }

    // Limpiar al desmontar
    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
        setMapInitialized(false)
      }
    }
  }, [mapInitialized])

  // Añadir GeoJSON de provincias
  useEffect(() => {
    if (!mapRef.current || !mapInitialized || !ecuadorGeoJson) return

    // Eliminar capa anterior si existe
    if (geoJsonLayerRef.current) {
      geoJsonLayerRef.current.remove()
    }

    // Función para estilizar las provincias
    const styleProvince = (feature: any) => {
      const provinceId = feature.properties.id_provincia?.toLowerCase() || 
                         feature.properties.name?.toLowerCase().replace(/\s+/g, "-") ||
                         feature.properties.provincia?.toLowerCase().replace(/\s+/g, "-")
      
      const isSelected = selectedProvince === provinceId
      const isHighlighted = highlightedProvinces.includes(provinceId)

      return {
        fillColor: isSelected ? "#3b82f6" :
