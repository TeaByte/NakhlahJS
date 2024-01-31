// create regex check if the code contains var or cost or let varibale that contain A string
const regex =  /(var|let|const)\s*[a-zA-Z0-9]*\s*=\s*("|'|`)[a-zA-Z0-9]*\2(;|)/
if (regex.test(code)) {
  isPass = true;
  msg = 'Good job!';
} else {
    isPass = false;
    msg = "تحقق من الشروط المطلوبة"
}