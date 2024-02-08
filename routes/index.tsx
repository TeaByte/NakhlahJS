import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";

import Footer from "../components/Footer.tsx";
import { getNumberOfCourses } from "@/utils/course.ts";

import IconArrowBigRightLines from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/arrow-big-right-lines.tsx";

interface Props {
  total: number;
}
export const handler: Handlers<Props> = {
  GET(_req, ctx) {
    const total = getNumberOfCourses();
    return ctx.render({
      total,
    });
  },
};

export default function BlogIndexPage(
  props: PageProps<Props>,
) {
  const { total } = props.data;
  return (
    <>
      <Head>
        <meta
          name="description"
          content="منصة تعليمية عربية متخصصة في تعلم لغة البرمجة جافاسكريبت بطريقة مبتكرة وتفاعلية."
        />
        <meta
          name="keywords"
          content="تعلم برمجة جافا سكريبت, دورة جافا سكريبت, مبتدئين جافا سكريبت, تطوير الويب بجافا سكريبت, أساسيات جافا سكريبت, مصادر تعلم جافا سكريبت, جافا سكريبت مجاني, موارد تعليم جافا سكريبت, مشروعات تطبيق جافا سكريبت, أفضل كورس جافا سكريبت, أدوات تطوير جافا سكريبت, تحسين أداء جافا سكريبت, جافا سكريبت ES6, تطبيقات ويب بجافا سكريبت, جافا سكريبت الحديثة, مبادئ البرمجة بجافا سكريبت, مستقبل جافا سكريبت, تطبيقات جافا سكريبت النقالة, تصميم واجهة المستخدم بجافا سكريبت, النصائح والحيل في جافا سكريبت, دورات متقدمة جافا سكريبت, استخدام جافا سكريبت في تطوير التطبيقات, مجتمع جافا سكريبت, تعلم جافاسكربت, جافاسكربت, تعليم جافاسكربت, كورس جافاسربت, كورس جافاسكربت مجاني, nakhlahjs, nakhlah, نخله, نخله جي اس, نخلة, نخلة جي اس, منصة نخلة, منصة نخله, جافاسكربت نخله" />
        <meta property="og:title" content="نخلة جي أس" />
        <meta
          property="og:description"
          content="منصة تعليمية عربية متخصصة في تعلم لغة البرمجة جافاسكريبت بطريقة مبتكرة وتفاعلية."
        />
      </Head>
      <main className="h-[90vh] relative">
        <section class="w-fulloverflow-hidden">
          <div class="container relative w-full px-8 pt-16 mx-auto lg:px-4 z-[999]">
            <div class="flex flex-col w-full mb-12 text-center">
              <h1 class="mb-4 text-6xl font-bold tracking-tighter lg:text-6xl">
                <span class="text-yellow-500 font-bold">JS</span>
                <span class="ml-2 font-bold">نخلة</span>
              </h1>
              <p class="text-3xl mb-2">
                اكتسب مهارات بسهولة وفعالية
              </p>
              <p class="mx-auto text-lg leading-snug lg:w-1/2">
                منصة تعليمية عربية متخصصة في تعلم لغة البرمجة جافاسكريبت بطريقة
                مبتكرة وتفاعلية. يحتوي الموقع على سلسله دروس تفاعليه مع اختبارات
                قصيره لتعزيز فهمك وتفاعلك.
              </p>
              <div class="rounded-lg mt-4">
                <a
                  href="/courses"
                  class="btn bg-base-content text-base-100 hover:bg-base-200 hover:text-base-content rounded-lg"
                >
                  <IconArrowBigRightLines class="ml-2" />
                  ابدأ الآن
                </a>
              </div>
            </div>
          </div>
          <div className="bg-center text-blue-500 bg-no-repeat bg-cover bg-patternTop h-full w-full absolute bottom-0 left-0">
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
