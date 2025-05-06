export interface Politician {
  id: string
  name: string
  image?: string
  party: string
  province: string
  currentPosition: string
  experience: number
  proposalsFulfilled: number
  approvalRating: number
  age: number
  birthplace: string
  careerStart: string
  biography: string
  career: {
    title: string
    organization: string
    period: string
    description: string
  }[]
  proposals: {
    title: string
    description: string
    status: "Cumplida" | "En progreso" | "Pendiente"
    progress?: number
    category: string
  }[]
  analysis?: {
    categories: {
      name: string
      rating: number
    }[]
    detailed: string
    strengths: string[]
    weaknesses: string[]
  }
  socialMedia?: {
    facebook?: string
    instagram?: string
    tiktok?: string
    twitter?: string
  }
}

export interface Province {
  id: string
  name: string
  capital: string
  population: number
  description: string
}

export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "user"
  subscription: "free" | "premium"
}
