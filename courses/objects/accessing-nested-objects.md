---
title: الوصول إلى الكائنات المتداخلة 
snippet: يمكن الوصول إلى للكائنات الفرعية عن طريق ربط تدوين النقطة أو القوس
order: 8
---

يمكن الوصول إلى للكائنات الفرعية عن طريق ربط تدوين النقطة أو القوس.

فيما يلي مثال على كائن متداخل:

```js
const ourStorage = {
  "desk": {
    "drawer": "stapler",
  },
  "cabinet": {
    "top drawer": {
      "folder1": "a file",
      "folder2": "secrets",
    },
    "bottom drawer": "soda",
  },
};

console.log(ourStorage.cabinet["top drawer"].folder2);
console.log(ourStorage.desk.drawer);
```

سيكون `OurStorage.cabinet["top Draw"].folder2` هو سلسلة `secrets`، وسيكون
`OurStorage.desk.drawer` هو سلسلة `stapler`.

<div class="quiz">
نعتذر عن عدم وجود اختبار لهذا الدرس حالياً. نحن نعمل بجد لإعداد اختبارات لجميع الدروس وسنقوم بتوفيرها في أقرب وقت ممكن.
</div>
