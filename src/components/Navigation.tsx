import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-white hover:text-purple-300 transition-colors">
            THIRAVIDAN PM
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`transition-colors ${
                isActive('/') 
                  ? 'text-purple-300' 
                  : 'text-white hover:text-purple-300'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors ${
                isActive('/about') 
                  ? 'text-purple-300' 
                  : 'text-white hover:text-purple-300'
              }`}
            >
              About
            </Link>
            <Link 
              href="/experience" 
              className={`transition-colors ${
                isActive('/experience') 
                  ? 'text-purple-300' 
                  : 'text-white hover:text-purple-300'
              }`}
            >
              Experience
            </Link>
            <Link 
              href="/projects" 
              className={`transition-colors ${
                isActive('/projects') 
                  ? 'text-purple-300' 
                  : 'text-white hover:text-purple-300'
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/skills" 
              className={`transition-colors ${
                isActive('/skills') 
                  ? 'text-purple-300' 
                  : 'text-white hover:text-purple-300'
              }`}
            >
              Skills
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors ${
                isActive('/contact') 
                  ? 'text-purple-300' 
                  : 'text-white hover:text-purple-300'
              }`}
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-purple-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
