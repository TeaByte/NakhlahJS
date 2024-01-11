import { render } from "$gfm";
import { Course } from "../utils/types.ts";

import EditButton from "../components/EditButton.tsx";
import IconAppWindow from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/app-window.tsx";

export default function MarkdownSplit(
  { course, lable }: { course: Course; lable: string | undefined },
) {
  return (
    <section dir="rtl" class="p-3 py-5 mb-40">
      <div>
        <div class="text-sm breadcrumbs" dir="rtl">
          <ul>
            <li>
              <a href="/">الرئيسية</a>
            </li>
            {lable && (
              <li>
                <a href={`/group/${lable}`}>
                  {lable}
                </a>
              </li>
            )}
            <li class="underline">{course.title}</li>
          </ul>
        </div>
        <div class="flex flex-col gap-2 md:flex-row justify-between mb-4">
          <h1 class="text-3xl">{course.title}</h1>
          <EditButton slug={course.slug} />
        </div>
      </div>

      <div
        id="document"
        class="markdown-body"
        data-color-mode="dark"
        data-dark-theme="dark"
        style={{ backgroundColor: "inherit" }}
        dangerouslySetInnerHTML={{ __html: render(course.content) }}
      />
    </section>
  );
}
