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
قم بكتابة الكود الذي يقوم بطباعة السرعة القصوى للطائرة (<code>maxSpeed</code>)
</div>
