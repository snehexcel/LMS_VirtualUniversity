import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, Clock, FileText } from "lucide-react"

export default function FacultyDashboard() {
  // Mock data for faculty dashboard
  const teachingCourses = [
    {
      id: 1,
      title: "Introduction to Computer Science",
      code: "CS101",
      students: 45,
      progress: 65,
      nextClass: "May 22, 2025",
      pendingGrading: 12,
    },
    {
      id: 2,
      title: "Data Structures and Algorithms",
      code: "CS201",
      students: 38,
      progress: 70,
      nextClass: "May 21, 2025",
      pendingGrading: 8,
    },
    {
      id: 3,
      title: "Database Systems",
      code: "CS305",
      students: 32,
      progress: 55,
      nextClass: "May 23, 2025",
      pendingGrading: 15,
    },
  ]

  const upcomingDeadlines = [
    {
      id: 1,
      title: "Midterm Grades Submission",
      course: "CS101",
      dueDate: "May 25, 2025",
    },
    {
      id: 2,
      title: "Assignment Grading",
      course: "CS201",
      dueDate: "May 23, 2025",
    },
    {
      id: 3,
      title: "Project Proposal Review",
      course: "CS305",
      dueDate: "May 28, 2025",
    },
  ]

  const studentRequests = [
    {
      id: 1,
      student: "Emma Wilson",
      course: "CS101",
      request: "Grade review request for Assignment 3",
      date: "May 20, 2025",
    },
    {
      id: 2,
      student: "James Thompson",
      course: "CS201",
      request: "Extension request for Project submission",
      date: "May 19, 2025",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Faculty Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, Dr. Smith! Here's an overview of your courses and upcoming deadlines.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Teaching Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teachingCourses.length}</div>
            <p className="text-xs text-muted-foreground">Current semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {teachingCourses.reduce((acc, course) => acc + course.students, 0)}
            </div>
            <p className="text-xs text-muted-foreground">Across all courses</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Grading</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {teachingCourses.reduce((acc, course) => acc + course.pendingGrading, 0)}
            </div>
            <p className="text-xs text-muted-foreground">Submissions to grade</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Class</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">May 21</div>
            <p className="text-xs text-muted-foreground">CS201 - Data Structures</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses">
        <TabsList>
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="deadlines">Deadlines</TabsTrigger>
          <TabsTrigger value="requests">Student Requests</TabsTrigger>
        </TabsList>
        <TabsContent value="courses" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {teachingCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>
                    {course.code} • {course.students} students
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div>Course Progress</div>
                      <div className="font-medium">{course.progress}%</div>
                    </div>
                    <Progress value={course.progress} />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium">Next Class:</div>
                      <div className="text-muted-foreground">{course.nextClass}</div>
                    </div>
                    <div>
                      <div className="font-medium">Pending Grading:</div>
                      <div className="text-muted-foreground">{course.pendingGrading} submissions</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="deadlines" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
              <CardDescription>Deadlines for the next two weeks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline) => (
                  <div
                    key={deadline.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <div className="font-medium">{deadline.title}</div>
                      <div className="text-sm text-muted-foreground">{deadline.course}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{deadline.dueDate}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="requests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Student Requests</CardTitle>
              <CardDescription>Recent requests from students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studentRequests.map((request) => (
                  <div key={request.id} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{request.student}</div>
                      <div className="text-sm text-muted-foreground">{request.date}</div>
                    </div>
                    <div className="mt-1 text-sm">{request.request}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{request.course}</div>
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
