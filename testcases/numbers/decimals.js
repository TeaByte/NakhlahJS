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
const regexMyDec = /\bmyDecimal\b = 3\.14/;
const product_pattern = /product = myDecimal \* 4/;
const print_pattern = /console\.log\(product\)/;
if (regexMyDec.test(code) && product_pattern.test(code) && print_pattern.test(code)) {
    const output = handleCodeRun(code);
    if (output === "12.56") {
        isPass = true;
        msg = "اجابة صحيحة";
    } else {
        isPass = false;
        msg = "قيمة myDecimal غير صحيحة";
    }
} else {
    isPass = false;
    msg = "لم يتم إنشاء متغير myDecimal وحساب قيمة المتغير product وطباعة قيمة المتغير product";
}