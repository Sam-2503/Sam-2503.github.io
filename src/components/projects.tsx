/* import { Github, Link } from 'lucide-react';
export function Projects() {
    return (
        <>
        

        <section className="mx-6 my-20">
            <div>
                <p className="heading"><u>Projects</u></p>
                <p>
                    This is a collection of the Projects that I am currently working on or have completed so far
                </p>
                <div className="my-2 flex gap-2">
                    
                    <div className="card card-sm card-border w-sm shadow-sm">
                        <figure><img src="/radyo.png" alt="clouter" /></figure>
                        <div className="card-body items-center text-center">
                            <p className="card-title">Rad-Yo</p>
                            <p>Rad-Yo is inspired by the nostalgia of classic radios, vintage music, and the playful spirit of old-school technology. Tune in, leave notes, and enjoy a digital throwback to the days of analog dials and timeless tunes.</p>
                        </div>
                        <div className="card-actions justify-center">
                            <a href="https://github.com/Sam-2503/osdc-hack">
                                <button className="btn btn-ghost btn-square"><Github /></button>
                            </a>
                            <a href="https://rad-yo-seven.vercel.app" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-ghost btn-square"><Link /></button>
                            </a>
                        </div>
                    </div>
                    
                    
                    <div className="card card-sm card-border w-sm shadow-sm">
                        <figure><img src="/portfolio.png" alt="portfolio site" /></figure>
                        <div className="card-body items-center text-center">
                            <p className="card-title">My Portfolio</p>
                            <p>A portfolio site built for showcasing my front-end development skills and projects</p>
                        </div>
                        <div className="card-actions justify-center">
                            <a href="https://github.com/Sam-2503/Sam-2503.github.io">
                                <button className="btn btn-ghost btn-square"><Github /></button>
                            </a>
                            <a href="https://sam25.is-a.dev" target="_blank">
                                <button className="btn btn-ghost btn-square"><Link /></button>
                            </a>
                        </div>
                    </div>
                    
                    <div className="card card-sm card-border w-sm shadow-sm">
                        <figure><img src="/clouter.png" alt="clouter" /></figure>
                        <div className="card-body items-center text-center">
                            <p className="card-title">Clouter</p>
                            <p>A club management site built for college campuses by students of NIT Silchar</p>
                        </div>
                        <div className="card-actions justify-center">
                            <a href="https://github.com/Clouter-Dev/clouter">
                                <button className="btn btn-ghost btn-square"><Github /></button>
                            </a>
                        </div>
                    </div>
                    
                    <div className="card card-sm card-border w-sm shadow-sm">
                        <figure><img src="/rsveepee.png" alt="rsveepee" /></figure>
                        <div className="card-body items-center text-center">
                            <p className="card-title">RSveepee</p>
                            <p>
                                RSveepee is a full stack application that allows users to manage, and join events with a
                                modern interface.
                            </p>
                        </div>
                        <div className="card-actions justify-center">
                            <a href="https://github.com/Sam-2503/RSveepee">
                                <button className="btn btn-ghost btn-square"><Github /></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
} 
*/

import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface ProjectsProps {
  tagline: string;
  heading: string;
  description: string;
  posts: Post[];
}

const Projects = ({
  heading = "Projects",
  description = "Some of my favourite projects",
  posts = [
    {
      id: "post-1",
      title: "Rad-Yo",
      summary:
        "Rad-Yo is inspired by the nostalgia of classic radios, vintage music, and the playful spirit of old-school technology. Tune in, leave notes, and enjoy a digital throwback to the days of analog dials and timeless tunes",
      url: "https://shadcnblocks.com",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "post-2",
      title: "RSveepee",
      summary:
        "RSveepee is a full stack application that allows users to manage, and join events with a modern interface",
      url: "https://shadcnblocks.com",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "post-3",
      title: "My Portfolio",
      summary:
        "A portfolio site built for showcasing my front-end development skills and projects",
      url: "https://shadcnblocks.com",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
  ],
}: ProjectsProps) => {
  return (
    <section className="py-4">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mb-2 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="grid grid-rows-[auto_auto_1fr_auto] pt-0"
            >
              <div className="aspect-16/9 w-full">
                <a
                  href={post.url}
                  target="_blank"
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center"
                  />
                </a>
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <a href={post.url} target="_blank">
                    {post.title}
                  </a>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.summary}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={post.url}
                  target="_blank"
                  className="flex items-center text-foreground hover:underline"
                >
                  Read more
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Projects };

