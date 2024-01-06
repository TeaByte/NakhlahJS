import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>الصفحه غير موجوده</title>
      </Head>
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.webp"
            width="128"
            height="128"
            title="NakhlahJS Logo"
            alt="Website logo"
          />
          <h1 class="text-4xl font-bold">الصفحه غير موجوده</h1>
          <p class="my-4">
            الصفحة التي تبحث عنها غير موجودة.
          </p>
          <a title="العودى الى الصفحة الرئيسية" href="/" class="underline">
            العودى الى الصفحة الرئيسية
          </a>
        </div>
      </div>
    </>
  );
}
