import { extract } from "https://deno.land/std@0.151.0/encoding/front_matter.ts";
import {existsSync} from "https://deno.land/std@0.212.0/fs/mod.ts";
export function getPreCode(slug: string): string {
    console.log(slug);
    // TODO: implement this
    // open slug file from courses folder .md
    // find precode
    // return precode
    if (!existsSync(`./precodes/${slug}.js`)) {
        return `console.log("السلام عليكم, :)");`
    }
    const text = Deno.readTextFileSync(`./precodes/${slug}.js`);
    if (text.length > 0) {
        return text;
    }
    return `console.log("السلام عليكم, :)");`
}