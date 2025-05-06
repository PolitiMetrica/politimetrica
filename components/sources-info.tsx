import { Info } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function SourcesInfo() {
  return (
    <div className="space-y-4">
      <Alert className="bg-politica-navy/5 border-politica-navy/20">
        <Info className="h-4 w-4 text-politica-navy" />
        <AlertTitle className="text-politica-navy">Fuentes de información</AlertTitle>
        <AlertDescription>
          Los datos presentados en Politimétrica provienen de fuentes oficiales y verificadas.
        </AlertDescription>
      </Alert>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="sources">
          <AccordionTrigger className="text-sm">Ver fuentes detalladas</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 text-sm">
              <div>
                <h4 className="font-medium">Datos biográficos y trayectoria:</h4>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>
                    <a
                      href="https://www.asambleanacional.gob.ec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Asamblea Nacional del Ecuador
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.presidencia.gob.ec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Presidencia de la República del Ecuador
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.cne.gob.ec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Consejo Nacional Electoral
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.funcionjudicial.gob.ec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Consejo de la Judicatura
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium">Propuestas y cumplimiento:</h4>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>
                    <a
                      href="https://www.planificacion.gob.ec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Secretaría Nacional de Planificación
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.ecuadorencifras.gob.ec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Instituto Nacional de Estadística y Censos
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.fundamedios.org.ec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Fundamedios (Observatorio de medios)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.observatoriolegislativo.ec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Observatorio Legislativo
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium">Índices de aprobación:</h4>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>
                    <a
                      href="https://www.cedatos.com.ec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      CEDATOS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.perfiles.com.ec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Perfiles de Opinión
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.latinobarometro.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Latinobarómetro
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium">Transparencia y anticorrupción:</h4>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>
                    <a
                      href="https://www.transparencia.org.ec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Transparencia Ecuador
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.fundacioncideal.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Fundación Ciudadanía y Desarrollo
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.contraloria.gob.ec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Contraloría General del Estado
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
