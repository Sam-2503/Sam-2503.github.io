import { Github, Link } from 'lucide-react';
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
                    {/* Card 1 */}
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
                    
                    {/* Card 2 */}
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
                    {/* Card 3 */}
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
                    {/* Card 4 */}
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