---
title: تسلسل العبارات المنطقية
snippet: يمكن ربط عبارات if/else معًا لتحقيق منطق معقد
order: 8
---

يمكن ربط عبارات `if/else` معًا لتحقيق منطق معقد. فيما يلي مثال لعبارات
`if/else if` المتعددة المتسلسلة:

```js
function calculateGrade(score) {
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}

calculateGrade(95); // A
calculateGrade(85); // B
calculateGrade(75); // C
calculateGrade(65); // D
calculateGrade(55); // F
```

<div class="quiz">
نعتذر عن عدم وجود اختبار لهذا الدرس حالياً. نحن نعمل بجد لإعداد اختبارات لجميع الدروس وسنقوم بتوفيرها في أقرب وقت ممكن.
</div>
