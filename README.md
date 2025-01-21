
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

### Frontend

- Loading and error states for all data.
- Input validation.
- Customizable, dynamic, and responsive UI.

## Technologies

**Language:**

- TypeScript 5.6

**Frontend:**

- Vite 5.6
- React 18.3
- React DOM 18.3
- React Router DOM 7.1
- Tailwind CSS 4.0 Beta
- Recharts 2.15
- Framer Motion 11.1
- Radix (various components)
- Zod 3.24
- UUID 11.0

## Installation

### 1. Clone the Repository

Start by cloning the repository to your local machine. Run the following command in your terminal:

```bash
git clone https://github.com/NVR-2023/NVR-2023-02-Take-home-assignment
```

### 2. Install Dependencies

After cloning the repository locally, navigate to the root directory of the cloned project and run the following command:

```bash
npm install
```

This will install all the required dependencies.

### 3. Start the Development Server

Start the Vite/React development server:

```bash
npm run dev
```

### 4. Open the Browser

Once the server is running, press Ctrl + Click on the provided link to open a browser window at the port specified by Vite.

## Frontend Pages and Routes

The frontend app contains a landing page plus three functional pages:

### `/`

Displays the landing page.

### `/private/dashboard`

Displays an interactive dashboard with data and animated graphs.

### `/private/compliance-tracker`

Displays a mini to-do app for compliance purposes.

### `/private/invoicer`

Simulates the issuing of invoices.

## Author

This project was developed by Nuno Rodrigues in January 2025.
