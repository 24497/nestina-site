import './globals.css';
import { CartProvider } from './context/CartContext';

export const metadata = {
  title: 'Nestina',
  description: 'مراتب وخدديات بجودة عالية',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
