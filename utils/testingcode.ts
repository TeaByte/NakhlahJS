import {existsSync} from "https://deno.land/std@0.212.0/fs/mod.ts";
export function getTestingCode(slug: string): string { 
    if (existsSync(`./testcases/${slug}.js`)) {
        return Deno.readTextFileSync(`./testcases/${slug}.js`);
    } else return "";
}