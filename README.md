# Student Portal Project

This project is part of the **Pemrograman Frontend dengan React** course, building upon previous assignments to create a feature-rich Student Portal web application. Below is an overview of the tasks completed and features implemented throughout the project.

## Project Overview

The Student Portal project was developed incrementally through three main tasks:

### Task 1: Initial Setup and Component Creation

- **Objective**: Build the foundational components for the Student Portal.
- **Components Provided**:
  - `Form`: Renders a form for user input.
  - `Table`: Displays student data in a tabular format.
- **Implementation**: The components were created and integrated into `./src/App.js`.

### Task 2: Feature Expansion with JSON Server

- **Objective**: Enhance the portal with dynamic features and a temporary server.
- **Features Added**:
  - Activated the form and implemented the **Add Student** feature.
  - Enabled the **Delete Student** button.
- **Temporary Server**: A JSON server (`students-db.json`) was provided for handling data.
  - **Endpoints**:
    - `GET /student`: Retrieve student data.
    - `DELETE /student/id`: Delete a student's data by ID.

### Task 3: Full Portal Functionality

- **Objective**: Complete the portal with advanced features and a polished user experience.
- **Features Added**:
  - **Home Page**: Displays introductory content.
  - **Student List Page**: Shows all student data.
  - **Filter Feature**: Filters students by faculty.
  - **Add Student Page**: Includes a form to add new students.
  - **Edit Student Page**: Allows editing of existing student data.
  - **Page Not Found**: Renders a 404 error page for invalid routes.
  - **Navigation Bar**: Facilitates seamless page transitions.
- **JSON Server Enhancements**:
  - `GET /student`: Retrieve all student data.
  - `GET /student/id`: Retrieve a specific student's data by ID.
  - `PUT /student/id`: Update a student's data by ID.
  - `DELETE /student/id`: Delete a student's data by ID.

## Technologies Used

- **React**: For building the web application.
- **Chakra UI**: For pre-built components and styling.
- **Tailwind CSS**: For utility-first styling.
- **JSON Server**: For simulating a backend server.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/daffafaiqhs/student-portal.git
   ```
2. Navigate to the project directory:
   ```bash
   cd student-portal
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the JSON server:
   ```bash
   npm start:server
   ```
2. Start the React development server:
   ```bash
   npm start:client
   ```
3. Open your browser and navigate to `http://localhost:3000` to view the application.
