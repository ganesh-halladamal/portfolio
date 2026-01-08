# Modern Portfolio Website

A stunning, modern portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and cutting-edge 3D animations.

## Features

### 🎨 Horizon Hero Section
- Immersive 3D space environment with Three.js
- Dynamic star fields with parallax effects
- Animated nebula and mountain layers
- Smooth scroll-based camera transitions
- GSAP-powered text animations

### 🧭 Tubelight Navigation
- Animated navbar with glowing "tubelight" effect
- Responsive design (icons on mobile, text on desktop)
- Fixed positioning for easy access
- Smooth spring animations with Framer Motion

### 🌓 Dark/Light Theme
- System preference detection
- Persistent theme selection
- Smooth theme transitions
- Theme toggle in top-right corner

### 📱 Fully Responsive
- Mobile-first design approach
- Optimized for all screen sizes (320px to 4K+)
- Touch-friendly navigation
- Adaptive layouts

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **3D Graphics**: Three.js
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── projects/          # Projects page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # shadcn/ui components
│   │   ├── horizon-hero-section.tsx
│   │   └── tubelight-navbar.tsx
│   ├── layout/            # Layout components
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── theme-provider.tsx
│   ├── sections/          # Page sections
│   └── common/            # Common components
├── lib/                   # Utilities and data
│   ├── utils.ts
│   ├── data.ts
│   ├── types.ts
│   ├── constants.ts
│   └── validations.ts
└── public/                # Static assets
    └── images/

```

## Performance

- Lighthouse Score: 90+
- Optimized images with Next.js Image
- Code splitting and lazy loading
- Efficient Three.js rendering
- Smooth 60fps animations

## Deployment

This project is optimized for deployment on Vercel:

```bash
# Deploy to Vercel
vercel
```

## License

MIT License - feel free to use this template for your own portfolio!

## Author

**Ganesh Halladamal**
- Email: halladmalganesh@gmail.com
- LinkedIn: [ganesh-halladamal](https://www.linkedin.com/in/ganesh-halladamal/)
- Twitter: [@ganeshph_](https://x.com/ganeshph_)
- GitHub: [ganesh-halladamal](https://github.com/ganesh-halladamal)
