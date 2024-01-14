import { useEffect, useState } from "preact/hooks";
import { useToast } from "./useToast.ts";
import { doTests } from "./DoTest.ts";

interface EditorProps {
  preCode: string;
  testcases: any[];
  slug: string;
}

declare var window: Window & typeof globalThis;
interface Window {
  editor: any;
}

export default function Editor(props: EditorProps) {
  // set the precode in the editor when it's fully loaded
  useEffect(() => {
    const interval = setInterval(() => {
      if (
        document.getElementById("editor-loading")?.style.display === "none"
      ) {
        window.editor.setValue(props.preCode);
        clearInterval(interval);
      }
    }, 100);
  }, []);

  const [output, setOutput] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [testing, setTesting] = useState<boolean>(false);
  const { showToast } = useToast();

  function handleCodeClear() {
    window.editor.setValue("");
    setOutput("");
  }
  function handleCodeTest() {
    // setTesting(true);
    // const code: string = window.editor.getValue() || "";
    // const runOutput = handleCodeRun();
    // const testcases = props.testcases;
    // if (testcases.length === 0) {
    //   showToast({
    //     msg: "لا يوجد اختبارات لهذا الدرس",
    //     type: "info",
    //   });
    //   return;
    // }
    // const pass = doTests(testcases, code, runOutput);
    // if (pass) {
    //   showToast({
    //     msg: "تم تجاوز الاختبارات بنجاح",
    //     type: "success",
    //   });
    //   localStorage.setItem(props.slug, "done");
    //   setTesting(false);
    //   return;
    // } else {
    //   showToast({
    //     msg: "لم يتم تجاوز الاختبارات",
    //     type: "error",
    //   });
    //   setTesting(false);
    //   return;
    // }
    showToast({
      msg: "هذه الميزة غير متوفرة حالياً",
      type: "warning",
    });
  }

  function handleCodeRun() {
    const code: string | undefined = window.editor.getValue();
    try {
      const capturedOutput: string[] = [];
      const originalConsoleLog = console.log;
      console.log = (...args: any[]) => {
        capturedOutput.push(
          args.map((arg) => {
            if (typeof arg === "object" && arg !== null) {
              return JSON.stringify(arg);
            }
            return arg.toString();
          }).join(" "),
        );
        originalConsoleLog(...args);
      };
      if (code) {
        eval(code);
      }
      setIsError(false);
      setOutput(capturedOutput.join("\n"));
      console.log = originalConsoleLog;
      return capturedOutput.join("\n");
    } catch (error) {
      setIsError(true);
      setOutput(`${error}`);
      return `${error}`;
    }
  }

  return (
    <>
      <div class="flex flex-col gap-2 grow overflow-hidden mt-2 mx-2">
        <div dir="rtl" class="flex gap-2">
          <button
            class={"btn btn-info hover:opacity-75 grow " +
              (isError
                ? "bg-error hover:bg-[#ff6868]"
                : "bg-[#68e4ff] hover:bg-[#68e4ff]")}
            onClick={handleCodeRun}
          >
            تشغيل
          </button>
          <button
            class="btn btn-active btn-ghost grow"
            onClick={handleCodeClear}
          >
            مسح
          </button>
          <button
            class="btn btn-active btn-ghost grow"
            onClick={handleCodeTest}
            disabled={testing}
          >
            {testing
              ? <span class="loading loading-spinner loading-xs"></span>
              : null}
            اختبار
          </button>
        </div>
        <pre
          className={" bg-base-300 overflow-y-scroll rounded-box p-4 mb-2 grow " +
            (isError ? "text-error" : "")}
        >
{output}
        </pre>
      </div>
    </>
  );
}
