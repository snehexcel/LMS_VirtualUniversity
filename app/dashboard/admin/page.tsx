import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, GraduationCap, Building2, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function AdminDashboard() {
  // Mock data for admin dashboard
  const universityStats = {
    totalDepartments: 8,
    totalCourses: 245,
    totalFaculty: 120,
    totalStudents: 3500,
    activeUsers: 2850,
  }

  const departmentStats = [
    {
      id: 1,
      name: "Computer Science",
      courses: 42,
      faculty: 18,
      students: 450,
      growth: 8,
    },
    {
      id: 2,
      name: "Business Administration",
      courses: 38,
      faculty: 22,
      students: 520,
      growth: 5,
    },
    {
      id: 3,
      name: "Engineering",
      courses: 45,
      faculty: 25,
      students: 480,
      growth: 7,
    },
    {
      id: 4,
      name: "Psychology",
      courses: 30,
      faculty: 15,
      students: 380,
      growth: 4,
    },
  ]

  const systemAlerts = [
    {
      id: 1,
      title: "Database Backup Completed",
      description: "Daily database backup completed successfully.",
      date: "May 21, 2025",
      type: "Success",
    },
    {
      id: 2,
      title: "Storage Space Warning",
      description: "File storage is at 85% capacity. Consider cleanup.",
      date: "May 20, 2025",
      type: "Warning",
    },
    {
      id: 3,
      title: "New User Registrations",
      description: "25 new user registrations in the last 24 hours.",
      date: "May 19, 2025",
      type: "Info",
    },
  ]

  const pendingApprovals = [
    {
      id: 1,
      title: "New Department Creation: Data Science",
      submittedBy: "Dr. Robert Johnson",
      date: "May 18, 2025",
      type: "Department",
    },
    {
      id: 2,
      title: "Faculty Promotion Request",
      submittedBy: "Dr. Sarah Williams",
      date: "May 17, 2025",
      type: "Faculty",
    },
    {
      id: 3,
      title: "New Course Approval: Artificial Intelligence Ethics",
      submittedBy: "Computer Science Department",
      date: "May 16, 2025",
      type: "Course",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, Admin! Here's an overview of the university's performance.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Departments</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{universityStats.totalDepartments}</div>
            <p className="text-xs text-muted-foreground">Active departments</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{universityStats.totalCourses}</div>
            <p className="text-xs text-muted-foreground">Total courses offered</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Faculty</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{universityStats.totalFaculty}</div>
            <p className="text-xs text-muted-foreground">Active faculty members</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Students</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{universityStats.totalStudents}</div>
            <p className="text-xs text-muted-foreground">Enrolled students</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{universityStats.activeUsers}</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="departments">
        <TabsList>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="alerts">System Alerts</TabsTrigger>
          <TabsTrigger value="approvals">Pending Approvals</TabsTrigger>
        </TabsList>
        <TabsContent value="departments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Department Overview</CardTitle>
              <CardDescription>Performance metrics for all departments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {departmentStats.map((dept) => (
                  <div key={dept.id} className="border-b pb-6 last:border-0 last:pb-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <div>
                        <div className="font-medium text-lg">{dept.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {dept.courses} courses • {dept.faculty} faculty • {dept.students} students
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            dept.growth > 5 ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {dept.growth}% Growth
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div>Student Enrollment</div>
                        <div className="font-medium">{dept.students} students</div>
                      </div>
                      <Progress value={(dept.students / 600) * 100} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Alerts</CardTitle>
              <CardDescription>Recent system notifications and alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemAlerts.map((alert) => (
                  <div key={alert.id} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <div>
                        <div className="font-medium">{alert.title}</div>
                        <div className="text-sm">{alert.description}</div>
                        <div className="text-sm text-muted-foreground mt-1">{alert.date}</div>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            alert.type === "Success"
                              ? "bg-green-100 text-green-800"
                              : alert.type === "Warning"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {alert.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="approvals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Approvals</CardTitle>
              <CardDescription>Items requiring super admin approval</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingApprovals.map((approval) => (
                  <div key={approval.id} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <div>
                        <div className="font-medium">{approval.title}</div>
                        <div className="text-sm text-muted-foreground">
                          Submitted by: {approval.submittedBy} • {approval.date}
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            approval.type === "Department"
                              ? "bg-purple-100 text-purple-800"
                              : approval.type === "Faculty"
                                ? "bg-orange-100 text-orange-800"
                                : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {approval.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      <Button size="sm">Approve</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
