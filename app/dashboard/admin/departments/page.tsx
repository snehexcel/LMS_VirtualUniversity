"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Building2, ChevronLeft, ChevronRight, MoreHorizontal, Search } from "lucide-react"

export default function AdminDepartmentsPage() {
  // Mock data for departments
  const initialDepartments = [
    {
      id: 1,
      name: "Computer Science",
      head: "Dr. Jane Smith",
      faculty: 18,
      students: 450,
      courses: 42,
      status: "Active",
    },
    {
      id: 2,
      name: "Business Administration",
      head: "Prof. Robert Johnson",
      faculty: 22,
      students: 520,
      courses: 38,
      status: "Active",
    },
    {
      id: 3,
      name: "Engineering",
      head: "Dr. Michael Brown",
      faculty: 25,
      students: 480,
      courses: 45,
      status: "Active",
    },
    {
      id: 4,
      name: "Psychology",
      head: "Dr. Emily Chen",
      faculty: 15,
      students: 380,
      courses: 30,
      status: "Active",
    },
    {
      id: 5,
      name: "Mathematics",
      head: "Prof. David Wilson",
      faculty: 12,
      students: 320,
      courses: 28,
      status: "Active",
    },
    {
      id: 6,
      name: "Physics",
      head: "Dr. Sarah Williams",
      faculty: 10,
      students: 280,
      courses: 25,
      status: "Active",
    },
    {
      id: 7,
      name: "Chemistry",
      head: "Prof. James Anderson",
      faculty: 8,
      students: 240,
      courses: 22,
      status: "Active",
    },
    {
      id: 8,
      name: "Art & Design",
      head: "Dr. Lisa Taylor",
      faculty: 14,
      students: 350,
      courses: 32,
      status: "Inactive",
    },
  ]

  const [departments, setDepartments] = useState(initialDepartments)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const departmentsPerPage = 5

  // Filter departments based on search term
  const filteredDepartments = departments.filter((department) => {
    return (
      department.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      department.head.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  // Pagination
  const indexOfLastDepartment = currentPage * departmentsPerPage
  const indexOfFirstDepartment = indexOfLastDepartment - departmentsPerPage
  const currentDepartments = filteredDepartments.slice(indexOfFirstDepartment, indexOfLastDepartment)
  const totalPages = Math.ceil(filteredDepartments.length / departmentsPerPage)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Department Management</h1>
          <p className="text-muted-foreground">Manage all departments in the university</p>
        </div>
        <Button>
          <Building2 className="mr-2 h-4 w-4" />
          Add Department
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Departments</CardTitle>
          <CardDescription>View and manage all departments in the university</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search departments..."
                className="pl-8"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Department</TableHead>
                    <TableHead>Head</TableHead>
                    <TableHead className="hidden md:table-cell">Faculty</TableHead>
                    <TableHead className="hidden md:table-cell">Students</TableHead>
                    <TableHead className="hidden md:table-cell">Courses</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentDepartments.length > 0 ? (
                    currentDepartments.map((department) => (
                      <TableRow key={department.id}>
                        <TableCell className="font-medium">{department.name}</TableCell>
                        <TableCell>{department.head}</TableCell>
                        <TableCell className="hidden md:table-cell">{department.faculty}</TableCell>
                        <TableCell className="hidden md:table-cell">{department.students}</TableCell>
                        <TableCell className="hidden md:table-cell">{department.courses}</TableCell>
                        <TableCell>
                          <Badge variant={department.status === "Active" ? "default" : "secondary"}>
                            {department.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>View details</DropdownMenuItem>
                              <DropdownMenuItem>Edit department</DropdownMenuItem>
                              <DropdownMenuItem>Manage faculty</DropdownMenuItem>
                              <DropdownMenuItem>Manage courses</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                className={department.status === "Active" ? "text-red-600" : "text-green-600"}
                              >
                                {department.status === "Active" ? "Deactivate" : "Activate"}
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="h-24 text-center">
                        No departments found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            {filteredDepartments.length > 0 && (
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing {indexOfFirstDepartment + 1} to {Math.min(indexOfLastDepartment, filteredDepartments.length)}{" "}
                  of {filteredDepartments.length} departments
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Previous Page</span>
                  </Button>
                  <div className="text-sm">
                    Page {currentPage} of {totalPages}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Next Page</span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
