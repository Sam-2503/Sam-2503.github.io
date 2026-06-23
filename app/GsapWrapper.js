"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapWrapper({ children }) {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Basic page load transition
      gsap.from(".page_loader", {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(".page_loader", { display: "none" });
        }
      });

      // Animate hero headings
      gsap.from(".g_heading", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out",
        stagger: 0.2
      });

      // Hero Section Scroll Animation
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      });

      heroTl.to(".hero_visual_image.is-6", {
        scale: 4,
        yPercent: -150,
        duration: 1,
        ease: "power1.inOut"
      }, 0)
      .to(".hero_visual_image.is-1, .hero_visual_image.is-3", {
        xPercent: -200,
        filter: "blur(20px)",
        opacity: 0,
        duration: 1,
        ease: "power1.inOut"
      }, 0)
      .to(".hero_visual_image.is-2, .hero_visual_image.is-4, .hero_visual_image.is-5", {
        xPercent: 200,
        filter: "blur(20px)",
        opacity: 0,
        duration: 1,
        ease: "power1.inOut"
      }, 0);

      // Scroll and Hover triggers for service items
      const serviceItems = gsap.utils.toArray(".service_item");
      serviceItems.forEach((item) => {
        // Scroll animation
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        });

        // Target the outer wrappers for cleaner animations
        const visualLeft = item.querySelector(".service_visual_left");
        const textBold = item.querySelector(".service_text_bold");
        const textNormal = item.querySelector(".service_texts");
        const textRight = item.querySelector(".service_texts_right");

        // 1. Force all inner elements to be permanently visible, stripping Webflow's hidden opacity
        const innerElements = item.querySelectorAll('[data-service-hover]');
        gsap.set(innerElements, { opacity: 1, visibility: "visible" });

        // 2. Fix the layout stacking issue: make the left visual wrapper absolute so it takes zero grid space
        gsap.set(visualLeft, { position: "absolute", left: 0, top: "50%", yPercent: -50, zIndex: 10 });

        // 3. Set the initial state of the hover wrappers to completely hidden
        gsap.set([visualLeft, textBold, textRight], { autoAlpha: 0 });

        // Ensure the base text is perfectly visible
        gsap.set(textNormal, { autoAlpha: 1 });

        item.addEventListener("mouseenter", () => {
          // Kill any lingering tweens to prevent hover glitching
          gsap.killTweensOf([visualLeft, textBold, textRight, textNormal]);

          gsap.to(textNormal, { autoAlpha: 0, duration: 0.2 });
          gsap.to(visualLeft, { autoAlpha: 1, x: 20, duration: 0.3, ease: "power2.out" });
          gsap.to(textBold, { autoAlpha: 1, duration: 0.3 });
          gsap.to(textRight, { autoAlpha: 1, x: -20, duration: 0.3, ease: "power2.out" });
        });

        item.addEventListener("mouseleave", () => {
          gsap.killTweensOf([visualLeft, textBold, textRight, textNormal]);

          gsap.to([visualLeft, textBold, textRight], { autoAlpha: 0, x: 0, duration: 0.2 });
          gsap.to(textNormal, { autoAlpha: 1, duration: 0.2 });
        });
      });
      
      // Video animations
      const videos = gsap.utils.toArray("video");
      videos.forEach((vid) => {
        gsap.from(vid, {
          scrollTrigger: {
            trigger: vid,
            start: "top 90%",
          },
          scale: 0.95,
          opacity: 0.5,
          duration: 1.5,
          ease: "power2.out"
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return <div ref={container}>{children}</div>;
}
