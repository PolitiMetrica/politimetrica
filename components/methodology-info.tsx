import { BarChart2 } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function MethodologyInfo() {
  return (
    <div className="space-y-4">
      <Alert className="bg-politica-burgundy/5 border-politica-burgundy/20">
        <BarChart2 className="h-4 w-4 text-politica-burgundy" />
        <AlertTitle className="text-politica-burgundy">Metodología de evaluación</AlertTitle>
        <AlertDescription>
          Politimétrica utiliza una metodología multidimensional para evaluar el desempeño de los políticos
          ecuatorianos.
        </AlertDescription>
      </Alert>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="methodology">
          <AccordionTrigger className="text-sm">Ver detalles de la metodología</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 text-sm">
              <p className="text-muted-foreground">
                Nuestra evaluación se basa en cinco dimensiones principales, cada una con indicadores específicos que
                son ponderados para obtener una calificación integral:
              </p>

              <div>
                <h4 className="font-medium">Gestión Económica (25%)</h4>
                <p className="text-muted-foreground">
                  Evalúa la capacidad del político para gestionar recursos públicos, implementar políticas económicas
                  efectivas y generar desarrollo económico en su ámbito de acción.
                </p>
              </div>

              <div>
                <h4 className="font-medium">Transparencia (20%)</h4>
                <p className="text-muted-foreground">
                  Mide el nivel de acceso a la información pública, la rendición de cuentas y la integridad en la
                  gestión del político.
                </p>
              </div>

              <div>
                <h4 className="font-medium">Liderazgo (20%)</h4>
                <p className="text-muted-foreground">
                  Evalúa la capacidad de dirección, toma de decisiones, comunicación efectiva y construcción de
                  consensos.
                </p>
              </div>

              <div>
                <h4 className="font-medium">Cumplimiento (25%)</h4>
                <p className="text-muted-foreground">
                  Analiza el nivel de cumplimiento de propuestas, promesas de campaña y compromisos adquiridos durante
                  su gestión.
                </p>
              </div>

              <div>
                <h4 className="font-medium">Comunicación (10%)</h4>
                <p className="text-muted-foreground">
                  Evalúa la efectividad en la comunicación con la ciudadanía, la transparencia informativa y la
                  accesibilidad.
                </p>
              </div>

              <p className="text-muted-foreground mt-4">
                Los datos son actualizados trimestralmente y revisados por un comité independiente de expertos en
                ciencias políticas, economía y administración pública.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
