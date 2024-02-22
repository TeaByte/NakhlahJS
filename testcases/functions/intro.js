function handleCodeRun(code) {
  try {
    const capturedOutput = [];
    const originalConsoleLog = console.log;
    console.log = (...args) => {
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
    console.log = originalConsoleLog;
    return capturedOutput.join("\n");
  } catch (error) {
    return `${error}`;
  }
}
code += "\nconsole.log(area(5, 5));"
const output = handleCodeRun(code);
if (output) {
  if (output === "25") {
    isPass = true;
    msg = "مبروك الحل صحيح"
  } else {
    isPass = false;
    msg = "هناك خطاء ما"
  }
}