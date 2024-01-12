export function getTestCase(slug: string): any[] { 
    const testCases = JSON.parse(Deno.readTextFileSync(`./courses/testcases.json`));
    try {
        return testCases[slug];
    }
    catch {
        return [];
    }
}