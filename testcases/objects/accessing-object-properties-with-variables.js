// the code must contain console.log(fighter[Country])
const codeRegex = /console.log\(fighter\[Country\]\)/;
if (codeRegex.test(code)) {
    isPass = true;
} else {
    isPass = false;
    msg = "مالك ما عارف تحل؟؟؟؟"
}