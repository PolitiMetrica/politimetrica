import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MetodologiaPage() {
  return (
    <main className="container mx-auto py-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-politica-navy">Metodología y Fuentes</h1>
        <p className="text-muted-foreground mt-2">
          Conoce cómo evaluamos a los políticos y de dónde obtenemos nuestra información
        </p>
      </div>

      <Tabs defaultValue="metodologia" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2 bg-politica-slate/10">
          <TabsTrigger
            value="metodologia"
            className="data-[state=active]:bg-politica-navy data-[state=active]:text-white"
          >
            Metodología
          </TabsTrigger>
          <TabsTrigger value="fuentes" className="data-[state=active]:bg-politica-navy data-[state=active]:text-white">
            Fuentes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="metodologia" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Nuestra Metodología de Evaluación</CardTitle>
              <CardDescription>
                Politimétrica utiliza un enfoque multidimensional para evaluar el desempeño de los políticos
                ecuatorianos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                En Politimétrica, nos comprometemos a proporcionar evaluaciones objetivas y basadas en datos sobre los
                políticos ecuatorianos. Nuestra metodología ha sido desarrollada por un equipo de expertos en ciencias
                políticas, economía, estadística y administración pública, y se actualiza constantemente para reflejar
                las mejores prácticas internacionales.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-politica-navy">Dimensiones de Evaluación</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-politica-navy/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Gestión Económica (25%)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Evalúa la capacidad del político para gestionar recursos públicos, implementar políticas
                        económicas efectivas y generar desarrollo económico en su ámbito de acción.
                      </p>
                      <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground">
                        <li>Ejecución presupuestaria</li>
                        <li>Generación de empleo</li>
                        <li>Atracción de inversiones</li>
                        <li>Desarrollo de infraestructura</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-politica-navy/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Transparencia (20%)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Mide el nivel de acceso a la información pública, la rendición de cuentas y la integridad en la
                        gestión del político.
                      </p>
                      <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground">
                        <li>Declaraciones patrimoniales</li>
                        <li>Acceso a información pública</li>
                        <li>Procesos de contratación</li>
                        <li>Rendición de cuentas</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-politica-navy/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Liderazgo (20%)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Evalúa la capacidad de dirección, toma de decisiones, comunicación efectiva y construcción de
                        consensos.
                      </p>
                      <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground">
                        <li>Capacidad de negociación</li>
                        <li>Gestión de crisis</li>
                        <li>Construcción de equipos</li>
                        <li>Visión estratégica</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-politica-navy/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Cumplimiento (25%)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Analiza el nivel de cumplimiento de propuestas, promesas de campaña y compromisos adquiridos
                        durante su gestión.
                      </p>
                      <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground">
                        <li>Propuestas de campaña</li>
                        <li>Compromisos públicos</li>
                        <li>Planes de gobierno</li>
                        <li>Proyectos implementados</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-politica-navy/20 md:col-span-2">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Comunicación (10%)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Evalúa la efectividad en la comunicación con la ciudadanía, la transparencia informativa y la
                        accesibilidad.
                      </p>
                      <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground">
                        <li>Claridad del mensaje</li>
                        <li>Accesibilidad a medios y ciudadanía</li>
                        <li>Uso de canales de comunicación</li>
                        <li>Respuesta a críticas y cuestionamientos</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-politica-navy">Proceso de Evaluación</h3>
                <p>Nuestro proceso de evaluación sigue un riguroso protocolo que incluye:</p>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Recopilación de datos:</strong> Obtenemos información de fuentes oficiales, medios de
                    comunicación verificados, organizaciones de la sociedad civil y encuestas de opinión pública.
                  </li>
                  <li>
                    <strong>Análisis cuantitativo:</strong> Aplicamos indicadores objetivos y medibles para cada
                    dimensión de evaluación.
                  </li>
                  <li>
                    <strong>Revisión por expertos:</strong> Un panel independiente de expertos revisa y valida las
                    evaluaciones.
                  </li>
                  <li>
                    <strong>Actualización periódica:</strong> Los datos se actualizan trimestralmente para reflejar los
                    cambios en el desempeño.
                  </li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-politica-navy">Sistema de Calificación</h3>
                <p>Utilizamos un sistema de calificación de 1 a 5 estrellas para cada categoría, donde:</p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>
                    <strong>1 estrella:</strong> Desempeño deficiente
                  </li>
                  <li>
                    <strong>2 estrellas:</strong> Desempeño por debajo del promedio
                  </li>
                  <li>
                    <strong>3 estrellas:</strong> Desempeño promedio
                  </li>
                  <li>
                    <strong>4 estrellas:</strong> Desempeño por encima del promedio
                  </li>
                  <li>
                    <strong>5 estrellas:</strong> Desempeño sobresaliente
                  </li>
                </ul>
                <p className="text-muted-foreground mt-2">
                  La calificación final se obtiene mediante un promedio ponderado de las cinco dimensiones, considerando
                  el peso asignado a cada una.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fuentes" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Nuestras Fuentes de Información</CardTitle>
              <CardDescription>
                Politimétrica utiliza fuentes oficiales y verificadas para garantizar la precisión de sus evaluaciones
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                La calidad de nuestras evaluaciones depende directamente de la calidad de nuestras fuentes. Por ello,
                nos aseguramos de utilizar únicamente fuentes confiables y verificables, priorizando siempre la
                información oficial y los datos de organizaciones reconocidas.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-politica-navy">Fuentes Oficiales</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-politica-navy/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Instituciones Gubernamentales</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground">
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
                            href="https://www.contraloria.gob.ec"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            Contraloría General del Estado
                          </a>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-politica-navy/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Estadísticas y Datos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground">
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
                            href="https://www.bce.fin.ec"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            Banco Central del Ecuador
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.supercias.gob.ec"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            Superintendencia de Compañías
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.sri.gob.ec"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            Servicio de Rentas Internas
                          </a>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-politica-navy">Organizaciones Independientes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-politica-navy/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Transparencia y Anticorrupción</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground">
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
                            href="https://www.observatoriolegislativo.ec"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            Observatorio Legislativo
                          </a>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-politica-navy/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Encuestas y Opinión Pública</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground">
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
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-politica-navy">Medios de Comunicación</h3>
                <p>
                  Utilizamos información de medios de comunicación verificados y contrastamos múltiples fuentes para
                  garantizar la precisión de los datos. Entre los principales medios consultados están:
                </p>
                <ul className="list-disc pl-5 grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                  <li>El Comercio</li>
                  <li>El Universo</li>
                  <li>Teleamazonas</li>
                  <li>Ecuavisa</li>
                  <li>GK</li>
                  <li>La Hora</li>
                  <li>Expreso</li>
                  <li>El Telégrafo</li>
                  <li>Plan V</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
