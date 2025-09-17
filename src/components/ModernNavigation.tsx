"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { User, Briefcase, Code, Award, Mail, Home, Menu, X } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const portfolioSections: { title: string; href: string; description: string; icon: React.ElementType }[] = [
  {
    title: "About Me",
    href: "/about",
    description: "Learn about my background, education, and extra-curricular activities.",
    icon: User,
  },
  {
    title: "Experience",
    href: "/experience", 
    description: "Professional experience and internships in software development.",
    icon: Briefcase,
  },
  {
    title: "Projects",
    href: "/projects",
    description: "Showcase of my data science and web development projects.",
    icon: Code,
  },
  {
    title: "Skills",
    href: "/skills",
    description: "Technical skills, tools, and professional certifications.",
    icon: Award,
  },
]

export function ModernNavigation() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  const isActive = (path: string) => router.pathname === path;
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-white hover:text-teal-300 transition-colors">
            THIRAVIDAN PM
          </Link>
          
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  asChild 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:bg-white/10 hover:text-teal-300 data-[active]:bg-white/10 data-[active]:text-teal-300",
                    isActive('/') && "bg-white/10 text-teal-300"
                  )}
                >
                  <Link href="/" className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-teal-300 data-[state=open]:bg-white/10 data-[state=open]:text-teal-300">
                  Portfolio
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[350px] p-4 sm:w-[450px] sm:p-6 md:w-[550px] lg:w-[650px] bg-black/95 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Portfolio Sections</h3>
                      <p className="text-sm text-gray-400">Explore my professional journey and achievements</p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      {portfolioSections.map((section) => (
                        <ListItem
                          key={section.title}
                          title={section.title}
                          href={section.href}
                          icon={section.icon}
                          isActive={isActive(section.href)}
                        >
                          {section.description}
                        </ListItem>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  asChild 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:bg-white/10 hover:text-teal-300 data-[active]:bg-white/10 data-[active]:text-teal-300",
                    isActive('/contact') && "bg-white/10 text-teal-300"
                  )}
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white hover:text-teal-300 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 mobile-menu">
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                onClick={closeMobileMenu}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive('/') 
                    ? "bg-white/10 text-teal-300" 
                    : "text-white hover:bg-white/10 hover:text-teal-300"
                )}
              >
                <Home className="w-5 h-5" />
                Home
              </Link>
              
              {portfolioSections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    isActive(section.href) 
                      ? "bg-white/10 text-teal-300" 
                      : "text-white hover:bg-white/10 hover:text-teal-300"
                  )}
                >
                  <section.icon className="w-5 h-5" />
                  {section.title}
                </Link>
              ))}
              
              <Link 
                href="/contact" 
                onClick={closeMobileMenu}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive('/contact') 
                    ? "bg-white/10 text-teal-300" 
                    : "text-white hover:bg-white/10 hover:text-teal-300"
                )}
              >
                <Mail className="w-5 h-5" />
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function ListItem({
  title,
  children,
  href,
  icon: Icon,
  isActive,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { 
  href: string; 
  icon: React.ElementType;
  isActive?: boolean;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link 
          href={href}
          className={cn(
            "group block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-white/10 hover:text-teal-300 focus:bg-white/10 focus:text-teal-300 border border-transparent hover:border-white/20",
            isActive && "bg-white/10 text-teal-300 border-white/20"
          )}
        >
          <div className="flex items-center gap-3 text-base font-semibold leading-none text-white group-hover:text-teal-300">
            <div className={cn(
              "p-2 rounded-md transition-colors",
              isActive ? "bg-teal-600/30 text-teal-300" : "bg-white/10 text-white group-hover:bg-teal-600/30 group-hover:text-teal-300"
            )}>
              <Icon className="w-4 h-4" />
            </div>
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-relaxed text-gray-300 group-hover:text-gray-200">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
