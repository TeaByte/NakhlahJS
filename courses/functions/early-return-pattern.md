---
title: الإرجاع المبكر
snippet: عند الوصول إلى بيان الإرجاع، يتوقف تنفيذ الوظيفة الحالية.
order: 7
---

عند الوصول إلى بيان الإرجاع، يتوقف تنفيذ الوظيفة الحالية.

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye");
}
myFun();
```

ما ورد أعلاه سيعرض السلسلة `Hello` في وحدة التحكم، ويعيد السلسلة `World` من
الدالة. لن يتم عرض السلسلة `byebye` أبدًا في وحدة التحكم، لأن الوظيفة تخرج عند
بيان الإرجاع.