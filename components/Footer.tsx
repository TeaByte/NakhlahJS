import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";

export default function Footer() {
  const menus = [
    {
      title: "الصفحات",
      children: [
        { name: "الصفحة الرئيسية", href: "#" },
        { name: "المدونة", href: "#" },
      ],
    },
    {
      title: "المجتمع",
      children: [
        { name: "قناه", href: "https://t.me/NakhlahJS" },
        { name: "جروب", href: "https://t.me/Unassisted" },
      ],
    },
  ];

  return (
    <footer class="bg-base-300 flex flex-col md:flex-row w-full gap-8 md:gap-16 px-8 py-8 text-sm">
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <div class="flex items-center gap-1">
            <img
              title="نخله جي اس"
              alt="Website logo"
              src="/logo.webp"
              class="h-8 w-8"
            />
            <a
              href="/"
              title="نخله جي اس"
              class="text-2xl ml-1 font-bold hover:animate-pulse"
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

      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="text-gray-500 hover:text-gray-700"
                  href={child.href}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-gray-500 space-y-2">
        <a
          href="https://github.com/TeaByte/NakhlahJS"
          class="inline-block hover:text-black"
          aria-label="GitHub"
        >
          <BrandGithub aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
