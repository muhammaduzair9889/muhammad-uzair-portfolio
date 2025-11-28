# Muhammad Uzair - DevOps and cloud Portfolio

My portfolio website built with Next.js, TypeScript, and modern web technologies.

##  Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber + Drei
- **Icons**: Lucide React
- **Theme**: Light/Dark Mode Support

##  Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn
- Docker (optional, for containerized deployment)
- Terraform (optional, for AWS deployment)
- kubectl (optional, for Kubernetes deployment)

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Accessing on Mobile Device

To access the development server on your mobile device:

1. **Find your computer's IP address:**
   - Windows: Open Command Prompt and run `ipconfig`
   - Look for "IPv4 Address" (e.g., 192.168.1.100)
   - Mac/Linux: Run `ifconfig` or `ip addr`

2. **Ensure your mobile device is on the same network** as your computer

3. **Access from mobile browser:**
   ```
   http://YOUR_IP_ADDRESS:3000
   ```
   Example: `http://192.168.0.104:3000`

4. **If connection fails:**
   - Check Windows Firewall settings
   - Allow port 3000 through firewall
   - Ensure both devices are on the same Wi-Fi network

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Testing

```bash
# Run tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

### Storybook

```bash
# Start Storybook
npm run storybook

# Build Storybook
npm run build-storybook
```

##  Features

-  **Fully Responsive**: Mobile-first design, works perfectly on all devices
-  **Modern UI**: Glassmorphism effects with smooth animations
-  **3D Interactive Scene**: React Three Fiber 3D DevOps visualization
-  **Smooth Animations**: Framer Motion throughout
-  **SEO Optimized**: Meta tags, sitemap, robots.txt
-  **Accessible**: WCAG compliant components
-  **Project Filtering**: Filter projects by category
-  **Contact Form**: Working contact form with validation
-  **Resume Download**: PDF resume download functionality
-  **Learning Journey**: Timeline visualization of career growth

## 📱 Mobile Responsiveness

The portfolio is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Laptops (1024px+)
- Desktops (1280px+)

All sections adapt seamlessly to different screen sizes with:
- Responsive typography
- Flexible grid layouts
- Touch-optimized interactions
- Mobile-friendly navigation
- Optimized 3D scene for mobile


##  Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles with theme support
│   ├── sitemap.ts           # Sitemap generation
│   └── robots.ts            # Robots.txt
├── components/             # React components
│   ├── ui/                  # UI components (Button, Card)
│   ├── Header.tsx           # Navigation with theme toggle
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section with 3D scene
│   ├── About.tsx            # About section
│   ├── Workflow.tsx         # DevOps workflow visualization
│   ├── Toolkit.tsx          # Core toolkit grid
│   ├── Focus.tsx            # Currently focusing on
│   ├── Skills.tsx           # Skills section
│   ├── Projects.tsx         # Projects with filtering
│   ├── Journey.tsx           # Learning journey timeline
│   ├── Resume.tsx           # Resume download section
│   ├── Contact.tsx          # Contact form and methods
│   ├── SplashScreen.tsx     # Animated splash screen
│   └── DevOpsScene.tsx     # 3D scene component
├── contexts/               # React contexts
│   └── ThemeContext.tsx     # Theme provider
├── data/                   # Static data
│   └── projects.ts          # Projects data
├── lib/                    # Utilities
│   └── utils.ts            # Helper functions
├── public/                 # Static assets
│   └── assets/             # Images, PDFs, etc.
├── terraform/              # Terraform configurations
│   ├── main.tf             # Main infrastructure
│   ├── variables.tf        # Variables
│   └── outputs.tf          # Outputs
├── k8s/                    # Kubernetes manifests
│   └── deployment.yaml     # Deployment + Service
├── .github/                # GitHub workflows
│   └── workflows/
│       └── ci.yml          # CI/CD pipeline
├── Dockerfile              # Multi-stage Dockerfile
├── docker-compose.yml      # Docker Compose config
└── next.config.js          # Next.js configuration
```

##  Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Customization

- **Projects**: Update `data/projects.ts` with your projects
- **About**: Modify `components/About.tsx` with your bio
- **Resume**: Replace `public/assets/resume.pdf` with your resume
- **Social Links**: Update links in `components/Contact.tsx` and `components/Footer.tsx`
- **Colors**: Customize colors in `tailwind.config.ts`
- **Theme**: Adjust theme colors in `app/globals.css`

##  Docker Deployment

### Build Docker Image

```bash
docker build -t muhammad-uzair-portfolio:latest .
```

### Run with Docker

```bash
docker run -p 3000:3000 muhammad-uzair-portfolio:latest
```

### Docker Compose

```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

##  AWS Deployment (Terraform)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed AWS deployment instructions.

##  Kubernetes Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed Kubernetes deployment instructions.

##  CI/CD

The project includes GitHub Actions workflows for:

- **Linting**: ESLint and Prettier checks
- **Testing**: Jest test suite
- **Building**: Next.js production build
- **Docker**: Docker image building (on main branch)

Workflows are located in `.github/workflows/ci.yml`.

##  License

MIT

##  Author

**Muhammad Uzair**

- Portfolio: [muhammaduzair.dev](https://muhammaduzair.dev)
- GitHub: [@muhammaduzair9889](https://github.com/muhammaduzair9889)
- LinkedIn: [Muhammad Uzair](https://www.linkedin.com/in/muhammad-uzair-b806a4394/)

---

Built with  using Next.js and modern DevOps practices.
