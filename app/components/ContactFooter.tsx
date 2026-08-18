import Image from "next/image";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

const LINKS = [
  { label: "Instagram", icon: FaInstagram, href: "https://instagram.com/samprad" },
  { label: "GitHub", icon: FaGithub, href: "https://github.com/samprad" },
  { label: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/in/samprad" },
];

export default function ContactFooter() {
  return (
    <section id="contact">
      <div className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 py-16 md:py-24 text-center">
          <h2 className="font-display uppercase tracking-tight leading-[0.9] text-7xl md:text-9xl">
            <span className="text-ink">Contact</span>{" "}
            <span className="text-accent">Me</span>
          </h2>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 transition-colors duration-300 hover:text-accent"
              >
                <l.icon className="h-8 w-8 md:h-10 md:w-10" />
                <span className="text-[11px] md:text-xs uppercase tracking-[0.25em]">
                  {l.label}
                </span>
              </a>
            ))}
          </div>
          <p className="mt-10 font-display tracking-normal text-accent">
            <a href="mailto:example@mail.com">example@mail.com</a>
          </p>
        </div>
      </div>
      <div className="relative h-72 md:h-96">
        <Image
          src="/bg.svg"
          alt="Dark abstract background"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}