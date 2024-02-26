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
        return capturedOutput
    } catch (error) {
        return `${error}`;
    }
}
if (code.includes("while")) {
    const output = handleCodeRun(code); 
    console.log(output);
    if (JSON.stringify(output) === JSON.stringify([ '1', '2', '3', '4', '5' ])) {
        isPass = true;
    } else {
        isPass = false;
        msg = "الرجاء التأكد من استخدام الحلقة الصحيحة للتكرار.";
    }
} else {
    isPass = false;
    msg = "الرجاء التأكد من استخدام الحلقة الصحيحة للتكرار.";
}