"use client";

import { useState, useRef, useEffect } from "react";
import { Plus, Mail } from "lucide-react";

export function FloatingActionMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Secondary Action Buttons (Slide up & Fade in) */}
      <div
        className={`flex flex-col items-end gap-3 mb-3 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        {/* Email Us Button */}
        <a
          href="mailto:hello@lumavi.com"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2.5 rounded-full bg-[#F9F7F3]/95 px-4 py-2.5 text-xs sm:text-sm font-medium tracking-wide text-[#263016] shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-xl ring-1 ring-white/40 transition-all duration-200 hover:bg-white hover:scale-105 active:scale-95"
          aria-label="Email Us"
        >
          <Mail className="h-4 w-4 text-[#263016]" />
          <span>Email Us</span>
        </a>

        {/* Instagram Button */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2.5 rounded-full bg-[#F9F7F3]/95 px-4 py-2.5 text-xs sm:text-sm font-medium tracking-wide text-[#263016] shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-xl ring-1 ring-white/40 transition-all duration-200 hover:bg-white hover:scale-105 active:scale-95"
          aria-label="Visit our Instagram"
        >
          <svg
            className="h-4 w-4 fill-none stroke-[#263016] stroke-2 stroke-linecap-round stroke-linejoin-round"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <span>Instagram</span>
        </a>
      </div>

      {/* Main Circular Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#F9F7F3] text-[#263016] shadow-[0_10px_30px_rgba(0,0,0,0.4)] ring-1 ring-white/40 transition-all duration-300 ease-in-out hover:bg-white hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#F9F7F3] focus:ring-offset-2 focus:ring-offset-[#263016]"
        aria-label={isOpen ? "Close action menu" : "Open action menu"}
        aria-expanded={isOpen}
      >
        <Plus
          className={`h-5 w-5 sm:h-6 sm:w-6 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
}
