import { ArrowRight, ArrowUpRight } from "lucide-react";

/*export function About() {
    return (
            <section className="mx-6 my-24 flex gap-5">
	            <div>
		            <p className="heading"><u>About Me</u></p>
		            <div className="about">
                        <p>
                            Hey There! I'm Samprad (or Sam if we're already pals) I am an 18 year old from India with an
                            insatiable curiosity for tech, design and basically anything that makes the digital world
                            tick. I started this portfolio in my 2nd semester to document my journey in Web Development
                            and explore how creativity and code collide. When I'm not breaking my code (and occasionally
                            fixing it), I'm probably dragging myself through college life, or collaborating with
                            <a href="https://www.youtube.com/@acollegekidproductions" className = "link text-[#84dcc6]">ACK</a>, or crafting side projects
                            that nobody asked for-but hey, they're cool!
                        </p>
		            </div>
	            </div>

                <img
                    src="/me.png"
                    alt="A stickman who's supposed to be Sam"
                    className="h-sm md:h-md w-sm border md:w-md"
                />
            </section>
                
                )
    
}
*/

interface AboutProps {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
}

const About = ({
  heading = "Samprad's Portfolio",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  
  image = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    alt: "Hero section demo image showing interface components",
  },
}: AboutProps) => {
  return (
    <section className="py-8 px-8 font-work-sans">
      <div className="container">
        <div className="grid items-center gap-32 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              {heading}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            </div>
          </div>
          <img
            src={image.src}
            alt={image.alt}
            className="h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { About };
