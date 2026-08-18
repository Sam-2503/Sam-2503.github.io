const INSTITUTIONS = [
  {
    name: "National Institute of Technology, Silchar",
    location: "Assam, India",
    dates: "August 2024 – May 2028",
    title: "Bachelor of Technology (Civil Engineering)",
    score: "CGPA: 7.91/10",
  },
  {
    name: "Kendriya Vidyalaya, Narangi",
    location: "Guwahati, India",
    dates: "August 2022 – May 2024",
    title: "Higher Secondary (HSC)",
    score: "Percentage: 91.2",
  },
];

export default function Institution() {
  return (
    <section id="institution" className="relative bg-cream overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr]">
        <div className="hidden lg:flex items-center justify-center px-4 py-14 md:py-20">
          <p
            className="font-display uppercase tracking-tight leading-none text-[7rem] whitespace-nowrap"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            <span className="text-ink">Insti</span>
            <span className="text-accent">tution</span>
          </p>
        </div>
        <div className="px-6 md:px-12 py-14 md:py-20">
          <div className="space-y-10 md:space-y-16">
            {INSTITUTIONS.map((inst, i) => (
              <div
                key={inst.name}
                className="flex items-baseline justify-between gap-6"
              >
                <div>
                  <h3 className="font-display uppercase tracking-tight text-ink text-3xl md:text-5xl">
                    {inst.name}
                  </h3>
                  <p className="mt-3 font-display tracking-tight text-accent text-2xl md:text-3xl">
                    {inst.dates}
                  </p>
                  <p className="mt-3 text-xs md:text-sm uppercase tracking-[0.25em] text-ink">
                    {inst.location}
                  </p>
                  <h3 className="mt-8 font-display uppercase tracking-tight text-ink text-2xl md:text-3xl">
                    {inst.title}
                  </h3>
                  <p className="mt-2 font-display uppercase tracking-tight text-accent text-base md:text-lg">
                    {inst.score}
                  </p>
                </div>
                <p className="font-display text-accent text-5xl md:text-7xl shrink-0">
                  {i + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}