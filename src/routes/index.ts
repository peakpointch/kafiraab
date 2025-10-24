import { WFRoute } from "@xatom/core";
import peakflow from "peakflow";

export function app() {
  new WFRoute("/").execute(() => {
    peakflow.execute("swiper");
  });
}

export function global() {
  peakflow.execute("dateflow");
}
