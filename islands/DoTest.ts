
function testRegex(regex: string, text: string): boolean {
    const re = new RegExp(regex);
    return re.test(text);
}
function checkText(text1: string, text2: string): boolean {
    return text1 === text2;
}
/*
{
    "output": {
        "regex": ".*",
        "output": "Hi"
    },
    "code": {
        "regex": ".*",
        "code": ["console.log('Hi');"]
    }
}
*/
function doTest(testCase: any, code: string, output: string): boolean {
    const { code: codeTest, output: outputTest } = testCase;
    const codeRegex = codeTest.regex;
    const outputRegex = outputTest.regex;
    const codesCheck = codeTest.code;
    const outputCheck = outputTest.output;
    if (!testRegex(codeRegex, code)) {
        console.log(codeRegex, code);
        console.log("Code is not correct 1");
        return false;
    }
    if (!testRegex(outputRegex, output)) {
        console.log(outputRegex, output);
        console.log("Output is not correct 1");
        return false;
    }

    let isCodeCorrect = false;
    for (const codeCheck of codesCheck) {
        if (checkText(codeCheck, code)) {
            isCodeCorrect = true;
            break;
        }
    }

    if (!isCodeCorrect) {
        console.log(codesCheck, code);
        console.log("Code is not correct 2");
        return false;
    }
    if (!checkText(outputCheck, output)) {
        console.log(outputCheck, output);
        console.log("Output is not correct 2");
        return false;
    }
    return true;
}

export function doTests(testCases: any[], code: string, output: string): boolean {
    for (const testCase of testCases) {
        if (!doTest(testCase, code, output)) {
            // console.log(testCase);   
            return false;
        }
    }
    return true;
}