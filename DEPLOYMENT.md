# Deployment Guide

This comprehensive guide covers all deployment methods for the Muhammad Uzair Portfolio project. The project is a Next.js application that can be deployed as a static site or server-side rendered application depending on your needs.

## Table of Contents

1. [Vercel Deployment](#vercel-deployment)
2. [AWS Deployment](#aws-deployment)
3. [Docker Deployment](#docker-deployment)
4. [Kubernetes Deployment](#kubernetes-deployment)
5. [Netlify Deployment](#netlify-deployment)
6. [GitHub Pages Deployment](#github-pages-deployment)
7. [Backend Integration (if needed)](#backend-integration)

---

## Vercel Deployment

Vercel is the recommended platform for Next.js applications as it's built by the Next.js team and provides optimal performance.

### Prerequisites
- GitHub/GitLab/Bitbucket account
- Vercel account (free tier available)

### Steps

1. **Push your code to a Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your Git repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Environment Variables (if needed)**
   - Go to Project Settings → Environment Variables
   - Add any required variables:
     ```
     NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
     ```

4. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Automatic Deployments
- Every push to `main` branch triggers production deployment
- Pull requests get preview deployments automatically
- No build configuration needed - Vercel handles everything

### Advantages
- ✅ Zero configuration
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Preview deployments for PRs
- ✅ Analytics included
- ✅ Free tier available

---

## AWS Deployment

### Option 1: AWS Amplify (Easiest)

AWS Amplify provides a simple way to deploy Next.js applications.

#### Steps

1. **Push code to Git repository**

2. **Deploy via AWS Console**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect your Git repository
   - Amplify auto-detects Next.js
   - Review build settings (auto-generated):
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: .next
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```
   - Click "Save and deploy"

3. **Custom Domain**
   - Go to App Settings → Domain Management
   - Add custom domain
   - Update DNS records

### Option 2: AWS S3 + CloudFront (Static Export)

For static site generation, use S3 + CloudFront.

#### Prerequisites
- AWS CLI configured
- Terraform installed (optional, for IaC)

#### Steps

1. **Update Next.js Config for Static Export**
   ```javascript
   // next.config.js
   const nextConfig = {
     output: 'export', // Add this for static export
     images: {
       unoptimized: true, // Required for static export
     },
   }
   ```

2. **Build and Export**
   ```bash
   npm run build
   # This creates an 'out' directory
   ```

3. **Deploy with Terraform**
   ```bash
   cd terraform
   terraform init
   terraform plan
   terraform apply
   ```

4. **Upload Files to S3**
   ```bash
   aws s3 sync out/ s3://your-bucket-name/ --delete
   ```

5. **Invalidate CloudFront Cache**
   ```bash
   aws cloudfront create-invalidation \
     --distribution-id YOUR_DISTRIBUTION_ID \
     --paths "/*"
   ```

### Option 3: AWS ECS/Fargate (Containerized)

For server-side rendering with Docker.

#### Steps

1. **Build Docker Image**
   ```bash
   docker build -t muhammad-uzair-portfolio:latest .
   ```

2. **Push to ECR**
   ```bash
   aws ecr create-repository --repository-name muhammad-uzair-portfolio
   docker tag muhammad-uzair-portfolio:latest <account-id>.dkr.ecr.<region>.amazonaws.com/muhammad-uzair-portfolio:latest
   aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <account-id>.dkr.ecr.<region>.amazonaws.com
   docker push <account-id>.dkr.ecr.<region>.amazonaws.com/muhammad-uzair-portfolio:latest
   ```

3. **Deploy to ECS**
   - Create ECS cluster
   - Create task definition
   - Create service
   - Configure load balancer

---

## Docker Deployment

### Local Docker

```bash
# Build image
docker build -t muhammad-uzair-portfolio:latest .

# Run container
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

### Docker Hub / Container Registry

1. **Build and Tag**
   ```bash
   docker build -t yourusername/muhammad-uzair-portfolio:latest .
   ```

2. **Push to Registry**
   ```bash
   docker login
   docker push yourusername/muhammad-uzair-portfolio:latest
   ```

3. **Deploy Anywhere**
   - Any platform supporting Docker can pull and run the image
   - Examples: DigitalOcean, Linode, AWS ECS, Google Cloud Run

---

## Kubernetes Deployment

### Prerequisites
- Kubernetes cluster (local or cloud)
- kubectl configured
- Docker image in a registry

### Steps

1. **Update Deployment YAML**
   ```yaml
   # k8s/deployment.yaml
   # Update image to your registry
   image: your-registry/muhammad-uzair-portfolio:latest
   ```

2. **Deploy**
   ```bash
   kubectl apply -f k8s/deployment.yaml
   ```

3. **Check Status**
   ```bash
   kubectl get deployments
   kubectl get pods
   kubectl get services
   ```

4. **Access Application**
   ```bash
   kubectl port-forward service/muhammad-uzair-portfolio-service 3000:80
   ```

### Cloud Kubernetes Options
- **AWS EKS**: Managed Kubernetes on AWS
- **Google GKE**: Google Kubernetes Engine
- **Azure AKS**: Azure Kubernetes Service
- **DigitalOcean Kubernetes**: Managed K8s

### Ingress Configuration
For production, set up an Ingress controller:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: portfolio-ingress
spec:
  rules:
  - host: your-domain.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: muhammad-uzair-portfolio-service
            port:
              number: 80
```

---

## Netlify Deployment

Netlify is another excellent option for Next.js applications.

### Steps

1. **Push code to Git repository**

2. **Deploy via Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect Git repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Environment Variables**
   - Site settings → Environment variables
   - Add required variables

4. **Custom Domain**
   - Site settings → Domain management
   - Add custom domain
   - Update DNS records

### Netlify Functions (if needed)
For API routes, Netlify automatically handles Next.js API routes.

---

## GitHub Pages Deployment

For static site hosting on GitHub Pages.

### Steps

1. **Update next.config.js**
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/repository-name', // If not using custom domain
     images: {
       unoptimized: true,
     },
   }
   ```

2. **Create GitHub Actions Workflow**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '20'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

3. **Enable GitHub Pages**
   - Repository Settings → Pages
   - Source: GitHub Actions

---

## Backend Integration

This portfolio is currently a frontend-only application. If you need to add backend functionality, here are deployment options:

### Option 1: Next.js API Routes (Serverless)

Next.js API routes are automatically deployed with your Next.js app on:
- **Vercel**: API routes become serverless functions
- **Netlify**: API routes become Netlify Functions
- **AWS Amplify**: API routes become Lambda functions

No additional configuration needed!

### Option 2: Separate Backend Service

If you need a separate backend (Node.js, Python, etc.):

#### Node.js Backend Deployment

**Vercel:**
- Create separate Vercel project for backend
- Deploy as serverless functions

**AWS Lambda:**
```bash
# Use Serverless Framework
npm install -g serverless
serverless create --template aws-nodejs
serverless deploy
```

**Docker + Cloud Run / ECS:**
- Containerize backend
- Deploy to cloud container service

#### Database Integration

**Options:**
- **Vercel Postgres**: For Vercel deployments
- **AWS RDS**: Managed database on AWS
- **MongoDB Atlas**: Cloud MongoDB
- **Supabase**: Open-source Firebase alternative
- **PlanetScale**: Serverless MySQL

#### Example: Contact Form Backend

If you want to add a real contact form:

1. **Create API Route** (`app/api/contact/route.ts`):
   ```typescript
   import { NextResponse } from 'next/server'
   
   export async function POST(request: Request) {
     const data = await request.json()
     // Send email via SendGrid, Resend, etc.
     return NextResponse.json({ success: true })
   }
   ```

2. **Update Contact Component**:
   ```typescript
   const response = await fetch('/api/contact', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   })
   ```

3. **Environment Variables**:
   ```
   SENDGRID_API_KEY=your-key
   ```

### Option 3: Third-Party Services

- **Formspree**: Form submission service
- **EmailJS**: Email sending from frontend
- **Firebase**: Backend-as-a-Service
- **Supabase**: Open-source Firebase alternative

---

## Environment Variables

For all deployment methods, set environment variables:

### Common Variables
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NODE_ENV=production
```

### Platform-Specific

**Vercel:**
- Project Settings → Environment Variables

**AWS:**
- Amplify: App Settings → Environment Variables
- ECS: Task Definition → Environment Variables
- Lambda: Function Configuration → Environment Variables

**Docker:**
```bash
docker run -e NEXT_PUBLIC_SITE_URL=https://example.com ...
```

**Kubernetes:**
```yaml
env:
  - name: NEXT_PUBLIC_SITE_URL
    value: "https://example.com"
```

---

## CI/CD Pipeline

The project includes GitHub Actions CI/CD (`.github/workflows/ci.yml`).

### Automated Deployment

Add deployment step to CI workflow:

```yaml
deploy:
  needs: [build]
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v3
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Use Next.js Image component
   - Compress images
   - Use WebP format

2. **Bundle Analysis**
   ```bash
   npm install @next/bundle-analyzer
   ```

3. **Lighthouse Audit**
   - Run Lighthouse before deployment
   - Fix performance issues

### After Deployment

1. **Enable Caching**
   - Set proper cache headers
   - Use CDN caching

2. **Monitor Performance**
   - Vercel Analytics
   - Google Analytics
   - Sentry for error tracking

---

## Troubleshooting

### Build Errors

**Error: Module not found**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Error: Out of memory**
```bash
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

### Deployment Errors

**Vercel: Build timeout**
- Optimize build process
- Use Vercel Pro for longer build times

**AWS: Permission denied**
- Check IAM roles and policies
- Verify AWS credentials

**Docker: Port already in use**
```bash
docker ps
docker stop <container-id>
```

---

## Recommended Deployment Strategy

### For Personal Portfolio (This Project)

1. **Best Option: Vercel**
   - Easiest setup
   - Zero configuration
   - Free tier sufficient
   - Automatic deployments

2. **Alternative: Netlify**
   - Similar to Vercel
   - Good free tier
   - Easy Git integration

3. **For Learning: AWS Amplify**
   - Learn AWS ecosystem
   - Good for portfolio projects
   - Free tier available

### For Production Applications

1. **High Traffic: AWS ECS/Fargate + CloudFront**
   - Scalable
   - Global CDN
   - Auto-scaling

2. **Serverless: Vercel Pro / AWS Lambda**
   - Pay per use
   - Auto-scaling
   - No server management

3. **Enterprise: Kubernetes**
   - Full control
   - Multi-cloud
   - Complex but flexible

---

## Security Considerations

1. **Environment Variables**
   - Never commit secrets
   - Use platform secret management
   - Rotate keys regularly

2. **HTTPS**
   - All platforms provide HTTPS
   - Enable HSTS headers

3. **Dependencies**
   ```bash
   npm audit
   npm audit fix
   ```

4. **Content Security Policy**
   - Add CSP headers
   - Restrict resource loading

---

## Monitoring & Analytics

### Recommended Tools

1. **Vercel Analytics** (if using Vercel)
2. **Google Analytics**
3. **Sentry** (error tracking)
4. **Uptime Robot** (uptime monitoring)

---

## Cost Estimation

### Free Tiers

- **Vercel**: Free for personal projects
- **Netlify**: Free tier available
- **AWS Amplify**: Free tier (with limits)
- **GitHub Pages**: Free for public repos

### Paid Options

- **Vercel Pro**: $20/month
- **AWS**: Pay-as-you-go
- **Kubernetes**: Varies by provider

---

## Conclusion

This portfolio can be deployed to any platform that supports Node.js or static sites. Choose based on:

- **Ease of use**: Vercel or Netlify
- **Learning**: AWS or Kubernetes
- **Cost**: Free tiers available on most platforms
- **Requirements**: Static vs. SSR vs. Full-stack

For this portfolio project, **Vercel is recommended** for the easiest deployment experience.

---

## 📱 Accessing Development Server on Mobile

To test your portfolio on a mobile device while developing:

### Step 1: Find Your Computer's IP Address

**Windows:**
```bash
ipconfig
```
Look for "IPv4 Address" under your active network adapter (e.g., 192.168.1.100)

**Mac/Linux:**
```bash
ifconfig
# or
ip addr
```

### Step 2: Start Development Server

```bash
npm run dev
```

The server will start on `http://localhost:3000`

### Step 3: Access from Mobile

1. **Ensure both devices are on the same Wi-Fi network**

2. **Open mobile browser and navigate to:**
   ```
   http://YOUR_IP_ADDRESS:3000
   ```
   Example: `http://192.168.1.100:3000`

3. **If connection fails:**
   - **Windows Firewall**: Allow port 3000 through firewall
     - Go to Windows Defender Firewall → Advanced Settings
     - Create Inbound Rule for port 3000
   - **Check network**: Ensure both devices are on same network
   - **Try different port**: If 3000 is blocked, Next.js will use 3001

### Alternative: Use ngrok (for external access)

```bash
# Install ngrok
npm install -g ngrok

# Start your dev server
npm run dev

# In another terminal, expose localhost
ngrok http 3000
```

This will give you a public URL that works from anywhere.

## Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [AWS Amplify Documentation](https://docs.amplify.aws)
- [Docker Documentation](https://docs.docker.com)
- [Kubernetes Documentation](https://kubernetes.io/docs)

