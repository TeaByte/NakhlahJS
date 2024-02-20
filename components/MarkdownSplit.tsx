import { render } from "$gfm";
import { Course } from "../utils/types.ts";

import EditButton from "../components/EditButton.tsx";

import IconPlayerTrackNext from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/player-track-next.tsx";
import IconPlayerTrackPrev from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/player-track-prev.tsx";
import { Partial } from "$fresh/runtime.ts";

interface MarkdownSplitProps {
  course: Course;
  lable: string | undefined;
  lableSlug: string | undefined;
  nextCourse: string | undefined;
  prevCourse: string | undefined;
}

export default function MarkdownSplit({
  course,
  lable,
  lableSlug,
  nextCourse,
  prevCourse,
}: MarkdownSplitProps) {
  return (
    <>
      <div class="flex px-2 pt-2 gap-2">
        <Partial name="navigation-buttons">
          {nextCourse && (
            <div class="grow">
              <a
                href={`/${nextCourse}`}
                class="flex items-center gap-2 btn btn-outline flex-nowrap"
              >
                <IconPlayerTrackPrev size={18} />
                <span>الدرس التالي</span>
              </a>
            </div>
          )}

          {prevCourse && (
            <div class="grow">
              <a
                href={`/${prevCourse}`}
                class="flex items-center gap-2 btn btn-outline flex-nowrap"
              >
                <span>الدرس السابق</span>
                <IconPlayerTrackNext size={18} />
              </a>
            </div>
          )}
        </Partial>
      </div>
      <section dir="rtl" class="p-3 mb-40 md:mb-5">
        <div>
          <div className="flex flex-col-reverse">
            <div class="flex flex-col-reverse text-sm breadcrumbs" dir="rtl">
              <Partial name="breadcrumbs">
                <ul>
                  <li>
                    <a href="/courses">الدروس</a>
                  </li>
                  {lable && (
                    <li>
                      <a href={`/group/${lableSlug}`}>{lable}</a>
                    </li>
                  )}
                  <li class="underline">{course.title}</li>
                </ul>
              </Partial>
            </div>
          </div>
          <div class="flex flex-col gap-2 md:flex-row justify-between mb-4">
            <Partial name="course-header">
              <h1 class="text-3xl">{course.title}</h1>
              <EditButton slug={course.slug} />
            </Partial>
          </div>
        </div>
        <Partial name="course-content">
          <div
            id="document"
            class="markdown-body"
            style={{ backgroundColor: "inherit" }}
            dangerouslySetInnerHTML={{
              __html: render(course.content, {
                disableHtmlSanitization: true,
              }),
            }}
          />
        </Partial>
      </section>
    </>
  );
}
