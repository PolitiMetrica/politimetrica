import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { auth } from "./firebase";

export async function signInWithGoogleRedirect(): Promise<User | null> {
  const provider = new GoogleAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");
  provider.setCustomParameters({ prompt: "select_account" });

  try {
    // Inicia el flujo de redirección
    await signInWithRedirect(auth, provider);
    // La función no continúa aquí porque redirige la página
    return null;
  } catch (error) {
    console.error("Error iniciando login con redirección:", error);
    throw error;
  }
}

// Para llamar después de la redirección y obtener el resultado
export async function handleRedirectResult(): Promise<User | null> {
  try {
    const result = await getRedirectResult(auth);
    if (result && result.user) {
      const user = result.user;
      const userData: User = {
        id: user.uid,
        name: user.displayName || "Usuario de Google",
        email: user.email || "sin-email@example.com",
        role: "user",
        subscription: "free",
      };
      localStorage.setItem("currentUser", JSON.stringify(userData));
      window.dispatchEvent(new Event("storage"));
      return userData;
    }
    return null;
  } catch (error) {
    console.error("Error obteniendo resultado de redirección:", error);
    throw error;
  }
}
