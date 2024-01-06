---
title: فهم المتغيرات غير المهيأة
snippet: This is an excerpt of my first blog post.
order: 3
---

# فهم المتغيرات غير المهيأة

عندما يتم الإعلان عن متغيرات JavaScript، تكون قيمتها الأولية غير محددة (
[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
). إذا أجريت عملية حسابية على متغير غير محدد فستكون النتيجة (
[NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
) والتي تعني "ليس رقمًا". إذا قمت بعمليات على سلسلة مع متغير غير محدد، سوف تحصل
على سلسلة من غير معرف.

```js
var a; // undefined
var c; // undefined

a = a + 1;
c = c + " String!";

console.log(a); // NaN
console.log(c); // "undefined String!"
```

كما تلاحظ المخرجات داخل التعليقات السابقة.

:::note ملاحظة

سنتعرف قريبًا على العمليات الحسابيه على الارقام والسلاسل قريبا

:::
