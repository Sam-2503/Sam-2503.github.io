import "clsx";
import { v as ensure_array_like, w as spread_attributes, x as clsx, y as element, m as pop, p as push, z as spread_props } from "../../chunks/index.js";
function About($$payload) {
  $$payload.out += `<section class="mx-6 my-24 flex gap-5"><div><p class="heading"><u>About Me</u></p> <div class="about"><p>Hey There! I'm Samprad (or Sam if we're already pals) <br/><br/> I am an 18 year old from India with an
				insatiable curiosity for tech, design and basically anything that makes the digital world
				tick. I started this portfolio in my 2nd semester to document my journey in Web Development
				and explore how creativity and code collide. <br/><br/> When I'm not breaking my code (and occasionally
				fixing it), I'm probably dragging myself through college life, or collaborating with <a href="https://www.youtube.com/@acollegekidproductions" class="link text-[#84dcc6]">ACK</a>, or crafting side projects
				that nobody asked for-but hey, they're cool!</p></div></div> <img src="/me.png" alt="A stickman who's supposed to be Sam" class="h-sm md:h-md w-sm border md:w-md"/></section>`;
}
/**
 * @license @lucide/svelte v0.525.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$payload, $$props) {
  push();
  const {
    name,
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    children,
    $$slots,
    $$events,
    ...props
  } = $$props;
  const each_array = ensure_array_like(iconNode);
  $$payload.out += `<svg${spread_attributes(
    {
      ...defaultAttributes,
      ...props,
      width: size,
      height: size,
      stroke: color,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      class: clsx([
        "lucide-icon lucide",
        name && `lucide-${name}`,
        props.class
      ])
    },
    null,
    void 0,
    void 0,
    3
  )}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [tag, attrs] = each_array[$$index];
    element($$payload, tag, () => {
      $$payload.out += `${spread_attributes({ ...attrs }, null, void 0, void 0, 3)}`;
    });
  }
  $$payload.out += `<!--]-->`;
  children?.($$payload);
  $$payload.out += `<!----></svg>`;
  pop();
}
function Github($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      {
        "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]
  ];
  Icon($$payload, spread_props([
    { name: "github" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function Instagram($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "20",
        "x": "2",
        "y": "2",
        "rx": "5",
        "ry": "5"
      }
    ],
    [
      "path",
      {
        "d": "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
      }
    ],
    [
      "line",
      {
        "x1": "17.5",
        "x2": "17.51",
        "y1": "6.5",
        "y2": "6.5"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "instagram" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function Link($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      {
        "d": "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
      }
    ],
    [
      "path",
      {
        "d": "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "link" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function Linkedin($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      {
        "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      }
    ],
    [
      "rect",
      {
        "width": "4",
        "height": "12",
        "x": "2",
        "y": "9"
      }
    ],
    ["circle", { "cx": "4", "cy": "4", "r": "2" }]
  ];
  Icon($$payload, spread_props([
    { name: "linkedin" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function Contact($$payload) {
  $$payload.out += `<section class="mx-6 my-20"><div><p class="heading"><u>Connect with Me</u></p> <ul><li class="social github my-3 flex gap-2">`;
  Github($$payload, {});
  $$payload.out += `<!----><strong>Github:</strong> <a href="https://github.com/Sam-2503" target="_blank" alt="github-logo" class="text-[#84dcc6]">Sam-2503</a></li> <li class="social linkedin my-3 flex gap-2">`;
  Linkedin($$payload, {});
  $$payload.out += `<!----><strong>LinkedIn</strong>: <a href="https://linkedin.com/in/samprad/" target="_blank" alt="linkedin logo" class="text-[#84dcc6]">samprad</a></li> <li class="social insta my-3 flex gap-2">`;
  Instagram($$payload, {});
  $$payload.out += `<!----><strong>Instagram</strong>: <a href="https://instagram.com/__sam.25_" target="_blank" alt="instagram logo" class="text-[#84dcc6]">__sam.25_</a></li></ul></div></section>`;
}
function Projects($$payload) {
  $$payload.out += `<section class="mx-6 my-20"><div><p class="heading"><u>Projects</u></p> <p>This is a collection of the Projects that I am currently working on or have completed so far</p> <div class="my-2 flex gap-2"><div class="card card-sm card-border w-sm shadow-sm"><figure><img src="/rsveepee.png" alt="rsveepee"/></figure> <div class="card-body items-center text-center"><p class="card-title">RSveepee</p> <p>RSveepee is a full stack application that allows users to manage, and join events with a
						modern interface.</p></div> <div class="card-actions justify-center"><a href="https://github.com/Sam-2503/RSveepee"><button class="btn btn-ghost btn-square">`;
  Github($$payload, {});
  $$payload.out += `<!----></button></a></div></div> <div class="card card-sm card-border w-sm shadow-sm"><figure><img src="/portfolio.png" alt="portfolio site"/></figure> <div class="card-body items-center text-center"><p class="card-title">My Portfolio</p> <p>A portfolio site built for showcasing my front-end development skills and projects</p></div> <div class="card-actions justify-center"><a href="https://github.com/Sam-2503/Sam-2503.github.io"><button class="btn btn-ghost btn-square">`;
  Github($$payload, {});
  $$payload.out += `<!----></button></a> <a href="https://sam25.is-a.dev"><button class="btn btn-ghost btn-square" target="_blank">`;
  Link($$payload, {});
  $$payload.out += `<!----></button></a></div></div> <div class="card card-sm card-border w-sm shadow-sm"><figure><img src="/clouter.png" alt="clouter"/></figure> <div class="card-body items-center text-center"><p class="card-title">Clouter</p> <p>A club management site built for college campuses by students of NIT Silchar</p></div> <div class="card-actions justify-center"><a href="https://github.com/Clouter-Dev/clouter"><button class="btn btn-ghost btn-square">`;
  Github($$payload, {});
  $$payload.out += `<!----></button></a></div></div></div></div></section>`;
}
function _page($$payload) {
  $$payload.out += `<div class="overflow-hidden"><section id="home">`;
  About($$payload);
  $$payload.out += `<!----></section> <section id="contact">`;
  Contact($$payload);
  $$payload.out += `<!----></section> <section id="projects">`;
  Projects($$payload);
  $$payload.out += `<!----></section></div>`;
}
export {
  _page as default
};
