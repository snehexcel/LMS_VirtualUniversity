import { BookOpen, Code, Calculator, Brain, BookMarked, Beaker } from "lucide-react"

interface CourseCardImageProps {
  courseCode: string
  title: string
}

export function CourseCardImage({ courseCode, title }: CourseCardImageProps) {
  // Determine the icon based on the course code prefix
  const getIcon = () => {
    const prefix = courseCode.substring(0, 2).toUpperCase()

    switch (prefix) {
      case "CS":
        return <Code className="h-12 w-12 text-primary" />
      case "MA":
        return <Calculator className="h-12 w-12 text-primary" />
      case "PS":
        return <Brain className="h-12 w-12 text-primary" />
      case "BU":
        return <BookMarked className="h-12 w-12 text-primary" />
      case "SC":
        return <Beaker className="h-12 w-12 text-primary" />
      default:
        return <BookOpen className="h-12 w-12 text-primary" />
    }
  }

  return (
    <div className="relative h-32 w-full mb-2 overflow-hidden rounded-md bg-muted flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
      <div className="relative flex flex-col items-center justify-center text-center p-4">
        {getIcon()}
        <div className="mt-2 font-medium">{courseCode}</div>
      </div>
    </div>
  )
}
