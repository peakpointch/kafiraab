import { WFRoute } from "@xatom/core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import peakflow from "peakflow";
import { onWidgetLoad } from "peakflow/elfsight";

export function app() {
  new WFRoute("/").execute(() => {
    onWidgetLoad(
      `[data-elfsight-embed="google-reviews"]`,
      ScrollTrigger.refresh,
      {
        delay: 200,
        conditions: (widget) =>
          Boolean(widget.querySelector(".swiper-initialized")),
      },
    );

    peakflow.execute("swiper");
  });
}
