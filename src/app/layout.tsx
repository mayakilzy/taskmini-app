import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TaskMini - Simple Task Manager',
  description: 'A simple task manager with priority filtering, dark mode, and localStorage persistence',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  );
}