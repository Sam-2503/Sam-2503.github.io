import Image from "next/image";

export default function AboutMe() {
	return (
		<section id="about" className="relative bg-cream overflow-hidden">
			<div className="mx-auto max-w-360 px-6 md:px-12 py-14 md:py-20">
				<h2 className="font-display uppercase tracking-tight text-ink leading-[0.9] text-6xl md:text-8xl">
					.About <span className="text-accent">Me</span>
				</h2>
				<div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
					<div className="relative flex flex-col min-h-105">
						<p className="max-w-md text-sm md:text-base leading-relaxed">
							Iihilitatem sequunt, cuptas velest, od iditaer
							umquodion. Cum quia voluptatem sequi nesciunt, neque
							porro quisquam est, qui dolorem ipsum quia dolor sit
							amet, consectetur, adipisci velit, sed quia non
							numquam eius modi tempora.
						</p>
						<div className="mt-10 md:mt-auto">
							<p className="font-display uppercase tracking-tight text-ink text-2xl md:text-3xl">
								Victoria Wotton
							</p>
							<p className="mt-1 text-xs md:text-sm uppercase tracking-[0.3em] text-accent">
								CEO / Founder
							</p>
						</div>
						<div className="absolute bottom-0 right-0 lg:-right-24 w-48 md:w-56 h-64 md:h-80">
							<Image
								src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop"
								alt="Cutout portrait of a woman"
								fill
								sizes="(max-width: 1024px) 40vw, 224px"
								className="object-cover object-top grayscale contrast-125 mix-blend-multiply"
							/>
						</div>
					</div>
					<div className="bg-ink text-cream p-8 md:p-12 flex items-end min-h-105">
						<p className="max-w-md text-sm md:text-base leading-relaxed">
							Iihilitatem sequunt, cuptas velest, od iditaer
							umquodion. Cum quia voluptatem sequi nesciunt, neque
							porro quisquam est, qui dolorem ipsum quia dolor sit
							amet, consectetur, adipisci velit, sed quia non
							numquam eius modi tempora incidunt ut labore et
							dolore magnam aliquam quaerat voluptatem.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
