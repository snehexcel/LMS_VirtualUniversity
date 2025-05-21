"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  GraduationCap,
  BookOpen,
  Users,
  BarChart3,
  Calendar,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  Bell,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  // Determine user type from URL
  const userType = pathname.split("/")[2]

  // Set navigation items based on user type
  const getNavItems = () => {
    const commonItems = [
      { name: "Dashboard", href: `/dashboard/${userType}`, icon: BarChart3 },
      { name: "Courses", href: `/dashboard/${userType}/courses`, icon: BookOpen },
      { name: "Calendar", href: `/dashboard/${userType}/calendar`, icon: Calendar },
      { name: "Messages", href: `/dashboard/${userType}/messages`, icon: MessageSquare },
      { name: "Settings", href: `/dashboard/${userType}/settings`, icon: Settings },
    ]

    if (userType === "admin") {
      return [
        ...commonItems,
        { name: "Users", href: "/dashboard/admin/users", icon: Users },
        { name: "Departments", href: "/dashboard/admin/departments", icon: Users },
      ]
    } else if (userType === "department") {
      return [
        ...commonItems,
        { name: "Faculty", href: "/dashboard/department/faculty", icon: Users },
        { name: "Students", href: "/dashboard/department/students", icon: Users },
      ]
    } else if (userType === "faculty") {
      return [
        ...commonItems,
        { name: "Students", href: "/dashboard/faculty/students", icon: Users },
        { name: "Grades", href: "/dashboard/faculty/grades", icon: GraduationCap },
      ]
    }

    return commonItems
  }

  const navItems = getNavItems()

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const NavLinks = () => (
    <div className="space-y-1">
      {navItems.map((item) => (
        <Link key={item.name} href={item.href}>
          <Button variant={pathname === item.href ? "secondary" : "ghost"} className="w-full justify-start">
            <item.icon className="mr-2 h-4 w-4" />
            {item.name}
          </Button>
        </Link>
      ))}
    </div>
  )

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex items-center gap-2 font-bold md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="mr-2">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-56 pt-12">
                <Link href={`/dashboard/${userType}`} className="flex items-center gap-2 font-bold mb-8">
                  <GraduationCap className="h-6 w-6" />
                  <span>Virtual University</span>
                </Link>
                <NavLinks />
              </SheetContent>
            </Sheet>
            <GraduationCap className="h-6 w-6" />
            <span className="sr-only sm:not-sr-only">Virtual University</span>
          </div>
          <div className="hidden md:flex items-center gap-2 font-bold">
            <GraduationCap className="h-8 w-8" />
            <span>Virtual University</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        {!isMobile && (
          <aside className="hidden w-64 flex-col border-r md:flex">
            <div className="flex flex-col gap-2 p-4">
              <NavLinks />
            </div>
          </aside>
        )}
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
