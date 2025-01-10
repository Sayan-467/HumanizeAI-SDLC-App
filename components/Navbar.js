'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react'

const navItems = [
  { name: 'Projects', href: '/projects' },
  { name: 'Tasks', href: '/tasks' },
  { name: 'Team', href: '/team' },
]

export function Navbar({ onLoginClick }) {
  const [hoveredPath, setHoveredPath] = useState(null)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-accent/20 px-4 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                AI-SDLC Manager
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium text-primary transition-colors hover:text-accent"
                onMouseEnter={() => setHoveredPath(item.href)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                <span>{item.name}</span>
                {pathname === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-accent"
                    layoutId="navbar"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                {hoveredPath === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-accent"
                    layoutId="navbar"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              onClick={onLoginClick}
              className="bg-accent hover:bg-accent/80 text-accent-foreground"
            >
              Login
            </Button>
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {navItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href}>{item.name}</Link>
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

