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
try {
  const output = handleCodeRun(code);
  if (output !== "5") {
    isPass = false;
    msg = "القيمة المطبوعة غير صحيحة";
  }
} catch (error) {
  isPass = false;
  msg = error;
}
// make regex check if student console.log() the variable not string

const regex = /console\.log\((?!("|'|`|5))(.+?)\)/
if (!regex.test(code)) {
  isPass = false;
  msg = "لم تتم طباعة قيمة المتغير أي قيمة أو أنك تحاول الغش";
} else {
    isPass = true;
    msg = "اجابة صحيحة";
}
