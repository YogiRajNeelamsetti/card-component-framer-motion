# Animated Card Component

A beautiful and interactive card component built with Next.js 15, Framer Motion, and TailwindCSS, featuring smooth animations and modern design patterns.

![Component Preview](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.15.0-blue?style=for-the-badge&logo=framer)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)

## ✨ Features

- **Smooth Animations** - Powered by Framer Motion
- **Modern UI Components** - Reusable card components
- **Icon Integration** - Tabler Icons React library
- **Responsive Design** - Mobile-first approach
- **TypeScript Support** - Fully typed components
- **TailwindCSS 4** - Modern utility-first styling
- **Geist Font** - Professional typography

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/component2.git

# Navigate to project directory
cd component2

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the component in action.

## 📦 Tech Stack

- **Framework:** Next.js 15.3.3
- **Animation:** Framer Motion 12.15.0
- **UI Icons:** @tabler/icons-react
- **Styling:** TailwindCSS 4
- **Language:** TypeScript 5
- **Font:** Geist (Vercel)
- **Utilities:** clsx, tailwind-merge

## 🎨 Component Structure

```
component2/
├── app/
│   ├── page.tsx           # Main page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── components/
│   │   ├── content.tsx    # Content wrapper
│   │   └── ui/
│   │       └── card.tsx   # Card component
│   ├── lib/
│   │   └── utils.ts       # Utility functions
│   └── assets/            # Images and media
└── public/
```

## 💻 Usage

### Basic Card Component

```tsx
import { Card } from '@/app/components/ui/card';

export default function Page() {
  return (
    <div className="p-4">
      <Card />
    </div>
  );
}
```

### Using the Content Wrapper

```tsx
import { Content } from '@/app/components/content';

export default function Page() {
  return <Content />;
}
```

## 🛠️ Utility Functions

The project includes utility functions for class name management:

```typescript
import { cn } from '@/app/lib/utils';

// Merge Tailwind classes efficiently
const className = cn('base-class', condition && 'conditional-class');
```

## 🌐 Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/component2)

1. Push your code to GitHub
2. Import the project to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy on Netlify

```bash
npm run build
```

Deploy the `.next` output directory to Netlify.

### Build for Production

```bash
npm run build
npm run start
```

## 🎯 Key Features Explained

- **Framer Motion Integration:** Smooth, performant animations
- **Component Composition:** Modular and reusable UI elements
- **TypeScript:** Full type safety across the application
- **Modern Tooling:** Latest Next.js 15 with App Router
- **Optimized Fonts:** Automatic font optimization with Geist

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

Your Name - [@yourhandle](https://twitter.com/yourhandle)

---

⭐ Star this repo if you find it helpful!
