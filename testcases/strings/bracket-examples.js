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
const regex = /console.log\(\s*("|'|`)u("|'|`)\s*\)/;
if (regex.test(code)) {
    isPass = false;
    msg = "أنت تحاول الغش 😠";
} else {
    const output = handleCodeRun(code);
    if (output !== "s") {
        isPass = false;
        msg = "الحرف المطلوب طباعته هو حرف s";
    } else {
        isPass = true;
        msg = "اجابة صحيحة";
    }
}
