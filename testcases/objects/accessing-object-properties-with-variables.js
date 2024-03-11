// the code must contain console.log(fighter[Country])
const codeRegex = /console.log\(fighter\[Country\]\)/;

if (codeRegex.test(code)) {
    isPass = true;
} else {
    msg = "تاكد من الشروط";
}