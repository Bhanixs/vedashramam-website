import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/vedabhavan")({
  beforeLoad: () => {
    throw redirect({
      to: "/veda-ashramam",
    });
  },
});

