"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { withBasePath } from "../utils/basePath";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = ["Agenda", "Speakers", "Venue", "Sponsors"];

  return (
    <nav className="sticky top-0 z-50 py-2 bg-white backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="shrink-0 flex items-center">
            <div className="flex items-center">
              <Image
                src={withBasePath("/gdg_logo.png")}
                alt="GDG Logo"
                width={200}
                height={40}
                className="mr-2"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-900 font-semibold hover:text-[#4285F4] px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:bg-blue-50"
                >
                  {item}
                </Link>
              ))}
              <a 
                href="https://luma.com/yv95xdow"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer bg-[#4285F4] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors inline-block"
              >
                Registrarse
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="cursor-pointer p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-900 font-semibold hover:text-[#4285F4] block px-3 py-2 rounded-lg text-base transition-all duration-200 hover:bg-blue-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <a 
                href="https://luma.com/yv95xdow"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer bg-[#4285F4] text-white px-4 py-2 rounded-full text-base font-medium hover:bg-blue-600 transition-colors w-full text-center inline-block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Registrarse
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
