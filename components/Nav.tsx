import ThemeToggle from "../islands/ThemeToggle.tsx";
import { cache, populateCache } from "../utils/course-cache.ts";
import Drawer from "./Drawer.tsx";

populateCache();

export default function NavBar() {
  return (
    <nav class="bg-base-300 w-full py-4 px-4 md:px-8 flex items-center gap-4 border-b base-content">
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
            <div class="flex items-center">
              <span class="text-yellow-500">JS</span>
              <span class="ml-2 font-bold text-2xl">نخلة</span>
            </div>
          </a>
        </div>
      </div>
      <Drawer courses={cache.courses} />
      <ThemeToggle />
    </nav>
  );
}
