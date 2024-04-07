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
output = handleCodeRun(code+"\nconsole.log(SumArr([1, 2, 3, 4, 5]));");
const expectedOutput = "15";
if(output[output.length-1] == expectedOutput){
    isPass = true;
} else {
    isPass = false;
    msg = "يرجى التأكد من أن الدالة تعمل بشكل صحيح";
}