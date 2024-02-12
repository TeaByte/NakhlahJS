import { Head } from "$fresh/runtime.ts";

import AboutIcons from "@/components/AboutIcons.tsx";
import Footer from "../components/Footer.tsx";

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
                منصة تعليمية عربية، متخصصة في تعلم لغة البرمجة جافاسكريبت بأسلوب مبتكر وتفاعلي. نعتبر البرمجة مهارة حيوية في عصر التكنولوجيا الحديثة، ولذلك قمنا بإطلاق هذا المشروع بهدف تمكين الأفراد من اكتساب هذه المهارة بسهولة وبمتعة لا تضاهى. انضم إلينا في رحلة التعلم المثيرة واستكشف عالم البرمجة بطريقة ممتعة ومبسطة، حيث نقدم تجربة تعلم فريدة تجمع بين الإبداع والتحدي لضمان تطوير مستدام وفعّال للمهارات البرمجية الخاصة بك.
              </p>
            </div>

            <div class="mb-8">
              <h2 class="text-2xl">
                ما نقدمه
              </h2>
              <p class="opacity-75">
                في موقعنا، نُقدم مجموعة شاملة من الموارد التعليمية لتعلم لغة البرمجة جافاسكريبت بسهولة وبساطة. بدءًا من دروس البرمجة الأساسية وصولاً إلى المستويات المتقدمة، نركز على تسهيل فهم المفاهيم من خلال التفاعل والتطبيق العملي. نشجع بشدة على التفاعل مع المحتوى والمشاركة الفعَّالة، مما يساعد في بناء مهارات البرمجة بشكل أفضل. هدفنا هو توفير تجربة تعلم فعَّالة وممتعة تعتمد على البساطة والتفاعل، لضمان تطوير مهاراتك بثقة وسهولة.
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
                  منصتنا مستوحاة من منصة {" "}
                  <a
                    title="FreeCodeCamp"
                    class="underline"
                    target="_blank"
                    href="https://www.freecodecamp.org/learn"
                  >
                    (freeCodeCamp)
                  </a>، حيث نقدم لك هيكل تعلم أثبت فعاليته لدى الملايين حول
                  العالم. نتكامل بشكل وثيق مع مستندات
                  <a
                    title="MDN Web Docs"
                    class="underline"
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Web"
                  >
                    {" (MDN Web Docs)"}
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
            <AboutIcons />
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
