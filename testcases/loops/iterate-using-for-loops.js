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
                }).join(" "),);
            originalConsoleLog(...args);
        };
        if (code) {
            eval(code);
        }
        console.log = originalConsoleLog;
        return capturedOutput
    } catch (error) {
        return `${error}`;
    }
}

if (code.includes("for")) {
    let output = handleCodeRun(code + "\nconsole.log(oddNumbers);")
    output = output[output.length - 1];
    if (output == JSON.stringify([1, 3, 5, 7, 9])) {
        isPass = true;
    } else {
        msg = "تأكد من النتائج";
    }
} else {
    msg = "الرجاء التأكد من استخدام الحلقة الصحيحة للتكرار.";
}