// auth-providers.ts
"use client"

import {
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithCustomToken,
} from "firebase/auth"
import { auth } from "./firebase"
import type { User } from "./types"

// Login con Google
export async function signInWithGoogle(): Promise<User> {
  try {
    const provider = new GoogleAuthProvider()
    provider.addScope("profile")
    provider.addScope("email")
    provider.setCustomParameters({ prompt: "select_account" })

    const result = await signInWithPopup(auth, provider)
    const user = result.user

    const userData: User = {
      id: user.uid,
      name: user.displayName || "Usuario de Google",
      email: user.email || "sin-email@example.com",
      role: "user",
      subscription: "free",
    }

    localStorage.setItem("currentUser", JSON.stringify(userData))
    window.dispatchEvent(new Event("storage"))

    return userData
  } catch (error: any) {
    console.error("Error al iniciar sesión con Google:", error)
    throw error
  }
}

// Registro con email
export async function registerWithEmail(name: string, email: string, password: string): Promise<User> {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    await sendEmailVerification(user)

    const userData: User = {
      id: user.uid,
      name,
      email,
      role: "user",
      subscription: "free",
    }

    localStorage.setItem("currentUser", JSON.stringify(userData))
    window.dispatchEvent(new Event("storage"))

    return userData
  } catch (error: any) {
    console.error("Error al registrar usuario:", error)
    throw error
  }
}

// Login con email
export async function loginWithEmail(email: string, password: string): Promise<User> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    const userData: User = {
      id: user.uid,
      name: user.displayName || email.split("@")[0],
      email,
      role: email === "admin@politimetrica.com" ? "admin" : "user",
      subscription: "free",
    }

    localStorage.setItem("currentUser", JSON.stringify(userData))
    window.dispatchEvent(new Event("storage"))

    return userData
  } catch (error: any) {
    console.error("Error al iniciar sesión:", error)
    throw error
  }
}

// Login con token personalizado (desde Flutter)
export async function signInWithToken(token: string): Promise<User | null> {
  try {
    const userCredential = await signInWithCustomToken(auth, token)
    const user = userCredential.user

    const userData: User = {
      id: user.uid,
      name: user.displayName || "Usuario",
      email: user.email || "sin-email@example.com",
      role: "user",
      subscription: "free",
    }

    localStorage.setItem("currentUser", JSON.stringify(userData))
    window.dispatchEvent(new Event("storage"))

    return userData
  } catch (error) {
    console.error("Error al iniciar sesión con token:", error)
    return null
  }
}
