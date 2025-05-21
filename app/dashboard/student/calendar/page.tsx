"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { ChevronLeft, ChevronRight, Clock, BookOpen, FileText, Users } from "lucide-react"

export default function StudentCalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [month, setMonth] = useState<Date>(new Date())

  // Mock data for calendar events
  const events = [
    {
      id: 1,
      title: "CS101 Lecture",
      date: new Date(2025, 4, 22), // May 22, 2025
      time: "10:00 AM - 11:30 AM",
      type: "lecture",
      course: "CS101",
    },
    {
      id: 2,
      title: "MATH201 Assignment Due",
      date: new Date(2025, 4, 23), // May 23, 2025
      time: "11:59 PM",
      type: "assignment",
      course: "MATH201",
    },
    {
      id: 3,
      title: "PSY101 Group Discussion",
      date: new Date(2025, 4, 24), // May 24, 2025
      time: "2:00 PM - 3:30 PM",
      type: "discussion",
      course: "PSY101",
    },
    {
      id: 4,
      title: "CS101 Quiz",
      date: new Date(2025, 4, 25), // May 25, 2025
      time: "3:00 PM - 4:00 PM",
      type: "assessment",
      course: "CS101",
    },
    {
      id: 5,
      title: "Virtual Career Fair",
      date: new Date(2025, 4, 28), // May 28, 2025
      time: "1:00 PM - 5:00 PM",
      type: "event",
      course: null,
    },
  ]

  // Function to get events for the selected date
  const getEventsForDate = (selectedDate: Date | undefined) => {
    if (!selectedDate) return []

    return events.filter(
      (event) =>
        event.date.getDate() === selectedDate.getDate() &&
        event.date.getMonth() === selectedDate.getMonth() &&
        event.date.getFullYear() === selectedDate.getFullYear(),
    )
  }

  // Function to get event dates for highlighting in the calendar
  const getEventDates = () => {
    return events.map((event) => event.date)
  }

  // Function to render event type icon
  const getEventIcon = (type: string) => {
    switch (type) {
      case "lecture":
        return <BookOpen className="h-4 w-4" />
      case "assignment":
        return <FileText className="h-4 w-4" />
      case "discussion":
        return <Users className="h-4 w-4" />
      case "assessment":
        return <FileText className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  // Function to get event type badge color
  const getEventBadgeVariant = (type: string) => {
    switch (type) {
      case "lecture":
        return "default"
      case "assignment":
        return "destructive"
      case "discussion":
        return "secondary"
      case "assessment":
        return "outline"
      default:
        return "default"
    }
  }

  const selectedDateEvents = getEventsForDate(date)
  const eventDates = getEventDates()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Academic Calendar</h1>
        <p className="text-muted-foreground">View your schedule, assignments, and important dates</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Calendar</CardTitle>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    const prevMonth = new Date(month)
                    prevMonth.setMonth(prevMonth.getMonth() - 1)
                    setMonth(prevMonth)
                  }}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous month</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    const nextMonth = new Date(month)
                    nextMonth.setMonth(nextMonth.getMonth() + 1)
                    setMonth(nextMonth)
                  }}
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next month</span>
                </Button>
              </div>
            </div>
            <CardDescription>Select a date to view scheduled events</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              month={month}
              onMonthChange={setMonth}
              className="rounded-md border"
              modifiers={{
                event: eventDates,
              }}
              modifiersStyles={{
                event: {
                  fontWeight: "bold",
                  textDecoration: "underline",
                  color: "var(--primary)",
                },
              }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              {date
                ? date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
                : "No Date Selected"}
            </CardTitle>
            <CardDescription>{selectedDateEvents.length} events scheduled</CardDescription>
          </CardHeader>
          <CardContent>
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-4">
                {selectedDateEvents.map((event) => (
                  <div key={event.id} className="flex items-start space-x-4 rounded-md border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      {getEventIcon(event.type)}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{event.title}</p>
                        <Badge variant={getEventBadgeVariant(event.type)}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      {event.course && <div className="text-sm text-muted-foreground">Course: {event.course}</div>}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex h-[200px] items-center justify-center rounded-md border border-dashed">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">No events scheduled for this date</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
