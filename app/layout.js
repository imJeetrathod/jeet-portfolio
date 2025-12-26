import './globals.css';

export const metadata = {
  title: {
    default: 'Jeet Rathod | Salesforce Developer (LWC, Apex, AI Automation)',
    template: '%s | Jeet Rathod',
  },
  description:
    'Salesforce Developer specializing in LWC, Apex, integrations, and AI-driven automation. Explore projects, experience, and certifications.',
  keywords: [
    'Salesforce Developer',
    'Salesforce LWC Developer',
    'Salesforce Apex Developer',
    'Salesforce Portfolio',
    'Salesforce AI Automation',
    'Jeet Rathod',
  ],
  authors: [{ name: 'Jeet Rathod' }],
  creator: 'Jeet Rathod',

  metadataBase: new URL('https://jeetrathod.vercel.app'),
  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Jeet Rathod | Salesforce Developer',
    description:
      'Salesforce Developer specializing in LWC, Apex, integrations, and AI-driven automation.',
    url: 'https://jeetrathod.vercel.app',
    siteName: 'Jeet Rathod Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Jeet Rathod - Salesforce Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Jeet Rathod | Salesforce Developer',
    description:
      'Salesforce Developer specializing in LWC, Apex, and AI-driven automation.',
    images: ['/profile.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  icons: {
    icon: '/profile.jpg',
    shortcut: '/profile.jpg',
    apple: '/profile.jpg',
  },
  // ✅ Google Search Console verification
  verification: {
    google: 'PhvfcsJ1nn0gKhe7hCEZ_9metsYUtNLDp9YWER5izdU',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* ✅ JSON-LD Person Schema (SEO, no UI impact) */}
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Jeet Rathod',
      jobTitle: 'Salesforce Developer',
      url: 'https://jeetrathod.vercel.app',
      image: 'https://jeetrathod.vercel.app/profile.jpg',
      sameAs: [
        'https://www.linkedin.com/in/hi-jeet-rathod',
        'https://github.com/imJeetrathod',
        'https://www.salesforce.com/trailblazer/imjeetrathod',
      ],
    }),
  }}
/>


        {children}
      </body>
    </html>
  );
}
