"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { User, Mail, Calendar, Edit2, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCurrentUser } from "@/lib/auth"
import { SubscriptionInfo } from "@/components/subscription-info"

export default function PerfilPage() {
  const router = useRouter()
  const { user, loading } = useCurrentUser()
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  })

  // Cargar datos del usuario cuando estén disponibles
  useState(() => {
    if (user) {
      setUserData({
        name: user.name,
        email: user.email,
        phone: localStorage.getItem("userPhone") || "",
        location: localStorage.getItem("userLocation") || "",
      })
    }
  })

  if (loading) {
    return (
      <div className="container py-10">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Cargando perfil...</CardTitle>
              <CardDescription>Espere un momento mientras cargamos su información</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div className="h-24 bg-muted animate-pulse rounded-md"></div>
              <div className="h-12 bg-muted animate-pulse rounded-md"></div>
              <div className="h-12 bg-muted animate-pulse rounded-md"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (!user) {
    router.push("/auth/login")
    return null
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    // En una aplicación real, esto enviaría los datos al servidor
    // Aquí solo los guardamos en localStorage como simulación
    localStorage.setItem("userPhone", userData.phone)
    localStorage.setItem("userLocation", userData.location)

    // Actualizar el estado de edición
    setIsEditing(false)
  }

  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Mi Perfil</h1>

        <div className="grid gap-6">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Información Personal</CardTitle>
                <Button variant="outline" size="sm" onClick={() => (isEditing ? handleSave() : setIsEditing(true))}>
                  {isEditing ? (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Guardar
                    </>
                  ) : (
                    <>
                      <Edit2 className="h-4 w-4 mr-2" />
                      Editar
                    </>
                  )}
                </Button>
              </div>
              <CardDescription>Administra tu información personal</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="h-24 w-24 border border-politica-navy/20">
                  <AvatarImage src="/placeholder-user.jpg" alt={user.name} />
                  <AvatarFallback className="bg-politica-slate text-white text-xl">
                    {user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                {!isEditing && (
                  <div className="text-center">
                    <h3 className="font-medium">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {user.subscription === "premium" ? "Usuario Premium" : "Usuario Gratuito"}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex-1 space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    {isEditing ? (
                      <Input id="name" name="name" value={userData.name} onChange={handleInputChange} />
                    ) : (
                      <div className="flex items-center gap-2 py-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>{userData.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    {isEditing ? (
                      <Input id="email" name="email" value={userData.email} onChange={handleInputChange} disabled />
                    ) : (
                      <div className="flex items-center gap-2 py-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{userData.email}</span>
                      </div>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        name="phone"
                        value={userData.phone}
                        onChange={handleInputChange}
                        placeholder="Ingrese su número telefónico"
                      />
                    ) : (
                      <div className="flex items-center gap-2 py-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{userData.phone || "No especificado"}</span>
                      </div>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="location">Ubicación</Label>
                    {isEditing ? (
                      <Input
                        id="location"
                        name="location"
                        value={userData.location}
                        onChange={handleInputChange}
                        placeholder="Ingrese su ubicación"
                      />
                    ) : (
                      <div className="flex items-center gap-2 py-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{userData.location || "No especificado"}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Mi Suscripción</CardTitle>
              <CardDescription>Administra tu plan de suscripción</CardDescription>
            </CardHeader>
            <CardContent>
              <SubscriptionInfo />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
