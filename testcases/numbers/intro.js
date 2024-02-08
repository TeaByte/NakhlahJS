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
const output = handleCodeRun(code);
if (!output.includes(50)) {
  isPass = false;
  msg = "هناك خطاء في الكود";
} else {
  // TODO: complete the regex
  const regexWidth = ''
  const regexLength = ''
  const regexArea = ''
}