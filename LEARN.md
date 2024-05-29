# LEARN.md

## Overview

This guide provides instructions for developers who want to replicate the process of creating and deploying a web application similar to Aurora Sight 2.0. This includes migrating from Heroku to Vercel, rewriting code, and redesigning the front end and back end using modern tools and methods.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Setup](#project-setup)
3. [Migration to Vercel](#migration-to-vercel)
4. [Development Workflow](#development-workflow)
5. [Technologies Used](#technologies-used)
6. [Best Practices](#best-practices)
7. [Resources](#resources)

## Prerequisites

Before you begin, ensure you have the following installed on your development machine:

-   Node.js (latest LTS version)
-   npm (Node Package Manager)
-   Git
-   Vercel CLI
-   A code editor (e.g., VS Code)

## Project Setup

### 1. Clone the Repository

Clone the existing repository to your local machine:

```bash
git clone https://github.com/yourusername/aurora-sight-2.0.git
cd aurora-sight-2.0
```

### 2. Install Dependencies

Install the required dependencies for the project:

```bash
npm install
```

### 4. Run the Application

Start the development server:

```bash
npm  run dev
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Migration to Vercel

### 1. Install Vercel CLI

If you haven't already, install the Vercel CLI:

```bash
npm install -g vercel
```

### 2. Login to Vercel

Log in to your Vercel account:

```bash
vercel login
```

### 3. Deploy to Vercel

Deploy the application to Vercel:

```bash
vercel
```

Follow the prompts to set up and deploy your project.

### 4. Set Up Environment Variables on Vercel

Go to your project settings on the Vercel dashboard and add the necessary environment variables (if any)

## Development Workflow

### 1. Front-End Development

-   Use Next.js (React) for building the user interface.
-   Ensure the design is responsive and modern.
-   Use Tailwind for styling.

### 2. Back-End Development

-   Integrate with the Aurora Watch API to fetch aurora borealis activity data.

### 3. Version Control

-   Use Git for version control.
-   Follow best practices for commit messages and branching strategies.

## Technologies Used

-   **Front-End:** Next.js (React), Tailwind CSS, TypeScript
-   **Back-End:** Node.js, Express
-   **Deployment:** Vercel
-   **API Integration:** Aurora Watch API

## Best Practices

-   **Code Quality:** Follow coding standards and best practices.
-   **Security:** Implement security best practices for both front-end and back-end.
-   **Performance:** Optimize the application for performance.
-   **Documentation:** Maintain clear and concise documentation.

## Resources

-   [Next.js Documentation](https://nextjs.org/docs)
-   [React Documentation](https://reactjs.org/docs/getting-started.html)
-   [Node.js Documentation](https://nodejs.org/en/docs/)
-   [Express Documentation](https://expressjs.com/)
-   [Vercel Documentation](https://vercel.com/docs)
-   [Aurora Watch API Documentation](https://aurorawatch-api.lancs.ac.uk/)

By following this guide, you should be able to replicate the development and deployment process for a web application like Aurora Sight 2.0. Happy coding!
