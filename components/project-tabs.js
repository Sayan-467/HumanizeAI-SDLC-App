"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { AddDocumentModal } from "./add-document-modal";

const documentTags = ["DDA", "PDA", "KDS", "Detailed_Process_Requirements", "Org_Structure"];

const defaultPhaseStatuses = {
  discover: "Not Started",
  prepare: "Not Started",
  explore: "Not Started",
  realize: "Not Started",
  deploy: "Not Started",
  run: "Not Started",
};

const defaultPhaseEndDates = {
  discover: "2025-01-30",
  prepare: "2025-02-15",
  explore: "2025-03-01",
  realize: "2025-03-15",
  deploy: "2025-04-01",
  run: "2025-04-15",
};

export function ProjectTabs({
  phaseEndDates = defaultPhaseEndDates,
  currentDate = new Date().toISOString().split("T")[0],
  phaseStatuses = defaultPhaseStatuses,
  onPhaseComplete = (phase) => {
    console.log(`${phase} marked as completed.`);
  },
}) {
  const [documents, setDocuments] = useState({
    discover: [],
    prepare: [],
    explore: [],
    realize: [],
    deploy: [],
    run: [],
  });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("discover");

  const addDocument = (newDocument) => {
    setDocuments((prevDocuments) => ({
      ...prevDocuments,
      [newDocument.tabName]: [...prevDocuments[newDocument.tabName], { ...newDocument, status: "Not Started" }],
    }));
    setIsAddModalOpen(false);
  };

  const openAddModal = (tab) => {
    setCurrentTab(tab);
    setIsAddModalOpen(true);
  };

  const renderDocumentSection = (tab) => (
    <Card className="fancy-glass fancy-shadow">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Documents</CardTitle>
        {phaseStatuses[tab] !== "Completed" && (
          <Button onClick={() => openAddModal(tab)} className="fancy-button">
            <PlusCircle className="mr-2 h-4 w-4" /> Add Document
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {documents[tab].length === 0 ? (
          <p className="text-gray-600">No documents added yet.</p>
        ) : (
          <ul className="space-y-2">
            {documents[tab].map((doc, index) => (
              <li key={index} className="p-4 bg-white rounded-md shadow">
                <h3 className="font-semibold">{doc.name}</h3>
                <p className="text-sm text-gray-600">Tag: {doc.tag}</p>
                <p className="text-sm text-gray-600">End Date: {phaseEndDates[tab]}</p>
                <p className="text-sm text-gray-600">Today: {currentDate}</p>
                <p className="text-sm text-gray-600">Status: {doc.status}</p>
                {doc.status !== "Completed" && phaseStatuses[tab] !== "Completed" && (
                  <Button
                    onClick={() => {
                      // Update document status to "Completed"
                      const updatedDocuments = { ...documents };
                      updatedDocuments[tab][index] = { ...doc, status: "Completed" };
                      setDocuments(updatedDocuments);
                    }}
                    className="mt-2 fancy-button"
                  >
                    Mark as Completed
                  </Button>
                )}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );

  return (
    <Tabs defaultValue="discover" className="w-full">
      <TabsList className="grid grid-cols-3 lg:grid-cols-6 h-auto gap-4">
        <TabsTrigger value="discover" className="fancy-border">
          Discover
        </TabsTrigger>
        <TabsTrigger value="prepare" className="fancy-border">
          Prepare
        </TabsTrigger>
        <TabsTrigger value="explore" className="fancy-border">
          Explore
        </TabsTrigger>
        <TabsTrigger value="realize" className="fancy-border">
          Realize
        </TabsTrigger>
        <TabsTrigger value="deploy" className="fancy-border">
          Deploy
        </TabsTrigger>
        <TabsTrigger value="run" className="fancy-border">
          Run
        </TabsTrigger>
      </TabsList>

      {/* Discover Tab */}
      <TabsContent value="discover" className="mt-6">
        {renderDocumentSection("discover")}
      </TabsContent>

      {/* Prepare Tab */}
      <TabsContent value="prepare" className="mt-6">
        {renderDocumentSection("prepare")}
      </TabsContent>

      {/* Explore Tab */}
      <TabsContent value="explore" className="mt-6 space-y-6">
        {renderDocumentSection("explore")}
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>BRD Generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Document scope, requirements, customization, Key Data Structure, Potential solution mapping, Org Structure, Flow, Architecture, etc., captured during the Discover, Prepare, and Explore phases.
            </p>
            <Link href="/brd-generation">
              <Button className="mt-4 fancy-button">Generate BRD</Button>
            </Link>
            <p className="text-sm mt-2 font-light">Instructions to fill each section</p>
          </CardContent>
        </Card>
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Test Plan Generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              There will be a pre-defined section to add test cases. This section will be defined later.
            </p>
            <p className="text-sm mt-2 font-light">Instructions to fill each section</p>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Realize Tab */}
      <TabsContent value="realize" className="mt-6 space-y-6">
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Standard Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Configure all the processes selected during the DDA phase and in the detailed requirements phase.
            </p>
          </CardContent>
        </Card>
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Custom Workflow (WRICEF) code generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Generate code for a custom workflow requirement that is not present in SAP by default.
            </p>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Deploy Tab */}
      <TabsContent value="deploy" className="mt-6">
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Custom Code Deployment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Deploy the custom code developed to S4 HANA.</p>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Run Tab */}
      <TabsContent value="run" className="mt-6">
        {/* Intentionally left empty */}
      </TabsContent>

      <AddDocumentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={addDocument}
        tabName={currentTab}
      />
    </Tabs>
  );
}
