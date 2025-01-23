'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ProjectTabs } from '@/components/project-tabs';
import Link from 'next/link';

const projectsData = [
  { 
    id: 1, 
    name: 'ERP Transformation', 
    status: 'In Progress', 
    description: 'SDLC lifecycle automation, following SAP Activate Methodology, to accelerate GTM.',
    type: 'SAP',
    industry: 'Technology',
    start: '2025-01-01',
    end: '2025-12-31',
  },
  { 
    id: 2, 
    name: 'CRM System', 
    status: 'Planning', 
    description: 'Developing a customer relationship management system for small businesses.',
    type: 'SAP',
    industry: 'Technology',
    start: '2025-01-01',
    end: '2025-06-30',
  },
  { 
    id: 3, 
    name: 'Mobile App', 
    status: 'Testing', 
    description: 'Creating a cross-platform mobile app for task management.',
    type: 'Mobile',
    industry: 'Technology',
    start: '2025-02-01', 
    end: '2025-08-01',
  },
];

export default function ProjectPage() {
  const params = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectId = parseInt(params.id);
    const foundProject = projectsData.find(p => p.id === projectId);
    setProject(foundProject);
  }, [params.id]);

  if (!project) {
    return <div className="text-center text-primary">Loading...</div>;
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
  };

  return (
    <div className="container mx-auto px-6 lg:px-28 py-8 bg-gray-50">
      <div className="mb-8">
        <Link href="/projects">
          <Button variant="outline" className="mb-4 text-sm text-blue-600 border-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-colors">
            ← Back to Projects
          </Button>
        </Link>
        <Card className={`backdrop-blur-sm border ${getStatusColor(project.status)} shadow-lg rounded-lg p-6`}>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary mb-2">{project.name}</CardTitle>
            <CardDescription className="text-sm text-primary/70 mb-4">{project.description}</CardDescription>
            <div className="space-y-2">
              <CardDescription className="text-sm text-primary/70">
                Product Type: <span className='font-semibold'>{project.type}</span>
              </CardDescription>
              <CardDescription className="text-sm text-primary/70">
                Industry Classification: <span className='font-semibold'>{project.industry}</span>
              </CardDescription>
              <CardDescription className="text-sm text-primary/70">
                Start Date: <span className='font-semibold'>{project.start}</span>
              </CardDescription>
              <CardDescription className="text-sm text-primary/70">
                End Date: <span className='font-semibold'>{project.end}</span>
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>

      {project.type === 'SAP' && <ProjectTabs projectType={project.type} />}
    </div>
  );
}
