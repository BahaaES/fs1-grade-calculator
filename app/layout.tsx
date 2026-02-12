import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Faculty Grade Calculator',
  description: 'Official Grade Simulator for the Faculty of Sciences',
};

// --- FOOTER COMPONENT (Keeps the main layout clean) ---
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-10 text-center mt-auto">
      <div className="max-w-lg mx-auto px-4">
        
        {/* Social Links Container */}
        <div className="flex justify-center gap-4 mb-6">
          
          {/* WhatsApp Button */}
          <a 
            href="https://whatsapp.com/channel/0029VbCFpB51SWt1b76HMB3c" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-green-600 font-bold bg-green-50 px-4 py-2 rounded-full hover:bg-green-100 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            Channel
          </a>

          {/* Instagram Button */}
          <a 
            href="https://www.instagram.com/fs1_hadath/" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-pink-600 font-bold bg-pink-50 px-4 py-2 rounded-full hover:bg-pink-100 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            Instagram
          </a>
        </div>

        {/* Credits */}
        <div className="space-y-1">
          <p className="text-sm text-slate-500">
            Made with ❤️ by <a href="https://instagram.com/bahaa.es" target="_blank" className="text-blue-700 font-bold hover:underline">@bahaa.es</a>
          </p>
          <p className="text-xs text-slate-400">
            &copy; {currentYear} Faculty of Sciences - Branch 1.
          </p>
        </div>

      </div>
    </footer>
  );
};

// --- MAIN LAYOUT ---
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-[#f8fafc]">
        
        {/* Main Page Content */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
        
        {/* Vercel Web Analytics */}
        <Analytics />
        
      </body>
    </html>
  );
}