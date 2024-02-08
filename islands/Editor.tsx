import { useEffect, useState } from "preact/hooks";
import { newPassSignal } from "./signals/store.ts";
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
  // deno-lint-ignore no-explicit-any
  testPassedEffect: any;
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

  const [numberOfTest, setNumberOfTest] = useState<number>(1);
  const [testing, setTesting] = useState<boolean>(false);
  const [isTestPassed, setIsTestPassed] = useState<boolean | undefined>(
    undefined,
  );

  function handleCodeClear() {
    window.editor.setValue("");
    setOutput("");
  }
  function handleCodeTest() {
    setTesting(true);
    const code: string = window.editor.getValue() || "";
    if (props.testingCode === "") {
      setOutput("لا يوجد اختبارات لهذا الدرس");
      setTesting(false);
      return;
    }
    // deno-lint-ignore prefer-const
    let isPass = false;
    // deno-lint-ignore prefer-const
    let msg = "هناك خطأ في الاختبارات";
    try {
      try {
        eval(code);
      } catch (e) {
        setTesting(false);
        setIsTestPassed(false);
        setNumberOfTest(numberOfTest + 1);
        setIsError(true);
        setOutput(`[Test Failed, ${numberOfTest}]\n${e}`);
        return;
      }

      setIsError(false);
      eval(props.testingCode);
      if (isPass) {
        const courseSlug = props.slug;
        const passedCourses = localStorage.getItem("passedCourses");
        // check if there are a value in the local storage
        if (passedCourses) {
          const passedCoursesArray = JSON.parse(passedCourses);
          // check if the course is already passed if not add it to the array and if yes do nothing
          if (!passedCoursesArray.includes(courseSlug)) {
            passedCoursesArray.push(courseSlug);
            localStorage.setItem(
              "passedCourses",
              JSON.stringify(passedCoursesArray),
            );
          }
        } else {
          localStorage.setItem("passedCourses", JSON.stringify([courseSlug]));
        }
        newPassSignal.value = newPassSignal.value + 1;
        setOutput("[Test Passed] -> تم تجاوز الاختبارات بنجاح");
        setIsTestPassed(true);
        setTesting(false);
        window.testPassedEffect();
        return;
      } else {
        setOutput(`[Test Failed, ${numberOfTest}] -> ${msg}`);
        setIsTestPassed(false);
        setTesting(false);
        setIsError(true);
        setNumberOfTest(numberOfTest + 1);
        return;
      }
    } catch (error) {
      setOutput(`${error}`);
      setIsTestPassed(false);
      setTesting(false);
      return;
    }
  }

  function handleCodeRun() {
    const code: string | undefined = window.editor.getValue();
    try {
      setIsTestPassed(undefined);
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
      if (capturedOutput.length > 0) {
        setOutput(capturedOutput.join("\n"));
      } else {
        setOutput("لا يوجد اي شيء يتم طباعته");
      }

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
            class={"btn btn-info hover:bg-[#5bbcd1] grow border-0 " +
              (isError
                ? "bg-error hover:bg-[#ff6868]"
                : "bg-[#5bbcd1] hover:opacity-80")}
            onClick={handleCodeRun}
          >
            تشغيل
          </button>
          <button
            class="btn ghost-color grow"
            onClick={handleCodeClear}
          >
            مسح
          </button>
          <button
            class={`btn grow border-0 ${
              isTestPassed === undefined
                ? "ghost-color"
                : isTestPassed
                ? "btn-info bg-success hover:bg-[#9bc27a]"
                : "btn-info bg-error hover:bg-[#ff6868]"
            }`}
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
          className={" bg-base-300 overflow-y-scroll rounded-box p-4 mb-2 grow font-bold " +
            (isError ? "text-error" : isTestPassed ? "text-success" : "")}
        >
          {output}
        </pre>
      </div>
    </>
  );
}
