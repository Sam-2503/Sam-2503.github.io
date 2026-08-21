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
						<div className="max-w-md space-y-4 text-sm md:text-base leading-relaxed">
							<p>
								<strong>
									Hey there! I&apos;m Samprad (or Sam), if you
									know me well enough.
								</strong>
							</p>
							<p>
								I&apos;m an engineering student from India with
								a knack for technology and a tendency to turn
								random ideas into things that actually work.
								What started as an interest in web development
								has gradually grown into a broader curiosity
								about software, AI, design, and building things
								from scratch.
							</p>
							<p>
								This portfolio is a little snapshot of that
								journey, the projects I&apos;ve built, the
								things I&apos;ve learned, the experiments that
								worked, and, inevitably, the ones that
								absolutely did not.
							</p>
							<p>
								Along the way, I&apos;ve also been building{" "}
								<strong>
									<a
										href="https://upscaleagency.in/"
										target="_blank"
										rel="noopener"
										className="underline hover:text-accent transition-colors"
									>
										UpScale Agency
									</a>
								</strong>
								, where I get to work on real-world projects
								involving web development, SEO, and digital
								solutions. Working with clients has taught me a
								lot beyond just writing code. Understanding
								what people actually need, turning vague ideas
								into something tangible, and figuring out how to
								make a product not just work, but actually be
								useful.
							</p>
						</div>
						<div className="mt-20 md:mt-auto">
							<p className="font-display uppercase tracking-tight text-ink text-2xl md:text-3xl">
								Samprad
							</p>
							<p className="mt-1 text-xs md:text-sm uppercase tracking-[0.3em] text-accent">
								The one behind the code
							</p>
						</div>
						<div className="absolute bottom-0 right-0 lg:-right-24 w-48 md:w-56 h-64 md:h-80">
							<Image
								src="/sam.png"
								alt="Cutout portrait of Samprad"
								fill
								sizes="(max-width: 1024px) 40vw, 224px"
								className="object-cover object-top grayscale contrast-125 mix-blend-multiply"
							/>
						</div>
					</div>
					<div className="bg-ink text-cream p-8 md:p-12 flex items-end min-h-105">
						<div className="max-w-md space-y-4 text-sm md:text-base leading-relaxed">
							<p>
								When I&apos;m not coding or wondering why
								something that worked five minutes ago suddenly
								doesn&apos;t, you&apos;ll probably find me
								working on a side project, exploring some new
								technology, collaborating with people, or
								building something nobody really asked for, but
								hey, if it&apos;s cool, that&apos;s reason
								enough.
							</p>
							<p>
								I&apos;m still figuring things out, and
								that&apos;s kind of the fun of it. I like
								learning by building, breaking things, fixing
								them, and occasionally questioning why I decided
								to build them in the first place.
							</p>
							<p>
								So, welcome to my little corner of the internet.
								Have a look around and you might find something
								interesting.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
