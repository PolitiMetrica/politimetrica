import { Suspense } from "react"
import Link from "next/link"
import { MapPin, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getPoliticians, getProvinces, getParties } from "@/lib/data"
import { SubscriptionBannerWrapper } from "@/components/subscription-banner"
import { SearchComponent } from "@/components/search-component"
import { PoliticiansStats } from "@/components/politicians-stats"
import { PoliticiansList } from "@/components/politicians-list"
import { FilteredMapComponent } from "@/components/filtered-map-component"

export default async function PoliticosPage() {
  // Obtenemos todos los políticos
  const politicians = await getPoliticians()
  const provinces = await getProvinces()
  const parties = await getParties()

  return (
    <main className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-politica-navy">Directorio de Políticos</h1>
          <p className="text-muted-foreground">Explora y analiza a los políticos ecuatorianos</p>
        </div>
        <div className="flex w-full md:w-auto items-center gap-2">
          <SearchComponent />
        </div>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2 bg-politica-slate/10">
          <TabsTrigger value="list" className="data-[state=active]:bg-politica-navy data-[state=active]:text-white">
            <User className="mr-2 h-4 w-4" />
            Políticos
          </TabsTrigger>
          <TabsTrigger value="map" className="data-[state=active]:bg-politica-navy data-[state=active]:text-white">
            <MapPin className="mr-2 h-4 w-4" />
            Mapa de Ecuador
          </TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="mt-6">
          <PoliticiansList initialPoliticians={politicians || []} provinces={provinces || []} parties={parties || []} />
        </TabsContent>

        <TabsContent value="map" className="mt-6">
          <Suspense fallback={<div className="h-full flex items-center justify-center">Cargando mapa...</div>}>
            <FilteredMapComponent parties={parties || []} />
          </Suspense>
        </TabsContent>
      </Tabs>

      {/* Añadimos el componente de estadísticas */}
      <PoliticiansStats />

      {/* Usamos el wrapper en lugar del componente directo */}
      <SubscriptionBannerWrapper />

      <div className="bg-politica-navy/5 p-6 rounded-lg border border-politica-navy/10">
        <h2 className="text-2xl font-bold mb-4 text-politica-navy">Comparar Políticos</h2>
        <p className="mb-4 text-politica-slate">
          Utiliza nuestra herramienta de comparación para evaluar a los políticos según diferentes criterios.
        </p>
        <Link href="/comparar">
          <Button variant="navy">Ir a Comparar</Button>
        </Link>
      </div>
    </main>
  )
}
