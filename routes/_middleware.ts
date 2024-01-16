import { FreshContext } from "$fresh/server.ts";
import {getCookies, Cookie, setCookie} from "$std/http/mod.ts";
import { createStudent } from "../utils/KV.ts";
export async function handler(
    req: Request,
    ctx: FreshContext,
  ) {
    const resp = await ctx.next();
    const cookies = getCookies(req.headers);
    const sessionId = cookies["sessionId"] || "";
    if (sessionId == "") {
        try {
            const student = await createStudent();
            const cookie: Cookie = {
                name: "sessionId",
                value: student.sessionId,
            }
            setCookie(resp.headers, cookie);
        } catch {
            return ctx.renderNotFound();
        }
    }
    return resp;
  }