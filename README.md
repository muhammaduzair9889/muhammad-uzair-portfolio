# Cloud & DevOps Engineering Portfolio — Muhammad Uzair
 
This repository contains the source code for an interactive, production-focused portfolio website that showcases my cloud infrastructure projects, automation work, and DevOps engineering practices.

The goal of this project is to present my technical experience and engineering mindset in a clear and practical way. Instead of a traditional static resume website, this portfolio focuses on real cloud architecture, CI/CD automation, and infrastructure design, supported by a modern and thoughtfully designed user interface.

Subtle motion and abstract 3D visuals are used to help explain systems and workflows while keeping the content professional, readable, and performance-focused.

---

## About This Project

This portfolio highlights hands-on experience with cloud infrastructure, automation, and platform engineering concepts. It reflects how I approach building secure, scalable, and production-ready systems using modern cloud and DevOps tooling.

Visual elements are intentionally minimal and performance-conscious. Animations and 3D components are used to represent infrastructure flow and architectural structure—not as decoration.

The website is fully responsive and optimized for modern browsers and devices.

---

## Technology Stack

### Frontend
- **React** — Component-based user interface development
- **TypeScript** — Type safety and long-term maintainability
- **Vite** — Fast development server and optimized production builds

### Styling & Motion
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth, GPU-accelerated animations

### 3D & Visuals
- **Three.js** with **React Three Fiber** — Lightweight, abstract 3D infrastructure visualizations

### State & Utilities
- **Zustand** — Simple and predictable state management
- **Custom React Hooks** — Scroll handling, responsiveness, and UI state logic

---

## Key Features

- Interactive presentation of Cloud & DevOps projects
- Abstract 3D infrastructure and data-flow visualizations
- Smooth transitions and motion-based feedback
- Clear separation of skills, architecture, and automation work
- Fully responsive layout for mobile, tablet, and desktop
- Performance-aware rendering and lazy-loaded visuals
- Cloud-based image hosting via Cloudinary for optimized delivery

---

## Setting Up Your Profile Image with Cloudinary

Instead of storing images locally in this project, we're using **Cloudinary** — a cloud service that hosts your images and delivers them super fast to anyone viewing your portfolio, anywhere in the world.

Think of Cloudinary as a smart image storage service. Once you upload your photo there, it automatically optimizes it, compresses it, and serves it from servers closest to your visitors. This means faster loading times and a better experience for people viewing your portfolio.

### Here's How to Get Your Image Online

**Step 1: Create Your Free Cloudinary Account**

Head over to [cloudinary.com](https://cloudinary.com) and sign up for a free account. It takes about 2 minutes. Once you're in, you'll see a dashboard with something called your **Cloud Name** — that's like your personal space on Cloudinary. Keep note of it; you'll need it in a moment.

**Step 2: Upload Your Profile Photo**

1. In your Cloudinary dashboard, click on **Media Library** (it's usually in the top menu)
2. Click the **Upload** button (the big blue one)
3. Choose your profile picture from your computer — pick a  photo, ideally square-shaped (like 800×800 pixels or similar)
4. Wait for it to upload

**Step 3: Get Your Image Link**

After uploading, click on your image in the Media Library. You'll see a bunch of information about it. Look for the **URL** — it will look something like this:

```
https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/your-image-name.jpg
```

Copy that entire URL. This is the web address where your image now lives on the internet.

**Step 4: Put the Link in Your Code**

Now you need to tell your portfolio where to find that image:

1. Open the file `src/pages/Profile.tsx` in your code editor
2. Near the top , you'll see a line that says `PROFILE_IMAGE_URL = '...'`
3. Replace everything inside the quotes with your Cloudinary URL
4. Do the same thing in `src/pages/Overview.tsx`

Here's what it should look like:

```typescript
const PROFILE_IMAGE_URL = 'https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/your-image-name.jpg'
```

**That's it!** Now when you run or deploy your portfolio, it will fetch your image from Cloudinary's servers instead of storing it locally.

---

## Running the Project Locally

### Prerequisites
- Node.js (v18 or newer)
- npm

### Setup

```bash
git clone muhammaduzair9889/Muhammad-Uzair-Portfolio
cd Muhammad-Uzair-Portfolio
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

Vite's hot module replacement ensures changes appear instantly during development.

### Production Build

```bash
npm run build
npm run preview
```

The optimized production build is generated in the `dist/` directory and is ready for deployment.

## Docker Support

This project includes Docker support for consistent and portable deployments.

### Build the Image

```bash
docker build -t cloud-devops-portfolio .
```

### Run the Container

```bash
docker run -p 80:80 cloud-devops-portfolio
```

The Docker setup uses a multi-stage build and serves the final application via Nginx for efficiency and performance.

## Deployment Options

This portfolio can be deployed using several approaches:

- **Vercel** — Managed frontend deployment with minimal configuration
- **Netlify** — CI-based static hosting
- **AWS S3 + CloudFront** — Static hosting with CDN (ideal for cloud-focused portfolios)
- **Docker-based deployment** — Suitable for any cloud provider
- **GitHub Pages** — Lightweight static hosting

## Customization

To adapt this portfolio for your own use:

- Update personal information and content inside section components
- Replace Cloudinary image URLs with your own in Profile.tsx and Overview.tsx
- Modify project data and skill mappings
- Adjust theme colors in `tailwind.config.js`
- Replace or extend visual components as needed

The project is intentionally modular to support easy customization and future growth.

## Performance Considerations

- 3D scenes are lightweight and paused when offscreen
- Animations rely on GPU-accelerated transforms
- Assets are optimized for fast load times
- Bundle size is kept intentionally small for performance

## License

This project is licensed under the MIT License.

---

**Built and maintained by Muhammad Uzair**  
Cloud & DevOps Engineer  
Lahore, Pakistan

**GitHub:** https://github.com/muhammaduzair9889  
**LinkedIn:** https://www.linkedin.com/in/muhammad-uzair-b806a4394/  
**Email:** muhammaduzair8695@gmail.com
