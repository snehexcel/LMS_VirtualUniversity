"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, Info } from "lucide-react"

export default function VirtualTourPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const tourLocations = [
    {
      id: 1,
      name: "Main Campus",
      description:
        "The central hub of our virtual university featuring modern architecture and digital learning spaces.",
      image: "/placeholder.svg?height=400&width=800&text=Main+Campus",
    },
    {
      id: 2,
      name: "Virtual Library",
      description:
        "Our state-of-the-art digital library provides access to millions of resources and virtual study rooms.",
      image: "/placeholder.svg?height=400&width=800&text=Virtual+Library",
    },
    {
      id: 3,
      name: "Science Complex",
      description: "Home to our STEM programs with virtual laboratories and simulation environments.",
      image: "/placeholder.svg?height=400&width=800&text=Science+Complex",
    },
    {
      id: 4,
      name: "Student Center",
      description: "A virtual gathering space for students to socialize, attend events, and access support services.",
      image: "/placeholder.svg?height=400&width=800&text=Student+Center",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === tourLocations.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? tourLocations.length - 1 : prev - 1))
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Virtual Campus Tour</h1>
        <p className="text-muted-foreground">Explore our virtual university campus and facilities</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Tour</CardTitle>
          <CardDescription>Navigate through our campus locations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-hidden rounded-lg">
            <div className="relative h-[400px] w-full">
              <img
                src={`/placeholder.svg?height=400&width=800&text=${tourLocations[currentSlide].name}`}
                alt={tourLocations[currentSlide].name}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold">{tourLocations[currentSlide].name}</h3>
                <p className="mt-2">{tourLocations[currentSlide].description}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </Button>
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-2">
              {tourLocations.map((_, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className={`h-2 w-2 rounded-full p-0 ${currentSlide === index ? "bg-primary" : "bg-white/50"}`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <span className="sr-only">Go to slide {index + 1}</span>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={prevSlide}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <div className="text-sm text-muted-foreground">
            {currentSlide + 1} of {tourLocations.length}
          </div>
          <Button onClick={nextSlide}>
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      <Tabs defaultValue="facilities">
        <TabsList>
          <TabsTrigger value="facilities">Campus Facilities</TabsTrigger>
          <TabsTrigger value="technology">Virtual Technology</TabsTrigger>
        </TabsList>
        <TabsContent value="facilities" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Virtual Classrooms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="aspect-video overflow-hidden rounded-md bg-muted">
                    <img
                      src="/placeholder.svg?height=200&width=350&text=Virtual+Classroom"
                      alt="Virtual Classroom"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p>
                    Our virtual classrooms feature interactive whiteboards, breakout rooms, and real-time collaboration
                    tools. Each classroom can accommodate up to 100 students with high-quality video and audio
                    streaming.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Digital Library</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="aspect-video overflow-hidden rounded-md bg-muted">
                    <img
                      src="/placeholder.svg?height=200&width=350&text=Digital+Library"
                      alt="Digital Library"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p>
                    Our digital library provides access to over 1 million e-books, journals, and research papers.
                    Students can use virtual study rooms for group work and access librarian assistance 24/7.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Virtual Labs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="aspect-video overflow-hidden rounded-md bg-muted">
                    <img
                      src="/placeholder.svg?height=200&width=350&text=Virtual+Labs"
                      alt="Virtual Labs"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p>
                    Our simulation labs allow students to conduct experiments in physics, chemistry, biology, and
                    engineering in a safe virtual environment with realistic physics and chemical reactions.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Student Commons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="aspect-video overflow-hidden rounded-md bg-muted">
                    <img
                      src="/placeholder.svg?height=200&width=350&text=Student+Commons"
                      alt="Student Commons"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p>
                    The virtual student commons is a social space where students can meet, form study groups,
                    participate in club activities, and attend virtual events and workshops.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="technology" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Virtual Reality Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="aspect-video overflow-hidden rounded-md bg-muted">
                  <img
                    src="/placeholder.svg?height=200&width=350&text=VR+Technology"
                    alt="VR Technology"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="mb-2">
                    Our virtual campus supports VR headsets for an immersive learning experience. Students can:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Attend lectures in 3D virtual environments</li>
                    <li>Interact with 3D models and simulations</li>
                    <li>Participate in virtual field trips</li>
                    <li>Collaborate on projects in shared VR spaces</li>
                  </ul>
                  <div className="mt-4 flex items-center text-sm text-muted-foreground">
                    <Info className="mr-1 h-4 w-4" />
                    <span>Compatible with most major VR headsets</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI Learning Assistants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2">Our AI learning assistants provide personalized support to students:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>24/7 tutoring and homework help</li>
                    <li>Personalized learning recommendations</li>
                    <li>Automated grading with detailed feedback</li>
                    <li>Study schedule optimization</li>
                    <li>Language translation for international students</li>
                  </ul>
                  <div className="mt-4 flex items-center text-sm text-muted-foreground">
                    <Info className="mr-1 h-4 w-4" />
                    <span>Powered by advanced natural language processing</span>
                  </div>
                </div>
                <div className="aspect-video overflow-hidden rounded-md bg-muted">
                  <img
                    src="/placeholder.svg?height=200&width=350&text=AI+Learning+Assistant"
                    alt="AI Learning Assistant"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
