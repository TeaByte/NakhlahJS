import Editor from "../islands/Editor.tsx";

export default function EditorSplit() {
  return (
    <>
      <div class="mt-2">
        <div class="mb-2 mx-2 rounded-lg overflow-hidden">
          <div
            class="h-[400px]"
            dir="ltr"
            id="editor"
          >
            <p
              id="editor-loading"
              class="flex h-full items-center justify-center text-lg bg-[#1E1E1E] rounded-lg"
            >
              جاري تحميل المحرر
            </p>
          </div>
        </div>
      </div>
      <Editor
        preCode={'console.log("Hello World!")'}
        testCode={"x == x"}
      />
    </>
  );
}
