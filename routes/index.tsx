import { Head } from "$fresh/runtime.ts";

import Footer from "../components/Footer.tsx";
import IconArrowBigRightLines from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/arrow-big-right-lines.tsx";
import AboutIcons from "@/components/AboutIcons.tsx";

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="منصة تعليمية عربية متخصصة في تعلم لغة البرمجة جافاسكريبت بطريقة مبتكرة وتفاعلية."
        />
        <meta
          name="keywords"
          content="تعلم برمجة جافا سكريبت, دورة جافا سكريبت, مبتدئين جافا سكريبت, تطوير الويب بجافا سكريبت, أساسيات جافا سكريبت, مصادر تعلم جافا سكريبت, جافا سكريبت مجاني, موارد تعليم جافا سكريبت, مشروعات تطبيق جافا سكريبت, أفضل كورس جافا سكريبت, أدوات تطوير جافا سكريبت, تحسين أداء جافا سكريبت, جافا سكريبت ES6, تطبيقات ويب بجافا سكريبت, جافا سكريبت الحديثة, مبادئ البرمجة بجافا سكريبت, مستقبل جافا سكريبت, تطبيقات جافا سكريبت النقالة, تصميم واجهة المستخدم بجافا سكريبت, النصائح والحيل في جافا سكريبت, دورات متقدمة جافا سكريبت, استخدام جافا سكريبت في تطوير التطبيقات, مجتمع جافا سكريبت, تعلم جافاسكربت, جافاسكربت, تعليم جافاسكربت, كورس جافاسربت, كورس جافاسكربت مجاني, nakhlahjs, nakhlah, نخلة, نخلة جي اس, نخلة, نخلة جي اس, منصة نخلة, منصة نخلة, جافاسكربت نخلة" />
        <meta property="og:title" content="نخلة جي أس" />
        <meta
          property="og:description"
          content="منصة تعليمية عربية متخصصة في تعلم لغة البرمجة جافاسكريبت بطريقة مبتكرة وتفاعلية."
        />
      </Head>
      <main className="h-[90vh] relative">
        <section class="w-fulloverflow-hidden">
          <div class="container relative w-full px-8 pt-16 mx-auto lg:px-4 z-[5]">
            <div class="flex flex-col w-full mb-12 text-center">
              <h1 class="mb-2 text-6xl font-bold tracking-tighter lg:text-8xl">
                <span class="bg-gradient-to-br from-yellow-500 to-yellow-300 bg-clip-text text-transparent font-bold">JS</span>
                <span class="ml-2 bg-gradient-to-bl from-base-content to-base-content/80 bg-clip-text text-transparent font-bold">نخلة</span>
              </h1>
              <p class="text-3xl mb-2">
                تعلم بسهولة وفعالية
              </p>
              <p class="mx-auto text-lg leading-snug lg:w-1/2">
                منصة تعليمية عربية. مخصصة لاكتساب مهارات لغة البرمجة جافاسكريبت بشكل ممتع ومبتكر. نتبنى نهجًا فريدًا يركز على التعلم التفاعلي والتطبيق العملي المباشر، مما يمكّن المتعلمين من فهم الأساسيات بشكل أعمق وتطبيق مهاراتهم على الفور.
              </p>
              <div class="mt-4 mb-2 flex flex-col md:flex-row justify-center items-center gap-1">
                <a
                  f-partial="/courses"
                  href="/courses"
                  class="px-8 text-lg btn bg-base-content text-base-100 hover:bg-base-200 hover:text-base-content rounded-box"
                >
                  <IconArrowBigRightLines class="ml-2" />
                  ابدأ الآن
                </a>
                <button id="install-pwa" class="px-6 text-lg btn bg-base-content text-base-100 hover:bg-base-200 hover:text-base-content rounded-box" style={{ display: 'none' }}>تحميل التطبيق</button>
              </div>
              <AboutIcons />
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
