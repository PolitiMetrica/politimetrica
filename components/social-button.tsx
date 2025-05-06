import Link from "next/link"
import { Facebook, Instagram, TwitterIcon as TikTok } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialButtonProps {
  network: "facebook" | "instagram" | "tiktok"
  url: string
  ariaLabel: string
}

export function SocialButton({ network, url, ariaLabel }: SocialButtonProps) {
  const getIcon = () => {
    switch (network) {
      case "facebook":
        return <Facebook className="h-4 w-4" />
      case "instagram":
        return <Instagram className="h-4 w-4" />
      case "tiktok":
        return <TikTok className="h-4 w-4" />
    }
  }

  const getColor = () => {
    switch (network) {
      case "facebook":
        return "bg-[#1877F2] hover:bg-[#1877F2]/90 text-white"
      case "instagram":
        return "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90 text-white"
      case "tiktok":
        return "bg-black hover:bg-black/90 text-white"
    }
  }

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Button size="icon" className={`h-8 w-8 rounded-full ${getColor()}`} aria-label={ariaLabel} title={ariaLabel}>
        {getIcon()}
      </Button>
    </Link>
  )
}
