"use client"

import { useState, useEffect } from "react"
import { BarChart, ChartContainer } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getPoliticiansStats } from "@/lib/data"
import { Skeleton } from "@/components/ui/skeleton"

export function PoliticiansStats() {
  const [stats, setStats] = useState<{
    totalPoliticians: number
    averageApproval: number
    averageExperience: number
    partiesCount: { [key: string]: number }
    provincesCount: { [key: string]: number }
  } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getPoliticiansStats()
        setStats(data)
      } catch (error) {
        console.error("Error al cargar estadísticas:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  // Preparar datos para el gráfico de partidos políticos
  const partiesData = stats
    ? Object.entries(stats.partiesCount)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 5) // Mostrar solo los 5 principales partidos
    : []

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-politica-navy">Estadísticas de Políticos</CardTitle>
        <CardDescription>Resumen de datos sobre políticos ecuatorianos</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-politica-navy/5 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-politica-navy mb-1">Total de Políticos</h3>
            {loading ? (
              <Skeleton className="h-6 w-16" />
            ) : (
              <p className="text-2xl font-bold">{stats?.totalPoliticians}</p>
            )}
          </div>
          <div className="bg-politica-burgundy/5 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-politica-burgundy mb-1">Aprobación Promedio</h3>
            {loading ? (
              <Skeleton className="h-6 w-16" />
            ) : (
              <p className="text-2xl font-bold">{stats?.averageApproval.toFixed(1)}%</p>
            )}
          </div>
          <div className="bg-politica-gold/5 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-politica-gold mb-1">Experiencia Promedio</h3>
            {loading ? (
              <Skeleton className="h-6 w-16" />
            ) : (
              <p className="text-2xl font-bold">{stats?.averageExperience.toFixed(1)} años</p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-medium text-politica-navy mb-3">Distribución por Partido Político</h3>
          {loading ? (
            <div className="h-64 flex items-center justify-center">
              <p className="text-muted-foreground">Cargando datos...</p>
            </div>
          ) : (
            <div className="h-64">
              <ChartContainer className="h-full">
                <BarChart
                  data={partiesData}
                  xAxis={[
                    {
                      dataKey: "name",
                      tickRotation: -45,
                    },
                  ]}
                  yAxis={[
                    {
                      dataKey: "value",
                    },
                  ]}
                  series={[
                    {
                      dataKey: "value",
                      label: "Políticos",
                      valueFormatter: (value) => `${value} políticos`,
                      color: "#0A2463",
                    },
                  ]}
                />
              </ChartContainer>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
