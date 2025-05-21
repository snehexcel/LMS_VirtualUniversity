# Virtual University Learning Management System (LMS)

This Learning Management System (LMS) is designed for a virtual university, built using **Next.js**, **Tailwind CSS**, and **shadcn/ui**. It provides a complete platform for managing educational activities for students, faculty, department administrators, and super administrators, with clear separation of roles and responsibilities.

---

## Key Features

### User Authentication

* Role-based login system: Student, Faculty, Department Admin, Super Admin
* Secure and protected authentication flow

### Responsive Design

* Mobile-first layout with responsive components
* Adaptive navigation using sheets for mobile devices

### Role-Based Dashboards

* **Student Dashboard**: Track course progress, view assignments, receive announcements
* **Faculty Dashboard**: Manage courses, grade assignments, monitor student performance
* **Department Dashboard**: Review faculty performance, manage course analytics, handle approvals
* **Admin Dashboard**: University-wide oversight, user and department management

### Course Management

* Create, edit, and manage courses
* Handle assignment submissions and grading
* Organize course materials and track progress

### User Management

* Add new users and assign roles
* Manage departments and user statuses (active/inactive)

---

## Technical Overview

### Next.js App Router

* File-based routing system
* Shared layout components for consistent structure
* Combination of server and client components for flexibility

### Tailwind CSS

* Utility-first styling approach
* Custom theme with a purple primary color
* Supports dark mode and responsive design

### shadcn/ui Components

* Consistent UI elements including cards, tables, modals, dropdowns, and tabs
* Built with accessibility and design consistency in mind

### Data Management

* Mock data used for demo and testing
* React hooks for local state management
* Data tables support filtering and pagination

---

## Future Enhancements

This LMS is a solid frontend foundation, ready to be extended with full backend support. Potential additions include:

* Integration with MongoDB for data persistence
* API routes for secure backend operations
* Real-time notifications and messaging
* File upload support for assignments and materials
* Advanced analytics and reporting tools

---

## Getting Started

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/your-username/your-lms-repo.git

# Navigate to the project directory
cd your-lms-repo

# Install dependencies
npm install

# Run the development server
npm run dev
```

For production builds:

```bash
# Build the project
npm run build

# Start the production server
npm start
