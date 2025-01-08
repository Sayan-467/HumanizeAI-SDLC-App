'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { useFormStatus } from 'react-dom'
import { setPassword } from '../actions'

export default function SetPasswordPage() {
    const SubmitButton = () => {
        const { pending } = useFormStatus()
        return (
            <Button type="submit" className="w-full bg-accent hover:bg-accent/80 text-accent-foreground" disabled={pending}>
                {pending ? 'Saving...' : 'Save Password'}
            </Button>
        )
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-background to-secondary">
            <Card className="w-[350px] bg-secondary/50 backdrop-blur-sm border-accent/20">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary">Set Password</CardTitle>
                    <CardDescription className="text-primary/70">Create a strong password for your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={setPassword}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password" className="text-primary/90">New Password</Label>
                                <Input id="password" name="password" type="password" placeholder="Enter your new password" className="bg-background/50 text-primary placeholder:text-primary/50" required />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="confirmPassword" className="text-primary/90">Confirm Password</Label>
                                <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm your new password" className="bg-background/50 text-primary placeholder:text-primary/50" required />
                            </div>
                        </div>
                    </form>
                    <SubmitButton />
                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>
        </div>
    )
}
