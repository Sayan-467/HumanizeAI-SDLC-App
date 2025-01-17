'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ProjectTabs } from '@/components/project-tabs'
import Link from 'next/link'

const projectsData = [
  { 
    id: 1, 
    name: 'ERP Transformation', 
    status: 'In Progress', 
    description: 'SDLC lifecycle automation, following SAP Activate Methodology, to accelarate GTM.',
    type: 'SAP' 
  },
  { 
    id: 2, 
    name: 'CRM System', 
    status: 'Planning', 
    description: 'Developing a customer relationship management system for small businesses.',
    type: 'SAP'
  },
  { 
    id: 3, 
    name: 'Mobile App', 
    status: 'Testing', 
    description: 'Creating a cross-platform mobile app for task management.',
    type: 'Mobile'
  },
]

export default function ProjectPage() {
  const params = useParams()
  const [project, setProject] = useState(null)

  useEffect(() => {
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
        return 'bg-green-700/20 border-green-500/50';
      case 'Planning':
        return 'bg-violet-500/20 border-violet-500/50';
      case 'Testing':
        return 'bg-yellow-500/20 border-yellow-500/50';
      default:
        return 'bg-secondary/50 border-accent/20';
    }
  }

  return (
    <div className="container mx-auto px-28 py-8">
      <div className="mb-8">
        <Link href="/projects">
          <Button variant="outline" className="mb-4">
            ← Back to Projects
          </Button>
        </Link>
        <Card className={`backdrop-blur-sm border ${getStatusColor(project.status)}`}>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">{project.name}</CardTitle>
            <CardDescription className="text-xl text-primary/70">
              Type: {project.type}
              <br />
              {project.description}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {project.type === 'SAP' && <ProjectTabs projectType={project.type} />}
    </div>
  )
}

