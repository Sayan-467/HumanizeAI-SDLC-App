'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PlusCircle, X } from 'lucide-react';
import Link from 'next/link';
import { BRDSection } from '@/components/brd-section';
import { AddSectionModal } from '@/components/add-section-modal';

const initialSections = [
  {
    id: 'about-client',
    title: 'About the Client',
    fields: ['Company URL', 'Content', 'Instructions for text generation', 'File upload'],
  },
  {
    id: 'objective',
    title: 'Objective of the document',
    fields: ['Content', 'Instructions for text generation', 'File upload'],
  },
  {
    id: 'scope',
    title: 'Scope of the document',
    fields: [
      'Content',
      'Description'
    ],
  },
  {
    id: 'material',
    title: 'Introduction to Material management',
    fields: [
      'Content',
      'Description'
    ],
  },
  {
    id: 'area',
    title: 'Business Areas',
    fields: [
      'Content',
      'Description'
    ],
  },
  {
    id: 'org-structure',
    title: 'Organization structure',
    fields: [
      'Content',
      'Instructions for text generation',
      'File upload for text generation',
      'Files to be embedded',
    ],
  },
  {
    id: 'kds',
    title: 'Key Document Structure',
    fields: [
      'Content',
      'Description'
    ],
  },
  {
    id: 'process',
    title: 'Process Scope',
    fields: [
      'Content',
      'Description'
    ],
  },
  {
    id: 'process-flow',
    title: 'Relevant process flows of Material Management',
    fields: [
      'Content',
      'Description'
    ],
  },
  {
    id: 'data',
    title: 'Master Data',
    fields: [
      'Content',
      'Description'
    ],
  },
  {
    id: 'soln',
    title: 'Solution Data',
    fields: [
      'Content',
      'Description'
    ],
  },
  {
    id: 'forms',
    title: 'Material Management Reports and Forms List',
    fields: [
      'Content',
      'Description'
    ],
  },
];

export default function BRDGenerationPage() {
  const [sections, setSections] = useState(initialSections);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const addNewSection = (newSection) => {
    setSections([...sections, newSection]);
    setIsAddModalOpen(false);
  };

  const removeSection = (id) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  return (
    <div className="container mx-auto px-28 py-16">
      <Link href="/projects/1">
        <Button variant="outline" className="mb-4 fancy-border">
          ← Back to Project
        </Button>
      </Link>
      <h1 className="text-3xl font-bold text-primary mb-6">BRD Generation</h1>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {sections.map((section) => (
          <AccordionItem key={section.id} value={section.id} className="border rounded-lg overflow-hidden fancy-glass">
            <AccordionTrigger className="flex items-center justify-between px-4 py-2 hover:no-underline hover:bg-gray-100 gap-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <span
                onClick={(e) => {
                  e.stopPropagation(); 
                  removeSection(section.id);
                }}
                className="text-red-600 hover:text-red-800 cursor-pointer transition duration-200 ml-auto"
                aria-label="Remove Section"
              >
                <X className="w-5 h-5" />
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <Card className="m-4 fancy-glass">
                <CardContent className="p-4">
                  <BRDSection section={section} />
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex flex-col w-[30%]">
        <Button className="mt-6 fancy-button">Generate BRD</Button>
        <Button onClick={() => setIsAddModalOpen(true)} className="mt-6 fancy-button">
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Section
        </Button>
      </div>
      <AddSectionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={addNewSection}
      />
    </div>
  );
}
