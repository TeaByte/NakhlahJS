import IconCircleCheckFilled from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/circle-check-filled.tsx";
import IconCircle from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/circle.tsx";

export default function ProgressCheck(props: {isDone : boolean}) {
    return props.isDone
    ? <IconCircleCheckFilled aria-hidden="true" class="h-4 w-4" />
    : <IconCircle aria-hidden="true" class="h-4 w-4" />;
}
