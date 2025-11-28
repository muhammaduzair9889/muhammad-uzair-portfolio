import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://muhammaduzair.dev'),
  title: {
    default: 'Muhammad Uzair | DevOps Engineer | Cloud & Automation',
    template: '%s | Muhammad Uzair',
  },
  description: 'Professional DevOps Engineer specializing in Cloud Infrastructure, CI/CD, Kubernetes, and Automation. Building scalable solutions with Docker, Kubernetes, AWS, Terraform, and modern DevOps practices.',
  keywords: ['DevOps', 'Cloud Engineer', 'Kubernetes', 'AWS', 'CI/CD', 'Automation', 'Docker', 'Terraform', 'GitHub Actions', 'Infrastructure as Code'],
  authors: [{ name: 'Muhammad Uzair' }],
  creator: 'Muhammad Uzair',
  publisher: 'Muhammad Uzair',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muhammaduzair.dev',
    title: 'Muhammad Uzair | DevOps Engineer',
    description: 'Professional DevOps Engineer specializing in Cloud Infrastructure, CI/CD, Kubernetes, and Automation',
    siteName: 'Muhammad Uzair Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Uzair | DevOps Engineer',
    description: 'Professional DevOps Engineer specializing in Cloud Infrastructure, CI/CD, Kubernetes, and Automation',
    creator: '@muhammaduzair',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning style={{ overflowX: 'hidden', width: '100%' }}>
      <body className={inter.className} style={{ overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
