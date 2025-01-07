"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white bg-opacity-80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 md:px-6 md:py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-800">
            <img src="/tmolecule.avif" alt="TMolecule" className="h-8 md:h-10 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-purple-600 text-base">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-purple-600 text-base">
              Products
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-purple-600 text-base">
              Blog
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-purple-600 text-base">
              Home
            </Link>
            <Link href="/products" className="block text-gray-700 hover:text-purple-600 text-base">
              Products
            </Link>
            <Link href="/blog" className="block text-gray-700 hover:text-purple-600 text-base">
              Blog
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}