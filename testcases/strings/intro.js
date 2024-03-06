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
      return capturedOutput
  } catch (error) {
      return `${error}`;
  }
}

const output = handleCodeRun(code);
const regex = /(let|const|var)\s+\w+\s*=/;
if (regex.test(code)) {
    if (output == "Ich Bin Yazan\nI am Yazan") {
        isPass = true;
    } else {
        isPass = false;
        msg = "The output is not correct";
    }
}

