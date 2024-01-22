import { Plugin, PluginMiddleware } from "$fresh/server.ts";
import * as path from "https://deno.land/std@0.207.0/path/mod.ts";
import { getFlatSlugs } from "@/utils/course.ts";
export default function SW_cache(
): Plugin {
    let staticDir = path.join(Deno.cwd(), "static");
    const SW_cacheMiddleware: PluginMiddleware = {
        path: "/",
        middleware: {
            handler: async (_, ctx) => {
                if (ctx.url.pathname == "/sw-cache.json") {
                    const resp = new Response(JSON.stringify(await getFlatSlugs()), {
                        headers: {
                            "content-type": "application/json",
                        }
                    });
                    return resp;
                }
                return ctx.next()
            },
        },
    };

    const middlewares: Plugin["middlewares"] = [];

    return {
        name: "sw-cache",
        async configResolved(config) {
            if (config.dev) {
                staticDir = config.staticDir;
                middlewares.push(SW_cacheMiddleware);
            }
        },
        middlewares,
        async buildStart(config) {
            staticDir = config.staticDir;
            console.log("SW_cache buildStart");
            const outFilePath = path.join(staticDir, "sw-cache.json");
            const slugs = await getFlatSlugs();
            const data = JSON.stringify(slugs);
            await Deno.writeTextFile(outFilePath, data);
        },
    };
}