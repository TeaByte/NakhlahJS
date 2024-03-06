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
if (!code.includes('october-73')) {
    isPass = false;
    msg = "هل قمت بتعديل القيمة الصحيحة؟";
} else {
    const output = handleCodeRun(code + "\nconsole.log(fighter.wars[0]);")
    console.log(output);
    if (output.includes("october-73")) {
        isPass = true;
        msg = "احسنت";
    } else {
        isPass = false;
        msg = "هل قمت بتعديل القيمة الصحيحة؟";
    }

}
