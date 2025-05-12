import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shubha Notary Services',
  description: 'Reliable and professional notary services.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}