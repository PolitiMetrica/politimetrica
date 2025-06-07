// firebase.ts
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCb75pW9WPWoRP5wghNO-eycauSWD4zky8",
  authDomain: "politimetrica-43874.firebaseapp.com",
  projectId: "politimetrica-43874",
  storageBucket: "politimetrica-43874.firebasestorage.app",
  messagingSenderId: "605986154998",
  appId: "1:605986154998:web:43f1b1269c39b50b157fd7",
  measurementId: "G-CRJ17N3KM5",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
