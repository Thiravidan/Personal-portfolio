import { ReactNode } from 'react';
import { ModernNavigation } from './ModernNavigation';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`${geistSans.className} ${geistMono.className} min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900`}>
      <ModernNavigation />
      <main className="pt-20">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-black/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Thiravidan PM Portfolio. Contact: thiravidantamizhan@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
