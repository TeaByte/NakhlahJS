import { render } from "https://deno.land/x/gfm/mod.ts";
import { Course } from "../utils/types.ts";
import IconPlayerTrackNext from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/player-track-next.tsx"
import IconPlayerTrackPrev from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/player-track-prev.tsx"
import EditButton from "../components/EditButton.tsx";

export default function MarkdownSplit({
  course,
  lable,
  lableSlug,
  nextCourse,
  prevCourse,
}: {
  course: Course;
  lable: string | undefined;
  lableSlug: string | undefined;
  nextCourse: string | undefined;
  prevCourse: string | undefined;
}) {
  return (
    <section dir="rtl" class="p-3 py-5 mb-40">
      <div>
        <div className="flex flex-col-reverse">
          <div class="flex flex-col-reverse text-sm breadcrumbs" dir="rtl">
            <ul>
              <li>
                <a href="/">الرئيسية</a>
              </li>
              {lable && (
                <li>
                  <a href={`/group/${lableSlug}`}>{lable}</a>
                </li>
              )}
              <li class="underline">{course.title}</li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col gap-2 md:flex-row justify-between mb-4">
          <h1 class="text-3xl">{course.title}</h1>
          <EditButton slug={course.slug} />
        </div>
      </div>

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
      <div class="flex justify-between mt-4">
        <div>
          {prevCourse && (
            <a
              href={`/${prevCourse}`}
              class="flex flex-row items-center gap-2 btn btn-outline"
            >
              <IconPlayerTrackNext size={18} />
              <span>الدرس السابق</span>
            </a>
          )}
        </div>
        <div>
          {nextCourse && (
            <a
            href={`/${nextCourse}`}
            class="flex flex-row items-center gap-2 btn btn-outline"
            >
              <span>الدرس التالي</span>
            <IconPlayerTrackPrev size={18} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
