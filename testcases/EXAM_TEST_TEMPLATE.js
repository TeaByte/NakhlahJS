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
// ! The variable 'code' already defined and not needed to be redefined. Just use it.
// To test the code, we can compare it with the expected code using a regular expression or exact string match. or any other method you prefer.

const output = handleCodeRun(code); // Execute the student's code and capture the output of console.log.

const expectedCode = "console.log(`I'm hacker`);"; // Define the expected code.

// Compare the student's code with the expected code using a regular expression.
// You can modify the regular expression pattern to match the specific requirements of the code.
const codeRegex = /console\.log\(`I'm hacker`\);/;
const isCodePass = codeRegex.test(code);

// Compare the captured output with the expected output using a regular expression.
// You can modify the regular expression pattern to match the specific requirements of the output.
const outputRegex = /I'm hacker/;
const isOutputPass = outputRegex.test(output);

// ! there are already two var isPass and msg defined, No need for redefining them. Just use them.

if (isCodePass && isOutputPass) {
    isPass = true;
    msg = "Ok";
} else {
    isPass = false;
    msg = "Not Ok";
}