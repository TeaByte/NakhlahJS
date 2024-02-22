---
title: أمثلة على استخدام الأقواس
snippet: استخدم الأقواس للعثور على الحرف في سلسلة
order: 6
---

## استخدم الأقواس للعثور على الحرف N في سلسلة

يمكنك أيضًا استخدام تدوين الأقواس للحصول على الحرف في مواضع أخرى داخل السلسلة.

تذكر أن أجهزة الكمبيوتر تبدأ العد عند 0، وبالتالي فإن الحرف الأول هو في الواقع
الحرف الصفري.

```js
const firstName = "Adam";
const secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName);
```

سيكون إلى `SecondLetterOfFirstName` قيمة السلسلة `d`.

## استخدم الأقواس للعثور على الحرف الأخير في سلسلة

للحصول على الحرف الأخير من السلسلة، يمكنك طرح حرف واحد من طول السلسلة.

على سبيل المثال، إذا كان `"const firstName = "Ada`، فيمكنك الحصول على قيمة الحرف
الأخير من السلسلة باستخدام `firstName[firstName.length - 1]`.

```js
const firstName = "Adam";
const lastLetter = firstName[firstName.length - 1];
console.log(lastLetter);
```

`lastLetter` سيكون له قيمة السلسلة `m`.

<!-- quiz make use get the char last the last letter -->
<!--
const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];
 -->
<div class="quiz">
قم بطباعة الحرف الثالث من الأخير في السلسلة <code>Augusta</code>.
<div>
