import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Collection — Lumavi",
  description: "Lumavi Collection is coming soon.",
};

export default function CollectionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-transparent">
      <Header />

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-28 md:py-36 text-center">
        {/* Subtle ambient glow */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
          <div className="h-[320px] w-[320px] md:h-[450px] md:w-[450px] rounded-full bg-[#6B804C]/20 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-2xl space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#F9F7F3] uppercase">
            COMING SOON
          </h1>
          <p className="text-lg sm:text-xl font-normal leading-relaxed text-[#DFDACF] tracking-wide">
            We are working on it.
          </p>

          {/* Back to Home Button */}
          <div className="pt-4">
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center rounded-full bg-[#F9F7F3] px-9 py-4 text-sm font-medium tracking-wide text-[#263016] shadow-[0_12px_32px_-6px_rgba(0,0,0,0.5),0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-white hover:shadow-[0_18px_40px_-6px_rgba(0,0,0,0.6)] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#F9F7F3] focus:ring-offset-2 focus:ring-offset-[#263016]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
