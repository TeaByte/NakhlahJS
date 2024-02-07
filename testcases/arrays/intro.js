// check if in the code there are array and it contains names
const regex = /(let|const|var)\s*\w*\s*=\s*\[(("|`|')\w*\3(,|)(\s*|)(,|)(\s*|))*\]/g;
if (regex.test(code)) {
  isPass = true;
  msg = 'Good job!';
}
else {
  isPass = false;
  msg = "تحقق من الشروط المطلوبة"
}