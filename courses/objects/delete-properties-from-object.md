---
title: حذف الخصائص من كائن
snippet: يمكننا أيضًا حذف الخصائص من كائنات
order: 5
---

يمكننا أيضًا حذف الخصائص من الكائنات بهذه الطريقة:

```js
delete ourDog.bark;
```

مثال توضيحي:

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow",
};

delete ourDog.bark;
```

عندما يتنفذ سطر الحذف هكذا سيكون شكل الكائن الجديد:

```js
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```

<div class="quiz">
إحذف خاصية <code>operator</code> من الكائن <code>fighter</code>.
</div>
