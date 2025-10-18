'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navigation = [
  { label: "Why We Exist", href: "/" },
  { label: "Who We Are", href: "/about" },
  { label: "What We Do", href: "/programs" },
  // { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logos/sosc_logo_blue.svg"
                alt="SOSC Logo"
                width={40}
                height={40}
                className="w-auto h-12"
              />
              {/* <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-xl text-gray-900">SOSC</div>
                <div className="text-xs text-gray-600 -mt-1">School of Social Change</div>
              </div> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-brand-primary-100 text-brand-primary'
                      : 'text-gray-700 hover:text-brand-primary hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/get-involved"
              className="bg-brand-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brand-primary-700 transition-colors"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-50 p-2 rounded-md text-gray-700 hover:text-brand-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-brand-primary-100 text-brand-primary'
                      : 'text-gray-700 hover:text-brand-primary hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/get-involved"
                className="block w-full text-center bg-brand-primary text-white px-3 py-2 rounded-md text-base font-medium hover:bg-brand-primary-700 transition-colors mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}