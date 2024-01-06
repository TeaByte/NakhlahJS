---
sidebar_position: 3
keywords: [Docusaurus, Markdown, Keywords]
---

# النطاق المحلي والوظائف

المتغيرات التي تم الإعلان عنها داخل الدالة، بالإضافة إلى معلمات الدالة، لها نطاق محلي. وهذا يعني أنها مرئية فقط داخل تلك الوظيفة.

إليك دالة ```myTest``` مع متغير محلي يسمى ```loc```.
```js
function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
```
سيعرض استدعاء الدالة ```()myTest``` السلسلة ```foo``` في وحدة التحكم. سيتسبب سطر ```console.log(loc)``` (خارج الدالة ```myTest```) في حدوث خطأ، حيث لم يتم تعريف ```loc``` خارج الدالة.