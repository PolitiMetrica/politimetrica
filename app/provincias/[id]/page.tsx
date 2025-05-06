import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PoliticianCard } from "@/components/politician-card"
import { getProvinceById, getPoliticiansByProvince } from "@/lib/data"

export default async function ProvincePage({ params }: { params: { id: string } }) {
  const province = await getProvinceById(params.id)

  if (!province) {
    notFound()
  }

  const politicians = await getPoliticiansByProvince(params.id)

  return (
    <main className="container mx-auto py-6 space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Políticos de {province.name}</h1>
      </div>

      <Card className="bg-muted/50">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Provincia: {province.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{province.description}</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-sm font-medium">Capital</p>
              <p className="text-sm text-muted-foreground">{province.capital}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Población</p>
              <p className="text-sm text-muted-foreground">{province.population.toLocaleString()}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {politicians.length > 0 ? (
          politicians.map((politician) => <PoliticianCard key={politician.id} politician={politician} />)
        ) : (
          <div className="col-span-3 text-center py-8">
            <p className="text-muted-foreground">No se encontraron políticos para esta provincia.</p>
          </div>
        )}
      </div>
    </main>
  )
}
