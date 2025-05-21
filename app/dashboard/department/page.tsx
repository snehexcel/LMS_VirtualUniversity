import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, GraduationCap, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DepartmentDashboard() {
  // Mock data for department dashboard
  const departmentStats = {
    totalCourses: 24,
    totalFaculty: 18,
    totalStudents: 450,
    graduationRate: 92,
  }

  const coursePerformance = [
    {
      id: 1,
      title: "Introduction to Computer Science",
      code: "CS101",
      students: 45,
      passRate: 88,
      avgGrade: "B+",
      instructor: "Dr. Jane Smith",
    },
    {
      id: 2,
      title: "Data Structures and Algorithms",
      code: "CS201",
      students: 38,
      passRate: 82,
      avgGrade: "B",
      instructor: "Dr. Michael Johnson",
    },
    {
      id: 3,
      title: "Database Systems",
      code: "CS305",
      students: 32,
      passRate: 91,
      avgGrade: "A-",
      instructor: "Prof. Sarah Williams",
    },
    {
      id: 4,
      title: "Software Engineering",
      code: "CS401",
      students: 28,
      passRate: 86,
      avgGrade: "B+",
      instructor: "Dr. Robert Chen",
    },
  ]

  const facultyPerformance = [
    {
      id: 1,
      name: "Dr. Jane Smith",
      courses: 3,
      students: 105,
      avgRating: 4.8,
      status: "Active",
    },
    {
      id: 2,
      name: "Dr. Michael Johnson",
      courses: 2,
      students: 76,
      avgRating: 4.5,
      status: "Active",
    },
    {
      id: 3,
      name: "Prof. Sarah Williams",
      courses: 3,
      students: 92,
      avgRating: 4.7,
      status: "Active",
    },
    {
      id: 4,
      name: "Dr. Robert Chen",
      courses: 2,
      students: 58,
      avgRating: 4.6,
      status: "Active",
    },
  ]

  const pendingApprovals = [
    {
      id: 1,
      title: "New Course Proposal: Machine Learning",
      submittedBy: "Dr. Jane Smith",
      date: "May 18, 2025",
      type: "Course",
    },
    {
      id: 2,
      title: "Curriculum Change: Software Engineering",
      submittedBy: "Dr. Robert Chen",
      date: "May 17, 2025",
      type: "Curriculum",
    },
    {
      id: 3,
      title: "Faculty Leave Request",
      submittedBy: "Prof. Sarah Williams",
      date: "May 15, 2025",
      type: "Administrative",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Department Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, Dr. Johnson! Here's an overview of your department's performance.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{departmentStats.totalCourses}</div>
            <p className="text-xs text-muted-foreground">Current semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Faculty Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{departmentStats.totalFaculty}</div>
            <p className="text-xs text-muted-foreground">Active faculty</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{departmentStats.totalStudents}</div>
            <p className="text-xs text-muted-foreground">Enrolled in department</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Graduation Rate</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{departmentStats.graduationRate}%</div>
            <p className="text-xs text-muted-foreground">Last academic year</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses">
        <TabsList>
          <TabsTrigger value="courses">Course Performance</TabsTrigger>
          <TabsTrigger value="faculty">Faculty Performance</TabsTrigger>
          <TabsTrigger value="approvals">Pending Approvals</TabsTrigger>
        </TabsList>
        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Performance</CardTitle>
              <CardDescription>Overview of course performance in the current semester</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {coursePerformance.map((course) => (
                  <div key={course.id} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <div>
                        <div className="font-medium">{course.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {course.code} • {course.instructor}
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-0 text-sm">
                        <span className="font-medium">{course.students} students</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div>Pass Rate</div>
                        <div className="font-medium">{course.passRate}%</div>
                      </div>
                      <Progress value={course.passRate} />
                      <div className="flex justify-between text-sm">
                        <div>
                          Average Grade: <span className="font-medium">{course.avgGrade}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="faculty" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Faculty Performance</CardTitle>
              <CardDescription>Overview of faculty performance in the current semester</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {facultyPerformance.map((faculty) => (
                  <div key={faculty.id} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <div>
                        <div className="font-medium">{faculty.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {faculty.courses} courses • {faculty.students} students
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            faculty.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {faculty.status}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div>Student Rating</div>
                        <div className="font-medium">{faculty.avgRating}/5.0</div>
                      </div>
                      <Progress value={faculty.avgRating * 20} />
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
              <CardDescription>Items requiring your approval</CardDescription>
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
                            approval.type === "Course"
                              ? "bg-blue-100 text-blue-800"
                              : approval.type === "Curriculum"
                                ? "bg-purple-100 text-purple-800"
                                : "bg-orange-100 text-orange-800"
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
