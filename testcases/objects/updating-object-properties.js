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
// if the code contain console.log() write message
if (code.includes("console.log(")) {
    isPass = false;
    msg = "اكتب الجواب بدون استخدام console.log";
} else {
    code += "\nconsole.log(fighter.speed+fighter.speedUnit)"
    const output = handleCodeRun(code);
    const expectedOutput = "2450km/h";
    if (output == expectedOutput) {
        isPass = true;
    } else {
        isPass = false;
        msg = "الله يبارك فيك ركز شوية وحاول مره ثانية"
    }
}