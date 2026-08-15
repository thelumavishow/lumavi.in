export function OurStory() {
  return (
    <section
      id="our-story"
      className="w-full bg-transparent px-6 pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-28 md:pb-36 lg:pb-44 scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 border-t border-[#F9F7F3]/15"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Eyebrow & Title */}
        <div className="text-center space-y-4 mb-16 md:mb-20">
          <p className="text-xs font-semibold tracking-widest text-[#DFDACF] uppercase">
            OUR STORY
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#F9F7F3] tracking-tight leading-[1.2]">
            Created for the moments that matter most.
          </h2>
        </div>

        {/* Editorial Narrative */}
        <div className="mx-auto max-w-2xl space-y-8 text-center sm:text-left">
          <p className="text-lg sm:text-xl font-serif leading-relaxed text-[#F9F7F3]">
            Lumavi was founded on a simple belief: that the most meaningful parts of childhood happen in the quiet spaces between play, wonder, and imagination.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-[#DFDACF] font-normal">
            In a world that often moves too fast, Lumavi creates space for slower, richer experiences. We craft stories, creative play invitations, and shared rituals that invite children to make, dream, and discover at their own natural pace.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-[#DFDACF] font-normal">
            Every idea we bring to life is thoughtfully designed to be warm, calm, and inspiring—child-friendly without feeling childish, and crafted to bring children and families closer together.
          </p>
        </div>
      </div>
    </section>
  );
}
