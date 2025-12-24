import './globals.css';

export const metadata = {
  title: 'Jeet Rathod | Salesforce Developer',
  description: 'Portfolio of Jeet Rathod — Salesforce Developer',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
