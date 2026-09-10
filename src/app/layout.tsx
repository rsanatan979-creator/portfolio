import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { profileData } from '@/data/profile';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sanatan Roy | AI/ML & Software Developer Portfolio',
  description:
    'Portfolio of Sanatan Roy, a CSE AI & ML student at GIET University building AI, software and full-stack projects.',
  keywords: [
    'Sanatan Roy',
    'AI ML Student',
    'Software Developer',
    'Python Developer',
    'GIET University',
    'AI Portfolio',
    'Odisha Developer',
    'Full Stack Developer',
  ],
  authors: [{ name: 'Sanatan Roy' }],
  creator: 'Sanatan Roy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sanatanroy.vercel.app',
    title: 'Sanatan Roy | AI/ML & Software Developer Portfolio',
    description:
      'CSE (AI & ML) student at GIET University building practical software and AI-powered solutions.',
    siteName: 'Sanatan Roy Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanatan Roy | AI/ML & Software Developer Portfolio',
    description:
      'CSE (AI & ML) student at GIET University building practical software and AI-powered solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profileData.name,
    jobTitle: profileData.role,
    alumniOf: profileData.university,
    homeLocation: profileData.location,
    url: 'https://sanatanroy.vercel.app',
    sameAs: [profileData.githubUrl],
  };

  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background-light text-primaryText-light dark:bg-background-dark dark:text-primaryText-dark transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
