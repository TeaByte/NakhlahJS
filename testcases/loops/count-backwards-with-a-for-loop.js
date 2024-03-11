// for (let i = ___; i > ___; i -= ___) {
//   console.log(i);
// }
if (code.includes('for (let i = 10; i > 0; i -= 2) {')) { // TODO: convert to regex
  isPass = true;
} else {
  msg = 'تحقق الرجاء من استخدام الحلقة الصحيحة للتكرار.';
}