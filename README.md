# Juhyeon Lee - Portfolio & Blog

A modern, responsive portfolio and blog website built with Next.js, showcasing my journey from systems programming to agentic engineering.

## 🚀 Features

- **Modern Design**: Dark theme with terminal-inspired aesthetics
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Static site generation for lightning-fast loading
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Accessible**: Built with accessibility best practices

## 🛠 Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended) or Netlify
- **Content**: Markdown for blog posts (ready for CMS integration)

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ installed
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/juhyeonl-hub/portfolio-blog.git
   cd portfolio-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
# Build the static site
npm run build

# Preview the production build locally
npm start
```

## 📁 Project Structure

```
├── components/          # Reusable React components
│   └── Layout.tsx      # Main layout wrapper
├── pages/              # Next.js pages
│   ├── index.tsx       # Homepage
│   ├── projects.tsx    # Projects showcase
│   ├── blog.tsx        # Blog listing
│   ├── about.tsx       # About page
│   └── _app.tsx        # App configuration
├── styles/
│   └── globals.css     # Global styles and CSS variables
├── public/             # Static assets
└── README.md          # This file
```

## 🎨 Customization

### Colors & Theme

The design uses CSS custom properties for easy theming. Modify colors in `styles/globals.css`:

```css
:root {
  --primary: #00ff88;      /* Primary green */
  --secondary: #ff6b6b;    /* Secondary red */
  --accent: #4ecdc4;       /* Accent teal */
  /* ... other colors */
}
```

### Content

1. **Personal Info**: Update contact details in `components/Layout.tsx`
2. **Projects**: Modify the projects array in `pages/projects.tsx`
3. **Blog Posts**: Add new posts to the blogPosts array in `pages/blog.tsx`
4. **About Page**: Customize your story in `pages/about.tsx`

### Blog System

The current setup uses a static array for blog posts. For a dynamic blog, consider integrating:

- **Contentful** - Headless CMS
- **Strapi** - Self-hosted CMS  
- **Markdown files** - Simple file-based approach
- **Notion** - Use Notion as a CMS

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `out`
3. **Deploy**: Automatic deployments on every push

### Netlify

1. **Connect your repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `out`
3. **Deploy**: Automatic deployments on every push

### GitHub Pages

```bash
# Build and export static files
npm run build

# Deploy to GitHub Pages
# (You'll need to configure GitHub Pages to serve from the 'out' directory)
```

## 📝 Adding Blog Posts

To add a new blog post, add an object to the `blogPosts` array in `pages/blog.tsx`:

```typescript
{
  id: 'my-new-post',
  title: 'My New Blog Post',
  excerpt: 'A brief description of the post...',
  date: '2026-04-16',
  readTime: '5 min read',
  category: 'agentic-engineering',
  tags: ['AI', 'Programming', 'Learning'],
  featured: false
}
```

For individual blog post pages, create files in `pages/blog/[id].tsx` or integrate a markdown processor.

## 🎯 Weekly Content Strategy

This portfolio is designed to support a weekly content publishing schedule:

1. **Week 1-2**: Existing projects documentation
2. **Week 3+**: New AI agent projects and learning journey
3. **Categories**:
   - Agentic Engineering
   - Systems Programming  
   - Learning Journey
   - Project Deep Dives

## 📱 Responsive Design

The site is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Code Style

- TypeScript for type safety
- Functional components with hooks
- CSS-in-JS avoided in favor of CSS custom properties
- Mobile-first responsive design

### Performance

- Static site generation for fast loading
- Optimized images and fonts
- CSS custom properties for consistent theming
- Minimal JavaScript bundle size

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📧 Contact

- **Email**: xx.juon@gmail.com
- **GitHub**: [@juhyeonl-hub](https://github.com/juhyeonl-hub)
- **LinkedIn**: [Juhyeon Lee](https://linkedin.com/in/juhyeon-lee-54aa1a223)

---

Built with ❤️ by Juhyeon Lee | Systems Programmer → AI Agent Engineer
