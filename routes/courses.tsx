import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";

import { Course, CourseGroup } from "../utils/types.ts";
import { cache } from "../utils/course-cache.ts";

import Footer from "../components/Footer.tsx";
import Courses from "../components/Courses.tsx";
import { getNumberOfCourses } from "@/utils/course.ts";

interface Props {
  courses: (Course | CourseGroup)[];
  total: number;
}
export const handler: Handlers<Props> = {
  GET(_req, ctx) {
    const courses = cache.courses;
    const total = getNumberOfCourses();
    return ctx.render({
      total,
      courses: courses,
    });
  },
};

export default function BlogIndexPage(
  props: PageProps<Props>,
) {
  const { courses, total } = props.data;
  return (
    <>
      <Head>
        <title>قائمه الدروس</title>
        <meta
          name="description"
          content="قائمه دروس جافا سكريبت"
        />
        <meta
          name="keywords"
          content="قائمه دروس جافا سكريبت"
        />
        <meta property="og:title" content="قائمه الدروس" />
        <meta
          property="og:description"
          content="قائمه دروس جافا سكريبت"
        />
      </Head>
      <main className="max-w-screen-md px-4 pt-8 mx-auto mb-6">
        <Courses total={total} courses={courses} />
      </main>
      <Footer />
    </>
  );
}
