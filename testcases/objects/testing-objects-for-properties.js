// the code must contain this line console.log(fighter.hasOwnProperty("speed"))
const regex = /console.log\((\w+)\.hasOwnProperty\("(\w+)"\)\)/;
if (regex.test(code)) {
    isPass = true;
} else {
    isPass = false;
    msg = "قم بالتأكد من استخدام الدالة hasOwnProperty() للتأكد من وجود الخاصية في الكائن المعطى."
}