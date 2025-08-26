export function About() {
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