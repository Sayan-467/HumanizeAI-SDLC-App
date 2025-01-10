'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { LoginModal } from '@/components/loginModel'
import { Navbar } from '@/components/Navbar'

export default function LandingPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onLoginClick={() => {setIsLoginModalOpen(true)}} />

      {/* Main content */}
      <main className="pt-16 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-primary mb-6">
          Welcome to AI-SDLC Manager
        </h1>
        <p className="text-xl md:text-2xl text-center text-primary/70 max-w-2xl mb-12">
          Revolutionize your software development lifecycle with AI-powered project management.
        </p>
        <Button 
          size="lg" 
          onClick={() => setIsLoginModalOpen(true)}
          className="bg-accent hover:bg-accent/80 text-accent-foreground"
        >
          Get Started
        </Button>
      </main>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  )
}

