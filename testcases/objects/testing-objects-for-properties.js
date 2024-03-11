const regex = /console.log\((\w+)\.hasOwnProperty\("(speed)"\)\)/;

if (regex.test(code)) {
    isPass = true;
} else {
    msg = "قم بالتأكد من استخدام الدالة hasOwnProperty() للتأكد من وجود الخاصية في الكائن المعطى."
}