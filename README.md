
# Distribution of Winter Clothes Management Platform

## Project Overview

The Distribution of Winter Clothes Management Platform is a comprehensive web application designed to coordinate and manage the distribution of winter clothes to communities in need. This platform ensures warmth and comfort during cold seasons through efficient management and transparent processes.

## Technology Stack

### Frontend

- **Frameworks/Libraries**: React, Redux, RTK Query, React Router DOM
- **Styling**: Tailwind CSS, tailwindcss-animate, clsx, class-variance-authority
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Charts**: Chart.js, React Chart.js 2
- **Carousels**: Embla Carousel, React Slick, slick-carousel
- **UI Components**: Radix UI (Dialog, Icons, Label, Navigation Menu, Select, Slot, Switch)
- **Themes**: Next Themes
- **State Persistence**: Redux Persist
- **Other Utilities**: Axios, Sonner, Tailwind Merge

### Backend

- **Server**: Node.js, Express
- **Database**: MongoDB, Mongoose

### Deployment

- **Hosting**: Vercel/Netlify

## Key Features

### Public Routes

- **Home / Landing Page / Root Page**
  - **Header / NavBar**
    - **Unauthenticated**:
      - Brand Logo
      - All Winter Clothes
      - Login Button
    - **Authenticated**:
      - Brand Logo
      - All Winter Clothes
      - Dashboard
      - Logout Button
  - **Banner / Hero Section**: Showcases the platform's mission and goals.
  - **Winter Clothes Posts**: Displays 6 winter clothes posts in a card format with image, title, category, size, and a "View Detail" button.
  - **Top 6 Donor Testimonials**: Features static donor testimonials with animations and sliders.
  - **Gallery / Carousel**: Showcases photos of winter clothes distributions and community outreach efforts.
  - **Summary / About Us / Who Are We / What We Do**: Provides detailed insights into the platform's mission and impact.
  - **2 More Unique Sections**: Cold weather safety tips, success stories, or volunteer opportunities.
  - **Footer**: Contact information, social media links, and relevant resources.

- **All Winter Clothes Page (/winter-clothes)**
  - Grid of winter clothes posts with image, title, category, size, and "View Detail" button.

- **Winter Clothes Detail Page (/winter-clothes/:id)**
  - Detailed view of a winter clothes post with image, title, category, size, description, and "Donate Now" button.

- **Login / Register Page**
  - **Register Page (/register)**: User-friendly registration form.
  - **Login Page (/login)**: Secure login interface.

### Private Routes

- **Dashboard (/dashboard)**
  - **Dashboard Home Page**: Dynamic interface with supply statistics and a pie chart.
  - **All Winter Clothes Page (/dashboard/winter-clothes)**: Table view of all winter clothes posts with edit and delete actions.
  - **Create Winter Clothes Post Page (/dashboard/create-winter-clothes)**: Form for creating new winter clothes posts.

### Animations

- 3-4 animations implemented using the Framer Motion library.

## Detailed Implementation Guidelines

### Database Management

- **Database**: MongoDB
- **ORM**: Mongoose

### UI/UX Design

- Ensure responsiveness across devices with a focus on mobile-first development.

### Deployment & Testing

- Deploy the application on Vercel or Netlify.
- Thoroughly test all functionalities to ensure robust performance.

## Submission Guidelines

- Submit a well-documented codebase with clear comments.
- Include a README file with setup and usage instructions.
- Provide links to the GitHub repositories and a live deployment.
- Submit a demo video showcasing the functionality of the project.

## How to Run the Application Locally

### Prerequisites

- Node.js
- MongoDB

### Installation

1. **Clone the repositories:**

   \`\`\`bash
   git clone <frontend-repo-url>
   git clone <backend-repo-url>
   \`\`\`

2. **Navigate to the project directories:**

   \`\`\`bash
   cd frontend-repo
   cd backend-repo
   \`\`\`

3. **Install dependencies:**

   \`\`\`bash
   npm install
   \`\`\`

### Running the Application

1. **Start the backend server:**

   \`\`\`bash
   cd backend-repo
   npm start
   \`\`\`

2. **Start the frontend server:**

   \`\`\`bash
   cd frontend-repo
   npm start
   \`\`\`

### Live Deployment

- [Live URL](https://your-live-deployment-link.com)

### Demo Video

- [Demo Video Link](https://your-demo-video-link.com)

## Contact

For any questions or clarifications, please feel free to reach out.



