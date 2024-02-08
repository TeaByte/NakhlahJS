export default function Footer() {
  return (
    <footer class="bg-base-300 flex flex-col md:flex-row w-full gap-8 md:gap-16 px-8 py-8 text-sm">
      <div class="flex-1">
        <div class="flex items-center flex-1">
          <div class="flex items-center gap-1">
            <a
              href="/"
              title="نخله جي اس"
              data-current="true"
              aria-current="page"
            >
              <img
                title="نخله جي اس"
                alt="Website logo"
                src="/Images/logo.webp"
                class="h-8 w-8"
              />
            </a>
            <a
              href="/"
              title="نخله جي اس"
              class="text-2xl ml-1 font-bold hover:animate-pulse"
              data-current="true"
              aria-current="page"
            >
              <div class="flex items-center">
                <span class="text-yellow-500">JS</span>
                <span class="ml-2 font-bold text-2xl">نخلة</span>
              </div>
            </a>
          </div>
        </div>
        <div class="text-gray-500 mt-1 w-[200px] md:w-fit">
          اكتسب مهارات جافاسكربت بسهولة وفعالية مع منصة نخلة
        </div>
      </div>
      <div class="mb-4" data-fresh-key="الصفحات">
        <div class="font-bold">الصفحات</div>
        <ul class="mt-2">
          <li class="mt-2" data-fresh-key="من نحن">
            <a class="text-gray-500 hover:text-gray-700" href="/courses">
              الدروس
            </a>
          </li>
          <li class="mt-2" data-fresh-key="من نحن">
            <a class="text-gray-500 hover:text-gray-700" href="/about">
              من نحن
            </a>
          </li>
        </ul>
      </div>
      <div class="mb-4" data-fresh-key="المجتمع">
        <div class="font-bold">المجتمع</div>
        <ul class="mt-2">
          <li class="mt-2" data-fresh-key="قناة التلغرام">
            <a
              class="text-gray-500 hover:text-gray-700"
              href="https://t.me/NakhlahJS"
              target="_blank"
            >
              قناة التلغرام
            </a>
          </li>
          <li class="mt-2" data-fresh-key="المجتمع">
            <a
              class="text-gray-500 hover:text-gray-700"
              href="https://t.me/NakhlahChat"
              target="_blank"
            >
              جروب التلغرام
            </a>
          </li>
        </ul>
      </div>
      <div class="text-gray-500 space-y-2">
        <a
          href="https://github.com/TeaByte/NakhlahJS"
          class="inline-block hover:text-black"
          aria-label="GitHub"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-github"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
            </path>
          </svg>
        </a>
      </div>
    </footer>
  );
}
