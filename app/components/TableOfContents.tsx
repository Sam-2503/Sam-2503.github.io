import Image from "next/image";

const SECTIONS = [
	{ label: "About Me", href: "#about" },
	{ label: "Job Position", href: "#job-position" },
	{ label: "Institution", href: "#institution" },
	{ label: "Technical Skills", href: "#technical-skills" },
	{ label: "Portfolio", href: "#portfolio" },
	{ label: "Contact", href: "#contact" },
];

export default function TableOfContents() {
	return (
		<section className="relative bg-cream overflow-hidden">
			<div className="mx-auto max-w-360 px-6 md:px-12 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
				<div className="relative flex flex-col min-h-105">
					<h2 className="font-display uppercase tracking-tight text-ink leading-[0.9] text-6xl md:text-8xl">
						Table of
						<br />
						Contents
					</h2>
					<div className="absolute bottom-0 left-0 w-56 md:w-72 h-80 md:h-96">
						<Image
							src="/stars.jpg"
							alt="Greyscale portrait"
							fill
							sizes="(max-width: 768px) 50vw, 288px"
							className="object-cover object-top grayscale contrast-125 mix-blend-multiply"
						/>
					</div>
				</div>
				<div className="bg-accent p-8 md:p-14 flex flex-col justify-center">
					<ol className="font-display uppercase tracking-tight text-ink text-3xl md:text-5xl leading-[1.6]">
						{SECTIONS.map((s, i) => (
							<li key={s.label} className="flex gap-4 md:gap-6">
								<a
									href={s.href}
									className="flex gap-4 md:gap-6 transition-colors hover:text-cream hover:underline"
								>
									<span className="opacity-70">
										0{i + 1}.
									</span>
									<span>{s.label}</span>
								</a>
							</li>
						))}
					</ol>
				</div>
			</div>
		</section>
	);
}
