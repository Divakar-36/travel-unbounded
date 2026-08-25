# Travel Unbounded

A responsive travel website built with Next.js, TypeScript, and MongoDB. The application allows users to explore travel destinations, learn about the company, submit enquiries through a contact form, and provides a protected admin area for viewing submitted enquiries.

## Features

* Responsive travel website
* Home page with hero and destination sections
* About page
* Destination listings with dummy destination and pricing data
* Contact/enquiry form
* Enquiry data stored in MongoDB
* Admin login
* Protected admin enquiries page
* Middleware-based admin route protection
* Production deployment with Vercel
* MongoDB production database connection

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* CSS

### Backend

* Next.js API Routes
* MongoDB
* Mongoose

### Authentication

* Cookie-based admin authentication
* Next.js middleware for protected admin routes

### Deployment

* Vercel
* MongoDB production database

## Project Structure

```text
travel-unbounded/
├── app/
│   ├── about/
│   ├── admin/
│   │   ├── enquiries/
│   │   └── login/
│   ├── api/
│   │   ├── admin/
│   │   │   └── login/
│   │   └── enquiry/
│   ├── contact/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── DestinationCard.tsx
│   ├── DestinationSection.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── Navbar.tsx
├── data/
├── middleware.ts
├── package.json
└── README.md
```

## Main User Flow

```text
Home
  ↓
Destinations
  ↓
About
  ↓
Contact
  ↓
Submit Enquiry
  ↓
MongoDB
```

## Admin Flow

```text
Admin Login
  ↓
Authentication
  ↓
admin_session Cookie
  ↓
/admin/enquiries
  ↓
View Submitted Enquiries
```

Unauthenticated users attempting to access `/admin/enquiries` are redirected to the admin login page by Next.js middleware.

## Enquiry Flow

The contact form sends the enquiry to the backend API.

```text
Contact Form
     ↓
POST /api/enquiry
     ↓
Backend Validation
     ↓
MongoDB
     ↓
Enquiry Stored
```

The admin enquiries page retrieves the stored enquiries from the database.

## Environment Variables

Create a local environment file containing the required database and authentication configuration.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_admin_password
```

Production environment variables are configured separately in Vercel.

Do not commit environment files or secrets to GitHub.

## Assumptions

* Destination information and pricing are dummy data because the assignment does not require a real travel inventory or pricing system.
* The enquiry form is intended for collecting customer enquiries rather than completing actual bookings.
* A simple admin authentication mechanism is sufficient for the assignment.
* MongoDB is used as the database for storing customer enquiries.
* The admin enquiries section is intended for internal viewing of submitted enquiries.

## Features Skipped

The following features were intentionally not implemented because they were outside the core assignment requirements:

* Real-time travel inventory
* Real booking/payment system
* Live destination pricing
* Payment gateway integration
* Customer accounts
* Advanced role-based access control
* Email notification system
* Third-party travel booking API integration

The implementation focuses on the required website flow, responsive UI, working enquiry-to-database pipeline, and protected admin enquiries section.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production

The application is deployed using Vercel.

Production environment variables are configured in the Vercel project settings.

## Final Notes

The project prioritizes correctness, clarity, responsive design, and a working form-to-database pipeline as required by the assignment.
