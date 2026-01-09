import { PdfEmbed } from "peakflow/pdf";

export async function initPdfEmbed(): Promise<void> {
  const embed = new PdfEmbed(document.body, {
    clientIds: {
      localhost: "69993b9365374be9869e3149348ea254",
      "kafiraab.webflow.io": "69993b9365374be9869e3149348ea254",
      "kafiraab.ch": "42893f30f1274d94942a914946df8a7a",
    },
  });

  await embed.preview();
}

export default initPdfEmbed;
