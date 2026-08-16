import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-start px-6 pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-12 sm:pb-16 md:pb-20 lg:pb-24 text-center bg-transparent">
      {/* Decorative ambient subtle background glow without overflow clipping */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[800px] h-[500px] max-w-[100vw] opacity-70">
        <div
          className="w-full h-full rounded-full blur-[90px] pointer-events-none select-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(107, 128, 76, 0.4) 0%, rgba(107, 128, 76, 0.18) 35%, rgba(107, 128, 76, 0.05) 60%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl space-y-8">
        {/* COMING SOON - Clearly visible eyebrow badge */}
        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.2)]">
          <span className="text-xs font-semibold tracking-widest text-[#F9F7F3] uppercase">
            COMING SOON
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl font-serif font-normal tracking-tight text-[#F9F7F3] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15]">
          Where Little Imaginations Shine.
        </h1>

        {/* Description Subtext */}
        <p className="mx-auto max-w-xl text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[#DFDACF]">
          A world of imagination, creativity, and wonder is on its way.
        </p>

        {/* Call to Action Button */}
        <div className="pt-4">
          <Link
            href="#explore"
            className="group relative inline-flex items-center justify-center rounded-full bg-[#F9F7F3] px-9 py-4 text-sm font-medium tracking-wide text-[#263016] shadow-[0_12px_32px_-6px_rgba(0,0,0,0.5),0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-white hover:shadow-[0_18px_40px_-6px_rgba(0,0,0,0.6)] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#F9F7F3] focus:ring-offset-2 focus:ring-offset-[#263016]"
          >
            Explore Lumavi
          </Link>
        </div>
      </div>
    </section>
  );
}
