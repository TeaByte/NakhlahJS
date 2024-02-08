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
if (output != "50") {
  isPass = false;
  msg = "هناك خطاء في الكود";
} else {
  const regexWidth = /(let|const|var)(\s*)width(\s*)?=(\s*)?10(;)?/g
  const regexLength = /(let|const|var)(\s*)length(\s*)?=(\s*)?5(;)?/g
  const regexArea = /(let|const|var)(\s*)area(\s*)?=(\s*)?((width[\s*]?\*[\s*]?length)|(length[\s*]?\*[\s*]?width))/g
  const regex = [regexWidth, regexLength, regexArea]
  const results = regex.map((reg) => reg.test(code))
  if (results.includes(false)) {
    isPass = false;
    msg = "هناك خطاء في الكود";
  } else {
    isPass = true;
    msg = "احسنت";
  }
}