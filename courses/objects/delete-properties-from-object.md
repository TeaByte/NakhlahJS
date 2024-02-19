---
title: حذف الخصائص من كائن
snippet: لا يوجد
order: 5
---

يمكننا أيضًا حذف الخصائص من كائنات بهذه الطريقة:

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
