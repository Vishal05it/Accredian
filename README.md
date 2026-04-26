* Accredian Landing Page Clone (Next.js)

A pixel-accurate, responsive clone of the Accredian Enterprise landing page built using Next.js, Tailwind CSS, and clean component architecture, including interactive UI elements like modals, sliders, and dynamic FAQs.

* Live Demo : https://accredian-virid.vercel.app/
* Tech Stack
Next.js (App Router)
React
Tailwind CSS
MongoDB + Mongoose
Lucide Icons
* Setup Instructions
1. Clone the repository
git clone https://github.com/your-username/accredian-clone.git
cd accredian-clone
2. Install dependencies
npm install
3. Setup environment variables

Create a .env.local file:

MONGODB_URI=your_mongodb_connection_string
4. Run the development server
npm run dev

Open:

http://localhost:3000
* Approach Taken
1. Component-Based Architecture
Broke UI into reusable components:
Navbar
Hero Section
Stats
Partnerships
Domain Expertise
Course Segmentation
FAQ (dynamic)
Testimonials (manual slider)
Modal (global state)
Footer
2. Responsive Design Strategy
Used Tailwind breakpoints for all layouts
Used <picture> for responsive image switching (desktop vs mobile assets)
Ensured pixel alignment with reference UI
3. Global Modal System
Implemented a centralized modal using React Context
Triggered from multiple buttons across the page
Handles:
Open/close
Click outside
Overlay layering
4. Dynamic FAQ System
Category-based filtering
State-driven rendering of questions
Accordion behavior for expand/collapse
5. Testimonials Slider
Built a manual slider (no library)
Controlled with state
Supports navigation dots and content switching
6. Backend Integration
Created API route (/api/enquire)
Stored form data in MongoDB using Mongoose
Input validation via schema

* AI Usage Explanation

AI tools (ChatGPT) were used as a development assistant, not as a replacement for understanding.

Specifically used for:
Structuring components efficiently
Debugging issues (z-index, modal overlay bug, TypeScript errors)
Optimizing patterns (Context API, responsive images)
Writing clean and maintainable code faster
Not blindly copied:
UI structure decisions
State management logic
Debugging reasoning
Final integration and testing

All code was reviewed, understood, and modified before use.

* Improvements With More Time
1. Form Enhancements
Add React Hook Form + Zod validation
Proper dropdowns instead of text inputs
Phone input with country selector
2. UI/UX Improvements
Add smooth animations (Framer Motion)
Better accessibility (ARIA labels, keyboard navigation)
Skeleton loaders for better UX
3. Performance Optimization
Convert images to Next.js Image optimization
Lazy loading for heavy sections
Reduce bundle size
4. Backend Enhancements
Add rate limiting for API
Add email notification on form submit
Store leads with status tracking
5. Code Quality
Add TypeScript interfaces for all components
ESLint + Prettier configuration
Unit testing (Jest / React Testing Library)
* Key Highlights
Fully responsive design
Pixel-close UI replication
Real-world component architecture
Global state management
Backend integration with database
No unnecessary libraries used
* Final Note

This project was built with a focus on real-world frontend engineering practices, not just UI replication — including scalability, reusability, and clean architecture.

⭐ If you found this helpful, consider starring the repo!
