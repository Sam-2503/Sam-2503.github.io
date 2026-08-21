const JOBS = [
	{
		company: "UpScale",
		location: "Remote",
		dates: "May 2026 – Present",
		title: "Co-Founder & Full Stack Engineer",
		bullets: [
			"Oversee daily operations of the company, managing requirements, project scope, and end-to-end delivery.",
			"Brought in 5+ clients through cold outreach, managing requirements, project scope, and end-to-end delivery; retained 2 monthly.",
			"Built production-grade web applications for them using Next.js with PostgreSQL, JWT authentication, REST APIs, and normalized database schemas.",
			"Optimized technical SEO for 2 production websites through metadata, site architecture, and internal linking improvements.",
		],
		image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
		imageAlt: "UpScale work",
	},
	{
		company: "Indian Institute of Technology, Guwahati",
		location: "On-Site",
		dates: "May 2026 – June 2026",
		title: "Summer Research Intern",
		bullets: [
			"Built an air pollution forecasting pipeline using hourly and daily data collected over 5 years from 32 monitoring stations across Delhi.",
			"Engineered and analyzed meteorological, pollutant, and temporal features to study their influence on PM2.5 and PM10 forecasting performance.",
			"Evaluated Linear Regression, Decision Tree, Random Forest, XGBoost, and SVR models to identify the highest-performing forecasting approach.",
		],
		image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
		imageAlt: "Research at IIT Guwahati",
	},
];

export default function JobPosition() {
	return (
		<section
			id="job-position"
			className="relative bg-cream overflow-hidden"
		>
			<div className="grid grid-cols-1 lg:grid-cols-[auto_1fr]">
				<div className="hidden lg:flex items-start justify-center px-4 py-14 md:py-20">
					<p
						className="font-display uppercase tracking-tight text-ink leading-none text-[7rem] whitespace-nowrap"
						style={{
							writingMode: "vertical-rl",
							transform: "rotate(180deg)",
						}}
					>
						Exper<span className="text-accent">ience</span>
					</p>
				</div>
				<div className="px-6 md:px-12 py-14 md:py-20">
					<div className="space-y-10 md:space-y-16">
						{JOBS.map((job) => (
							<div
								key={job.company}
								className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
							>
								<div>
									<h3 className="font-display uppercase tracking-tight text-ink text-3xl md:text-5xl">
										{job.company}
									</h3>
									<p className="mt-3 font-display tracking-tight text-accent text-2xl md:text-3xl">
										{job.dates}
									</p>
									<p className="mt-3 text-xs md:text-sm uppercase tracking-[0.25em] text-ink">
										{job.location}
									</p>
									<h3 className="mt-10 font-display uppercase tracking-tight text-ink text-3xl md:text-5xl">
										{job.title}
									</h3>
								</div>
								<div className="bg-ink p-8 md:p-12">
									<ul className="space-y-4 text-sm md:text-base leading-relaxed text-cream">
										{job.bullets.map((b) => (
											<li key={b}>• {b}</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
