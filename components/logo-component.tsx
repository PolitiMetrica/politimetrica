import Image from "next/image"
import Link from "next/link"

export function LogoComponent({ size = "medium" }: { size?: "small" | "medium" | "large" }) {
  const dimensions = {
    small: { width: 32, height: 32 },
    medium: { width: 48, height: 48 },
    large: { width: 64, height: 64 },
  }

  const { width, height } = dimensions[size]

  return (
    <Link href="/" className="flex items-center gap-2">
      <div className={`relative w-${width / 4} h-${height / 4}`} style={{ width, height }}>
        <Image src="/logo.png" alt="Politimétrica Logo" fill className="object-contain" />
      </div>
      <span
        className={`font-bold ${size === "small" ? "text-lg" : size === "medium" ? "text-xl" : "text-2xl"} text-politica-navy`}
      >
        Politimétrica
      </span>
    </Link>
  )
}
