---
title: اختبار خصائص الكائنات
snippet: للتحقق من وجود خاصية على كائن معين أم لا
order: 6
---

للتحقق من وجود خاصية على كائن معين أم لا، يمكنك استخدام دالة كائنية (`Method`)
`()hasOwnProperty.`.

<mark>
ستتعرف في دروس قادما عن الدوال الكائنية او بما يعرف بال (<code>Methods</code>)
</mark>

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow",
};

console.log(ourDog.hasOwnProperty("bark")); // true
```

تُرجع `true` `ourDog.hasOwnProperty(someProperty)` أو `false` بناءً على ما إذا
كانت الخاصية موجودة على الكائن أم لا.

مثال اخر:

```js
function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

checkForProperty({ top: "hat", bottom: "pants" }, "top"); // true
checkForProperty({ top: "hat", bottom: "pants" }, "middle"); // false
```

يُرجع استدعاء الدالة `checkForProperty` الأول `true`، بينما يُرجع الثاني `false`.

<div class="quiz">
قم بكتابة سطر برمجي يقوم بالتحقق من وجود خاصية  <code>speed</code> على الكائن  <code>fighter</code> و من ثم طباعة النتيجة في الكونسول.
</div>
