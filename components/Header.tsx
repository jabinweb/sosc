'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { label: "Why We Exist", href: "/" },
  { label: "Who We Are", href: "/about" },
  { label: "What We Do", href: "/programs" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-lg' : 'shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src="/logos/sosc_logo_blue.svg"
                alt="SOSC Logo"
                width={40}
                height={40}
                className="w-auto h-8 sm:h-10 md:h-12 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden sm:block">
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-center px-4">
            <div className="flex items-center space-x-1 xl:space-x-2">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-2 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      pathname === item.href
                        ? 'text-brand-primary'
                        : 'text-gray-700 hover:text-brand-primary'
                    }`}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary rounded-full"
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/get-involved"
              className="bg-brand-primary text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg text-xs xl:text-sm font-semibold hover:bg-brand-primary-700 hover:shadow-lg transition-all duration-300 whitespace-nowrap"
            >
              Get Involved
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 rounded-lg text-gray-700 hover:text-brand-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                className="w-6 h-5 flex flex-col justify-between"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 }
                  }}
                  className="w-full h-0.5 bg-current rounded-full transition-colors"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="w-full h-0.5 bg-current rounded-full transition-colors"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 }
                  }}
                  className="w-full h-0.5 bg-current rounded-full transition-colors"
                />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation - Side Panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Side Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl lg:hidden z-50 overflow-y-auto"
              >
                {/* Panel Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/logos/sosc_logo_blue.svg"
                      alt="SOSC Logo"
                      width={32}
                      height={32}
                      className="w-auto h-8"
                    />
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="px-4 py-6 space-y-1">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                    >
                      <Link
                        href={item.href}
                        className={`group block px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 ${
                          pathname === item.href
                            ? 'bg-gradient-to-r from-brand-primary to-brand-primary-700 text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            {/* Icon indicators */}
                            <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                              pathname === item.href 
                                ? 'bg-white' 
                                : 'bg-brand-primary/30 group-hover:bg-brand-primary'
                            }`} />
                            <span>{item.label}</span>
                          </div>
                          {pathname === item.href ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, delay: navigation.length * 0.05 }}
                    className="pt-3"
                  >
                    <Link
                      href="/get-involved"
                      className="block w-full text-center bg-gradient-to-r from-brand-primary to-brand-primary-700 text-white px-4 py-3 rounded-lg text-sm sm:text-base font-semibold hover:shadow-lg transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Involved
                    </Link>
                  </motion.div>

                  {/* Quick Contact Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="pt-4 mt-4 border-t border-gray-100"
                  >
                    <div className="text-xs text-gray-500 space-y-2">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span>dexter@schoolofsocialchange.org</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span>+91 8010032343</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}