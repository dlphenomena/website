[![Netlify Status](https://api.netlify.com/api/v1/badges/68ff35fe-1e37-41ca-8ab6-8e43659cb06a/deploy-status)](https://app.netlify.com/projects/dlphenomena/deploys)

# Deep Learning Phenomena Website

A modern, fast, and responsive website dedicated to exploring and sharing interesting phenomena in deep learning. Built with cutting-edge web technologies for optimal performance and user experience.

🌐 **Live Site**: [https://dlphenomena.netlify.app](https://dlphenomena.netlify.app)

## 📖 About

This website serves as a platform for documenting and discussing fascinating phenomena observed in deep learning research, including topics like:
- Neural network training behaviors (e.g., condensation phenomenon)
- F-principle and frequency dynamics
- Network architecture insights
- And more emerging topics in deep learning

## ✨ Features

- 📝 **Blog System** - Markdown/MDX-based blog with reading time estimates
- 🎨 **Modern UI** - Clean, responsive design with dark mode support
- 🚀 **Fast Performance** - Static site generation with Astro
- 📱 **Mobile-Friendly** - Fully responsive across all devices
- 🔍 **SEO Optimized** - Sitemap generation and meta tags
- 🎯 **TypeScript** - Type-safe development experience
- 🎨 **Tailwind CSS** - Utility-first styling with **custom** components

## 🛠️ Tech Stack

### Core Frameworks

- [Astro](https://astro.build/) v5 - Modern static site builder
- [React](https://react.dev/) v19 - Interactive UI components
- [TypeScript](https://www.typescriptlang.org/) - Type safety

### Styling & UI

- [Tailwind CSS](https://tailwindcss.com/) v4 - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - High-quality React components
- [Headless UI](https://headlessui.com/) - Unstyled accessible components
- [Radix UI](https://www.radix-ui.com/) - Primitive UI components
- [Lucide React](https://lucide.dev/) - Beautiful icon library
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icon sets

### Content & Plugins

- [MDX](https://mdxjs.com/) - Markdown with JSX support
- Custom Remark plugins for reading time and modified dates
- RSS feed generation
- Sitemap generation

### Development Tools

- [Biome](https://biomejs.dev/) - Fast linter and formatter
- [Prettier](https://prettier.io/) - Code formatter
- [Bun](https://bun.sh/) - Fast JavaScript runtime and package manager

## 🚀 Getting Started

### Prerequisites

You'll need one of the following package managers installed:
- [Bun](https://bun.sh/) (recommended for fastest performance)
- [pnpm](https://pnpm.io/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dlphenomena/website.git
cd website
```

2. Install dependencies:

**With Bun (recommended):**
```bash
bun install
```

**With pnpm:**
```bash
pnpm install
```

**With npm:**
```bash
npm install
```

### Development

Start the development server:

**With Bun:**
```bash
bun run dev
```

**With pnpm:**
```bash
pnpm dev
```

**With npm:**
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Building for Production

Build the static site:

```bash
bun run build
# or
pnpm build
# or
npm run build
```

Preview the production build locally:

```bash
bun run preview
# or
pnpm preview
# or
npm run preview
```

## 📁 Project Structure

```
/
├── public/              # Static assets (favicon, images, etc.)
│   ├── favicon.jpg
│   └── sjtu-logo.png
├── src/
│   ├── assets/         # Optimized images and assets
│   │   ├── avatars/
│   │   ├── blog/
│   │   └── thumbnails/
│   ├── components/     # React and Astro components
│   │   ├── ui/         # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── ...
│   ├── content/        # Markdown/MDX blog posts
│   │   └── blog/
│   ├── layouts/        # Page layouts
│   │   ├── BaseLayout.astro
│   │   ├── BlogPost.astro
│   │   └── ...
│   ├── pages/          # File-based routing
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── blog/
│   │   └── ...
│   ├── plugins/        # Custom Remark plugins
│   ├── styles/         # Global styles
│   │   └── global.css
│   ├── lib/            # Utility functions
│   └── consts.ts       # Site configuration
├── astro.config.mjs    # Astro configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── biome.json          # Biome linter/formatter config
└── package.json
```

## 📝 Adding Content

### Creating a New Blog Post

1. Create a new `.md` or `.mdx` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description of your post"
author: "xxx, xxx, xxx"
pubDate: 2025-01-15
tags:
  - Tag1
  - Tag2
public: true
---

## Your content here...
```

2. Add any images to `src/assets/blog/` and reference them in your post
3. The reading time and last modified date are automatically calculated

## 🎨 Customization

### Site Configuration

Edit `src/consts.ts` to update:
- Site title and description
- Committee member information
- Social links
- And other global settings

### Styling

- Global styles: `src/styles/global.css`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styles use Tailwind utility classes

## 🚢 Deployment

This site is configured for deployment on [Netlify](https://www.netlify.com/):

1. Push your changes to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically build and deploy using the settings in `netlify.toml`

Build configuration:
- Build command: `bun run build`
- Publish directory: `dist`

## 👥 Committee

The website is maintained by researchers from Shanghai Jiao Tong University. See the [Committee page](https://dlphenomena.netlify.app/committee) for more information.

## 📄 License

This project is open source and available under the [LICENSE](LICENSE) file in the repository.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Issues

If you encounter any issues or have suggestions, please [open an issue](https://github.com/dlphenomena/website/issues) on GitHub.

---

Built with ❤️ by the Deep Learning Phenomena team
