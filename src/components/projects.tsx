import { Github } from "lucide-react";
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
  github: string;
  image: string;
}

interface ProjectsProps {
  tagline?: string;
  heading?: string;
  description?: string;
  posts?: Post[];
}

const Projects = ({
  heading = "Projects",
  description = "Some of my favourite projects",
  posts = [
    {
      id: "post-4",
      title: "FinBuddy",
      summary:
        "A budget-planning platform featuring an integrated AI financial assistant with chat and voice support. Powered by Agora AI Conversational Bot SDK, FinBuddy offers real-time, personalized financial advice to help users manage their finances effectively.",
      url: "https://finbuddy-alpha.vercel.app/",
      github: "https://github.com/Sam-2503/FinBuddy",
      image:
        "https://res.cloudinary.com/dsplnfii2/image/upload/v1763294018/07570729-5bd9-4a73-b1d3-f6f913923ba7.png",
    },
    {
      id: "post-1",
      title: "Rad-Yo",
      summary:
        "Inspired by the nostalgia of classic radios, vintage music, and the playful spirit of old-school technology. Rad-Yo is a digital throwback to the days of analog dials and timeless tunes",
      url: "https://rad-yo-seven.vercel.app/",
      github: "https://github.com/Sam-2503/osdc-hack",
      image:
        "https://res.cloudinary.com/dsplnfii2/image/upload/v1757216169/radyo_rprnmk.png",
    },
    {
      id: "post-2",
      title: "RSveepee",
      summary:
        "RSveepee is a full stack application that allows users to manage, and join events with a modern interface",
      url: "https://github.com/Sam-2503/RSveepee",
      github: "https://github.com/Sam-2503/RSveepee",
      image:
        "https://res.cloudinary.com/dsplnfii2/image/upload/v1757216169/rsveepee_htf464.png",
    },
    {
      id: "post-3",
      title: "My Portfolio",
      summary:
        "A portfolio site built for showcasing my front-end development skills and projects",
      url: "https://sam25.is-a.dev",
      github: "https://github.com/Sam-2503/Sam-2503.github.io",
      image:
        "https://res.cloudinary.com/dsplnfii2/image/upload/v1757216168/portfolio_yd5gmz.png",
    },
  ],
}: ProjectsProps) => {
  return (
    <section className="pt-4 font-work-sans" id="projects">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
            {heading}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-3xl lg:text-xl">
            {description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="grid grid-rows-[auto_auto_1fr_auto] pt-0 overflow-hidden"
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
                  href={post.github}
                  target="_blank"
                  className="flex items-center gap-2 text-foreground hover:underline"
                >
                  <Github />
                  Visit Repository
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
