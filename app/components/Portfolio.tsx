import Image from "next/image";

const PHOTOS = [
	{
		src: "/finbuddy.png",
		alt: "FinBuddy AI",
		className: "aspect-[3/4]",
		name: "FinBuddy",
		description:
			"Real-time AI financial assistant with voice-based budgeting and expense tracking.",
		href: "https://finbuddy-alpha.vercel.app/",
	},
	{
		src: "/radyo.png",
		alt: "Rad-Yo",
		className: "aspect-square",
		name: "Rad-Yo",
		description:
			"Retro-themed web radio platform with AI-generated song trivia.",
		href: "https://rad-yo-seven.vercel.app",
	},
	{
		src: "/neurathon.png",
		alt: "Neurathon",
		className: "aspect-[4/5]",
		name: "Neurathon",
		description: "Hackathon website for ML Club, NIT Silchar.",
		href: "https://neurathon.mlclubnits.com",
	},
	{
		src: "/merch.png",
		alt: "ML Club Merch",
		className: "aspect-[4/5]",
		name: "ML Club Merch",
		description: "Merch store for ML Club, NIT Silchar.",
		href: "https://merch.mlclubnits.com",
	},
];

export default function Portfolio() {
	return (
		<section id="portfolio" className="relative bg-cream">
			<div className="mx-auto max-w-360 px-6 md:px-12 pt-14 md:pt-20">
				<h2 className="font-display uppercase tracking-tight text-ink leading-[0.9] text-6xl md:text-8xl">
					.Portfolio
				</h2>
			</div>
			<div className="mx-auto max-w-360 px-6 md:px-12 mt-10 md:mt-14 pb-14 md:pb-20">
				<div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
					{PHOTOS.map((p) => (
						<a
							key={p.src}
							href={p.href}
							target="_blank"
							rel="noopener noreferrer"
							className={`group relative block ${p.className}`}
						>
							<Image
								src={p.src}
								alt={p.alt}
								fill
								sizes="(max-width: 768px) 50vw, 33vw"
								className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.02]"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-ink via-ink/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
							<div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 md:p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
								<p className="font-display uppercase tracking-tight text-cream text-lg md:text-xl">
									{p.name}
								</p>
								<p className="mt-1 text-xs md:text-sm text-cream/80">
									{p.description}
								</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
