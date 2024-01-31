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
const regex = /country\[2\]/;
if (regex.test(code)) {
    const output = handleCodeRun(code);
    if (output.includes("r")) {
        isPass = true;
        msg = "احسنت";
    } else {
        isPass = false;
        msg = "هل قمت بطباعة الحرف r من كلمة Syria باستخدام الأقواس؟";
    }
} else {
    isPass = false;
    msg = "هل قمت بطباعة الحرف r من كلمة Syria باستخدام الأقواس؟";
}