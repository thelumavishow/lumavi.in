"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full pointer-events-none transition-all duration-500 ease-in-out ${
        scrolled ? "pt-3 sm:pt-4 px-3.5 sm:px-6 md:px-8" : "pt-0 px-0"
      }`}
    >
      <div
        className={`w-full mx-auto flex items-center justify-between pointer-events-auto transition-all duration-500 ease-in-out ${
          scrolled
            ? "max-w-4xl rounded-full px-5 sm:px-8 py-3 sm:py-3.5 md:py-3.5 bg-[#263016]/75 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.3)]"
            : "max-w-[100%] rounded-none pl-8 sm:pl-16 md:pl-24 pr-6 sm:pr-12 md:pr-16 py-5 sm:py-6 md:py-6 bg-transparent shadow-none"
        }`}
      >
        {/* Lumavi Logo Asset */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-opacity hover:opacity-85"
        >
          <Image
            src="/logo-cream.png"
            alt="Lumavi Logo"
            width={280}
            height={90}
            priority
            className={`w-auto object-contain logo-img transition-all duration-500 ease-in-out ${
              scrolled
                ? "h-8 sm:h-10 md:h-12"
                : "h-12 sm:h-14 md:h-16 lg:h-20"
            }`}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium tracking-wide text-[#F9F7F3] transition-colors hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/collection"
            className="text-sm font-medium tracking-wide text-[#DFDACF] transition-colors hover:text-[#F9F7F3]"
          >
            Collection
          </Link>
          <Link
            href="/#our-story"
            className="text-sm font-medium tracking-wide text-[#DFDACF] transition-colors hover:text-[#F9F7F3]"
          >
            Our Story
          </Link>
        </nav>

        {/* Mobile Menu Wrapper (Button + Dropdown Popup) */}
        <div className="relative md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex items-center justify-center rounded-full text-[#F9F7F3] transition-all duration-500 ease-in-out hover:bg-white/10 ${
              scrolled ? "h-8 w-8" : "h-10 w-10"
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          {/* Compact Dropdown Popup Box */}
          {mobileMenuOpen && (
            <div className="absolute right-0 top-[calc(100%+8px)] z-50 w-48 rounded-2xl bg-[#263016]/95 backdrop-blur-2xl p-2 shadow-[0_12px_36px_rgba(0,0,0,0.45)] animate-in fade-in zoom-in-95 duration-150">
              <nav className="flex flex-col space-y-1 text-left">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-[#F9F7F3] hover:bg-white/10 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/collection"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-[#DFDACF] hover:text-[#F9F7F3] hover:bg-white/10 transition-colors"
                >
                  Collection
                </Link>
                <Link
                  href="/#our-story"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-[#DFDACF] hover:text-[#F9F7F3] hover:bg-white/10 transition-colors"
                >
                  Our Story
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
