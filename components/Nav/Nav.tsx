import { cache } from "@/utils/course-cache.ts";

import ThemeToggle from "@/islands/ThemeToggle.tsx";
import Drawer from "@/components/Nav/Drawer.tsx";
import Icon from "@/components/Nav/Icon.tsx";

export default function NavBar() {
  return (
    <nav class="bg-base-300 w-full py-4 px-4 flex items-center gap-4 border-b-2 nav">
      <div class="flex items-center flex-1">
        <div class="flex items-center gap-1 pr-2">
          <a href="/" title="نخلة جي اس">
            <img
              title="نخلة جي اس"
              alt="Website logo"
              src="/Images/logo.webp"
              class="h-8 w-8"
            />
          </a>
          <a
            href="/"
            title="نخلة جي اس"
            class="text-2xl ml-1 font-bold hover:animate-pulse"
          >
            <Icon />
          </a>
        </div>
      </div>
      <div class="flex gap-2 items-center">
        <ThemeToggle />
        <Drawer courses={cache.courses} />
      </div>
    </nav>
  );
}
