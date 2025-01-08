'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { addProject } from '../actions'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"


export default function ProjectListPage() {
    const projects = [
        { id: 1, name: 'E-commerce Platform', status: 'In Progress' },
        { id: 2, name: 'CRM System', status: 'Planning' },
        { id: 3, name: 'Mobile App', status: 'Testing' },
    ]

    const SubmitButton = () => {
        const { pending } = useFormStatus()
        return (
            <Button type="submit" className="bg-accent hover:bg-accent/80 text-accent-foreground" disabled={pending}>
                {pending ? 'Adding...' : 'Add Project'}
            </Button>
        )
    }

    return (
        <div className="space-y-6 px-12 py-4 my-2">
            <h1 className="text-3xl font-bold text-primary">Projects</h1>
            <div className="flex justify-between items-center">
                <Input className="w-64 bg-background/50 text-primary placeholder:text-primary/50" type="search" placeholder="Search projects..." />
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-accent hover:bg-accent/80 text-accent-foreground">Add New Project</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-secondary text-primary">
                        <DialogHeader>
                            <DialogTitle>Add New Project</DialogTitle>
                            <DialogDescription>Create a new project for your SDLC workflow.</DialogDescription>
                        </DialogHeader>
                        <form action={addProject}>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Project name"
                                        className="col-span-3 bg-background/50 text-primary placeholder:text-primary/50"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="description" className="text-right">
                                        Description
                                    </Label>
                                    <Textarea
                                        id="description"
                                        name="description"
                                        placeholder="Project description"
                                        className="col-span-3 bg-background/50 text-primary placeholder:text-primary/50"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <SubmitButton />
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <Card key={project.id} className="bg-secondary/50 backdrop-blur-sm border-accent/20">
                        <CardHeader>
                            <CardTitle className="text-primary">{project.name}</CardTitle>
                            <CardDescription className="text-primary/70">Status: {project.status}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href={`/projects/${project.id}`}>
                                <Button variant="outline" className="w-full text-primary border-accent hover:bg-accent hover:text-accent-foreground">View Details</Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
