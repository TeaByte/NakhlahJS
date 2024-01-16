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
      addCompletedCourse(sessionId, courseslug)
    } catch (error) {
      return new Response(error.message, { status: 500 });
    }
  return new Response("ok");
  },
};
