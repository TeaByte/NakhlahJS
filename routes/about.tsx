import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";

import IconBrandTelegram from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-telegram.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github.tsx";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>من نحن</title>
        <meta
          name="description"
          content="التعريف بمنصة نخلة"
        />
        <meta
          name="keywords"
          content="قائمه دروس جافا سكريبت"
        />
        <meta property="og:title" content="من نحن" />
        <meta
          property="og:description"
          content="التعريف بمنصة نخلة"
        />
      </Head>
      <main class="flex flex-col h-full-minus-bar">
        <div class="px-4 py-8 mx-auto grow">
          <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
            <img
              class="my-6"
              src="/Images/logo.webp"
              width="128"
              height="128"
              title="لوغو نخلة جي اس"
              alt="Website logo"
            />
            <h1 class="text-4xl font-bold mb-8">منصة نخلة</h1>

            <div class="mb-8">
              <p class="font-bold text-lg">
                المنصة التعليمية العربية المتخصصة في تعلم لغة البرمجة جافاسكريبت
                بطريقة مبتكرة وتفاعلية. نعتبر أن البرمجة هي مهارة حيوية في عصر
                التكنولوجيا الحديثة، ولهذا السبب أطلقنا هذا المشروع لتمكين
                الأفراد من اكتساب هذه المهارة بسهولة ومتعة.
              </p>
            </div>

            <div class="mb-8">
              <h2 class="text-2xl">
                ما نقدمه
              </h2>
              <p class="opacity-75">
                موقعنا يقدم مجموعة متنوعة من الموارد التعليمية، بدءًا من دروس
                البرمجة الأساسية حتى المستويات المتقدمة، وذلك بأسلوب سهل ومبسَّط.
                نستخدم تقنيات التفاعل والأمثلة العملية لضمان فهم عميق وتطبيق
                عملي للمفاهيم.
              </p>
            </div>

            <div class="mb-8">
              <h2 class="text-2xl">
                المساهمين
              </h2>
              <p class="opacity-75">
                مشروعنا لن يكون ناجحًا بدون مساهمة المحترفين والمحبين للبرمجة في
                مجتمعنا. يقدم فريقنا محتوى متميزًا ويسهم في بناء مجتمع تعليمي نشط
                وداعم. تتنوع خلفياتنا وخبراتنا لضمان تقديم محتوى يلبي احتياجات
                وتطلعات جميع الطلاب.
              </p>
            </div>

            <div class="mb-8">
              <h2 class="text-2xl">
                ملامح بارزة
              </h2>
              <p class="opacity-75 flex flex-col gap-2">
                <span>
                  منصتنا مستوحاة من{" "}
                  <a
                    title="FreeCodeCamp"
                    class="underline"
                    target="_blank"
                    href="https://www.freecodecamp.org/learn"
                  >
                    freeCodeCamp
                  </a>، حيث نقدم لك هيكل تعلم أثبت فعاليته لدى الملايين حول
                  العالم. نتكامل بشكل وثيق مع مستندات
                  <a
                    title="MDN Web Docs"
                    class="underline"
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Web"
                  >
                    {" MDN Web Docs"}
                  </a>، حيث تم صياغة دروسنا باستخدام وثائق موثوقة ومفصلة، مما
                  يعزز دقة وارتباط المحتوى.
                </span>

                <span>
                  تقدم منصتنا تحديات البرمجة التفاعلية لتعزيز فهمك لمفاهيم
                  JavaScript من خلال تمارين وتحديات برمجية تفاعلية، مساهمة في
                  تعزيز تعلمك بشكل فعّال.
                </span>

                <span>
                  وفي سياق الدعم المجتمعي، نشجع على التواصل مع زملائك في التعلم.
                  يُشجع عليك طرح الأسئلة ومشاركة تجاربك من خلال منتدى مجتمعنا
                  النابض بالحياة. نؤمن بأهمية بناء مجتمع فعّال يدعم عملية التعلم
                  وتبادل المعرفة بين أفراده.
                </span>
              </p>
            </div>

            <div class="flex gap-2">
              <a
                class="hover:opacity-75"
                target="_blank"
                title="تلغرام منصه نخله"
                href="https://t.me/NakhlahJS"
              >
                <IconBrandTelegram />
              </a>
              <a
                class="hover:opacity-75"
                target="_blank"
                title="سورس منصه نخله"
                href="https://github.com/TeaByte/NakhlahJS"
              >
                <IconBrandGithub />
              </a>
            </div>

            <a title="العودى الى الصفحة الرئيسية" href="/" class="underline">
              العودى الى الصفحة الرئيسية
            </a>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
