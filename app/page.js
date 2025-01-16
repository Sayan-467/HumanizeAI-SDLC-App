'use client'

import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-purple-50">
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-center fancy-gradient bg-clip-text text-transparent mb-6 fancy-text-glow">
            Welcome to AI-SDLC Manager
          </h1>
          <p className="text-xl md:text-2xl text-center text-gray-600 max-w-2xl mb-12">
            Revolutionize your software development lifecycle with AI-powered project management.
          </p>
          <Button 
            size="lg" 
            onClick={() => router.push('/login')}
            className="fancy-button"
          >
            Get Started
          </Button>
        </motion.div>
      </main>
    </div>
  )
}

