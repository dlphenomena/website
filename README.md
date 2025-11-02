[![Netlify Status](https://api.netlify.com/api/v1/badges/1b35e67c-95f3-4161-8b18-c102f3ebd483/deploy-status)](https://app.netlify.com/projects/dlphenomena/deploys)
![Vercel Deploy](https://deploy-badge.vercel.app/vercel/dlphenomena)

# Deep Learning Phenomena

A modern blog and documentation website exploring interesting phenomena in deep learning, built with Next.js and powered by Fumadocs. You can visit the webpage by

https://dlphenomena.netlify.app or https://dlphenomena.vercel.app/

## 🚀 Features

- **MDX-powered content** - Write content with Markdown and React components
- **Mathematical equations** - Full support for LaTeX equations using KaTeX
- **Reading time estimation** - Automatic calculation of reading time for articles
- **Dark mode** - Beautiful dark/light theme with system preference detection
- **Responsive design** - Optimized for all screen sizes
- **Type-safe** - Built with TypeScript for better developer experience
- **Fast builds** - Optimized with Bun runtime support

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Content**: [Fumadocs](https://fumadocs.vercel.app/) for MDX content management
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**:
  - Headless UI
  - Shadcn/ui
  - Lucide React icons
- **Math Rendering**: KaTeX with remark-math and rehype-katex
- **Theme**: next-themes for dark mode support
- **Type Safety**: TypeScript
- **Linting**: ESLint with Prettier

## 📋 Prerequisites

- Node.js 20+ or Bun 1.3+
- bun (recommended) or pnpm (require node preinstalled)

## 🏃 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/dlphenomena/website
cd website
```

2. **Install dependencies**

```bash
# Using bun
bun install

# Using pnpm
pnpm install
```

3. **Run the development server**

```bash
# Using bun
bun dev

# Using pnpm
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```bash
next-website/
├── app/                   # Next.js App Router pages
│   ├── (home)/            # Home page group
│   ├── phenomena/         # Phenomena articles routes
│   ├── layout.tsx         # Root layout with theme provider
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── header.tsx         # Site header
│   ├── footer.tsx         # Site footer
│   └── theme-provider.tsx # Theme context provider
├── content/               # MDX content
│   └── phenomena/         # Deep learning phenomena articles
├── lib/                   # Utility functions and plugins
│   └── remark-plugins/    # Custom remark plugins
├── public/                # Static assets
├── source.config.ts       # Fumadocs configuration
└── package.json           # Dependencies and scripts
```

## ✍️ Creating Content

Content is managed using Fumadocs and stored in the `content/phenomena` directory.

### Adding a new phenomenon article

1. Create a new `.mdx` file in `content/phenomena/`
2. Add frontmatter with required fields:

```mdx
---
title: "Your Phenomenon Title"
description: "A brief description"
author: "Your Name"
pubDate: "2024-01-01"
tags: ["deep-learning", "neural-networks"]
relatedWorks: "Optional related works section"
---

# Your Content Here

Write your article using MDX syntax...
```

### Using Math Equations

The site supports LaTeX math equations:

- Inline math: `$E = mc^2$`
- Block math:

```
$$
\frac{d}{dx}\left( \int_{0}^{x} f(u)\,du\right)=f(x)
$$
```

## 🎨 Styling

The project uses Tailwind CSS 4 with custom configuration. Key features:

- Custom color scheme with orange accent
- Dark mode support via CSS variables
- Typography plugin for article content
- Custom animations with tw-animate-css

## 🤝 Contributing

This is a personal project. If you have suggestions or find issues, feel free to reach out.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Fumadocs Documentation](https://fumadocs.vercel.app/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)

---

Built with ❤️ using Next.js and Fumadocs
