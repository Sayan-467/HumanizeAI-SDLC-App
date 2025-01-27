"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("")
  const [middleName, setMiddleName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically make an API call to register the user
    console.log("Sign up:", { firstName, middleName, lastName, email })
    // For this example, we'll just redirect to the login page
    router.push("/login")
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background to-secondary py-4">
      <Card className="w-[400px] fancy-glass fancy-border">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">Sign Up</CardTitle>
          <CardDescription className="text-primary/70">Create your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="fancy-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="middleName">Middle Name</Label>
              <Input
                id="middleName"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                required
                className="fancy-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="fancy-border"
              />
            </div>
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
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-primary/70">
            Already have an account?{" "}
            <Button variant="link" className="p-0" onClick={() => router.push("/login")}>
              Log in
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

