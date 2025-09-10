/* export function Contact() {
    return (
        <>

            <section className="mx-6 my-20">
                <div>
                    <p className = "heading"><u>Connect with Me</u></p>

                    <ul>
                        <li className="social github my-3 flex gap-2">
                            <Github /><strong>Github:</strong>
                            <a href="https://github.com/Sam-2503" target="_blank" className = "text-[#84dcc6]">Sam-2503</a>
                        </li>

                        <li className="social linkedin my-3 flex gap-2">
                            <Linkedin /><strong>LinkedIn</strong>:
                            <a href="https://linkedin.com/in/samprad/" target="_blank" className = "text-[#84dcc6]">samprad</a>
                        </li>

                        <li className="social insta my-3 flex gap-2">
                            <Instagram /><strong>Instagram</strong>:
                            <a href="https://instagram.com/__sam.25_" target="_blank" className = "text-[#84dcc6]">__sam.25_</a>
                        </li>
                    </ul>
                </div>
            </section>

        </>
    )
}
*/
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SocialMedia {
  id: string;
  name: string;
  link: string;
  logo: string;
}

interface SocialsProps {
  heading?: string;
  subheading?: string;
  description?: string;
  socials?: SocialMedia[];
}

const Contact = ({
  heading = "Socials",
  description = "Connect with me on the following platforms",
  socials = [
    {
      id: "__sam.25_",
      name: "Instagram",
      link: "https://www.instagram.com/__sam.25_/",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8T_Ph0xtjCuvzy2XJCLobSc9wH81u2o2ocw&s",
    },
    {
      id: "Sam-2503",
      name: "Github",
      link: "https://github.com/Sam-2503",
      logo: "https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png",
    },
    {
      id: "samprad",
      name: "Linkedin",
      link: "https://www.linkedin.com/in/samprad/",
      logo: "https://i.pinimg.com/564x/6b/ab/30/6bab3017350ca04c6fa05569672bd31e.jpg",
    },
  ],
}: SocialsProps) => {
  return (
    <section className="py-4 px-28 font-work-sans" id = "contact">
      <div className="container flex flex-col items-center text-center">
        <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          {heading}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl lg:text-xl">
          {description}
        </p>
      </div>
      <div className="container mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {socials.map((social) => (
          <div key={social.id} className="flex flex-col items-center">
            <Avatar className="mb-4 size-20 border md:mb-5 lg:size-24">
              <AvatarImage src={social.logo} />
              <AvatarFallback>{social.name}</AvatarFallback>
            </Avatar>
            <p className="text-center font-medium">{social.name}</p>
            <a className="text-muted-foreground text-center" href = {social.link}>{social.id}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Contact };
