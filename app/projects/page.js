"use client"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
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
import { useRouter } from "next/navigation"

export default function ProjectListPage() {
  const [projects, setProjects] = useState([
    { id: 1, name: "ERP Transformation", status: "In Progress", image: "/project1.jpeg" },
    { id: 2, name: "CRM System", status: "Planning", image: "/project2.png" },
    { id: 3, name: "Mobile App", status: "Testing", image: "/project3.jpeg" },
  ])
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-green-500/20 border-green-500/50"
      case "Planning":
        return "bg-violet-500/20 border-violet-500/50"
      case "Testing":
        return "bg-yellow-500/20 border-yellow-500/50"
      default:
        return "bg-secondary/50 border-accent/20"
    }
  }

  const SubmitButton = () => {
    const { pending } = useFormStatus()
    return (
      <Button type="submit" className="bg-accent hover:bg-accent/80 text-accent-foreground" disabled={pending}>
        {pending ? 'Adding...' : 'Add Project'}
      </Button>
    )
  }

  const addProject = async (event) => {
    event.preventDefault(); // Prevent page refresh

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const description = formData.get("description");
    const productType = formData.get("productType");
    const industryClassification = formData.get("industryClassification");
    const startDate = formData.get("startDate");
    const discoverEndDate = formData.get("discoverEndDate");

    const newProject = {
      id: projects.length + 1,
      name,
      description,
      productType,
      industryClassification,
      startDate,
      discoverEndDate,
      status: "Planning",
    };

    setProjects([...projects, newProject]); // Update project state
    setIsDialogOpen(false); // Close the dialog
  };

  return (
    <div className="space-y-6 px-28 py-12">
      <Link href="/">
        <Button variant="outline" className="mb-4 fancy-border">
          ← Back to Home Page
        </Button>
      </Link>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600 drop-shadow-lg">Projects</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="fancy-button">Create Project</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-secondary text-primary">
            <DialogHeader>
              <DialogTitle className="text-blue-600 text-xl font-semibold">Project</DialogTitle>
              <DialogDescription className="text-blue-500">Create a new project for your SDLC workflow.</DialogDescription>
            </DialogHeader>
            <form onSubmit={addProject}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right text-blue-500">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Project name"
                    className="col-span-3 bg-background/50 text-primary placeholder:text-primary/50"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right text-blue-500">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Project description"
                    className="col-span-3 bg-background/50 text-primary placeholder:text-primary/50"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="productType" className="text-right text-blue-500">
                    Product Type
                  </Label>
                  <select
                    id="productType"
                    name="productType"
                    className="col-span-3 bg-background/50 text-primary border border-input rounded-md p-2"
                  >
                    <option value="SAP">SAP</option>
                    <option value="SFDC">SFDC</option>
                    <option value="Service Now">Service Now</option>
                  </select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="industryClassification" className="text-right text-blue-500">
                    Industry Classification
                  </Label>
                  <select
                    id="industryClassification"
                    name="industryClassification"
                    className="col-span-3 bg-background/50 text-primary border border-input rounded-md p-2"
                  >
                    <option value="Agriculture & Forestry">Agriculture & Forestry</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Banking & Finance">Banking & Finance</option>
                    <option value="Technology">Technology</option>
                    <option value="Energy">Energy</option>
                    <option value="Healthcare & Pharma">Healthcare & Pharma</option>
                    <option value="Retail">Retail</option>
                    <option value="Entertainment & Media">Entertainment & Media</option>
                    <option value="Construction">Construction</option>
                    <option value="Real Estate">Real Estate</option>
                  </select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="startDate" className="text-right text-blue-500">
                    Start Date
                  </Label>
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    className="col-span-3 bg-background/50 text-primary"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="discoverEndDate" className="text-right text-blue-500">
                    Project End Date
                  </Label>
                  <Input
                    id="discoverEndDate"
                    name="discoverEndDate"
                    type="date"
                    className="col-span-3 bg-background/50 text-primary"
                  />
                </div>
                {/* <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="prepareEndDate" className="text-right">
                    Prepare End Date
                  </Label>
                  <Input
                    id="prepareEndDate"
                    name="prepareEndDate"
                    type="date"
                    className="col-span-3 bg-background/50 text-primary"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="exploreEndDate" className="text-right">
                    Explore End Date
                  </Label>
                  <Input
                    id="exploreEndDate"
                    name="exploreEndDate"
                    type="date"
                    className="col-span-3 bg-background/50 text-primary"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="realizeEndDate" className="text-right">
                    Realize End Date
                  </Label>
                  <Input
                    id="realizeEndDate"
                    name="realizeEndDate"
                    type="date"
                    className="col-span-3 bg-background/50 text-primary"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="deployEndDate" className="text-right">
                    Deploy End Date
                  </Label>
                  <Input
                    id="deployEndDate"
                    name="deployEndDate"
                    type="date"
                    className="col-span-3 bg-background/50 text-primary"
                  />
                </div> */}
              </div>
              <DialogFooter>
                <SubmitButton className="fancy-button" />
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex justify-between items-center space-x-2">
        <div className="relative w-full max-w-[928px]">
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_44_167)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.5306 20.4694L16.8366 15.7762C19.6629 12.383 19.3204 7.36693 16.0591 4.38935C12.7978 1.41176 7.77134 1.526 4.64867 4.64867C1.526 7.77134 1.41176 12.7978 4.38935 16.0591C7.36693 19.3204 12.383 19.6629 15.7762 16.8366L20.4694 21.5306C20.7624 21.8237 21.2376 21.8237 21.5306 21.5306C21.8237 21.2376 21.8237 20.7624 21.5306 20.4694ZM3.75 10.5C3.75 6.77208 6.77208 3.75 10.5 3.75C14.2279 3.75 17.25 6.77208 17.25 10.5C17.25 14.2279 14.2279 17.25 10.5 17.25C6.77379 17.2459 3.75413 14.2262 3.75 10.5Z"
                fill="#369EFF"
              />
            </g>
            <defs>
              <clipPath id="clip0_44_167">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <Input
            className="w-full bg-[#f8f9fa] text-primary placeholder:text-blue-500 rounded-[16px] shadow-md pl-12 py-6"
            type="search"
            placeholder="Search projects..."
          />
        </div>

        {/* <Link href="/add-user">
          <Button className="bg-accent hover:bg-accent/80 text-accent-foreground ml-2">Add User</Button>
        </Link> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <Card key={project.id} className={`bg-secondary/50 backdrop-blur-sm border-accent/20`}>
            <Image src={project.image} alt={project.name} width={300} height={200} className="rounded-t-lg object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle className="text-primary font-semibold text-xl">{project.name}</CardTitle>
              <CardDescription className="text-primary/70"><span className='font-semibold text-md'>Product Type: </span> <span className='text-md'>{project.productType}</span></CardDescription>
              <CardDescription className="text-primary/70"><span className='font-semibold text-md'>Project Type: </span> <span className='text-md'>{project.projectType}</span></CardDescription>
              <CardDescription className="text-primary/70"><span className='font-semibold text-md'>Industry Classification: </span> <span className='text-md'>{project.industryClassification}</span></CardDescription>
              <CardDescription className="text-primary/70"><span className='font-semibold text-md'>Start Date: </span> <span className='text-md'>{project.startDate}</span></CardDescription>
              <CardDescription className="text-primary/70"><span className='font-semibold text-md'>Project End Date: </span> <span className='text-md'>{project.discoverEndDate}</span></CardDescription>
              <CardDescription className="text-primary/70"><span className='font-semibold text-md'>Status: </span> <span className={`px-2 py-1 text-md ${getStatusColor(project.status)}`}>{project.status}</span></CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <Link href={`/projects/${project.id}`}>
                <Button variant="outline" className="w-full text-primary border-accent hover:bg-accent hover:text-accent-foreground">View Project</Button>
              </Link>
              <Link href={`/add-user`}>
                <AddUserButton />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function AddUserButton() {
  const router = useRouter()
  return (
    <Button
      type="button"
      className="bg-accent hover:bg-accent/80 text-accent-foreground"
      onClick={() => router.push("/add-user")}
    >
      Add User
    </Button>
  )
}

