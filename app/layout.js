import './globals.css';

export const metadata = {
  title: 'Jeet Rathod | Salesforce Developer',
  description: 'Portfolio of Jeet Rathod — Salesforce Developer',
  icons: {
    icon: '/profile.jpg',
    shortcut: '/profile.jpg',
    apple: '/profile.jpg',
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
