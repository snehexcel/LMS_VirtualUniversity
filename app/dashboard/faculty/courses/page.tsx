import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Users, Plus } from "lucide-react"
import { CourseCardImage } from "@/components/course-card-image"

export default function FacultyCoursesPage() {
  // Mock data for faculty courses
  const activeCourses = [
    {
      id: 1,
      title: "Introduction to Computer Science",
      code: "CS101",
      progress: 65,
      students: 45,
      nextClass: "May 22, 2025",
      pendingGrading: 12,
      status: "Active",
    },
    {
      id: 2,
      title: "Data Structures and Algorithms",
      code: "CS201",
      progress: 70,
      students: 38,
      nextClass: "May 21, 2025",
      pendingGrading: 8,
      status: "Active",
    },
    {
      id: 3,
      title: "Database Systems",
      code: "CS305",
      progress: 55,
      students: 32,
      nextClass: "May 23, 2025",
      pendingGrading: 15,
      status: "Active",
    },
  ]

  const pastCourses = [
    {
      id: 4,
      title: "Introduction to Programming",
      code: "CS100",
      students: 50,
      term: "Fall 2024",
      avgGrade: "B+",
      status: "Completed",
    },
    {
      id: 5,
      title: "Web Development Fundamentals",
      code: "CS210",
      students: 35,
      term: "Fall 2024",
      avgGrade: "A-",
      status: "Completed",
    },
  ]

  const draftCourses = [
    {
      id: 6,
      title: "Machine Learning",
      code: "CS450",
      lastEdited: "May 15, 2025",
      completionStatus: 75,
      status: "Draft",
    },
    {
      id: 7,
      title: "Cloud Computing",
      code: "CS460",
      lastEdited: "May 10, 2025",
      completionStatus: 40,
      status: "Draft",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
          <p className="text-muted-foreground">Manage your courses and create new ones</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Course
        </Button>
      </div>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active Courses</TabsTrigger>
          <TabsTrigger value="past">Past Courses</TabsTrigger>
          <TabsTrigger value="drafts">Draft Courses</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {activeCourses.map((course) => (
              <Card key={course.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>{course.code}</CardDescription>
                    </div>
                    <Badge>{course.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <CourseCardImage courseCode={course.code} title={course.title} />
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div>Course Progress</div>
                        <div className="font-medium">{course.progress}%</div>
                      </div>
                      <Progress value={course.progress} />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium">Students</div>
                        <div className="text-muted-foreground">{course.students}</div>
                      </div>
                      <div>
                        <div className="font-medium">Next Class</div>
                        <div className="text-muted-foreground">{course.nextClass}</div>
                      </div>
                      <div>
                        <div className="font-medium">Pending Grading</div>
                        <div className="text-muted-foreground">{course.pendingGrading} submissions</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" asChild className="flex-1">
                    <Link href={`/dashboard/faculty/courses/${course.id}/students`}>
                      <Users className="mr-2 h-4 w-4" />
                      Students
                    </Link>
                  </Button>
                  <Button asChild className="flex-1">
                    <Link href={`/dashboard/faculty/courses/${course.id}`}>Manage</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="past" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pastCourses.map((course) => (
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
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium">Term</div>
                        <div className="text-muted-foreground">{course.term}</div>
                      </div>
                      <div>
                        <div className="font-medium">Students</div>
                        <div className="text-muted-foreground">{course.students}</div>
                      </div>
                      <div>
                        <div className="font-medium">Average Grade</div>
                        <div className="text-muted-foreground">{course.avgGrade}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" asChild className="flex-1">
                    <Link href={`/dashboard/faculty/courses/${course.id}/analytics`}>
                      <FileText className="mr-2 h-4 w-4" />
                      Analytics
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link href={`/dashboard/faculty/courses/${course.id}`}>View</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="drafts" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {draftCourses.map((course) => (
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
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div>Completion Status</div>
                        <div className="font-medium">{course.completionStatus}%</div>
                      </div>
                      <Progress value={course.completionStatus} />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">Last Edited</div>
                      <div className="text-muted-foreground">{course.lastEdited}</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button asChild className="w-full">
                    <Link href={`/dashboard/faculty/courses/${course.id}/edit`}>Continue Editing</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
