const SKILLS = [
	{ name: "React" },
	{ name: "Next.js" },
	{ name: "Machine Learning" },
	{ name: "TensorFlow" },
	{ name: "SvelteKit" },
	{ name: "Node.js" },
];

export default function TechnicalSkills() {
	return (
		<section id="technical-skills" className="relative bg-cream">
			<div className="mx-auto max-w-360 px-6 md:px-12 pt-14 md:pt-20">
				<h2 className="font-display uppercase tracking-tight leading-[0.9] text-6xl md:text-8xl">
					<span className="text-ink">.Technical</span>{" "}
					<span className="text-accent">Skills</span>
				</h2>
			</div>
			<div className="mx-auto max-w-360 px-6 md:px-12 mt-12 md:mt-16 pb-14 md:pb-20">
				<ul className="border-t-2 border-ink">
					{SKILLS.map((s, i) => (
						<li
							key={s.name}
							className="flex items-baseline justify-between gap-6 border-b-2 border-ink py-6 md:py-8"
						>
							<p
								className={`font-display uppercase tracking-tight text-4xl md:text-6xl ${
									i % 2 === 0 ? "text-ink" : "text-accent"
								}`}
							>
								{s.name}
							</p>
							<p className="font-display text-accent text-lg md:text-2xl">
								{String(i + 1).padStart(2, "0")}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
