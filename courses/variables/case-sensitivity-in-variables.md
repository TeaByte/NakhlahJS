---
title: فهم حساسية الحالة في المتغيرات
snippet: في جافاسكربت، جميع المتغيرات وأسماء الدوال حساسة لحالة الأحرف
order: 4
---

في جافاسكربت، جميع المتغيرات حساسة لحالة الأحرف. وهذا يعني أن التسميه مهمة.

`MYVAR` ليس هو نفسه `MyVar` أو `myvar`. من الممكن أن يكون لديك عدة متغيرات مميزة
بنفس الاسم ولكن بحالة مختلفة. يوصى بشدة بعدم استخدام ميزة اللغة هذه، من أجل
الوضوح.

## طريقة التسمية المفضلة

طريقه التسمية المفضلة في مجتمع جافاسكربت هي ال (`camelCase`) يمكنك التعرف عن ال
(`camelCase`). عبر مستندات
[MDN](https://developer.mozilla.org/en-US/docs/Glossary/Camel_case).

امثلة التسمية في ال (`camelCase`):

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

<div class="quiz">
قم بطباعة المتغير الذي يحقق تسميه ال <code>camelCase</code>
</div>
