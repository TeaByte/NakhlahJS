import { useEffect, useState } from "preact/hooks";
import { useToast } from "./useToast.ts";
import { doTests } from "./DoTest.ts";

interface CounterProps {
  preCode: string;
  testcases: any[];
}

declare var window: Window & typeof globalThis;
interface Window {
  editor: any;
}

export default function Editor(props: CounterProps) {
  const [output, setOutput] = useState<string>("");
  const { showToast } = useToast();
  useEffect(() => {
    const initializeEditor = () => {
      if (window.editor) {
        window.editor.setValue(props.preCode);
      }
    };
    window.onload = initializeEditor;
    return () => {
      window.onload = null;
    };
  }, []);

  function handleCodeClear() {
    window.editor.setValue("");
    setOutput("");
  }
  function handleCodeTest() {
    const code: string = window.editor.getValue() || "";
    const runOutput = handleCodeRun();
    const testcases = props.testcases;
    // TODO: work on this later
    // const pass = doTests(testcases, code, runOutput);
    // if (pass) {
    //   showToast({
    //     msg: "تم تجاوز الاختبارات بنجاح",
    //     type: "success",
    //   });
    //   return;
    // }
    showToast({
      msg: "هذه الخاصية غير متوفرة حالياً",
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
      setOutput(capturedOutput.join("\n"));
      console.log = originalConsoleLog;
      return capturedOutput.join("\n");
    } catch (error) {
      setOutput(`${error}`);
      return `${error}`;
    }
  }

  return (
    <>
      <div class="flex flex-col gap-2 grow overflow-hidden mt-2 mx-2">
        <div dir="rtl" class="flex gap-2">
          <button
            class="btn btn-info grow"
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
          >
            اختبار
          </button>
        </div>
        <pre className=" bg-base-300 overflow-y-scroll rounded-box p-4 mb-4 grow">
{output}
        </pre>
      </div>
    </>
  );
}
