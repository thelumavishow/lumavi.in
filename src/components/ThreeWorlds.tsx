export function ThreeWorlds() {
  const worlds = [
    {
      number: "01",
      title: "Play & Create",
      description:
        "Ideas, activities, and experiences that invite children to make, build, explore, and express themselves.",
    },
    {
      number: "02",
      title: "Stories & Wonder",
      description:
        "Imaginative stories and magical adventures that inspire curiosity, dreams, and wonder.",
    },
    {
      number: "03",
      title: "Together",
      description:
        "Simple experiences made to bring children and families closer through play, stories, and shared moments.",
    },
  ];

  return (
    <section
      id="explore"
      className="w-full bg-transparent px-6 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-16 sm:pb-20 md:pb-24 lg:pb-28 scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-20 md:mb-28">
          <p className="text-xs font-semibold tracking-widest text-[#DFDACF] uppercase">
            THE THREE WORLDS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#F9F7F3] tracking-tight">
            Three ways Lumavi brings imagination to life.
          </h2>
        </div>

        {/* Three-Column Editorial Layout (No cards, no borders, no shadows) */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-12 lg:gap-16">
          {worlds.map((world) => (
            <div key={world.number} className="flex flex-col space-y-4">
              <h3 className="text-lg sm:text-xl font-serif font-normal text-[#F9F7F3] tracking-tight">
                <span className="text-[#C9C3B5] font-sans text-base mr-2">{world.number} —</span>
                {world.title}
              </h3>
              <p className="text-base leading-relaxed text-[#DFDACF] font-normal">
                {world.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
