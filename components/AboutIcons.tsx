import IconBrandTelegram from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-telegram.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github.tsx";

export default function AboutIcons() {
    return (
        <div class="flex gap-2 justify-center">
            <a
                class="hover:opacity-75"
                target="_blank"
                title="تلغرام منصه نخله"
                href="https://t.me/NakhlahJS"
            >
                <IconBrandTelegram />
            </a>
            <a
                class="hover:opacity-75"
                target="_blank"
                title="سورس منصه نخله"
                href="https://github.com/TeaByte/NakhlahJS"
            >
                <IconBrandGithub />
            </a>
        </div>
    );
}