import { existsSync } from "https://deno.land/std@0.212.0/fs/mod.ts";
export function getPreCode(slug: string): string {
  if (!existsSync(`./precodes/${slug}.js`)) {
    return `console.log("سلام");`;
  }
  const text = Deno.readTextFileSync(`./precodes/${slug}.js`);
  if (text.length > 0) {
    return text;
  }
  return `console.log("سلام");`;
}
