---
title: تحديث و إضافة خصائص جديدة للكائن
snippet: يمكنك استخدام تدوين النقطة أو القوس للتحديث
order: 4
---

## تحديث خصائص الكائن

بعد إنشاء كائن جافاسكربت، يمكنك تحديث خصائصه في أي وقت تمامًا كما تفعل مع أي
متغير آخر. يمكنك استخدام تدوين النقطة أو القوس للتحديث.

على سبيل المثال، دعونا ننظر إلى المثال:

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
};
```

فلنغير اسم الكلب إلى `Buddy`

```js
// إليك كيفية تحديث خاصية اسم الكائن:
ourDog.name = "Buddy";
// او عبر الاقواس
ourDog["name"] = "Buddy";
```

الآن عندما نقوم باستدعاء اسم الكلب الخاص بنا، فبدلاً من الحصول على `Camper` سنحصل
على اسمه الجديد `Buddy`

## اضافة خصائص جديدة للكائن

يمكنك إضافة خصائص جديدة إلى كائنات جافاسكربت الموجودة بنفس الطريقة التي تقوم بها
بتعديلها.

إليك كيفية إضافة خاصية `bark` إلى `ourDog`:

```js
ourDog.bark = "bow-wow";
// او عبر الاقواس
ourDog["bark"] = "bow-wow";
```

الآن عندما نقوم باستدعاء `ourDog.bark`، سنحصل على `bow-wow`.

مثال توضيحي:

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
};

ourDog.bark = "bow-wow";
```

<div class="quiz">
قم بتحديث الكائن <code>fighter</code> إلى كائن يحتوي على خاصية <code>speed</code> بقيمة <code>2450</code>.
</div>
