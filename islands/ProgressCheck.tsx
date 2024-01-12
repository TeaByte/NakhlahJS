import { useState } from "preact/hooks";

import IconCircle from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/circle.tsx";
import IconCircleCheckFilled from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/circle-check-filled.tsx";

interface ProgressTrackProps {
  slug: string;
}

export default function ProgressCheck(props: ProgressTrackProps) {
  const [isDone, setIsDone] = useState(
    localStorage.getItem(props.slug.replace(/\\/g, "/")) === "done",
  );
  return isDone
    ? <IconCircleCheckFilled aria-hidden="true" class="h-4 w-4" />
    : <IconCircle aria-hidden="true" class="h-4 w-4" />;
}
