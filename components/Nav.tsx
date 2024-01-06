export default function NavBar() {
  const menus = [
    { name: "later", href: "/" },
    { name: "later", href: "/docs" },
  ];

  return (
    <nav class="bg-base-300 w-full py-4 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
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
            NakhlahJS
          </a>
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class="text-gray-500 hover:text-gray-700 py-1 border-gray-500 hidden"
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
