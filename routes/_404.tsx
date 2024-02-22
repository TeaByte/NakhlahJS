import { Head } from "$fresh/runtime.ts";
import Footer from "@/components/Main/Footer.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>الصفحة غير موجودة</title>
      </Head>
      <main class="flex flex-col h-full-minus-bar">
        <div class="px-4 py-8 mx-auto grow">
          <div class="max-w-screen-md mx-auto flex flex-col md:mt-8 items-center justify-center">
            <img
              class="my-6"
              src="/Images/logo.webp"
              width="128"
              height="128"
              title="لوغو نخلة جي اس"
              alt="Website logo"
            />
            <h1 class="text-4xl font-bold">الصفحة غير موجودة</h1>
            <p class="my-4">
              تأكد من صحة الرابط.
            </p>
            <a title="العودة إلى صفحة الدروس" href="/courses" class="underline">
              العودة إلى صفحة الدروس
            </a>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
