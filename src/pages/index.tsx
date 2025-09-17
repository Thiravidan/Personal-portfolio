import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import SplitText from '../components/SplitText';

export default function Home() {
  const handleAnimationComplete = () => {
    console.log('Name animation completed!');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content - Left Side */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <div className="block lg:hidden">
                  {/* Mobile Version - Stacked */}
                  <SplitText
                    text="Hi, I&apos;m"
                    tag="h1"
                    className="text-3xl sm:text-4xl font-bold text-white block mb-2"
                    delay={60}
                    duration={0.5}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 30, rotationX: -45 }}
                    to={{ opacity: 1, y: 0, rotationX: 0 }}
                    threshold={0.1}
                    rootMargin="-30px"
                    textAlign="center"
                  />
                  <SplitText
                    text="THIRAVIDAN"
                    tag="h1"
                    className="text-4xl sm:text-5xl font-bold gradient-name block"
                    delay={80}
                    duration={0.7}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40, rotationX: -60, scale: 0.9 }}
                    to={{ opacity: 1, y: 0, rotationX: 0, scale: 1 }}
                    threshold={0.1}
                    rootMargin="-30px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                  />
                </div>
                
                <div className="hidden lg:block">
                  {/* Desktop Version - Inline */}
                  <SplitText
                    text="Hi, I&apos;m "
                    tag="h1"
                    className="text-6xl lg:text-7xl font-bold text-white inline"
                    delay={80}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 50, rotationX: -90 }}
                    to={{ opacity: 1, y: 0, rotationX: 0 }}
                    threshold={0.1}
                    rootMargin="-50px"
                    textAlign="left"
                  />
                  <SplitText
                    text="THIRAVIDAN"
                    tag="h1"
                    className="text-6xl lg:text-7xl font-bold gradient-name inline"
                    delay={120}
                    duration={0.8}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 60, rotationX: -90, scale: 0.8 }}
                    to={{ opacity: 1, y: 0, rotationX: 0, scale: 1 }}
                    threshold={0.1}
                    rootMargin="-50px"
                    textAlign="left"
                    onLetterAnimationComplete={handleAnimationComplete}
                  />
                </div>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8">
              Aspiring Data Analyst and Web Developer passionate about building impactful digital solutions
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:from-teal-700 hover:to-emerald-700 transition-all transform hover:scale-105"
              >
                Get In Touch
                </Link>
                <Link
                  href="/projects" 
                className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                View My Work
                </Link>
              </div>
            </div>

            {/* Profile Image - Right Side */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image 
                  src="/main_photo.jpg" 
                  alt="Thiravidan PM" 
                  width={384}
                  height={384}
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover object-top border-4 border-teal-400/30 shadow-2xl hover:border-teal-400/50 transition-all duration-300"
                  priority
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-500/20 rounded-full blur-xl"></div>
              </div>
        </div>
          </div>
          
          {/* Contact Info */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-gray-300 mb-8">
            <a href="mailto:thiravidantamizhan@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              thiravidantamizhan@gmail.com
            </a>
            <a href="tel:+919123563645" className="flex items-center gap-2 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              +91 9123563645
            </a>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              Sivaganga, Tamil Nadu, India
            </span>
          </div>

          {/* Social Links */}
            <div className="flex justify-center gap-6">
            <a href="https://github.com/Thiravidan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/thiravidan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://leetcode.com/u/Thiravidan_2004/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.518 2.524 8.117.96 2.04-1.226 3.333-3.294 3.333-5.54v-1.8c0-.414.336-.75.75-.75s.75.336.75.75v1.8c0 3.11-1.7 5.748-4.2 7.15-3.129 1.754-7.285 1.284-9.85-1.212l-4.276-4.193A7.436 7.436 0 0 1 0 12.185 7.36 7.36 0 0 1 1.047 8.7c.2-.4.428-.787.683-1.158L9.821 1.15a2.618 2.618 0 0 1 3.44-.581c.448.26.804.615 1.062 1.062a2.598 2.598 0 0 1-.581 3.44L8.216 10.59a1.221 1.221 0 0 0-.08 1.717 1.25 1.25 0 0 0 1.717.081l5.526-5.519a.875.875 0 1 1 1.238 1.238L11.09 13.624a2.625 2.625 0 0 1-3.717-.081 2.72 2.72 0 0 1 .081-3.717L12.98 4.307a1.124 1.124 0 0 0 .25-1.25 1.13 1.13 0 0 0-.456-.456 1.137 1.137 0 0 0-1.291.25L5.957 8.368a5.86 5.86 0 0 0-.513.922 5.533 5.533 0 0 0-.871 3.895c.054.428.142.853.264 1.267a5.657 5.657 0 0 0 1.213 2.5l4.276 4.193a5.918 5.918 0 0 0 7.434.725c1.88-1.053 3.04-2.985 3.04-5.085v-1.8a.25.25 0 0 0-.25-.25.25.25 0 0 0-.25.25v1.8c0 1.8-1.04 3.455-2.67 4.26a4.918 4.918 0 0 1-6.177-.6L7.157 15.3a4.657 4.657 0 0 1-1-2.058 4.533 4.533 0 0 1-.218-1.043 4.533 4.533 0 0 1 .717-3.204c.13-.2.274-.394.432-.581L11.614 2.9a.137.137 0 0 1 .156-.03c.054.031.099.077.13.131a.124.124 0 0 1-.03.156L6.344 8.675a1.72 1.72 0 0 0-.081 2.717 1.625 1.625 0 0 0 2.717-.081L14.507 5.794a1.875 1.875 0 0 0-2.676-2.676L6.305 8.635c-.2.2-.4.4-.6.6a6.533 6.533 0 0 0-.818 3.695c.054.528.171 1.05.35 1.548a6.657 6.657 0 0 0 1.43 2.858l4.276 4.193a6.918 6.918 0 0 0 8.677.86c2.28-1.28 3.69-3.64 3.69-6.26v-1.8c0-.964-.786-1.75-1.75-1.75s-1.75.786-1.75 1.75v1.8c0 1.32-.75 2.52-1.95 3.11a3.918 3.918 0 0 1-4.927-.48L3.157 13.42a3.657 3.657 0 0 1-.787-1.618 3.533 3.533 0 0 1-.171-.818 3.533 3.533 0 0 1 .562-2.504c.1-.156.212-.307.337-.452L8.624 2.51a1.137 1.137 0 0 1 1.291-.25c.188.109.344.265.456.456a1.124 1.124 0 0 1-.25 1.25L4.595 9.483a.72.72 0 0 0-.081 1.017.625.625 0 0 0 1.017-.081L11.057 4.9a.375.375 0 1 1 .531.531L6.062 10.95a1.125 1.125 0 0 1-1.592-.081 1.22 1.22 0 0 1 .081-1.717L10.077 3.633a2.598 2.598 0 0 1 .581-3.44A2.618 2.618 0 0 1 13.483 0z"/>
              </svg>
            </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
