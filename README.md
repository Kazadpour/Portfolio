# Personal Portfolio Website

A modern, dark-mode developer portfolio built with Next.js 15, designed to showcase software engineering and data-driven project experience.

## Features

- **Modern Design**: Clean, minimalist Vercel/Geist aesthetic
- **Responsive**: Fully responsive layout optimized for all devices
- **Dark Mode**: Beautiful dark theme with carefully crafted color palette
- **Animations**: Smooth transitions and animations using Framer Motion
- **Performance**: Built with Next.js 15 for optimal performance
- **Type-Safe**: Full TypeScript support for better DX

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Geist Sans](https://vercel.com/font)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Hero.tsx            # Hero section with intro
│   ├── Projects.tsx        # Featured projects showcase
│   ├── About.tsx           # About me and skills
│   └── Contact.tsx         # Contact information
├── public/                 # Static assets
└── tailwind.config.ts      # Tailwind configuration
```

## Customization

### Update Personal Information

1. **Hero Section** ([components/Hero.tsx](components/Hero.tsx)):
   - Update name, tagline, and social links
   - Replace GitHub, LinkedIn, and email URLs

2. **Projects** ([components/Projects.tsx](components/Projects.tsx)):
   - Modify the `projects` array with your own projects
   - Update project descriptions, tags, and links

3. **About Section** ([components/About.tsx](components/About.tsx)):
   - Update bio and skills
   - Modify experience section with your work history

4. **Contact** ([components/Contact.tsx](components/Contact.tsx)):
   - Update email and social media links

### Styling

The color scheme and design tokens are defined in:
- [app/globals.css](app/globals.css) - CSS custom properties
- [tailwind.config.ts](tailwind.config.ts) - Tailwind theme extensions

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and configure build settings
4. Deploy with one click

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway

Build command: `npm run build`
Output directory: `.next`

## Performance Optimization

- Uses Next.js App Router for optimal performance
- Implements code splitting and lazy loading
- Optimized images and fonts
- Minimal JavaScript bundle size

## License

MIT License - feel free to use this project for your own portfolio

## Acknowledgments

- Design inspiration from [Vercel](https://vercel.com)
- Built with [Next.js](https://nextjs.org/)
- Icons from [Lucide](https://lucide.dev/)
