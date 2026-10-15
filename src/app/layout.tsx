import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bank of Baroda ESG Champion 2026 | Kids & Teens Art & Reel Competition',
  description: 'Official competition portal by Bank of Baroda ESG & Climate Risk Cell for children of bank employees. Explore art, watch eco reels, learn sustainability, play green games, and vote!',
  keywords: [
    'Bank of Baroda',
    'ESG Champion',
    'Climate Risk Cell',
    'Kids Art Competition',
    'Eco Reels',
    'Green Banking',
    'Sustainability Games'
  ],
  openGraph: {
    title: 'Bank of Baroda ESG Champion 2026 — Kids & Teens Green Portal',
    description: 'Vote for creative artworks & inspiring eco reels by the children of Bank of Baroda employees!',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Bank of Baroda ESG Champion'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-['Plus_Jakarta_Sans',sans-serif] bg-slate-50 text-slate-900 antialiased selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
