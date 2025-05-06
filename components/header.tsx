"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogOut, Menu, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useCurrentUser, logout, isAdmin } from "@/lib/auth"
import { LogoComponent } from "@/components/logo-component"

export function Header() {
  const pathname = usePathname()
  const { user, loading } = useCurrentUser()
  const [open, setOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <LogoComponent size="medium" />
        <nav className="hidden md:flex items-center gap-6 text-sm ml-6">
          <Link
            href="/"
            className={`transition-colors hover:text-politica-navy ${
              isActive("/") ? "text-politica-navy font-medium" : "text-foreground/60"
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/politicos"
            className={`transition-colors hover:text-politica-navy ${
              isActive("/politicos") ? "text-politica-navy font-medium" : "text-foreground/60"
            }`}
          >
            Políticos
          </Link>
          <Link
            href="/comparar"
            className={`transition-colors hover:text-politica-navy ${
              isActive("/comparar") ? "text-politica-navy font-medium" : "text-foreground/60"
            }`}
          >
            Comparar
          </Link>
          <Link
            href="/suscripcion"
            className={`transition-colors hover:text-politica-navy ${
              isActive("/suscripcion") ? "text-politica-navy font-medium" : "text-foreground/60"
            }`}
          >
            Suscripción
          </Link>
          <Link
            href="/metodologia"
            className={`transition-colors hover:text-politica-navy ${
              isActive("/metodologia") ? "text-politica-navy font-medium" : "text-foreground/60"
            }`}
          >
            Metodología
          </Link>
          <Link
            href="/contacto"
            className={`transition-colors hover:text-politica-navy ${
              isActive("/contacto") ? "text-politica-navy font-medium" : "text-foreground/60"
            }`}
          >
            Contacto
          </Link>
          {isAdmin(user) && (
            <Link
              href="/admin"
              className={`transition-colors hover:text-politica-navy ${
                isActive("/admin") ? "text-politica-navy font-medium" : "text-foreground/60"
              }`}
            >
              Administración
            </Link>
          )}
        </nav>
        <div className="flex items-center ml-auto gap-2">
          {loading ? (
            <div className="h-8 w-8 rounded-full bg-muted animate-pulse"></div>
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8 border border-politica-navy/20">
                    <AvatarImage src="/placeholder-user.jpg" alt={user.name} />
                    <AvatarFallback className="bg-politica-slate text-white">{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/perfil">
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/suscripcion">
                    <User className="mr-2 h-4 w-4" />
                    <span>Mi suscripción</span>
                  </Link>
                </DropdownMenuItem>
                {isAdmin(user) && (
                  <DropdownMenuItem asChild>
                    <Link href="/admin">
                      <User className="mr-2 h-4 w-4" />
                      <span>Administración</span>
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Cerrar Sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex gap-2">
              <Link href="/auth/login">
                <Button variant="ghost" size="sm" className="text-politica-navy hover:text-politica-navy/80">
                  Iniciar Sesión
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="sm" className="bg-politica-navy hover:bg-politica-navy/90">
                  Registrarse
                </Button>
              </Link>
            </div>
          )}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex items-center gap-2 font-bold text-xl mb-8">
                <LogoComponent size="small" />
                <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => setOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-foreground/60 hover:text-politica-navy transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Inicio
                </Link>
                <Link
                  href="/politicos"
                  className="text-foreground/60 hover:text-politica-navy transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Políticos
                </Link>
                <Link
                  href="/comparar"
                  className="text-foreground/60 hover:text-politica-navy transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Comparar
                </Link>
                <Link
                  href="/suscripcion"
                  className="text-foreground/60 hover:text-politica-navy transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Suscripción
                </Link>
                <Link
                  href="/metodologia"
                  className="text-foreground/60 hover:text-politica-navy transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Metodología
                </Link>
                <Link
                  href="/contacto"
                  className="text-foreground/60 hover:text-politica-navy transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Contacto
                </Link>
                {isAdmin(user) && (
                  <Link
                    href="/admin"
                    className="text-foreground/60 hover:text-politica-navy transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Administración
                  </Link>
                )}
                {!user && (
                  <>
                    <Link
                      href="/auth/login"
                      className="text-foreground/60 hover:text-politica-navy transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      Iniciar Sesión
                    </Link>
                    <Link
                      href="/auth/register"
                      className="text-foreground/60 hover:text-politica-navy transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      Registrarse
                    </Link>
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
