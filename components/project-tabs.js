'use client'

import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Upload } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
            <CardTitle>Digital Discovery Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Upload DDA report and other notes/transcripts (if any).</p>
            <div className="flex justify-start items-center gap-14">
              <div>
              <Label htmlFor="dda">Digital Discovery Assessment Report</Label>
                <div className="relative">
                  <input
                    id="dda-creation"
                    type="file"
                    className="sr-only" // Hide the input but keep it accessible via the label
                  />
                  <label
                    htmlFor="dda-creation"
                    className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105"
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    Upload File
                  </label>
                </div>
              </div>
              <div>
                <Label htmlFor="digital-discovery-assessment">Note / Transcript (if any)</Label>
                <div className="relative">
                  <input
                    id="digital-assessment"
                    type="file"
                    className="sr-only" // Hide the input but keep it accessible via the label
                  />
                  <label
                    htmlFor="digital-assessment"
                    className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105"
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    Upload File
                  </label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Prepare Tab */}
      <TabsContent value="prepare" className="mt-6 space-y-6">
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Org Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Upload Org Structure created from initial discussions with CTOs/Function Heads.</p>
            <div>
              <Label htmlFor="org-structure">Upload org structure</Label>
              <div className="relative">
                  <input
                    id="org-structr"
                    type="file"
                    className="sr-only" // Hide the input but keep it accessible via the label
                  />
                  <label
                    htmlFor="org-structr"
                    className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105"
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    Upload File
                  </label>
                </div>
            </div>
          </CardContent>
        </Card>
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Detailed Process Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Capture detailed requirements for each process in scope</p>
            <div>
              <Label htmlFor="process-requirement">Process requirement</Label>
              <div className="relative">
                  <input
                    id="process-requirement"
                    type="file"
                    className="sr-only" // Hide the input but keep it accessible via the label
                  />
                  <label
                    htmlFor="process-requirement"
                    className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105"
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    Upload File
                  </label>
                </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Explore Tab */}
      <TabsContent value="explore" className="mt-6 space-y-6">
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Key Data Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Based on the understanding of the detailed business process, create key data elements to operationalize the business in the S4 HANA environment</p>
            <div>
              <Label htmlFor="kds-document">Upload KDS document</Label>
              <div className="relative">
                  <input
                    id="upload-kds"
                    type="file"
                    className="sr-only" // Hide the input but keep it accessible via the label
                  />
                  <label
                    htmlFor="upload-kds"
                    className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105"
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    Upload File
                  </label>
                </div>
            </div>
          </CardContent>
        </Card>
        <Card className="fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Solution Definition</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Captured requirements for the business processes (SAP module) will be classified as a standard or a custom requirement. If custom requirement, what all WRICEF components would be required. Also, provides a brief idea of how it can be achieved in S4 HANA.</p>
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
            <p className="text-gray-600 mb-4">Document scope, requirements, customization, Key Data Structure, Potential solution mapping, Org Structure, Flow, Architecture, etc., captured during the Discover, Prepare and Explore phases</p>
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

