import re
import os

with open('app/body_content.jsx_tmp', 'r') as f:
    html = f.read()

def extract_section(regex_pattern):
    match = re.search(regex_pattern, html, re.DOTALL)
    if match:
        return match.group(0)
    return ''

hero = extract_section(r'<section className="hero.*?</section>')
intro = extract_section(r'<section className="intro.*?</section>')
services = extract_section(r'<section className="home_service.*?</section>')
featured = extract_section(r'<section className="featured_project.*?</section>')
trail = extract_section(r'<section className="image_trail.*?</section>')
footer = extract_section(r'<section data-footer="".*?</section>')

# For Navbar, extract everything before <section className="hero" EXCEPT the unclosed div/main tags
navbar_match = re.search(r'(<div data-taxi="" className="page_wrap">.*?)<section className="hero', html, re.DOTALL)
if navbar_match:
    navbar = navbar_match.group(1)
    # Remove the unclosed <main>
    navbar = re.sub(r'<main data-taxi-view="" className="main u-theme-light">\s*$', '', navbar)
    # Remove the unclosed <div data-taxi="" className="page_wrap"> and instead put it in page.js
    # Actually, let's just make Navbar the content *inside* the page_wrap, before the main.
    navbar = re.sub(r'^<div data-taxi="" className="page_wrap">\s*', '', navbar)
else:
    navbar = ""

def write_component(name, content):
    if not content: return
    with open(f'app/components/{name}.js', 'w') as f:
        f.write(f'export default function {name}() {{\n  return (\n    <>\n      {content}\n    </>\n  );\n}}\n')

os.makedirs('app/components', exist_ok=True)
write_component('Navbar', navbar)
write_component('Hero', hero)
write_component('Intro', intro)
write_component('Services', services)
write_component('FeaturedProjects', featured)
write_component('ImageTrail', trail)
write_component('Footer', footer)

# Generate page.js
page_js = """import GsapWrapper from "./GsapWrapper";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Services from "./components/Services";
import FeaturedProjects from "./components/FeaturedProjects";
import ImageTrail from "./components/ImageTrail";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <GsapWrapper>
      <div data-taxi="" className="page_wrap">
        <Navbar />
        <main data-taxi-view="" className="main u-theme-light">
          <Hero />
          <Intro />
          <Services />
          <FeaturedProjects />
          <ImageTrail />
          <Footer />
        </main>
      </div>
    </GsapWrapper>
  );
}
"""

with open('app/page.js', 'w') as f:
    f.write(page_js)

print('Done.')
