# 1. Project Name

**Explore Cinema**

---

# 2. Abstract

Explore Cinema is a full-featured movie discovery application built with React and Vite that enables users to browse, search, and explore detailed movie information from the OMDb API. The application demonstrates advanced React patterns including React Router's declarative data loading with loaders and actions, dual API fetching strategies (native Fetch API and Axios), and dynamic route parameters for movie details. Key technical implementations include server-side data fetching during route transitions, form handling via Router actions, responsive grid-based UI with Tailwind CSS, and responsive navigation with mobile-optimized hamburger menu. The project serves as a comprehensive showcase of modern React development practices, component architecture, and real-world API integration patterns.

---

# 3. Key Features

- **Dual Movie Fetching Approaches**: Browse movies using both native Fetch API (declarative, with React Router loaders) and Axios (imperative, with useEffect)
- **Detailed Movie Information Page**: Display comprehensive movie details including poster, IMDb rating, runtime, box office earnings, director, cast, plot, genre, and awards
- **Dynamic Route Navigation**: Navigate between movies using URL parameters (`/movie/:movieID`) with automatic data loading via React Router loaders
- **Contact Form with Form Submission**: Integrated contact form using React Router actions for handling form submissions
- **Dark-Themed Responsive UI**: Modern dark theme with gradient accents and responsive design that adapts to desktop, tablet, and mobile screens
- **Loading States with Visual Feedback**: Display animated loading spinner during data fetching to provide user feedback
- **Browser Navigation Control**: Back button with navigation history support using `useNavigate` hook
- **Error Boundary & Error Pages**: Global error handling with dedicated error page component
- **Responsive Navigation Bar**: Sticky navigation with mobile hamburger menu and active link styling
- **Image Fallback Handling**: Graceful fallback to placeholder images for missing movie posters
- **About Page with Tech Stack**: Educational content showcasing project tech stack and learning outcomes

---

# 4. Tech Stack

- **Framework/Library**: React 19.2.0
- **Build Tool**: Vite 7.2.4 with @vitejs/plugin-react 5.1.1
- **Routing & Navigation**: React Router DOM 7.13.0 (with loaders, actions, and error boundaries)
- **Styling**: Tailwind CSS 4.1.18 with @tailwindcss/vite 4.1.18
- **API Handling**: Axios 1.13.4 (for imperative fetching) and native Fetch API (for declarative fetching with loaders)
- **Icons**: Lucide React 0.563.0
- **Code Quality**: ESLint 9.39.1 with react-hooks and react-refresh plugins
- **State Management**: React Hooks (useState, useEffect, useLoaderData, useNavigation)
- **Animations & Transitions**: Tailwind CSS animations (spin, scale, translate)
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints (sm, md, lg, xl)

---

# 5. APIs / External Resources Used

- **OMDb API (Open Movie Database)**
  - **URL**: `https://www.omdbapi.com/`
  - **Authentication**: API Key via environment variable (`VITE_MOVIE_API`)
  - **Endpoints Used**:
    - Search movies: `GET /?i=tt3896198&apikey={key}&s={searchQuery}`
    - Movie details: `GET /?i={imdbID}&apikey={key}`

---

# 6. Authentication / Authorization

**Not Implemented**. This is a public read-only application with no user authentication, login system, protected routes, or token storage. All API calls use a public API key stored in environment variables.

---

# 7. Performance Optimizations

- **React Router Loaders**: Data fetching occurs during route transitions (not as side effects), improving perceived performance
- **Lazy Component Loading**: Route components are code-split and loaded on-demand via React Router
- **Loading States**: Visual spinner feedback prevents blank screens during data fetching
- **Image Optimization**: Lazy loading of movie poster images through browser's native img element
- **Responsive Grid Layout**: CSS Grid with responsive columns (1 → 2 → 3 → 4) prevents unnecessary re-renders
- **Navigation Router State**: Centralized `useNavigation` hook tracks loading state across all route transitions
- **Conditional Rendering**: Components conditionally render based on loading states to avoid unnecessary DOM updates
- **Memoization Patterns**: Movie card components receive only necessary props to minimize re-renders
- **Tailwind CSS Purging**: Only used CSS classes are bundled in production

---

# 8. Project Architecture

```
src/
├── pages/                    # Route pages (one per URL path)
│   ├── Home.jsx             # Landing page with hero header
│   ├── Movie.jsx            # Movie list (Fetch API approach)
│   ├── MovieDetails.jsx     # Single movie detail page with loader
│   ├── Contact.jsx          # Contact form with Router action
│   ├── About.jsx            # Tech stack overview
│   ├── ErrorPage.jsx        # Global error boundary
│   └── NotFound.jsx         # 404 page
├── components/              # Reusable UI components
│   ├── Layout.jsx           # Main layout wrapper with Navbar, Outlet, Footer
│   ├── Navbar.jsx           # Navigation with mobile menu
│   ├── Footer.jsx           # Footer component
│   ├── Loading.jsx          # Loading spinner component
│   └── UI/
│       └── MovieCard.jsx    # Reusable movie card component
├── APIs/                    # React Router loaders (declarative fetching)
│   ├── ApiData.jsx          # Fetch API for movie search
│   └── MovieDetails.jsx     # Fetch API for single movie details
├── axios/                   # Alternative imperative data fetching
│   ├── MovieAxios.jsx       # Movie list using Axios with useEffect
│   └── AxiosMovieCard.jsx   # Movie card variant for Axios approach
├── services/                # Business logic and utilities (if needed)
├── App.jsx                  # React Router configuration with nested routes
├── main.jsx                 # Entry point
├── index.css                # Global styles
└── App.css                  # App-specific styles
```

**Architecture Highlights**:
- **React Router Structure**: Nested routes with Layout as parent, enabling shared Navbar/Footer across all pages
- **Dual Fetching Patterns**: Pages/APIs folder demonstrates declarative (loaders), axios folder shows imperative (useEffect)
- **Component Hierarchy**: Layout → Navbar/Outlet/Footer → Route Pages → UI Components
- **Separation of Concerns**: API logic isolated in dedicated folders, components focused on UI rendering
- **Dynamic Routing**: Movie details page uses URL parameters for dynamic data loading

---

# 9. Deployment URL

Not currently deployed. This is a local development project ready for deployment to platforms like Vercel, Netlify, or GitHub Pages.

---

# 10. GitHub Repository URL

Not available. This is a local project. To version control and share:
1. Initialize Git: `git init`
2. Create a GitHub repository
3. Push to GitHub for version control and potential deployment
