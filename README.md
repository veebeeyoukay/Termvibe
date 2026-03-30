# TermVibe MVP Demo

A functional MVP demo for TermVibe - Learn Terminal with AI Coaches.

## Features

- **Landing Page** with hero, problem section, how it works, AI personas, pricing, and FAQ
- **Lesson Library** with 5 starter lessons
- **Lesson Detail** pages with interactive terminal simulator and AI coach sidebar
- **Persona Selection** page to choose your AI coach
- **PWA Ready** with manifest.json for mobile installation
- **Mobile Responsive** design optimized for all devices
- **Fast Performance** built with Next.js 14 and Tailwind CSS

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- PWA Manifest

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Project Structure

```
/workspace/group/termvibe/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── lessons/
│   │   ├── page.tsx            # Lesson library
│   │   └── [id]/page.tsx       # Lesson detail
│   └── choose-coach/
│       └── page.tsx            # Coach selection
├── components/
│   ├── Hero.tsx
│   ├── ProblemSection.tsx
│   ├── HowItWorks.tsx
│   ├── PersonasSection.tsx
│   ├── PricingSection.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── public/
│   ├── manifest.json           # PWA manifest
│   └── robots.txt
└── package.json
```

## AI Coaches

- **Maya (🌸)** - The Patient Teacher: Encouraging, thorough, perfect for beginners
- **Kai (⚡)** - The Hacker: Bold, experimental, embraces mistakes
- **Alex (🎉)** - The Cheerleader: Positive, motivating, celebrates wins
- **Sam (🎯)** - The Straight Shooter: Direct, efficient, no fluff

## Lessons

1. **Git Basics** - Essential Git commands for version control
2. **Docker Introduction** - Get started with containers
3. **Linux Navigation** - Master file system navigation
4. **SSH Basics** - Connect to remote servers securely
5. **Bash Scripting 101** - Write your first shell scripts

## PWA Installation

The app can be installed on mobile devices (iOS/Android) as a Progressive Web App:

1. Visit the site on your mobile browser
2. Tap "Add to Home Screen" (iOS) or "Install App" (Android)
3. Launch from your home screen like a native app

## License

Built by Generation AI LLC (dba itsjen.ai)
