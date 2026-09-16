# 🏠 Aliante Homes For Sale

[![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![CI/CD](https://github.com/DrJanDuffy/aliantehomesforsale.com/workflows/CI%2FCD%20Pipeline/badge.svg)](https://github.com/DrJanDuffy/aliantehomesforsale.com/actions)
[![Code Quality](https://img.shields.io/badge/Code%20Quality-Biome-orange?style=for-the-badge)](https://biomejs.dev/)

> **Discover beautiful homes for sale in Aliante, Las Vegas** 🏡

A modern, high-performance real estate website built with Next.js, TypeScript, and Tailwind CSS, optimized for search engines and user experience.

## ✨ Features

- 🚀 **Next.js 15** with App Router and Turbopack
- 🎨 **Tailwind CSS 4** for modern, responsive design
- 🔒 **Advanced Security** with CSP headers and rate limiting
- 📱 **Mobile-First** responsive design
- 🔍 **SEO Optimized** with structured data and meta tags
- 📊 **Performance Monitoring** with Core Web Vitals tracking
- 🌐 **Vercel Deployment** with automatic CI/CD
- 🧪 **TypeScript** for type safety and developer experience

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/DrJanDuffy/aliantehomesforsale.com.git
cd aliantehomesforsale.com

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run next:dev         # Next.js development server

# Building
npm run build            # Build for production
npm run next:build       # Next.js build
npm run vercel-build     # Vercel-specific build

# Code Quality
npm run lint             # Run Biome linting
npm run format           # Format code with Biome
npm run check            # Run all Biome checks
npm run type-check       # TypeScript type checking

# Production
npm run start            # Start production server
npm run next:start       # Next.js production server

# Analysis
npm run analyze          # Bundle analysis
npm run next:info        # Next.js environment info
```

## 🏗️ Project Structure

```
aliantehomesforsale.com/
├── .github/                 # GitHub Actions workflows
├── app/                     # Next.js App Router
│   ├── api/                 # API routes
│   ├── components/          # React components
│   ├── config.ts            # App configuration
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── lib/                     # Utility libraries
├── public/                  # Static assets
├── .vercelignore            # Vercel deployment exclusions
├── biome.json               # Biome configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vercel.json              # Vercel configuration
└── README.md                # This file
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Required
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Production
NEXT_PUBLIC_SITE_URL=https://www.aliantehomesforsale.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-verification-code

# Cloudflare Images (hosted assets — primary CDN). Git public/images is the backup.
# Production (VERCEL_ENV=production) uses https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<id>/public
# Local/preview stay on git unless NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=true
# Kill switch: NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=false
# Optional R2 tertiary (gray-cloud host only — never orange-cloud www):
# NEXT_PUBLIC_CLOUDFLARE_MEDIA_BASE=https://media.aliantehomesforsale.com
# CLOUDFLARE_API_TOKEN=   # Images:Edit — never commit
# CLOUDFLARE_ACCOUNT_ID=2cc579c1ec9e426ed585e933ebf4753b
# R2_BUCKET=aliante-homes-media

# Vercel (auto-populated)
VERCEL_URL=https://your-project.vercel.app
```

Copy `.env.example` to `.env.local`. After adding photos, run `npm run media:upload` when `CLOUDFLARE_API_TOKEN` is set (Account → Images → Edit). Until objects exist on Images, local/preview still serve `/images` and `/og-image.jpg` from git. Vercel production uses imagedelivery.net; `MediaImage` falls back to git if a hosted object 404s. Optional `npm run media:upload:r2` copies the same files to R2 as tertiary storage.

### Next.js Configuration

The project includes optimized Next.js configuration with:

- **Performance**: Compression, ETags, package optimization
- **Security**: Security headers, CSP policies
- **SEO**: Meta tags, structured data, sitemap generation
- **Images**: WebP/AVIF support, responsive optimization

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Environment Variables**: Set required environment variables
3. **Automatic Deployments**: Every push to main branch deploys automatically

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 📊 Performance

### Core Web Vitals Targets

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms  
- **CLS (Cumulative Layout Shift)**: < 0.1
- **TTFB (Time to First Byte)**: < 800ms

### Performance Monitoring

- **Vercel Analytics**: Automatic performance tracking
- **Custom Metrics**: Server performance and memory usage
- **Lighthouse CI**: Automated performance testing in CI/CD

## 🔒 Security

### Security Features

- **Content Security Policy**: XSS protection
- **Rate Limiting**: DDoS protection
- **Security Headers**: Comprehensive security policies
- **Input Validation**: Secure data handling
- **HTTPS Enforcement**: Automatic SSL/TLS

### Security Scanning

- **Trivy**: Vulnerability scanning in CI/CD
- **npm audit**: Dependency security checks
- **GitHub Security**: Automated security scanning

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards

- **TypeScript**: Strict mode enabled
- **Biome**: Automated linting and formatting
- **Conventional Commits**: Standardized commit messages
- **Prettier**: Code formatting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for hosting and deployment
- **Tailwind CSS** for the utility-first CSS framework
- **Biome** for fast linting and formatting

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/DrJanDuffy/aliantehomesforsale.com/issues)
- **Discussions**: [GitHub Discussions](https://github.com/DrJanDuffy/aliantehomesforsale.com/discussions)
- **Documentation**: [Project Wiki](https://github.com/DrJanDuffy/aliantehomesforsale.com/wiki)

## 📈 Project Status

![GitHub last commit](https://img.shields.io/github/last-commit/DrJanDuffy/aliantehomesforsale.com)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/DrJanDuffy/aliantehomesforsale.com)
![GitHub contributors](https://img.shields.io/github/contributors/DrJanDuffy/aliantehomesforsale.com)
![GitHub stars](https://img.shields.io/github/stars/DrJanDuffy/aliantehomesforsale.com)

---

**Made with ❤️ by the Aliante Homes Team**

*Built for the future of real estate technology*
# Trigger Vercel deployment
