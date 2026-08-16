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
        {/* Subtle ambient glow without overflow clipping */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[700px] h-[450px] max-w-[100vw] opacity-70">
          <div
            className="w-full h-full rounded-full blur-[90px] pointer-events-none select-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(107, 128, 76, 0.35) 0%, rgba(107, 128, 76, 0.16) 35%, rgba(107, 128, 76, 0.04) 60%, transparent 80%)",
            }}
          />
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
