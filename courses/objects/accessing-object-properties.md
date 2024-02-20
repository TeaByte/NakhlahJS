---
title: الوصول إلى خصائص الكائن
snippet: هناك طريقتان للوصول إلى خصائص الكائن
order: 2
---

هناك طريقتان للوصول إلى خصائص الكائن: التدوين النقطي (`.`) وتدوين الأقواس
(`[]`)، على غرار المصفوفة.

## الوصول إلى خصائص الكائن باستخدام التدوين النقطي

التدوين النقطي هو ما تستخدمه عندما تعرف اسم الخاصية التي تحاول الوصول إليها
مسبقًا.

فيما يلي نموذج لاستخدام التدوين النقطي (`.`) لقراءة خاصية الكائن:

```js
const myObj = {
  prop1: "val1",
  prop2: "val2",
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
```

سيكون ل `prop1val` قيمة السلسلة `val1`، وسيكون ل `prop2val` قيمة السلسلة `val2`.

في هذا المثال، يتم تخزين كافة الخصائص `(Properties)` كسلاسل، مثل الاسم والأرجل
والذيول. ومع ذلك، يمكنك أيضًا استخدام الأرقام كخصائص. يمكنك أيضًا حذف علامات
الاقتباس لخصائص السلسلة المكونة من كلمة واحدة، كما يلي:

## الوصول إلى خصائص الكائن باستخدام تدوين القوس

الطريقة الثانية للوصول إلى خصائص الكائن هي التدوين بين قوسين (`[]`). إذا كانت
خاصية الكائن الذي تحاول الوصول إليه تحتوي على مسافة في اسمها، فستحتاج إلى
استخدام تدوين الأقواس.

ومع ذلك، لا يزال بإمكانك استخدام تدوين الأقواس على خصائص الكائن بدون مسافات.

فيما يلي نموذج لاستخدام تدوين الأقواس لقراءة خاصية الكائن:

```js
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise",
};

myObj["Space Name"];
myObj["More Space"];
myObj["NoSpace"];
```

ستكون `myObj["Space Name"]` هي السلسلة `Kirk`، و `myObj['More Space']`ستكون
السلسلة `Spock`، و `myObj["NoSpace"]` ستكون السلسلة `USS Enterprise`.

<mark>
لاحظ أن أسماء الخصائص التي تحتوي على مسافات يجب أن تكون بين علامتي اقتباس (مفردة أو مزدوجة).
</mark>

<div class="quiz">
نعتذر عن عدم وجود اختبار لهذا الدرس حالياً. نحن نعمل بجد لإعداد اختبارات لجميع الدروس وسنقوم بتوفيرها في أقرب وقت ممكن.
</div>