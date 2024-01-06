import { StateUpdater, useEffect, useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  preCode: string;
  testCode: string;
}

declare var window: Window & typeof globalThis;
interface Window {
  editor: any; // Replace 'any' with the actual type of your 'editor' property
}

export default function Editor(props: CounterProps) {
  const [output, setOutput] = useState<string>("");

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

  function handleCodeRun() {
    const code: string | undefined = window.editor.getValue();
    try {
      const capturedOutput: string[] = [];
      const originalConsoleLog = console.log;
      console.log = (...args: any[]) => {
        capturedOutput.push(args.map((arg) => JSON.stringify(arg)).join(" "));
        originalConsoleLog(...args);
      };
      if (code) {
        eval(code);
      }
      setOutput(`${capturedOutput.join("\n")}`);
      console.log = originalConsoleLog;
    } catch (error) {
      setOutput(`${error}`);
    }
  }

  return (
    <>
      <div dir="rtl" class="flex gap-2 px-2">
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
      </div>

      <div class="bg-base-300 grow overflow-y-scroll mx-2 rounded-lg">
        <pre className=" bg-base-300 overflow-y-hidden p-4">

{output}

        </pre>
      </div>
    </>
  );
}
