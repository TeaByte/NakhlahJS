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
    msg = "القيمة المطبوعة غير صحيحة";
  }
} catch (error) {
  msg = error;
}

const regex = /console\.log\((?!("|'|`|5))(.+?)\)/

if (!regex.test(code)) {
  msg = "لم تتم طباعة قيمة المتغير";
} else {
  isPass = true;
}
