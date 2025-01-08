'use client'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { useFormStatus } from 'react-dom'
import { login } from './actions'

export default function LoginPage() {

  const SubmitButton = () => {
    const { pending } = useFormStatus()
    return (
      <Button type="submit" className="w-full bg-accent hover:bg-accent/80 text-accent-foreground" disabled={pending}>
        {pending ? 'Logging in...' : 'Log In'}
      </Button>
    )
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-background to-secondary">
      <Card className="w-[350px] bg-secondary/50 backdrop-blur-sm border-accent/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">Login</CardTitle>
          <CardDescription className="text-primary/70">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={login} className='my-2'>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="text-primary/90">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Enter your email" className="bg-background/50 text-primary placeholder:text-primary/50" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="text-primary/90">Password</Label>
                <Input id="password" name="password" type="password" placeholder="Enter your password" className="bg-background/50 text-primary placeholder:text-primary/50" required />
              </div>
            </div>
          </form>
          <SubmitButton />
        </CardContent>
        <CardFooter className="flex flex-col">
          <p className="mt-4 text-sm text-center text-primary/70">
            Don't have an account?{' '}
            <Link href="/signup" className="text-accent hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
