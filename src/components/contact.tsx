import {Github, Linkedin, Instagram} from "lucide-react";

export function Contact() {
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