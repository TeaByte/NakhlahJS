import {existsSync} from "https://deno.land/std@0.212.0/fs/mod.ts";
export function getTestCase(slug: string): any[] { 

    if (slug.includes('/')) {
        const categorySlug = slug.split('/')[0];
        const courseSlug = slug.split('/')[1];

        if (!existsSync(`./courses/${categorySlug}`)) {
            return [];
        }

        if (!existsSync(`./courses/${categorySlug}/testcases.json`)) {
            return [];
        }
        const testCases = JSON.parse(Deno.readTextFileSync(`./courses/${categorySlug}/testcases.json`));
        try {
            return testCases[courseSlug];
        }
        catch {
            return [];
        }
    }
    else {
        const testCases = JSON.parse(Deno.readTextFileSync(`./courses/testcases.json`));
        try {
            return testCases[slug];
        }
        catch {
            return [];
        }
    }
}