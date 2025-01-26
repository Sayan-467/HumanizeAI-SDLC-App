'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically make an API call to authenticate
    // For this example, we'll just simulate a successful login
    localStorage.setItem('authToken', 'dummy_token')
    router.push('/projects')
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background to-secondary gap-12">
      <Image src={"/loginpic.jpeg"} alt={"login"} width={450} height={300} />
      <Card className="w-[450px] fancy-glass fancy-border">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">Login</CardTitle>
          <CardDescription className="text-primary/70">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="fancy-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="fancy-border"
              />
            </div>
            <Button type="submit" className="w-full fancy-button">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

