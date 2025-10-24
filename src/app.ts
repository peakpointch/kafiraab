import { onReady } from "@xatom/core";
import { app, global } from "./routes";

onReady(() => {
  global();
  app();
});
