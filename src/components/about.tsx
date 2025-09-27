export function About() {
  return (
    <section className="py-16 px-28 font-work-sans" id="home">
      <div className="container">
        <div className="grid items-center gap-32 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Samprad's Portfolio
            </h1>
            <p className="text-muted-foreground max-w-xl mb-8 lg:text-xl">
              Hey There! I'm Samprad (or Sam if you know me well enough) I am an
              18 year old from India with an knack for tech. This portfolio is
              my platform to document my journey in Web Development and explore
              how creativity and code collide. When I'm not breaking my code
              (and making my keyboard go through hell), I'm probably dragging
              myself through college life, or collaborating with{" "}
              <a href="https://www.youtube.com/@acollegekidproductions">ACK</a>,
              or crafting side projects that nobody asked for-but hey, they're
              cool!
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dsplnfii2/image/upload/v1757223337/me_irt7s9.png"
            alt="Hero section demo image showing interface components"
            className="h-96 w-full rounded-md object-cover border"
          />
        </div>
      </div>
    </section>
  );
}
