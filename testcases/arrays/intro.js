const regex = /(let|const|var)\s*\w*\s*=\s*\[(("|`|')\w*\3(,|)(\s*|)(,|)(\s*|))*\]/g;

if (regex.test(code)) {
  isPass = true;
}
else {
  msg = "تحقق من الشروط المطلوبة"
}