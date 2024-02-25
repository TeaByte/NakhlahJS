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
code += "\ntry { isPass = true; if (car.manufacturer == undefined || car.model == undefined) isPass = false; } catch (e) { isPass = false; msg = e.message; }"

eval(code)