import { Head } from "$fresh/runtime.ts";
import Footer from "@/components/Footer.tsx";

export default function Offline() {
  return (
    <>
      <Head>
        <title>الصفحه غير موجوده</title>
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
            <h1 class="text-4xl font-bold">نعتذر منكم لعدم توفر الصفحة</h1>
            <p class="my-4">
              أنت غير متصل بالانترنت، تأكد من اتصالك بالانترنت وحاول مرة اخرى.
            </p>
            <a title="العودى الى صفحة الدروس" href="/courses" class="underline">
              العودى الى صفحة الدروس
            </a>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
