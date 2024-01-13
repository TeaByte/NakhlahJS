import Editor from "../islands/Editor.tsx";
import { getTestCase } from "../utils/testcase.ts";

export default function EditorSplit(props: { slug: string }) {
  const testcases = getTestCase(props.slug);
  return (
    <>
      <div class="mt-4">
        <div class="mx-2 border-[6px] border-base-300 rounded-btn pb-2">
          <div
            class="h-[400px] rounded-box"
            dir="ltr"
            id="editor"
          >
            <p
              id="editor-loading"
              class="flex h-full items-center justify-center text-lg rounded-btn text-base-content"
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
