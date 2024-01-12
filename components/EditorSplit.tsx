import Editor from "../islands/Editor.tsx";
import { getTestCase } from "../utils/testcase.ts";

export default function EditorSplit(props: { slug: string, labelSlug: string }) {
  const testcases = getTestCase(props.slug);
  return (
    <>
      <div class="mt-4">
        <div class="mb-2 mx-2">
          <div
            class="h-[400px]"
            dir="ltr"
            id="editor"
          >
            <p
              id="editor-loading"
              class="flex h-full items-center justify-center text-lg bg-[#1E1E1E] rounded-box"
            >
              جاري تحميل المحرر
            </p>
          </div>
        </div>
      </div>
      <Editor
        preCode={'console.log("Hello World!")'}
        testcases={testcases}
      />
    </>
  );
}
