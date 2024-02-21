import IconAppWindow from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/app-window.tsx";

export default function SmallScreenButton() {
    return (
        <div
            class="btn btn-info bg-[#5bbcd1] hover:bg-[#5bbcd1] flex items-center gap-1 md:hidden mt-2 fixed z-[999] bottom-2 right-2"
            id="open-editor"
        >
            <IconAppWindow />
            <p>
                فتح المحرر
            </p>
        </div>
    );
}