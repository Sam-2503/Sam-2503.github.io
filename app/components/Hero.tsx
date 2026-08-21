import Barcode from "./Barcode";

export default function Hero() {
	const dateFunc = () => {
		const date = new Date();
		return date.toLocaleDateString();
	};
	return (
		<section className="relative bg-cream">
			<div className="mx-auto max-w-360 px-6 md:px-12 pt-14 md:pt-20">
				<div className="flex justify-between items-start gap-6 md:gap-10">
					<h1 className="font-display uppercase tracking-tight text-ink leading-[0.85] text-[14vw] md:text-[7rem] lg:text-[8.5rem]">
						<span className="block">Samprad&apos;s</span>
						<span className="block">
							Port<span className="text-accent">folio</span>
						</span>
					</h1>
					<a
						href="/samprad_resume.pdf"
						download
						className="font-display text-accent text-xl md:text-2xl tracking-widest mt-3 whitespace-nowrap cursor-pointer transition-colors hover:text-ink"
					>
						.Resume
					</a>
				</div>
				<div className="mt-8 md:mt-12 pb-14 md:pb-20"></div>
			</div>
			<div className="bg-ink">
				<div className="mx-auto max-w-360 px-6 md:px-12 py-4 md:py-5 flex items-center justify-between gap-6">
					<div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-cream font-medium leading-relaxed">
						<p>{dateFunc()}</p>
					</div>
					<Barcode className="h-9 w-36 md:h-11 md:w-52 text-cream" />
				</div>
			</div>
		</section>
	);
}
