import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText } from "lucide-react"
import { CourseCardImage } from "@/components/course-card-image"

function CourseCardImageOld({ courseCode, title }: { courseCode: string; title: string }) {
  return (
    <div className="relative h-32 w-full mb-2 overflow-hidden rounded-md">
      <img
        src={`/placeholder.svg?height=128&width=256&text=${courseCode}`}
        alt={title}
        className="object-cover w-full h-full"
      />
    </div>
  )
}

export default function StudentCoursesPage() {
  // Mock data for student courses
  const enrolledCourses = [
    {
      id: 1,
      title: "Introduction to Computer Science",
      code: "CS101",
      progress: 65,
      instructor: "Dr. Jane Smith",
      nextAssignment: "Algorithm Analysis",
      dueDate: "May 25, 2025",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Calculus I",
      code: "MATH201",
      progress: 80,
      instructor: "Prof. Robert Johnson",
      nextAssignment: "Integration Methods",
      dueDate: "May 23, 2025",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Introduction to Psychology",
      code: "PSY101",
      progress: 45,
      instructor: "Dr. Emily Chen",
      nextAssignment: "Behavioral Analysis",
      dueDate: "May 28, 2025",
      status: "In Progress",
    },
    {
      id: 4,
      title: "Business Ethics",
      code: "BUS305",
      progress: 30,
      instructor: "Prof. Michael Brown",
      nextAssignment: "Case Study Analysis",
      dueDate: "May 30, 2025",
      status: "In Progress",
    },
  ]

  const completedCourses = [
    {
      id: 5,
      title: "Introduction to Programming",
      code: "CS100",
      grade: "A",
      instructor: "Dr. Jane Smith",
      completedDate: "December 15, 2024",
      status: "Completed",
    },
    {
      id: 6,
      title: "College Algebra",
      code: "MATH101",
      grade: "B+",
      instructor: "Prof. Robert Johnson",
      completedDate: "December 15, 2024",
      status: "Completed",
    },
  ]

  const availableCourses = [
    {
      id: 7,
      title: "Web Development",
      code: "CS301",
      instructor: "Dr. Jane Smith",
      credits: 3,
      schedule: "Mon, Wed 10:00 AM - 11:30 AM",
      prerequisites: ["CS101"],
      status: "Available",
    },
    {
      id: 8,
      title: "Data Science Fundamentals",
      code: "CS350",
      instructor: "Prof. David Wilson",
      credits: 4,
      schedule: "Tue, Thu 1:00 PM - 2:30 PM",
      prerequisites: ["CS101", "MATH201"],
      status: "Available",
    },
    {
      id: 9,
      title: "Artificial Intelligence",
      code: "CS401",
      instructor: "Dr. Sarah Lee",
      credits: 4,
      schedule: "Mon, Wed, Fri 2:00 PM - 3:00 PM",
      prerequisites: ["CS201", "MATH201"],
      status: "Available",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
        <p className="text-muted-foreground">Manage your enrolled courses and explore new ones</p>
      </div>

      <Tabs defaultValue="enrolled">
        <TabsList>
          <TabsTrigger value="enrolled">Enrolled Courses</TabsTrigger>
          <TabsTrigger value="completed">Completed Courses</TabsTrigger>
          <TabsTrigger value="available">Available Courses</TabsTrigger>
        </TabsList>
        <TabsContent value="enrolled" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {enrolledCourses.map((course) => (
              <Card key={course.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>{course.code}</CardDescription>
                    </div>
                    <Badge variant="outline">{course.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <CourseCardImage courseCode={course.code} title={course.title} />
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div>Progress</div>
                        <div className="font-medium">{course.progress}%</div>
                      </div>
                      <Progress value={course.progress} />
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Instructor</div>
                      <div className="text-sm text-muted-foreground">{course.instructor}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Next Assignment</div>
                      <div className="text-sm text-muted-foreground">{course.nextAssignment}</div>
                      <div className="text-sm text-muted-foreground">Due: {course.dueDate}</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/dashboard/student/courses/${course.id}`}>View Course</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {completedCourses.map((course) => (
              <Card key={course.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>{course.code}</CardDescription>
                    </div>
                    <Badge variant="secondary">{course.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Final Grade</div>
                      <div className="text-2xl font-bold">{course.grade}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Instructor</div>
                      <div className="text-sm text-muted-foreground">{course.instructor}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Completed</div>
                      <div className="text-sm text-muted-foreground">{course.completedDate}</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/dashboard/student/courses/${course.id}`}>View Certificate</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="available" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {availableCourses.map((course) => (
              <Card key={course.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>{course.code}</CardDescription>
                    </div>
                    <Badge variant="outline">{course.credits} Credits</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Instructor</div>
                      <div className="text-sm text-muted-foreground">{course.instructor}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Schedule</div>
                      <div className="text-sm text-muted-foreground">{course.schedule}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Prerequisites</div>
                      <div className="text-sm text-muted-foreground">
                        {course.prerequisites.length > 0 ? course.prerequisites.join(", ") : "None"}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <FileText className="mr-2 h-4 w-4" />
                    Details
                  </Button>
                  <Button className="flex-1">Enroll</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
