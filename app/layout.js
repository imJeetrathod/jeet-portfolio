export const metadata = {
  title: 'Jeet Rathod | Salesforce Developer',
  description: 'Portfolio of Jeet Rathod — Salesforce Developer',
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
