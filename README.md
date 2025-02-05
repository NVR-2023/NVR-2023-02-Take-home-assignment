# Comudel Take-home Assignment by Nuno Rodrigues

This is a frontend-stack web application for TechBilling. It features a Vite React SPA.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Frontend Pages and Routes](#frontend-pages-and-routes)
- [Author](#author)

## Features

### MOCK RESTful API

- Performs mock API calls with simulated latency of 1000 milliseconds and retrieves mock JSON data compliant with REST best practices.
- No hardcoded data. All data is fetched from the mock API, including product and company details.

### Frontend

- Loading and error states for all data.
  Loading indicators and transition animations for all pages.
- Input validation.
  All text inputs get Zod validation schemas.
- Customizable, dynamic UI.
  Cards can be toggled. Sibling elements adjust.
- Responsive.
  Different layouts for different screen sizes, with additional tweaks to icon and text sizes for a better experience.
- Rich animations for most UI elements.

## Technologies

**Language:**

- TypeScript 5.6

**Frontend:**

- Vite 5.6 (Builder)
- React 18.3
- React DOM 18.3
- React Router DOM 7.1
- Tailwind CSS 4.0 Beta (CSS Framework)
- Recharts 2.15 (Charts Library for React)
- Framer Motion 11.1 (Animation library for React)
- Radix (various components) (Component Library)
- Zod 3.24 (Validation library)
- UUID 11.0 (UUID generation library, used to generate invoice references)

## Installation

### 1. Clone the Repository

Start by cloning the repository to your local machine. Run the following command in your terminal:

```bash
git clone https://github.com/NVR-2023/NVR-2023-02-Take-home-assignment
```

### 2. Go to the Root Directory of the Project

If needed, type the following command in your terminal:

```bash
cd .\NVR-2023-02-Take-home-assignment\
```

### 3. Install Dependencies

After cloning the repository locally, navigate to the root directory of the cloned project and run the following command:

```bash
npm install
```

This will install all the required dependencies.

### 4. Start the Development Server

Start the Vite/React development server:

```bash
npm run dev
```

### 5. Open the Browser

Once the server is running, press Ctrl + Click on the provided link to open a browser window at the port specified by Vite.

> [!NOTE]  
> This project uses Tailwind 4 Beta, which no longer includes the traditional config file. The local version works correctly. However, when cloned, the CSS fails to load initially. A manual page refresh is required to render it properly, which might be a compatibility issue of the Tailwind 4 beta version with Vite. The reason might be that Tailwind 4 drops the traditional config file, for example.  However, once the CSS is cached, it functions as expected. Please note that for assessment purposes, you may need to refresh the page. This was a last-minute check, and I am actively exploring additional solutions to resolve the issue.

## Pages

The frontend app contains a landing page plus three additional pages:

### `/`

Displays the landing page.

### `/private/dashboard`

Displays an interactive dashboard with data and animated graphs.

### `/private/compliance-tracker`

Displays a mini to-do app for compliance purposes.

### `/private/invoicer`

Simulates the issuing of invoices.

## Author

This project was designed, coded and developed by Nuno Rodrigues in January 2025 as take-home assignment.
