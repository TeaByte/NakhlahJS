import { Handlers } from "$fresh/server.ts";
import { getCookies } from "$std/http/mod.ts";
import { addCompletedCourse } from "../../../utils/KV.ts";
interface FinshTest {
  courseslug: string;
}
export const handler: Handlers<FinshTest> = {
  async POST(req, _ctx) {
    try {
      const FinshTest = (await req.json() as FinshTest)
      const courseslug = FinshTest.courseslug
      const sessionId = getCookies(req.headers)?.sessionId;
      const res = await addCompletedCourse(sessionId, courseslug)
      if (!res.ok) {
        return new Response("error", { status: 400 })
      }
    } catch (error) {
      return new Response("error", { status: 400 })
    }
  return new Response("ok");
  },
};
