import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UniversityMap } from "@/app/components/university-map"
import { MapPin, Calendar, Clock, Info } from "lucide-react"

export default function CampusPage() {
  // Mock data for campus information
  const campusEvents = [
    {
      id: 1,
      title: "Virtual Orientation",
      date: "May 25, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Student Center",
      description: "Welcome orientation for new students",
    },
    {
      id: 2,
      title: "Tech Career Fair",
      date: "May 28, 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Science Complex",
      description: "Connect with tech companies for internship and job opportunities",
    },
    {
      id: 3,
      title: "Virtual Art Exhibition",
      date: "June 2, 2025",
      time: "3:00 PM - 7:00 PM",
      location: "Arts Center",
      description: "Student art showcase featuring digital and traditional media",
    },
  ]

  const campusResources = [
    {
      id: 1,
      title: "Virtual Library",
      description: "Access to over 1 million digital books, journals, and research papers",
      location: "Library Building (Virtual)",
      hours: "24/7 Access",
    },
    {
      id: 2,
      title: "Academic Advising",
      description: "Get help with course selection, degree planning, and academic support",
      location: "Admin Building",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
    },
    {
      id: 3,
      title: "Technical Support",
      description: "IT support for all university systems and platforms",
      location: "Student Center",
      hours: "Mon-Sun: 8:00 AM - 8:00 PM",
    },
    {
      id: 4,
      title: "Virtual Study Rooms",
      description: "Collaborative online spaces for group study and projects",
      location: "Science Complex (Virtual)",
      hours: "24/7 Access",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Virtual Campus</h1>
        <p className="text-muted-foreground">Explore our virtual campus, resources, and upcoming events</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Campus Map</CardTitle>
            <CardDescription>Interactive map of our virtual university campus</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <UniversityMap />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="events" className="md:col-span-2">
          <TabsList>
            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            <TabsTrigger value="resources">Campus Resources</TabsTrigger>
          </TabsList>
          <TabsContent value="events" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {campusEvents.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <Calendar className="mr-2 h-4 w-4 mt-0.5 text-muted-foreground" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-start">
                        <Clock className="mr-2 h-4 w-4 mt-0.5 text-muted-foreground" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="mr-2 h-4 w-4 mt-0.5 text-muted-foreground" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-start">
                        <Info className="mr-2 h-4 w-4 mt-0.5 text-muted-foreground" />
                        <span>{event.description}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="resources" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {campusResources.map((resource) => (
                <Card key={resource.id}>
                  <CardHeader>
                    <CardTitle>{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p>{resource.description}</p>
                      <div className="flex items-start">
                        <MapPin className="mr-2 h-4 w-4 mt-0.5 text-muted-foreground" />
                        <span>{resource.location}</span>
                      </div>
                      <div className="flex items-start">
                        <Clock className="mr-2 h-4 w-4 mt-0.5 text-muted-foreground" />
                        <span>{resource.hours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
