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
    msg = "هل قمت بتعديل القيمة الصحيحة؟";
} else {
    const output = handleCodeRun(code + "\nconsole.log(fighter.wars[0]);")
    console.log(output);
    if (output.includes("october-73")) {
        isPass = true;
    } else {
        msg = "هل قمت بتعديل القيمة الصحيحة؟";
    }

}