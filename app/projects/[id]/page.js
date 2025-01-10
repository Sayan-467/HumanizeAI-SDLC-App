'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ProjectTabs } from '@/components/projectTabs'
import Link from 'next/link'

// This would typically come from an API or database
const projectsData = [
    { id: 1, name: 'E-commerce Platform', product: 'SAP S4 HANA', project: 'Greenfield', status: 'In Progress', description: 'Building a scalable e-commerce solution with modern technologies.', type: 'SAP' },
    { id: 2, name: 'CRM System', product: 'Service Now', project: 'Greenfield', status: 'Planning', description: 'Developing a customer relationship management system for small businesses.', type: 'SAP' },
    { id: 3, name: 'Mobile App', product: 'SFDC', project: 'Migration', status: 'Testing', description: 'Creating a cross-platform mobile app for task management.', type: 'Mobile' },
]

export default function ProjectPage() {
    const params = useParams()
    const [project, setProject] = useState(null)

    useEffect(() => {
        // In a real application, you would fetch this data from an API
        const projectId = parseInt(params.id)
        const foundProject = projectsData.find(p => p.id === projectId)
        setProject(foundProject)
    }, [params.id])

    if (!project) {
        return <div className="text-center text-primary">Loading...</div>
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

    return (
        <div className="container mx-auto px-14 py-8">
            <Link href="/projects">
                <Button variant="outline" className="mb-4">
                    ← Back to Projects
                </Button>
            </Link>
            <Card className={`backdrop-blur-sm border my-4 ${getStatusColor(project.status)}`}>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-primary">{project.name}</CardTitle>
                    <CardDescription className="text-md text-primary/70">Status: {project.status}</CardDescription>
                    <CardDescription className="text-md text-primary/70">Product Type: {project.product}</CardDescription>
                    <CardDescription className="text-md text-primary/70">Project Type: {project.project}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-primary/90 mb-4">{project.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-2">Team Members</h3>
                            <ul className="list-disc list-inside text-primary/80">
                                <li>John Doe</li>
                                <li>Jane Smith</li>
                                <li>Bob Johnson</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-2">Key Milestones</h3>
                            <ul className="list-disc list-inside text-primary/80">
                                <li>Project Kickoff</li>
                                <li>Design Phase</li>
                                <li>Development Sprint 1</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {project.type === 'SAP' ? (
                <ProjectTabs projectType={project.type} />
            ) : (
                <div className="text-center text-primary/70 p-8">
                    Different layout for {project.type} projects will be implemented here.
                </div>
            )}
        </div>
    )
}

