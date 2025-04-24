import './globals.css';

export const metadata = {
  title: 'Nestina',
  description: 'أفضل مراتب ومفروشات للراحة المثالية',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
