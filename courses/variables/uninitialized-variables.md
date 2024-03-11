---
title: فهم المتغيرات غير المهيأة
snippet: عندما يتم الإعلان عن متغيرات تكون قيمتها الأولية غير محددة
order: 3
---

عندما يتم الإعلان عن متغيرات جافاسكربت، تكون قيمتها الأولية غير محددة (
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

<mark>

سنتعرف قريبًا على العمليات الحسابيه على الارقام والسلاسل قريبا

</mark>

<div class="quiz">
قم بتعريف متغير غير المهيء ثم غير قيمته إلى كلمه <code>عربي</code>.
</div>
