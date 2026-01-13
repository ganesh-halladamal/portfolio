# Component Structure

This document describes the organized component structure of the portfolio website.

## Directory Structure

```
components/
├── common/              # Shared utility components
│   └── theme-toggle.tsx
│
├── layout/              # Layout-related components
│   ├── animated-footer.tsx    # Footer with animations
│   ├── animated-navbar.tsx    # Navbar with animations
│   ├── conditional-footer.tsx # Footer visibility logic
│   ├── footer.tsx            # Main footer component
│   ├── navbar.tsx            # Main navbar component
│   └── theme-provider.tsx    # Theme context provider
│
├── sections/            # Page section components
│   ├── about/          # About page sections
│   │   ├── intro.tsx         # Introduction with photo
│   │   ├── expertise.tsx     # Expertise cards
│   │   ├── experience.tsx    # Professional experience
│   │   └── skills.tsx        # Tech stack grid
│   │
│   ├── projects/       # Projects page sections
│   │   └── card.tsx          # Project card component
│   │
│   └── hero.tsx        # Homepage hero section
│
└── ui/                  # Reusable UI components
    └── marquee.tsx     # Marquee animation component
```

## Component Organization Principles

### 1. Layout Components (`components/layout/`)
Components that define the overall page structure:
- Navigation bars
- Footers
- Theme providers
- Layout wrappers

### 2. Section Components (`components/sections/`)
Page-specific sections organized by feature:
- **about/**: All about page sections
- **projects/**: All projects page sections
- **hero.tsx**: Homepage hero section

### 3. Common Components (`components/common/`)
Shared utilities used across multiple pages:
- Theme toggle
- Other shared utilities

### 4. UI Components (`components/ui/`)
Reusable, generic UI components:
- Animations
- Effects
- Generic widgets

## Naming Conventions

### File Names
- Use lowercase with hyphens: `animated-navbar.tsx`
- Be descriptive but concise
- Avoid prefixes like "tubelight-" or "modern-"

### Component Names
- Use PascalCase: `AnimatedNavBar`
- Match the purpose, not the style: `Hero` instead of `ParticleTextEffect`
- Be clear and descriptive

### Export Names
- Named exports for better tree-shaking
- Consistent naming across imports

## Import Patterns

### Layout Components
```typescript
import { AnimatedNavBar } from "@/components/layout/animated-navbar";
import { AnimatedFooter } from "@/components/layout/animated-footer";
```

### Section Components
```typescript
// About sections
import { AboutIntro } from "@/components/sections/about/intro";
import { AboutExpertise } from "@/components/sections/about/expertise";
import { AboutExperience } from "@/components/sections/about/experience";
import { AboutSkills } from "@/components/sections/about/skills";

// Project sections
import { ProjectCard } from "@/components/sections/projects/card";

// Hero section
import { Hero } from "@/components/sections/hero";
```

### UI Components
```typescript
import { Marquee } from "@/components/ui/marquee";
```

## Benefits of This Structure

1. **Clear Organization**: Easy to find components by their purpose
2. **Scalability**: Simple to add new sections or features
3. **Maintainability**: Related components are grouped together
4. **Reusability**: Generic components separated from specific ones
5. **Clean Imports**: Descriptive import paths
6. **Better DX**: Developers can quickly understand the codebase

## Migration Summary

### Renamed & Moved Components

| Old Location | New Location | Reason |
|-------------|--------------|--------|
| `ui/tubelight-navbar.tsx` | `layout/animated-navbar.tsx` | Layout component with clearer name |
| `ui/modern-animated-footer.tsx` | `layout/animated-footer.tsx` | Layout component with clearer name |
| `ui/particle-text-effect.tsx` | `sections/hero.tsx` | Page section with purpose-based name |
| `ui/about-demo.tsx` | `sections/about/intro.tsx` | About section with clearer name |
| `ui/about-features.tsx` | `sections/about/expertise.tsx` | About section with clearer name |
| `ui/experience-section.tsx` | `sections/about/experience.tsx` | About section with consistent naming |
| `ui/logo-cloud.tsx` | `sections/about/skills.tsx` | About section with purpose-based name |
| `ui/project-card.tsx` | `sections/projects/card.tsx` | Project section component |

### Deleted Components
- `ui/about.tsx` - Unused
- `ui/about-section.tsx` - Unused
- `ui/skills-marquee.tsx` - Unused
- `ui/timeline-animation.tsx` - Unused
- `ui/vertical-cut-reveal.tsx` - Unused
- `app/demo/page.tsx` - Testing page

## Adding New Components

### For a new page section:
```
components/sections/[page-name]/[section-name].tsx
```

### For a new layout component:
```
components/layout/[component-name].tsx
```

### For a new reusable UI component:
```
components/ui/[component-name].tsx
```

## Best Practices

1. Keep components focused on a single responsibility
2. Use descriptive names that reflect purpose, not implementation
3. Group related components in the same directory
4. Export components with named exports
5. Keep the `ui/` folder minimal - only truly reusable components
6. Document complex components with comments
7. Follow the established naming conventions
