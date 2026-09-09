import { createFileRoute } from "@tanstack/react-router";
import { VedaAshramamPage } from "./veda-ashramam";

export const Route = createFileRoute("/vedabhavan")({
  head: () => ({
    meta: [
      { title: "Veda Ashramam — Karuvadikuppam, Puducherry" },
      {
        name: "description",
        content:
          "Veda Ashrama Gurukulam promotes Vedic studies and preserves the oral recitation of the Vedas under the Guru-Shishya Parampara.",
      },
    ],
  }),
  component: VedaAshramamPage,
});
