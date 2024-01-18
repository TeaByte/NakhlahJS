const regex = /\b(?:let|var)\s+(\w+)\s*=\s*\d+\s*(?:;)?\s*\1\s*=\s*\1\s*\+\s*\d+\s*\b(?:;)?/;
if (regex.test(code)) {
  isPass = true;
  msg = 'Good job!';
} else {
    isPass = false;
    msg = "تحقق من الشروط المطلوبة"
}