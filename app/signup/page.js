'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { useFormStatus } from 'react-dom'
import { signup } from '../actions'

export default function SignUpPage() {
    const SubmitButton = () => {
        const { pending } = useFormStatus()
        return (
            <Button type="submit" className="w-full bg-accent hover:bg-accent/80 text-accent-foreground" disabled={pending}>
                {pending ? 'Signing up...' : 'Sign Up'}
            </Button>
        )
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-background to-secondary py-12">
            <Card className="w-[450px] bg-secondary/50 backdrop-blur-sm border-accent/20">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary">Sign Up</CardTitle>
                    <CardDescription className="text-primary/70">Create your account to get started</CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={signup}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="officialEmail" className="text-primary/90">Official Email Address</Label>
                                <Input id="officialEmail" name="officialEmail" type="email" placeholder="Enter your official email" className="bg-background/50 text-primary placeholder:text-primary/50" required />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="officeEmail" className="text-primary/90">Office Email</Label>
                                <Input id="officeEmail" name="officeEmail" type="email" placeholder="Enter your office email" className="bg-background/50 text-primary placeholder:text-primary/50" required />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="contact" className="text-primary/90">Official Contact</Label>
                                <Input id="contact" name="contact" type="tel" placeholder="Enter your official contact number" className="bg-background/50 text-primary placeholder:text-primary/50" required />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="purpose" className="text-primary/90">State Purpose</Label>
                                <Textarea id="purpose" name="purpose" placeholder="Briefly describe your purpose for signing up" className="bg-background/50 text-primary placeholder:text-primary/50" required />
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
