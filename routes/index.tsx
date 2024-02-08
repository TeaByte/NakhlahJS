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
          content="وجهتك الأمثل لاكتساب مهارات جافاسكربت بسهولة وفعالية. رحلة تعليمية شيقة تمتد من الأساسيات إلى المستويات المتقدمة"
        />
        <meta
          name="keywords"
          content="Nakhlahjs, Nakhlah, تعلم جافاسكربت, جافاسكربت, تعليم جافاسكربت, كورس جافاسربت, كورس جافاسكربت مجاني, كورس جافاسكربت"
        />
        <meta property="og:title" content="نخلة جي أس" />
        <meta
          property="og:description"
          content="وجهتك الأمثل لاكتساب مهارات جافاسكربت بسهولة وفعالية. رحلة تعليمية شيقة تمتد من الأساسيات إلى المستويات المتقدمة"
        />
      </Head>
      <main className="h-[75vh] relative">
        <section class="w-fulloverflow-hidden">
          <div class="container relative w-full px-8 pt-16 mx-auto lg:px-4 z-[999]">
            <div class="flex flex-col w-full mb-12 text-center">
              <h1 class="mb-6 text-5xl font-bold tracking-tighter lg:text-6xl">
                نخلة جي أس
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
                  class="inline-flex items-center px-8 py-3 text-lg text-base-content transition-all duration-500 ease-in-out transform g border-2 border-black rounded-lg md:mb-2 lg:mb-0 hover:border-white hover:opacity-80 focus:ring-2 ring-offset-current ring-offset-2"
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
