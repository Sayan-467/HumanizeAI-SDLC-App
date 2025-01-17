'use client'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ProjectTabs({ projectType }) {
  return (
    <Tabs defaultValue="discover" className="w-full">
      <TabsList className="grid grid-cols-3 lg:grid-cols-6 h-auto gap-4 px-4 py-3">
        <TabsTrigger className=' hover:bg-purple-700 hover:text-black' value="discover">Discover</TabsTrigger>
        <TabsTrigger className=' hover:bg-purple-700 hover:text-black' value="prepare">Prepare</TabsTrigger>
        <TabsTrigger className=' hover:bg-purple-700 hover:text-black' value="explore">Explore</TabsTrigger>
        <TabsTrigger className=' hover:bg-purple-700 hover:text-black' value="realize">Realize</TabsTrigger>
        <TabsTrigger className=' hover:bg-purple-700 hover:text-black' value="deploy">Deploy</TabsTrigger>
        <TabsTrigger className=' hover:bg-purple-700 hover:text-black' value="run">Run</TabsTrigger>
      </TabsList>

      {/* Discover Tab */}
      <TabsContent value="discover" className="mt-6">
        <Card className="bg-secondary/50 backdrop-blur-sm border-accent/20 px-4">
          <CardHeader>
            <CardTitle>DDA Creation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-primary/70">Create DDA from meeting notes/transcripts</p>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Prepare Tab */}
      <TabsContent value="prepare" className="mt-6 space-y-6">
        <Card className="bg-secondary/50 backdrop-blur-sm border-accent/20">
          <CardHeader>
            <CardTitle>Org Structure Creation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-primary/70">Create Org Structure from initial meetings with CTOs/Function Heads</p>
          </CardContent>
        </Card>
        <Card className="bg-secondary/50 backdrop-blur-sm border-accent/20">
          <CardHeader>
            <CardTitle>Detailed Process Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-primary/70">Capture detailed requirements for each process in scope.</p>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Explore Tab */}
      <TabsContent value="explore" className="mt-6 space-y-6">
        <Card className="bg-secondary/50 backdrop-blur-sm border-accent/20">
          <CardHeader>
            <CardTitle>Key Data Structure Creation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-primary/70">Based on the understanding of the detailed business process, create key data elements to operationalize the business in the S4 HANA environment</p>
          </CardContent>
        </Card>
        <Card className="bg-secondary/50 backdrop-blur-sm border-accent/20">
          <CardHeader>
            <CardTitle>Requirements Classification</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-primary/70">Captured requirements for the business processes (SAP module) will be classified as a standard or a custom requirement. If custom requirement, what all WRICEF components would be required. Also, provides a brief idea of how it can be achieved in S4 HANA.</p>
          </CardContent>
        </Card>
        <Card className="bg-secondary/50 backdrop-blur-sm border-accent/20">
          <CardHeader>
            <CardTitle>BRD Generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-primary/70">Document scope, requirements, customization, Key Data Structure, Potential solution mapping, Org Structure, Flow, Architecture, etc., captured during the Discover, Prepare and Explore phases</p>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Realize Tab */}
      <TabsContent value="realize" className="mt-6 space-y-6">
        <Card className="bg-secondary/50 backdrop-blur-sm border-accent/20">
          <CardHeader>
            <CardTitle>Standard Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-primary/70">Configure all the processes selected during the DDA phase and in the detailed requirements phase</p>
          </CardContent>
        </Card>
        <Card className="bg-secondary/50 backdrop-blur-sm border-accent/20">
          <CardHeader>
            <CardTitle>Custom Workflow (WRICEF) code generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-primary/70">Generate code for a custom workflow requirement that is not present in SAP by default</p>
          </CardContent>
        </Card>
        <Card className="bg-secondary/50 backdrop-blur-sm border-accent/20">
          <CardHeader>
            <CardTitle>Custom Report (WRICEF) code generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-primary/70">Generate code for a custom report that is not present in SAP by default</p>
          </CardContent>
        </Card>
        <Card className="bg-secondary/50 backdrop-blur-sm border-accent/20">
          <CardHeader>
            <CardTitle>Custom Interface (WRICEF) code generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-primary/70">Generate code for a custom interface that is not present in SAP by default</p>
          </CardContent>
        </Card>
        <Card className="bg-secondary/50 backdrop-blur-sm border-accent/20">
          <CardHeader>
            <CardTitle>Custom Conversions (WRICEF) code generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-primary/70">Generate code for a custom conversion that is not present in SAP by default</p>
          </CardContent>
        </Card>
        <Card className="bg-secondary/50 backdrop-blur-sm border-accent/20">
          <CardHeader>
            <CardTitle>Custom Enhancement (WRICEF) code generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-primary/70">Generate code for a custom SAP enhancement that is not present in SAP by default</p>
          </CardContent>
        </Card>
        <Card className="bg-secondary/50 backdrop-blur-sm border-accent/20">
          <CardHeader>
            <CardTitle>Custom Form (WRICEF) code generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-primary/70">Generate code for a custom form that is not present in SAP by default</p>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Deploy Tab */}
      <TabsContent value="deploy" className="mt-6">
        <Card className="bg-secondary/50 backdrop-blur-sm border-accent/20">
          <CardHeader>
            <CardTitle>Custom code deployment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-primary/70">Deploy the custom code developed to S4 HANA</p>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Run Tab */}
      <TabsContent value="run" className="mt-6">
        {/* Intentionally left empty as per requirements */}
      </TabsContent>
    </Tabs>
  );
}
