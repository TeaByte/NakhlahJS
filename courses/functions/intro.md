---
title: الدوال والتعامل معها
snippet: في جافاسكربت، يمكننا تقسيم الكود الخاص بنا إلى أجزاء قابلة لإعادة الاستخدام
order: 1
---

## كتابة الدوال

في جافاسكربت، يمكننا تقسيم الكود الخاص بنا إلى أجزاء قابلة لإعادة الاستخدام تسمى
الدوال او الدوال
([Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)).

```js
function functionName() {
  console.log("Hello World");
}
```

يمكنك استدعاء هذه الوظيفة أو استخدامها باستخدام اسمها متبوعًا بأقواس، مثل هذا:
`;()functionName` في كل مرة يتم استدعاء الوظيفة، سيتم طباعة الرسالة
`Hello World` على وحدة تحكم المطور. سيتم تنفيذ كافة التعليمات البرمجية الموجودة
بين الأقواس المتعرجة في كل مرة يتم فيها استدعاء الوظيفة.

```js
function functionName() {
  console.log("Hello World");
}

functionName();
functionName();
functionName();
```

سيتم طباعة الرسالة `Hello World` ثلاث مرات

## تمرير القيم إلى الدوال

المعلمات هي متغيرات تعمل كعناصر نائبة للقيم التي سيتم إدخالها إلى دالة عند
استدعائها. عندما يتم تعريف دالة، يتم تعريفها عادةً مع معلمة واحدة أو أكثر. تُعرف
القيم الفعلية التي يتم إدخالها (أو "تمريرها") إلى دالة عند استدعائها بالوسيطات.

فيما يلي دالة تحتوي على معلمتين، `param1` و`param2`:

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

ثم يمكننا استدعاء `testFun` على النحو التالي: `testFun("Hello", "World");`. لقد
مررنا وسيطتين متسلسلتين، `Hello` و `World`. داخل الدالة، `param1` ستساوي السلسلة
`Hello` و `param2` ستساوي السلسلة `World`. لاحظ أنه يمكنك استدعاء `testFun` مرة
أخرى باستخدام وسائط مختلفة وستأخذ المعلمات قيمة الوسائط الجديدة.

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
testFun("Hello", "World");
testFun("Ahmed", "Mohsen");
```

سيتم طباعة الرسالة `Hello World` و `Ahmed Mohsen`

## إرجاع قيمة من دالة

يمكننا تمرير القيم إلى دالة باستخدام الوسائط. يمكنك استخدام عبارة `return`
لإرسال قيمة مرة أخرى خارج الوظيفة.

```js
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
```

`answer` له القيمة `8`.

يأخذ `plusThree` وسيطة إلى `num` ويعيد قيمة تساوي `num + 3`.

<div class="quiz">
قم بكتابة دالة اسمها <code>area</code> تأخذ وسيطتين <code>width</code> و <code>height</code> وترجع مساحة المستطيل
<br>
ان علمت ان قانون المساحه هو <code>width * height</code>.
</div>
