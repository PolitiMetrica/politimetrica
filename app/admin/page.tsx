"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { SecurityWrapper } from "@/components/security-wrapper"
import { useCurrentUser } from "@/lib/auth"

export default function AdminPage() {
  const router = useRouter()
  const { user, loading } = useCurrentUser()

  // Redireccionar si no hay usuario o está cargando
  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login")
    }
  }, [user, loading, router])

  if (loading) {
    return <div className="container py-12">Cargando...</div>
  }

  return (
    <SecurityWrapper requiredFeature="admin_panel" redirectTo="/auth/login">
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8">Panel de Administración</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SecurityWrapper requiredSecurityLevel={3}>
            <div className="bg-card rounded-lg shadow-sm p-6 border">
              <h2 className="text-xl font-semibold mb-4">Gestión de Políticos</h2>
              <p className="text-muted-foreground mb-4">Añade, edita o elimina políticos de la plataforma.</p>
              <button className="bg-politica-navy text-white px-4 py-2 rounded-md hover:bg-politica-navy/90 transition-colors">
                Gestionar Políticos
              </button>
            </div>
          </SecurityWrapper>

          <SecurityWrapper requiredSecurityLevel={2}>
            <div className="bg-card rounded-lg shadow-sm p-6 border">
              <h2 className="text-xl font-semibold mb-4">Gestión de Usuarios</h2>
              <p className="text-muted-foreground mb-4">Administra los usuarios registrados en la plataforma.</p>
              <button className="bg-politica-navy text-white px-4 py-2 rounded-md hover:bg-politica-navy/90 transition-colors">
                Gestionar Usuarios
              </button>
            </div>
          </SecurityWrapper>

          <SecurityWrapper requiredSecurityLevel={2}>
            <div className="bg-card rounded-lg shadow-sm p-6 border">
              <h2 className="text-xl font-semibold mb-4">Mensajes de Contacto</h2>
              <p className="text-muted-foreground mb-4">Revisa y responde a los mensajes enviados por los usuarios.</p>
              <button className="bg-politica-navy text-white px-4 py-2 rounded-md hover:bg-politica-navy/90 transition-colors">
                Ver Mensajes
              </button>
            </div>
          </SecurityWrapper>

          <SecurityWrapper requiredSecurityLevel={3}>
            <div className="bg-card rounded-lg shadow-sm p-6 border">
              <h2 className="text-xl font-semibold mb-4">Estadísticas</h2>
              <p className="text-muted-foreground mb-4">
                Visualiza estadísticas detalladas sobre el uso de la plataforma.
              </p>
              <button className="bg-politica-navy text-white px-4 py-2 rounded-md hover:bg-politica-navy/90 transition-colors">
                Ver Estadísticas
              </button>
            </div>
          </SecurityWrapper>

          <SecurityWrapper requiredSecurityLevel={3}>
            <div className="bg-card rounded-lg shadow-sm p-6 border">
              <h2 className="text-xl font-semibold mb-4">Configuración</h2>
              <p className="text-muted-foreground mb-4">Configura los parámetros generales de la plataforma.</p>
              <button className="bg-politica-navy text-white px-4 py-2 rounded-md hover:bg-politica-navy/90 transition-colors">
                Configurar
              </button>
            </div>
          </SecurityWrapper>
        </div>
      </div>
    </SecurityWrapper>
  )
}
