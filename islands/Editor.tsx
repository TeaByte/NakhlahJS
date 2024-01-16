import { useEffect, useState } from "preact/hooks";
import { useToast } from "./useToast.ts";

interface EditorProps {
  preCode: string;
  testingCode: string;
  slug: string;
}

// deno-lint-ignore no-var
declare var window: Window & typeof globalThis;
interface Window {
  // deno-lint-ignore no-explicit-any
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
    setTesting(true);
    const code: string = window.editor.getValue() || "";
    if (props.testingCode === "") {
      showToast(
        {
          msg: "لا يوجد اختبارات لهذا السؤال",
          type: "info",
        }
      )
      setTesting(false);
      return;
    }
    
    // deno-lint-ignore prefer-const
    let isPass = false;
    // deno-lint-ignore prefer-const
    let msg = "هناك خطأ في الاختبارات";
    try {
      eval(props.testingCode);
      if (isPass) {
        showToast({
          msg: "تم تجاوز الاختبارات بنجاح",
          type: "success",
        });
        localStorage.setItem(props.slug, "done");
        setTesting(false);
        return;
      } else {
        showToast({
          msg: msg,
          type: "error",
        });
        setTesting(false);
        return;
      }
    } catch (error) {
      console.log(error);
      showToast({
        msg: "لم يتم تجاوز الاختبارات",
        type: "error",
      });
      setTesting(false);
      return;
    }
  }

  function handleCodeRun() {
    const code: string | undefined = window.editor.getValue();
    try {
      const capturedOutput: string[] = [];
      const originalConsoleLog = console.log;
      // deno-lint-ignore no-explicit-any
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
