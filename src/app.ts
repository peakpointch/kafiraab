import { onReady } from "@xatom/core";
import { app } from "./routes";
import peakflow from "peakflow";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onWidgetLoad } from "peakflow/elfsight";

onReady(() => {
  global();
  app();
});

export function global() {
  onWidgetLoad(
    `[data-elfsight-embed="google-reviews"]`,
    ScrollTrigger.refresh,
    {
      delay: 200,
      conditions: (widget) =>
        Boolean(widget.querySelector(".swiper-initialized")),
    },
  );
  peakflow.execute("dateflow");
  animations();
}

export function animations(): void {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const selectors = `:is(h1, h2, h3, h4, h5, h6):not([data-animate="false"], [data-animate="false"] *)`;
  const elements = document.querySelectorAll(selectors);

  elements.forEach((element) => {
    const childSplit = new SplitText(element, {
      type: "words",
      wordsClass: "split-word",
    });

    const tl = gsap.timeline({ paused: true });

    tl.from(childSplit.words, {
      duration: 0.8,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.1, // Delay between words
    });

    ScrollTrigger.create({
      trigger: element,
      start: "top 75%", // When top of element hits 85% of viewport
      toggleActions: "play none none none",
      animation: tl,
    });
  });

  ScrollTrigger.refresh();
}
