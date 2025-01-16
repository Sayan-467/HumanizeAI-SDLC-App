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
    const [isDialougeOpen, setIsDialougeOpen] = useState(false)

    const [projects, setProjects] = useState([
        { id: 1, name: 'E-commerce Platform', product: 'SAP S4 HANA', project: 'Greenfield', status: 'In Progress' },
        { id: 2, name: 'CRM System', product: 'Service Now', project: 'Greenfield', status: 'Planning' },
        { id: 3, name: 'Mobile App', product: 'SFDC', project: 'Migration', status: 'Testing' },
    ])

    const SubmitButton = () => {
        const { pending } = useFormStatus()
        return (
            <Button type="submit" className="bg-accent hover:bg-accent/80 text-accent-foreground" disabled={pending}>
                {pending ? 'Adding...' : 'Add Project'}
            </Button>
        )
    }


    const getStatusColor = (status) => {
        switch (status) {
            case 'In Progress':
                return 'bg-green-500/20 border-green-500/50';
            case 'Planning':
                return 'bg-violet-500/20 border-violet-500/50';
            case 'Testing':
                return 'bg-yellow-500/20 border-yellow-500/50';
            default:
                return 'bg-secondary/50 border-accent/20';
        }
    }

    const addProject = (data) => {
        const name = data.get('name')
        const product = data.get('product')
        const project = data.get('project')
        const desc = data.get('description')
        const status = data.get('status')

        const newProject = {
            id: projects.length + 1,
            name,
            product,
            project,
            desc,
            status
        }

        setProjects([...projects, newProject])
        setIsDialougeOpen(false)
    }

    return (
        <div className="space-y-6 px-16 py-4 my-2">
            <Link href="/">
                <Button variant="outline" className="mb-4 fancy-border">
                    ← Back to Home Page
                </Button>
            </Link>
            <h1 className="text-4xl font-bold text-primary">Projects</h1>
            <div className="flex justify-between items-center">
                <Input className="w-64 bg-background/50 text-primary placeholder:text-primary/50" type="search" placeholder="Search projects..." />
                <Dialog open={isDialougeOpen} onOpenChange={setIsDialougeOpen}>
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
                                    <Label htmlFor="product" className="text-right">
                                        Product Type
                                    </Label>
                                    <Input
                                        id="product"
                                        name="product"
                                        placeholder="Product Type"
                                        className="col-span-3 bg-background/50 text-primary placeholder:text-primary/50"
                                    />
                                    <Label htmlFor="project" className="text-right">
                                        Project Type
                                    </Label>
                                    <Input
                                        id="project"
                                        name="project"
                                        placeholder="Project Type"
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
                    <Card key={project.id} className={`bg-secondary/50 backdrop-blur-sm border-accent/20`}>
                        <CardHeader>
                            <CardTitle className="text-primary font-semibold text-xl">{project.name}</CardTitle>
                            <CardDescription className="text-primary/70"><span className='font-semibold text-lg'>Product Type: </span> <span className='text-lg'>{project.product}</span></CardDescription>
                            <CardDescription className="text-primary/70"><span className='font-semibold text-lg'>Project Type: </span> <span className='text-lg'>{project.project}</span></CardDescription>
                            <CardDescription className="text-primary/70"><span className='font-semibold text-lg'>Status: </span> <span className={`px-2 py-1 text-lg ${getStatusColor(project.status)}`}>{project.status}</span></CardDescription>
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
