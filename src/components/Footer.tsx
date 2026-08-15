import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#F9F7F3]/15 bg-transparent py-12 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 text-center md:flex-row md:text-left md:px-12">
        {/* Left Brand Area */}
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Link href="/" className="transition-opacity hover:opacity-85">
            <Image
              src="/logo-cream.png"
              alt="Lumavi Logo"
              width={220}
              height={70}
              className="h-10 md:h-12 w-auto object-contain logo-img"
            />
          </Link>
          <p className="text-sm font-normal text-[#DFDACF] tracking-wide">
            Where Little Imaginations Shine.
          </p>
        </div>

        {/* Center / Right Links & Copyright */}
        <div className="flex flex-col items-center gap-6 md:items-end">
          <nav className="flex items-center gap-6 text-sm font-medium text-[#DFDACF]">
            <Link href="/" className="transition-colors hover:text-[#F9F7F3]">
              Home
            </Link>
            <span className="text-[#DFDACF]/40">•</span>
            <Link href="/collection" className="transition-colors hover:text-[#F9F7F3]">
              Collection
            </Link>
            <span className="text-[#DFDACF]/40">•</span>
            <Link href="/#our-story" className="transition-colors hover:text-[#F9F7F3]">
              Our Story
            </Link>
          </nav>
          <p className="text-xs text-[#C9C3B5] tracking-wide">
            © 2026 Lumavi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
