# StratgenAI Website

A modern, high-functionality website built with Next.js, React, and TypeScript for StratgenAI - an AI software company.

## Features

- 🎨 Modern design with white, blue, and pink gradient color scheme
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and React 18
- 🎭 Smooth animations using Framer Motion
- 🎯 Unique layouts and components
- 👥 Founders panel section (ready for photos and details)
- 🚀 High-performance and SEO optimized

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── FoundersPanel.tsx
│   │   ├── Products.tsx
│   │   ├── Solutions.tsx
│   │   └── Contact.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── FloatingButton.tsx
└── public/                # Static assets
```

## Customization

### Adding Founder Photos

1. Place founder images in `public/founders/` directory
2. Update the image paths in `components/sections/FoundersPanel.tsx`
3. Update founder names, roles, and bio information

### Color Scheme

Colors are defined in `tailwind.config.js`. The main gradient uses:
- Blue: `#0ea5e9` to `#0284c7`
- Pink: `#ec4899` to `#db2777`

### Content Updates

All content can be updated in the respective component files in `components/sections/`.

## Build for Production

```bash
npm run build
npm start
```

## License

Built with ❤️ for StratgenAI


