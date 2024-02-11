---
title: تسلسل العبارات else/else if
snippet: مكن ربط عبارات if/else معًا لتحقيق منطق معقد.
order: 8
---

يمكن ربط عبارات `if/else` معًا لتحقيق منطق معقد. فيما يلي مثال لعبارات
`if/else if` المتعددة المتسلسلة:

```js
function calculateGrade(score) {
  if (score >= 90) {
    console.log("Grade A");
  } else if (score >= 80) {
    console.log("Grade B");
  } else if (score >= 70) {
    console.log("Grade C");
  } else if (score >= 60) {
    console.log("Grade D");
  } else {
    console.log("Grade F");
  }
}

calculateGrade(95); // Grade A
calculateGrade(85); // Grade B
calculateGrade(75); // Grade C
calculateGrade(65); // Grade D
calculateGrade(55); // Grade F
```
