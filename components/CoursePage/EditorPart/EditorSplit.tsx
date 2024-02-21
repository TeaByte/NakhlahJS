import Editor from "@/islands/Editor.tsx";
import { getPreCode } from "@/utils/precode.ts";
import { getTestingCode } from "@/utils/testingcode.ts";

interface EditorSplitProps {
  slug: string;
}

export default function EditorSplit(props: EditorSplitProps) {
  const precode = getPreCode(props.slug);
  const testingcode = getTestingCode(props.slug);
  return (
    <div class="flex flex-col h-full">
      <div class="mt-2 overflow-hidden h-[100%]">
        <div class="mx-2 border-[6px] h-[100%] border-base-300 bg-base-300 rounded-btn pb-2">
          <div
            class="h-[100%] rounded-box"
            dir="ltr"
            id="editor"
          >
            <div
              id="editor-loading"
              class="overflow-hidden flex justify-center items-center h-full"
            >
              <p class="flex h-full items-center justify-center text-lg rounded-btn text-base-content">
                جاري تحميل المحرر
                <span class="loading loading-lg ml-2"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Editor
        preCode={precode}
        testingCode={testingcode}
        slug={props.slug}
      />
    </div>
  );
}
