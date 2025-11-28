# Portfolio Project Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Key Features](#key-features)
5. [Technologies Used](#technologies-used)
6. [Deployment Methods](#deployment-methods)
7. [Docker Deployment](#docker-deployment)
8. [Development Setup](#development-setup)

---

## 🎯 Project Overview

This is a professional portfolio website for **Muhammad Uzair**, a DevOps Engineer. The website showcases skills, projects, experience, and provides contact information. It features a modern, responsive design with dark/light mode support, 3D animations, and smooth interactions.

---

## 🛠 Technology Stack

### Core Framework & Language
- **Next.js 14** (App Router) - React framework for production
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI library

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Icon library

### 3D Graphics
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Three.js** - 3D graphics library

### DevOps Tools
- **Docker** - Containerization
- **Docker Compose** - Multi-container Docker applications
- **GitHub Actions** - CI/CD pipeline
- **Terraform** - Infrastructure as Code (AWS S3 + CloudFront)
- **Kubernetes** - Container orchestration

### Code Quality
- **ESLint** - Linting tool
- **Prettier** - Code formatter
- **Jest** - Testing framework
- **React Testing Library** - Component testing

---

## 📁 Project Structure

```
muhammad-uzair/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── robots.ts            # Robots.txt
│   └── sitemap.ts           # Sitemap generation
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx      # Button component
│   │   └── Card.tsx        # Card component with animations
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section with 3D scene
│   ├── About.tsx           # About section
│   ├── Workflow.tsx        # DevOps workflow visualization
│   ├── Toolkit.tsx         # Core toolkit grid
│   ├── Focus.tsx           # Currently focusing on
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects with filtering
│   ├── Journey.tsx        # Learning journey timeline
│   ├── Resume.tsx         # Resume download section
│   ├── Contact.tsx        # Contact form and methods
│   ├── SplashScreen.tsx   # Animated splash screen
│   ├── DevOpsScene.tsx    # 3D scene component
│   └── ScrollToTop.tsx    # Scroll to top button
├── contexts/               # React contexts
│   └── ThemeContext.tsx    # Theme provider (light/dark mode)
├── data/                   # Static data
│   └── projects.ts         # Projects data
├── lib/                    # Utilities
│   └── utils.ts           # Helper functions (clsx, tailwind-merge)
├── public/                 # Static assets
│   └── assets/            # Images, PDFs, etc.
├── terraform/             # Terraform configurations
│   ├── main.tf            # Main infrastructure
│   ├── variables.tf       # Variables
│   └── outputs.tf         # Outputs
├── k8s/                   # Kubernetes manifests
│   └── deployment.yaml    # Deployment + Service
├── .github/               # GitHub workflows
│   └── workflows/
│       └── ci.yml         # CI/CD pipeline
├── Dockerfile             # Multi-stage Dockerfile
├── docker-compose.yml     # Docker Compose config
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json          # Dependencies and scripts
```

---

## ✨ Key Features

### 1. **Splash Screen**
- Animated typing effect
- Name appears first, then title after 1.5 seconds
- Smooth fade-out transition
- Prevents zoom on mobile devices

### 2. **Hero Section**
- Gradient text animations
- 3D rotating DevOps cloud scene
- Call-to-action buttons (Hire Me, Live Projects, Download CV)
- Fully responsive design

### 3. **3D Scene (DevOpsScene)**
- Rotating low-poly cloud (icosahedron)
- Orbiting nodes/cubes
- Pulsing sphere
- Touch-enabled rotation on mobile
- Auto-rotation disabled, manual control enabled

### 4. **Theme System (Light/Dark Mode)**
- **Technology**: React Context API
- Default: Dark mode
- Toggle button in header
- Persists preference in localStorage
- Smooth transitions
- Light mode: White background, cards maintain glass effect
- Dark mode: Gradient dark background

### 5. **Animations**
- **Technology**: Framer Motion
- Scroll-triggered animations
- Hover effects on cards
- Mobile touch animations (cards lift on touch)
- Smooth page transitions
- Stagger animations for lists

### 6. **Card Component**
- Glassmorphism effect
- Hover animations (lift and scale)
- Mobile touch support (animates on touch)
- Customizable variants

### 7. **Responsive Design**
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Adaptive layouts for all sections
- Touch-optimized interactions

### 8. **Scroll to Top Button**
- Appears after scrolling 300px
- Smooth scroll animation
- Gradient button design
- Fixed position (bottom-right)

---

## 🔧 Technologies Used

### Frontend Technologies

#### **Next.js 14 (App Router)**
- Server-side rendering (SSR)
- Static site generation (SSG)
- Image optimization
- API routes support
- File-based routing

#### **TypeScript**
- Type safety
- Better IDE support
- Compile-time error checking
- Interface definitions

#### **Tailwind CSS**
- Utility-first CSS
- Custom color palette (blue, indigo, emerald)
- Dark mode support
- Responsive utilities
- Custom classes (glass, glass-strong)

#### **Framer Motion**
- Declarative animations
- Scroll-triggered animations
- Gesture support
- Layout animations
- Variants system

#### **React Three Fiber**
- React renderer for Three.js
- Component-based 3D scenes
- Hooks for animations (useFrame)
- Camera and lighting controls

#### **Lucide React**
- Scalable vector icons
- Tree-shakeable
- Customizable size and color
- Consistent icon set

### Backend/DevOps Technologies

#### **Docker**
- Multi-stage builds
- Optimized image size
- Production-ready containers

#### **Terraform**
- Infrastructure as Code
- AWS S3 bucket creation
- CloudFront distribution
- Automated infrastructure deployment

#### **Kubernetes**
- Container orchestration
- Deployment manifests
- Service definitions
- Scalability support

#### **GitHub Actions**
- Continuous Integration
- Automated testing
- Build and deployment workflows

---

## 🚀 Deployment Methods

### 1. **Vercel (Recommended for Next.js)**

#### Steps:
1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables (if any)
4. Deploy automatically on push

#### Advantages:
- Zero configuration
- Automatic HTTPS
- Global CDN
- Preview deployments
- Free tier available

#### Command:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

### 2. **AWS Deployment**

#### Option A: AWS Amplify
1. Connect GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Deploy automatically

#### Option B: AWS S3 + CloudFront (Using Terraform)
1. **Initialize Terraform:**
   ```bash
   cd terraform
   terraform init
   ```

2. **Configure variables:**
   - Edit `variables.tf` or use `terraform.tfvars`

3. **Plan and apply:**
   ```bash
   terraform plan
   terraform apply
   ```

4. **Build and upload:**
   ```bash
   npm run build
   aws s3 sync .next/static s3://your-bucket-name/_next/static
   aws s3 sync out s3://your-bucket-name --delete
   ```

#### Option C: AWS ECS/Fargate
1. Build Docker image
2. Push to ECR
3. Create ECS task definition
4. Deploy service

---

### 3. **Netlify**

#### Steps:
1. Connect GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Deploy

#### Command:
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

---

### 4. **Docker Deployment**

See [Docker Deployment](#docker-deployment) section below.

---

### 5. **Kubernetes Deployment**

1. Build Docker image
2. Push to container registry
3. Update `k8s/deployment.yaml` with image
4. Apply manifests:
   ```bash
   kubectl apply -f k8s/deployment.yaml
   ```

---

## 🐳 Docker Deployment

### Building Docker Image

#### Multi-Stage Dockerfile
The project uses a multi-stage Dockerfile for optimized builds:

```dockerfile
# Stage 1: Dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Stage 2: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Production
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

### Build Commands

#### Build Docker Image:
```bash
docker build -t muhammad-uzair-portfolio:latest .
```

#### Tag for Registry:
```bash
docker tag muhammad-uzair-portfolio:latest your-registry/muhammad-uzair-portfolio:latest
```

#### Push to Registry:
```bash
docker push your-registry/muhammad-uzair-portfolio:latest
```

### Running Docker Container

#### Using Docker Run:
```bash
docker run -d \
  -p 3000:3000 \
  --name portfolio \
  muhammad-uzair-portfolio:latest
```

#### Using Docker Compose:
```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Docker Compose Configuration

The `docker-compose.yml` file includes:
- Next.js application service
- Port mapping (3000:3000)
- Volume mounts (optional)
- Environment variables
- Health checks

---

## 🏗 Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone repository:**
   ```bash
   git clone <repository-url>
   cd muhammad-uzair
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   ```
   http://localhost:3000
   ```

### Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format with Prettier

# Testing
npm test             # Run tests
npm run test:watch   # Watch mode

# Storybook
npm run storybook    # Start Storybook
```

---

## 📦 Environment Variables

Create a `.env.local` file (optional):

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## 🔐 Security Considerations

1. **Environment Variables**: Never commit `.env.local`
2. **API Keys**: Store securely, use server-side only
3. **HTTPS**: Always use HTTPS in production
4. **CSP Headers**: Configure Content Security Policy
5. **Dependencies**: Regularly update and audit

---

## 📊 Performance Optimization

1. **Image Optimization**: Next.js Image component
2. **Code Splitting**: Automatic with Next.js
3. **Static Generation**: Pre-rendered pages
4. **CDN**: Use CloudFront or Vercel CDN
5. **Caching**: Configure appropriate cache headers

---

## 🧪 Testing

### Unit Tests
```bash
npm test
```

### E2E Tests (if configured)
```bash
npm run test:e2e
```

---

## 📝 Additional Notes

### Card Animations
- **Desktop**: Hover effect (lift and scale)
- **Mobile**: Touch effect (animates on touch start/end)
- **Technology**: Framer Motion `whileHover` and `animate` props

### Theme System
- **Context**: React Context API
- **Storage**: localStorage
- **Default**: Dark mode
- **Toggle**: Header button

### 3D Scene
- **Library**: React Three Fiber + Drei
- **Controls**: OrbitControls (touch-enabled)
- **Performance**: Optimized for mobile

### Responsive Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

---

## 🆘 Troubleshooting

### Common Issues

1. **Build Errors**: Clear `.next` folder and rebuild
2. **Docker Issues**: Check Dockerfile and ensure all dependencies are included
3. **Theme Not Working**: Check ThemeContext provider in layout
4. **3D Scene Not Loading**: Ensure Three.js dependencies are installed

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Docker Documentation](https://docs.docker.com/)
- [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)

---

## 📄 License

This project is private and proprietary.

---

**Last Updated**: December 2024

