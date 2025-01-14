'use client'

import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export function ProjectTabs({ projectType }) {
  return (
    <Tabs defaultValue="discover" className="w-full">
      <TabsList className="grid grid-cols-3 lg:grid-cols-6 h-auto gap-4">
        <TabsTrigger value="discover" className="fancy-border">Discover</TabsTrigger>
        <TabsTrigger value="prepare" className="fancy-border">Prepare</TabsTrigger>
        <TabsTrigger value="explore" className="fancy-border">Explore</TabsTrigger>
        <TabsTrigger value="realize" className="fancy-border">Realize</TabsTrigger>
        <TabsTrigger value="deploy" className="fancy-border">Deploy</TabsTrigger>
        <TabsTrigger value="run" className="fancy-border">Run</TabsTrigger>
      </TabsList>

      {/* Discover Tab */}
      <TabsContent value="discover" className="mt-6">
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>DDA Creation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Create DDA from meeting notes/transcripts</p>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Prepare Tab */}
      <TabsContent value="prepare" className="mt-6 space-y-6">
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Org Structure Creation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Create Org Structure from initial meetings with CTOs/Function Heads</p>
          </CardContent>
        </Card>
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Detailed Process Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Capture detailed requirements for each process in scope</p>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Explore Tab */}
      <TabsContent value="explore" className="mt-6 space-y-6">
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Key Data Structure Creation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Based on the understanding of the detailed business process, create key data elements to operationalize the business in the S4 HANA environment</p>
          </CardContent>
        </Card>
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Requirements Classification</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Captured requirements for the business processes (SAP module) will be classified as a standard or a custom requirement. If custom requirement, what all WRICEF components would be required. Also, provides a brief idea of how it can be achieved in S4 HANA.</p>
            <Link href="/requirement-classification">
              <Button className="mt-4 fancy-button">
                Classify Requirements
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>BRD Generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Document scope, requirements, customization, Key Data Structure, Potential solution mapping, Org Structure, Flow, Architecture, etc., captured during the Discover, Prepare and Explore phases</p>
            <Link href="/brd-generation">
              <Button className="mt-4 fancy-button">
                Generate BRD
              </Button>
            </Link>
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
            <p className="text-gray-600">Configure all the processes selected during the DDA phase and in the detailed requirements phase</p>
          </CardContent>
        </Card>
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Custom Workflow (WRICEF) code generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Generate code for a custom workflow requirement that is not present in SAP by default</p>
          </CardContent>
        </Card>
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Custom Report (WRICEF) code generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Generate code for a custom report that is not present in SAP by default</p>
            <Link href="/custom-report-generation">
              <Button className="fancy-button">
                Generate Custom Report
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Custom Interface (WRICEF) code generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Generate code for a custom interface that is not present in SAP by default</p>
          </CardContent>
        </Card>
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Custom Conversions (WRICEF) code generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Generate code for a custom conversion that is not present in SAP by default</p>
          </CardContent>
        </Card>
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Custom Enhancement (WRICEF) code generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Generate code for a custom SAP enhancement that is not present in SAP by default</p>
          </CardContent>
        </Card>
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Custom Form (WRICEF) code generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Generate code for a custom form that is not present in SAP by default</p>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Deploy Tab */}
      <TabsContent value="deploy" className="mt-6">
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Custom code deployment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Deploy the custom code developed to S4 HANA</p>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Run Tab */}
      <TabsContent value="run" className="mt-6">
        {/* Intentionally left empty as per requirements */}
      </TabsContent>
    </Tabs>
  )
}

