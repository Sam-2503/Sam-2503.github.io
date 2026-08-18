import Image from "next/image";
import Barcode from "./Barcode";

export default function Hero() {
	const dateFunc = () => {
		const date = new Date();
		return date.toLocaleDateString();
	};
	return (
		<section className="relative bg-cream">
			<div className="mx-auto max-w-360 px-6 md:px-12 pt-14 md:pt-20">
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
					<div className="flex items-start gap-6 md:gap-10">
						<h1 className="font-display uppercase tracking-tight text-ink leading-[0.85] text-[14vw] md:text-[7rem] lg:text-[8.5rem]">
							<span className="block">Samprad&apos;s</span>
							<span className="block">Port<span className="text-accent">folio</span></span>
						</h1>
						<a
							href="/samprad_resume.pdf"
							download
							className="font-display text-accent text-base md:text-xl tracking-widest mt-3 whitespace-nowrap cursor-pointer transition-colors hover:text-ink"
						>
							.Resume
						</a>
					</div>
					<div className="hidden lg:block">
						<div className="relative h-72 w-72">
							<Image
								src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
								alt="Portrait of Dmitri"
								fill
								sizes="300px"
								className="object-cover object-top grayscale contrast-125"
							/>
						</div>
					</div>
				</div>
				<div className="mt-8 md:mt-12 pb-14 md:pb-20"></div>
			</div>
			<div className="bg-ink">
				<div className="mx-auto max-w-360 px-6 md:px-12 py-4 md:py-5 flex items-center justify-between gap-6">
					<div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-cream font-medium leading-relaxed">
						<p>Location: 123, Street, City Country Name</p>
						<p>{dateFunc()}</p>
					</div>
					<Barcode className="h-9 w-36 md:h-11 md:w-52 text-cream" />
				</div>
			</div>
		</section>
	);
}
