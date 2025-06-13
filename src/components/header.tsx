"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png" // or "/fernandez-performance-logo.png"
              alt="Fernandez Performance Logo"
              width={36}
              height={36}
              className="rounded-sm"
            />
            <span className="text-xl font-bold text-gray-900">
              Fernandez Performance
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/#services"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#testimonials"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Results
            </Link>
            <Link
              href="/apply"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Apply
            </Link>
          </nav>

          <div className="hidden md:flex">
            <Button asChild>
              <Link href="/apply">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/#services"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </Link>
              <Link
                href="/#testimonials"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Results
              </Link>
              <Link
                href="/apply"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Apply
              </Link>
              <Button asChild className="w-full">
                <Link href="/apply">Get Started</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
