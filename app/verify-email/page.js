import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function VerifyEmailPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-background to-secondary">
      <Card className="w-[350px] bg-secondary/50 backdrop-blur-sm border-accent/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">Email Verified</CardTitle>
          <CardDescription className="text-primary/70">Your email has been successfully verified</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-primary/90">Please set a password for your account to complete the registration process.</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-accent hover:bg-accent/80 text-accent-foreground">Set Password</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

