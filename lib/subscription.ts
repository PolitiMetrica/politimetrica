"use client"

// Tipos de suscripción
export type SubscriptionPlan = "free" | "basic" | "premium"

export interface SubscriptionDetails {
  id: string
  plan: SubscriptionPlan
  startDate: string
  endDate: string
  autoRenew: boolean
  paymentMethod: "paypal" | "credit_card" | "free"
  status: "active" | "cancelled" | "expired"
}

// Función para suscribirse a un plan
export async function subscribeToPlan(
  plan: SubscriptionPlan,
  paymentMethod: "paypal" | "credit_card" | "free",
  userId: string,
): Promise<SubscriptionDetails> {
  // Simula una llamada a API de procesamiento de pago y suscripción
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        // En una aplicación real, esto procesaría el pago y actualizaría la suscripción en la base de datos
        const currentUser = localStorage.getItem("currentUser")

        if (currentUser) {
          const user = JSON.parse(currentUser)
          user.subscription = plan
          localStorage.setItem("currentUser", JSON.stringify(user))

          // Crear detalles de suscripción
          const now = new Date()
          const endDate = new Date()

          // Establecer la duración según el tipo de plan y método de pago
          if (paymentMethod === "free") {
            // La prueba gratuita dura solo 1 día
            endDate.setDate(endDate.getDate() + 1)
          } else if (plan === "premium") {
            // Plan premium dura 1 mes
            endDate.setMonth(endDate.getMonth() + 1)
          } else {
            // Plan básico dura 1 año
            endDate.setMonth(endDate.getMonth() + 12)
          }

          const subscriptionDetails: SubscriptionDetails = {
            id: `sub_${Math.random().toString(36).substring(2, 15)}`,
            plan,
            startDate: now.toISOString(),
            endDate: endDate.toISOString(),
            autoRenew: paymentMethod !== "free", // Las pruebas gratuitas no se renuevan automáticamente
            paymentMethod,
            status: "active",
          }

          // Guardar detalles de suscripción
          localStorage.setItem(`subscription_${userId}`, JSON.stringify(subscriptionDetails))

          resolve(subscriptionDetails)
        } else {
          reject(new Error("Usuario no encontrado"))
        }
      } catch (error) {
        reject(error)
      }
    }, 2000)
  })
}

// Función para obtener los detalles de la suscripción
export async function getSubscriptionDetails(userId: string): Promise<SubscriptionDetails | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const subscriptionData = localStorage.getItem(`subscription_${userId}`)
      if (subscriptionData) {
        resolve(JSON.parse(subscriptionData))
      } else {
        resolve(null)
      }
    }, 500)
  })
}

// Función para cancelar una suscripción
export async function cancelSubscription(userId: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const subscriptionData = localStorage.getItem(`subscription_${userId}`)
        if (subscriptionData) {
          const subscription = JSON.parse(subscriptionData)
          subscription.status = "cancelled"
          subscription.autoRenew = false
          localStorage.setItem(`subscription_${userId}`, JSON.stringify(subscription))
          resolve(true)
        } else {
          reject(new Error("Suscripción no encontrada"))
        }
      } catch (error) {
        reject(error)
      }
    }, 1000)
  })
}

// Función para cambiar de plan de suscripción
export async function changePlan(
  userId: string,
  newPlan: SubscriptionPlan,
  paymentMethod: "paypal" | "credit_card" | "free",
): Promise<SubscriptionDetails> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const subscriptionData = localStorage.getItem(`subscription_${userId}`)
        if (subscriptionData) {
          // Obtener la suscripción actual
          const subscription: SubscriptionDetails = JSON.parse(subscriptionData)

          // Actualizar el plan
          subscription.plan = newPlan

          // Actualizar la fecha de fin según el nuevo plan
          const endDate = new Date()
          if (paymentMethod === "free") {
            // La prueba gratuita dura solo 1 día
            endDate.setDate(endDate.getDate() + 1)
          } else if (newPlan === "premium") {
            // Plan premium dura 1 mes
            endDate.setMonth(endDate.getMonth() + 1)
          } else {
            // Plan básico dura 1 año
            endDate.setMonth(endDate.getMonth() + 12)
          }

          subscription.endDate = endDate.toISOString()
          subscription.paymentMethod = paymentMethod
          subscription.autoRenew = paymentMethod !== "free"
          subscription.status = "active"

          // Actualizar en localStorage
          localStorage.setItem(`subscription_${userId}`, JSON.stringify(subscription))

          // Actualizar también el usuario
          const currentUser = localStorage.getItem("currentUser")
          if (currentUser) {
            const user = JSON.parse(currentUser)
            user.subscription = newPlan
            localStorage.setItem("currentUser", JSON.stringify(user))
          }

          resolve(subscription)
        } else {
          reject(new Error("Suscripción no encontrada"))
        }
      } catch (error) {
        reject(error)
      }
    }, 1000)
  })
}
