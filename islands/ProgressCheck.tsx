import IconCircleCheckFilled from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/circle-check-filled.tsx";
import IconCircle from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/circle.tsx";
import { useEffect, useState } from "preact/hooks";
import { newPassSignal } from "./signals/store.ts";
export default function ProgressCheck(props: {slug : string}) {
    const [isPassed, setIsPassed] = useState<boolean>(false);
    useEffect(() => {
        const passedTEXT = localStorage.getItem("passedCourses");
        let passed: string[] = [];
        if (passedTEXT) {
            passed = JSON.parse(passedTEXT);
        }
        if (passed.includes(props.slug.replace("\\", "/"))) {
            setIsPassed(true);
        }
    }, [newPassSignal.value]);
    return isPassed
    ? <IconCircleCheckFilled aria-hidden="true" class="h-4 w-4" />
    : <IconCircle aria-hidden="true" class="h-4 w-4" />;
}
