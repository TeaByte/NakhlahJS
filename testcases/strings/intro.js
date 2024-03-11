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

const output = handleCodeRun(code);
const regex = /(let|const|var)\s+\w+\s*=/;

if (regex.test(code)) {
    if (!code.includes("\\n")) {
        msg = "يجب أن تكون في أسطر مختلفة ";
    } else if (output == "Hello\nWorld") {
        isPass = true;
    } else {
        msg = "الإخراج غير صحيح";
    }
}

