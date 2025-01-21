"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, User } from "lucide-react"

const navItems = [
  { name: "Projects", href: "/projects" },
  { name: "Tasks", href: "/tasks" },
  { name: "Team", href: "/team" },
]

export function Navbar() {
  const [hoveredPath, setHoveredPath] = useState(null)
  const pathname = usePathname()
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({ name: "John Doe", role: "Project Manager" })

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("authToken")
    setIsLoggedIn(!!token)
  }, [])

  const handleAuthAction = () => {
    if (isLoggedIn) {
      // Logout
      localStorage.removeItem("authToken")
      setIsLoggedIn(false)
      router.push("/")
    } else {
      // Login
      router.push("/login")
    }
  }

  return (
    <nav className="sticky top-0 z-50 fancy-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold fancy-gradient bg-clip-text text-transparent">AI-SDLC Manager</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {/* {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-500"
                onMouseEnter={() => setHoveredPath(item.href)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                <span>{item.name}</span>
                {pathname === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500"
                    layoutId="navbar"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                {hoveredPath === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500"
                    layoutId="navbar"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))} */}
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center mr-4">
              <User className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-sm text-gray-700">
                {user.name} - {user.role}
              </span>
            </div>
            <Button onClick={handleAuthAction} className="fancy-button">
              {isLoggedIn ? "Logout" : "Login"}
            </Button>
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="border-gray-300">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="fancy-glass">
                  {navItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href} className="text-gray-700 hover:text-blue-500">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

