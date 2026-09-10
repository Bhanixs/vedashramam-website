import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/vedaashramam")({
  beforeLoad: () => {
    throw redirect({
      to: "/veda-ashramam",
    });
  },
});

