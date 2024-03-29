---
title: الكائنات والتعامل معها
snippet: الكائنات تشبه المصفوفات باستثناء أنه بدلاً من استخدام الفهارس
order: 1
---

ربما سمعت مصطلح الكائن `(Object)` من قبل.

الكائنات تشبه المصفوفات `(Array)`، باستثناء أنه بدلاً من استخدام الفهارس
`(Index)` للوصول إلى بياناتها وتعديلها، يمكنك الوصول إلى البيانات الموجودة في
الكائنات من خلال ما يسمى بالخصائص `(Properties)`.

تعتبر الكائنات مفيدة لتخزين البيانات بطريقة منظمة، ويمكن أن تمثل كائنات من
العالم الحقيقي، مثل القطة.

فيما يلي نموذج لكائن القط:

```js
const cat = {
  "name": "Lucifer",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"],
};
```

في هذا المثال، يتم تخزين كافة الخصائص `(Properties)` كسلاسل، مثل الاسم والأرجل
والذيول. ومع ذلك، يمكنك أيضًا استخدام الأرقام كخصائص. يمكنك أيضًا حذف علامات
الاقتباس لخصائص السلسلة المكونة من كلمة واحدة، كما يلي:

```js
const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus",
};
```

ومع ذلك، إذا كان الكائن الخاص بك يحتوي على أي خصائص غير سلسلة، فسوف تقوم
جافاسكربت تلقائيًا بكتابتها كسلاسل.

<div class="quiz">
قم بإنشاء كائن يمثل السيارة <code>car</code>، ويحتوي على الخصائص التالية:<br>
- الصانع: <code>Toyota</code><br>
- النموذج: <code>Corolla</code><br>
<br>
⚠️ إستخدم اللغة الإنجليزية لأسماء الخصائص.
<br>
ترجمة الصانع إلى العربية هي <code>manufacturer</code>، وترجمة النموذج إلى العربية هي <code>model</code>.
</div>
