// auth.ts
"use client"

import { useState, useEffect } from "react"
import type { User } from "./types"
import { signInWithToken } from "./auth-providers"

let currentUser: User | null = null

export function useCurrentUser() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      try {
        const storedUser = localStorage.getItem("currentUser")
        const params = new URLSearchParams(window.location.search)
        const token = params.get("token")

        let userData: User | null = null

        if (token) {
          userData = await signInWithToken(token)
          window.history.replaceState({}, document.title, window.location.pathname)
        } else if (storedUser) {
          userData = JSON.parse(storedUser)
        }

        currentUser = userData
        setUser(userData)
      } catch (error) {
        console.error("Error al cargar el usuario:", error)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    checkUser()

    const handleStorageChange = () => {
      const storedUser = localStorage.getItem("currentUser")
      if (storedUser) {
        currentUser = JSON.parse(storedUser)
        setUser(currentUser)
      } else {
        currentUser = null
        setUser(null)
      }
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  return { user, loading }
}

// Puedes mantener aquí las funciones login, register, logout, etc. si quieres

// Función para iniciar sesión
export async function login(email: string, password: string, redirectPath = "/"): Promise<User> {
  // Simula una llamada a API de autenticación
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // En una aplicación real, esto sería una verificación en el servidor
      if (email === "admin@politimetrica.com" && password === "admin123") {
        currentUser = {
          id: "1",
          name: "Admin Principal",
          email: "admin@politimetrica.com",
          role: "admin",
          subscription: "premium",
          securityLevel: 3, // Nivel máximo de seguridad
        }
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
        // Disparar evento para notificar cambios
        window.dispatchEvent(new Event("storage"))
        resolve(currentUser)
      } else if (email === "usuario@ejemplo.com" && password === "usuario123") {
        currentUser = {
          id: "2",
          name: "Usuario Premium",
          email: "usuario@ejemplo.com",
          role: "user",
          subscription: "premium",
          securityLevel: 2, // Nivel medio de seguridad
        }
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
        // Disparar evento para notificar cambios
        window.dispatchEvent(new Event("storage"))
        resolve(currentUser)
      } else if (email === "gratis@ejemplo.com" && password === "gratis123") {
        currentUser = {
          id: "3",
          name: "Usuario Gratuito",
          email: "gratis@ejemplo.com",
          role: "user",
          subscription: "free",
          securityLevel: 1, // Nivel básico de seguridad
        }
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
        // Disparar evento para notificar cambios
        window.dispatchEvent(new Event("storage"))
        resolve(currentUser)
      } else {
        reject(new Error("Credenciales inválidas"))
      }
    }, 1000)
  })
}

// Función para registrar un nuevo usuario
export async function register(name: string, email: string, password: string): Promise<User> {
  // Simula una llamada a API de registro
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // En una aplicación real, esto sería un registro en el servidor
      try {
        const newUser: User = {
          id: `user-${Date.now()}`,
          name,
          email,
          role: "user",
          subscription: "free",
          securityLevel: 1, // Nivel básico de seguridad por defecto
        }
        currentUser = newUser
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
        // Disparar evento para notificar cambios
        window.dispatchEvent(new Event("storage"))
        resolve(newUser)
      } catch (error) {
        reject(error)
      }
    }, 1000)
  })
}

// Función para cerrar sesión
export function logout(): void {
  currentUser = null
  localStorage.removeItem("currentUser")
  // Disparar evento para notificar cambios
  window.dispatchEvent(new Event("storage"))
  window.location.href = "/"
}

// Función para verificar si el usuario es administrador
export function isAdmin(user: User | null): boolean {
  return user?.role === "admin"
}

// Función para verificar el nivel de seguridad del usuario
export function hasSecurityLevel(user: User | null, requiredLevel: number): boolean {
  return user?.securityLevel !== undefined && user.securityLevel >= requiredLevel
}

// Función para verificar si el usuario tiene acceso a una funcionalidad específica
export function hasAccess(user: User | null, feature: string): boolean {
  if (!user) return false

  switch (feature) {
    case "premium_content":
      return user.subscription === "premium" || user.role === "admin"
    case "admin_panel":
      return user.role === "admin"
    case "edit_politicians":
      return user.role === "admin" || hasSecurityLevel(user, 3)
    case "view_detailed_stats":
      return user.subscription === "premium" || hasSecurityLevel(user, 2)
    case "download_data":
      return user.subscription === "premium" || hasSecurityLevel(user, 2)
    default:
      return false
  }
}
