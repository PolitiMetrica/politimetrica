"use client"

import type { ReactNode } from "react"
import { useRouter } from "next/navigation"
import { useCurrentUser, hasAccess, hasSecurityLevel } from "@/lib/auth"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

interface SecurityWrapperProps {
  children: ReactNode
  requiredFeature?: string
  requiredSecurityLevel?: number
  fallback?: ReactNode
  redirectTo?: string
}

export function SecurityWrapper({
  children,
  requiredFeature,
  requiredSecurityLevel,
  fallback,
  redirectTo,
}: SecurityWrapperProps) {
  const { user, loading } = useCurrentUser()
  const router = useRouter()

  // Si todavía está cargando, mostrar un indicador de carga
  if (loading) {
    return <div className="p-4 animate-pulse">Verificando acceso...</div>
  }

  // Verificar acceso basado en características
  if (requiredFeature && !hasAccess(user, requiredFeature)) {
    if (redirectTo) {
      router.push(redirectTo)
      return null
    }

    return (
      fallback || (
        <Alert variant="destructive" className="my-4">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Acceso restringido</AlertTitle>
          <AlertDescription>
            No tienes permiso para acceder a esta funcionalidad. Actualiza tu suscripción o contacta al administrador.
          </AlertDescription>
        </Alert>
      )
    )
  }

  // Verificar acceso basado en nivel de seguridad
  if (requiredSecurityLevel !== undefined && !hasSecurityLevel(user, requiredSecurityLevel)) {
    if (redirectTo) {
      router.push(redirectTo)
      return null
    }

    return (
      fallback || (
        <Alert variant="destructive" className="my-4">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Nivel de seguridad insuficiente</AlertTitle>
          <AlertDescription>
            Tu nivel de seguridad no es suficiente para acceder a esta funcionalidad. Contacta al administrador para
            solicitar acceso.
          </AlertDescription>
        </Alert>
      )
    )
  }

  // Si pasa todas las verificaciones, mostrar el contenido
  return <>{children}</>
}
