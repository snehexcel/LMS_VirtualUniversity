import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, FileText, CheckCircle2 } from "lucide-react"

export default function StudentDashboard() {
  // Mock data for student dashboard
  const enrolledCourses = [
    {
      id: 1,
      title: "Introduction to Computer Science",
      code: "CS101",
      progress: 65,
      instructor: "Dr. Jane Smith",
      nextAssignment: "Algorithm Analysis",
      dueDate: "May 25, 2025",
    },
    {
      id: 2,
      title: "Calculus I",
      code: "MATH201",
      progress: 80,
      instructor: "Prof. Robert Johnson",
      nextAssignment: "Integration Methods",
      dueDate: "May 23, 2025",
    },
    {
      id: 3,
      title: "Introduction to Psychology",
      code: "PSY101",
      progress: 45,
      instructor: "Dr. Emily Chen",
      nextAssignment: "Behavioral Analysis",
      dueDate: "May 28, 2025",
    },
    {
      id: 4,
      title: "Business Ethics",
      code: "BUS305",
      progress: 30,
      instructor: "Prof. Michael Brown",
      nextAssignment: "Case Study Analysis",
      dueDate: "May 30, 2025",
    },
  ]

  const upcomingAssignments = [
    {
      id: 1,
      title: "Algorithm Analysis",
      course: "CS101",
      dueDate: "May 25, 2025",
      status: "Not Started",
    },
    {
      id: 2,
      title: "Integration Methods",
      course: "MATH201",
      dueDate: "May 23, 2025",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Behavioral Analysis",
      course: "PSY101",
      dueDate: "May 28, 2025",
      status: "Not Started",
    },
  ]

  const announcements = [
    {
      id: 1,
      title: "System Maintenance",
      content: "The system will be down for maintenance on Saturday from 2 AM to 5 AM.",
      date: "May 20, 2025",
    },
    {
      id: 2,
      title: "New Course Registration",
      content: "Registration for summer courses will open on June 1st.",
      date: "May 18, 2025",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, John! Here's an overview of your courses and upcoming assignments.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{enrolledCourses.length}</div>
            <p className="text-xs text-muted-foreground">Current semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Assignments</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingAssignments.length}</div>
            <p className="text-xs text-muted-foreground">Due this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(enrolledCourses.reduce((acc, course) => acc + course.progress, 0) / enrolledCourses.length)}%
            </div>
            <p className="text-xs text-muted-foreground">Across all courses</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Due Date</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">May 23</div>
            <p className="text-xs text-muted-foreground">Integration Methods</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses">
        <TabsList>
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
        </TabsList>
        <TabsContent value="courses" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {enrolledCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>
                    {course.code} • {course.instructor}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div>Progress</div>
                      <div className="font-medium">{course.progress}%</div>
                    </div>
                    <Progress value={course.progress} />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Next Assignment:</div>
                    <div className="flex justify-between">
                      <span>{course.nextAssignment}</span>
                      <span className="text-muted-foreground">Due: {course.dueDate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="assignments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Assignments</CardTitle>
              <CardDescription>Assignments due in the next two weeks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAssignments.map((assignment) => (
                  <div
                    key={assignment.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <div className="font-medium">{assignment.title}</div>
                      <div className="text-sm text-muted-foreground">{assignment.course}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{assignment.dueDate}</div>
                      <div
                        className={`text-sm ${
                          assignment.status === "Not Started"
                            ? "text-red-500"
                            : assignment.status === "In Progress"
                              ? "text-yellow-500"
                              : "text-green-500"
                        }`}
                      >
                        {assignment.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="announcements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Announcements</CardTitle>
              <CardDescription>Important updates from your university</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{announcement.title}</div>
                      <div className="text-sm text-muted-foreground">{announcement.date}</div>
                    </div>
                    <div className="mt-1 text-sm">{announcement.content}</div>
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
