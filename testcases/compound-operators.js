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
code += "\nconsole.log(myVar);";
try {
    const output = handleCodeRun(code);
    console.log("output",output);
    if (output !== "15") {
        isPass = false;
        msg = "قيمة myVar غير صحيحة";
    }
} catch (error) {
    isPass = false;
    msg = error;
}
const regex = /myVar\s*\+\=\s*10/;
if (!regex.test(code)) {
    isPass = false;
    msg = "لم يتم إضافة 10 إلى قيمة myVar";
} else {
    isPass = true;
    msg = "اجابة صحيحة";
}
