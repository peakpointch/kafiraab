import { WFRoute } from "@xatom/core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import peakflow from "peakflow";
import { onWidgetLoad } from "peakflow/elfsight";

export interface Routes {
  [x: string]: string[];
}

export const routes: Routes = {
  home: ["/", "/en"],
  about: ["/uber-uns", "/en/about"],
  giftCards: ["/gutscheine", "/en/gift-cards"],
  events: ["/events", "/en/events"],
  imprint: ["/impressum", "/en/imprint"],
  privacy: ["/datenschutz", "/en/privacy"],
  eventItem: ["/events/(.*)", "/events-en/(.*)"],
};

export function app() {
  for (const route of routes.home) {
    new WFRoute(route).execute(() => {
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
}
