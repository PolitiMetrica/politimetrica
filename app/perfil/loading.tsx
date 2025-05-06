import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function PerfilLoading() {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        <div className="h-10 w-48 bg-muted animate-pulse rounded-md mb-6"></div>

        <div className="grid gap-6">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="h-8 w-48 bg-muted animate-pulse rounded-md"></div>
                <div className="h-8 w-24 bg-muted animate-pulse rounded-md"></div>
              </div>
              <div className="h-4 w-64 bg-muted animate-pulse rounded-md mt-2"></div>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center gap-4">
                <div className="h-24 w-24 rounded-full bg-muted animate-pulse"></div>
                <div className="text-center">
                  <div className="h-5 w-32 bg-muted animate-pulse rounded-md"></div>
                  <div className="h-4 w-24 bg-muted animate-pulse rounded-md mt-2"></div>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="grid gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="grid gap-2">
                      <div className="h-4 w-24 bg-muted animate-pulse rounded-md"></div>
                      <div className="h-10 w-full bg-muted animate-pulse rounded-md"></div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-8 w-48 bg-muted animate-pulse rounded-md"></div>
              <div className="h-4 w-64 bg-muted animate-pulse rounded-md mt-2"></div>
            </CardHeader>
            <CardContent>
              <div className="h-40 bg-muted animate-pulse rounded-md"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
