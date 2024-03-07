/**
 * Executes the provided code and captures the output of console.log.
 * @param {string} code - The code to be executed.
 * @returns {string} - The captured output of console.log.
 */
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
const output = handleCodeRun(code)
if (output == "1500") {
    if (code.includes("console.log(1500)" || 'console.log("1500")' || "console.log('1500')")) {
        isPass = false;
        msg = "لا تحتال علينا, حاول مرة أخرى";
    } else {
        isPass = true;
    }
} else {
    isPass = false;
     msg = "حاول مرة أخرى";
}