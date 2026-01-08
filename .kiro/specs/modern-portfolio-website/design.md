# Design Document

## Overview

The modern portfolio website will be built as a Next.js application using the App Router architecture. The design emphasizes performance, accessibility, and user experience while showcasing professional work through a clean, modern interface. The website will feature a mobile-first responsive design with dark mode support and smooth animations.

## Architecture

### Technology Stack
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui built on Radix UI primitives
- **Icons**: lucide-react for consistent iconography
- **Animations**: framer-motion for smooth transitions and interactions
- **Typography**: Inter font via next/font for optimal loading
- **State Management**: React Context for theme management
- **Form Handling**: React Hook Form with Zod validation
- **Deployment**: Vercel-optimized build configuration

### Project Structure
```
app/
├── layout.tsx              # Root layout with providers
├── page.tsx               # Home page
├── about/
│   └── page.tsx          # About page
├── projects/
│   └── page.tsx          # Projects page
├── contact/
│   └── page.tsx          # Contact page
├── globals.css           # Global styles and CSS variables
└── not-found.tsx         # 404 page

components/
├── ui/                   # shadcn/ui components
│   ├── button.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   ├── toast.tsx
│   └── ...
├── layout/
│   ├── navbar.tsx        # Navigation component
│   ├── footer.tsx        # Footer component
│   └── theme-provider.tsx
├── sections/
│   ├── hero.tsx          # Hero section
│   ├── about-preview.tsx # About preview
│   ├── projects-grid.tsx # Projects grid
│   └── contact-form.tsx  # Contact form
└── common/
    ├── project-card.tsx  # Individual project card
    ├── skill-badge.tsx   # Skill/tech badge
    └── theme-toggle.tsx  # Dark mode toggle

lib/
├── data.ts              # Static data (projects, skills, etc.)
├── utils.ts             # Utility functions
├── validations.ts       # Zod schemas
└── constants.ts         # App constants

public/
├── images/
│   ├── projects/        # Project screenshots
│   ├── profile.jpg      # Profile image
│   └── favicon.ico
└── resume.pdf           # Downloadable resume
```

## Components and Interfaces

### Core Layout Components

#### Navbar Component
```typescript
interface NavbarProps {
  className?: string;
}

interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}
```

**Features:**
- Sticky positioning with backdrop blur
- Active route highlighting
- Mobile hamburger menu with slide-out drawer
- Theme toggle integration
- Smooth scroll to sections

#### Footer Component
```typescript
interface FooterProps {
  className?: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}
```

**Features:**
- Social media links with hover animations
- Quick navigation links
- Copyright information
- Responsive layout

### Page Components

#### Hero Section
```typescript
interface HeroProps {
  name: string;
  role: string;
  tagline: string;
  ctaButtons: CTAButton[];
}

interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'outline';
}
```

**Features:**
- Animated text reveal using framer-motion
- Gradient background with subtle grid pattern
- Responsive typography scaling
- Call-to-action buttons with hover effects

#### Project Card
```typescript
interface ProjectCardProps {
  project: Project;
  className?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}
```

**Features:**
- Image optimization with Next.js Image
- Hover effects with scale and shadow transitions
- Tech stack badges
- External link handling

#### Contact Form
```typescript
interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
```

**Features:**
- Client-side validation with Zod
- Loading states and error handling
- Toast notifications for feedback
- Accessibility compliance

## Data Models

### Project Data Structure
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  techStack: TechStack[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: ProjectCategory;
  completedAt: Date;
}

interface TechStack {
  name: string;
  icon?: string;
  color?: string;
}

enum ProjectCategory {
  WEB_APP = 'web-app',
  MOBILE_APP = 'mobile-app',
  API = 'api',
  TOOL = 'tool'
}
```

### Skills Data Structure
```typescript
interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: SkillLevel;
  icon?: string;
}

enum SkillCategory {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DATABASE = 'database',
  TOOLS = 'tools',
  DESIGN = 'design'
}

enum SkillLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  EXPERT = 'expert'
}
```

### Experience Data Structure
```typescript
interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  achievements: string[];
  techStack: string[];
}
```

## Design System

### Color Palette
```css
:root {
  /* Light mode */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --accent: 210 40% 94%;
  --accent-foreground: 222.2 84% 4.9%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --border: 214.3 31.8% 91.4%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
}

.dark {
  /* Dark mode */
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --border: 217.2 32.6% 17.5%;
  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;
}
```

### Typography Scale
- **Headings**: Inter font with weights 400, 500, 600, 700
- **Body**: Inter font with weights 400, 500
- **Scale**: Tailwind's default scale (text-sm to text-6xl)
- **Line Heights**: Optimized for readability (1.4 for headings, 1.6 for body)

### Spacing System
- **Base Unit**: 4px (Tailwind's default)
- **Container**: Max-width 1200px with responsive padding
- **Sections**: Consistent vertical spacing using space-y-16 to space-y-24
- **Components**: Consistent internal spacing using Tailwind utilities

### Border Radius
- **Small**: rounded-md (6px)
- **Medium**: rounded-lg (8px)
- **Large**: rounded-xl (12px)
- **Extra Large**: rounded-2xl (16px)

## Error Handling

### Client-Side Error Handling
- **Form Validation**: Zod schemas with user-friendly error messages
- **Network Errors**: Retry mechanisms with exponential backoff
- **Image Loading**: Fallback images and loading states
- **Route Errors**: Custom error boundaries with recovery options

### Error Boundary Implementation
```typescript
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<PropsWithChildren, ErrorBoundaryState> {
  // Error boundary implementation with fallback UI
}
```

### Loading States
- **Page Transitions**: Loading spinners and skeleton components
- **Form Submissions**: Button loading states with disabled interactions
- **Image Loading**: Blur placeholders and progressive loading
- **Data Fetching**: Suspense boundaries where applicable

## Testing Strategy

### Unit Testing
- **Components**: React Testing Library for component behavior
- **Utilities**: Jest for pure function testing
- **Validation**: Zod schema testing
- **Coverage**: Minimum 80% code coverage target

### Integration Testing
- **Form Flows**: End-to-end form submission testing
- **Navigation**: Route navigation and state management
- **Theme Switching**: Dark/light mode functionality
- **Responsive Behavior**: Viewport-based testing

### Performance Testing
- **Lighthouse Audits**: Automated performance scoring
- **Bundle Analysis**: Webpack bundle analyzer for optimization
- **Core Web Vitals**: LCP, FID, CLS monitoring
- **Image Optimization**: Next.js Image component validation

### Accessibility Testing
- **Screen Readers**: NVDA/JAWS compatibility testing
- **Keyboard Navigation**: Tab order and focus management
- **Color Contrast**: WCAG AA compliance verification
- **Semantic HTML**: Proper heading hierarchy and landmarks

## Performance Optimizations

### Next.js Optimizations
- **App Router**: Leveraging server components where possible
- **Image Optimization**: next/image with proper sizing and formats
- **Font Optimization**: next/font with preloading
- **Bundle Splitting**: Automatic code splitting and lazy loading

### Tailwind CSS Optimizations
- **Purging**: Remove unused CSS classes in production
- **JIT Mode**: Just-in-time compilation for faster builds
- **Custom Utilities**: Minimal custom CSS additions

### Runtime Optimizations
- **Lazy Loading**: Intersection Observer for below-fold content
- **Prefetching**: Strategic route prefetching
- **Caching**: Proper cache headers and service worker implementation
- **Compression**: Gzip/Brotli compression for static assets

## SEO Implementation

### Meta Tags Strategy
- **Dynamic Titles**: Page-specific titles with consistent branding
- **Descriptions**: Unique meta descriptions for each page
- **Keywords**: Relevant keywords without stuffing
- **Canonical URLs**: Proper canonical tag implementation

### Structured Data
- **Person Schema**: JSON-LD for developer profile
- **WebSite Schema**: Site navigation and search functionality
- **Article Schema**: Blog posts if implemented
- **Organization Schema**: Professional information

### OpenGraph and Twitter Cards
- **Images**: Optimized social sharing images
- **Titles and Descriptions**: Platform-specific content
- **Type Definitions**: Proper og:type declarations
- **Twitter Card Types**: Summary and summary_large_image

## Accessibility Features

### Keyboard Navigation
- **Tab Order**: Logical tab sequence throughout the site
- **Focus Indicators**: Visible focus states for all interactive elements
- **Skip Links**: Skip to main content functionality
- **Escape Handling**: Modal and menu dismissal

### Screen Reader Support
- **ARIA Labels**: Descriptive labels for complex interactions
- **Landmarks**: Proper semantic HTML structure
- **Live Regions**: Dynamic content announcements
- **Alt Text**: Comprehensive image descriptions

### Visual Accessibility
- **Color Contrast**: WCAG AA compliance (4.5:1 ratio)
- **Text Scaling**: Support for 200% zoom without horizontal scrolling
- **Motion Preferences**: Respect for prefers-reduced-motion
- **High Contrast**: Support for high contrast mode

## Animation and Interaction Design

### Framer Motion Implementation
- **Page Transitions**: Smooth enter/exit animations
- **Scroll Animations**: Reveal animations triggered by scroll position
- **Hover Effects**: Subtle micro-interactions on interactive elements
- **Loading Animations**: Skeleton loaders and progress indicators

### Animation Principles
- **Duration**: Consistent timing (200-300ms for micro-interactions)
- **Easing**: Natural easing curves (ease-out for entrances, ease-in for exits)
- **Performance**: GPU-accelerated transforms and opacity changes
- **Accessibility**: Respect for reduced motion preferences

### Interaction States
- **Hover**: Subtle scale and color transitions
- **Active**: Immediate feedback for user actions
- **Focus**: Clear focus indicators for keyboard users
- **Disabled**: Visual indication of non-interactive states