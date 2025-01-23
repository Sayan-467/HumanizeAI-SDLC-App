"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for existing users
const existingUsers = [
  { email: "john@example.com", name: "John Doe", contact: "1234567890" },
  { email: "jane@example.com", name: "Jane Smith", contact: "0987654321" },
]

export default function AddUserPage() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [role, setRole] = useState("")
  const [productType, setProductType] = useState("SAP")
  const [isExistingUser, setIsExistingUser] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const user = existingUsers.find((u) => u.email === email)
    if (user) {
      setIsExistingUser(true)
      setName(user.name)
      setContact(user.contact)
    } else {
      setIsExistingUser(false)
      setName("")
      setContact("")
    }
  }, [email])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log({ email, name, contact, role, productType })
    router.push("/projects")
  }

  const roleOptions = {
    SAP: [
      "Sr. Business Analyst - SAP",
      "Business Analyst - SAP",
      "Developer - SAP",
      "Lead Developer - SAP",
      "Configuration Lead - SAP",
    ],
    SFDC: [
      "Sr. Business Analyst - SFDC",
      "Business Analyst - SFDC",
      "Developer - SFDC",
      "Lead Developer - SFDC",
      "Configuration Lead - SFDC",
    ],
    "Service Now": [
      "Sr. Business Analyst - Service Now",
      "Business Analyst - Service Now",
      "Developer - Service Now",
      "Lead Developer - Service Now",
      "Configuration Lead - Service Now",
    ],
  }

  return (
    <>
      <div className="px-28 pt-12">
        <Link href="/">
          <Button variant="outline" className="mb-4 fancy-border">
            ← Back to Project Page
          </Button>
        </Link>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-background to-secondary">
        <Card className="w-[450px] fancy-glass fancy-border">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Add User to Project</CardTitle>
            <CardDescription className="text-primary/70">Enter user details to add them to the project</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter user's email"
                  required
                  className="fancy-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter user's name"
                  required
                  disabled={isExistingUser}
                  className="fancy-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact">Contact</Label>
                <Input
                  id="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Enter user's contact number"
                  required
                  disabled={isExistingUser}
                  className="fancy-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="productType">Product Type</Label>
                <Select onValueChange={setProductType} defaultValue={productType}>
                  <SelectTrigger className="fancy-border">
                    <SelectValue placeholder="Select product type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SAP">SAP</SelectItem>
                    <SelectItem value="SFDC">SFDC</SelectItem>
                    <SelectItem value="Service Now">Service Now</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select onValueChange={setRole}>
                  <SelectTrigger className="fancy-border">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roleOptions[productType].map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full fancy-button" onClick={handleSubmit}>
              Add User
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

