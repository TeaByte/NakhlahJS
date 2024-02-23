---
title: المتغيرات والتعامل معها
snippet: البيانات هي أي شيء له معنى بالنسبة للكمبيوتر
order: 1
---

في علوم الكمبيوتر، البيانات هي أي شيء له معنى بالنسبة للكمبيوتر. توفر جافاسكربت
ثمانية أنواع مختلفة من البيانات:

<!-- Markdown don't support ltr! -->
<ul style="
    direction: ltr;
    list-style-type: circle;
">
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean" rel="noopener noreferrer">boolean</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number" rel="noopener noreferrer">number</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string" rel="noopener noreferrer">string</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/object" rel="noopener noreferrer">object</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/bigInt" rel="noopener noreferrer">bigint</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined" rel="noopener noreferrer">undefined</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null" rel="noopener noreferrer">null</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/symbol" rel="noopener noreferrer">symbol</a></li>
</ul>

<mark>

سنتعرف قريبًا على جميع انواع البيانات بالتفصيل في مراحل قادمة

</mark>

## تعريف المتغيرات

تسمح المتغيرات لأجهزة الكمبيوتر بتخزين البيانات ومعالجتها بطريقة ديناميكية.
يفعلون ذلك باستخدام "التسمية" للإشارة إلى البيانات بدلاً من استخدام البيانات
نفسها. يمكن تخزين أي من أنواع البيانات الثمانية في متغير.

المتغيرات تشبه متغيرات `x و y` التي تستخدمها في الرياضيات، مما يعني أنها اسم
بسيط لتمثيل البيانات التي نريد الإشارة إليها. تختلف متغيرات الكمبيوتر عن
المتغيرات الرياضية في قدرتها على تخزين قيم مختلفة في أوقات مختلفة.

## انشاء متغير

نطلب من جافاسكربت إنشاء متغير أو الإعلان عنه عن طريق وضع الكلمة الأساسية `var`
أمامه، كما يلي:

```js
var myName;
```

تقوم التعليمات التالية بإنشاء متغير يسمى `myName`. في جافاسكربت، ننهي البيانات
بفواصل منقوطة (`;`). يمكن أن تتكون أسماء المتغيرات أن تتكون من أرقام وأحرف و$ أو
_، ولكن لا يجوز أن تحتوي على مسافات أو تبدأ برقم.

## تخزين القيم

في جافاسكربت، يمكنك تخزين قيمة في متغير باستخدام عامل التعيين (`=`).

```js
var myAge = 19;
```

يؤدي هذا إلى تعيين قيمة الرقم `19` إلى `myAge`.

إذا كانت هناك أية حسابات على يمين عامل التشغيل (`=`)، فسيتم إجراؤها قبل تعيين
القيمة للمتغير الموجود على يسار عامل التشغيل.

```js
var myVar;
myVar = 5;
```

أولاً، تقوم التعليمات بإنشاء متغير يسمى `myVar`. ثم تقوم التعليمات بتعيين `5` إلى
myVar. الآن، إذا ظهر `myVar` مرة أخرى في الكود، فسيعامله البرنامج كما لو كان
القيمه `5`.

## إسناد قيمة متغير إلى آخر

بعد تعيين قيمة لمتغير باستخدام عامل التعيين، يمكنك تعيين قيمة هذا المتغير إلى
متغير آخر باستخدام عامل التعيين.

```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```

ما ورد في المثال السابق يعلن عن متغير `myVar` بدون قيمة، ثم يعين له القيمة `5`.
بعد ذلك، يتم الإعلان عن متغير يسمى `myNum` بدون قيمة. ثم، يتم تعيين محتويات
`myNum` (وهو `5`) إلى المتغير `myVar`. الآن، `myNum` أيضًا لديه القيمة `5`.

## تعريف متغير السلسلة

سبق لك استخدام المثال التالي للإعلان عن متغير:

```js
var myName;
```

ولكن يمكنك أيضًا الإعلان عن متغير سلسلة مثل هذا:

```js
var myName = "Yazan";
```

من الشائع تهيئة متغير إلى قيمة أولية في نفس السطر الذي تم الإعلان عنه.

`"Yazan"` يسمى سلسلة حرفية. السلسلة الحرفية، أو السلسلة، عبارة عن سلسلة من صفر
أو أكثر من الأحرف المحاطة بعلامات اقتباس مفردة (`'`) أو مزدوجة (`"`).

<div class="quiz">
قم بإنشاء متغير ما و جعل اسمك قيمته.
</div>

يمكنك التعرف على المزيد عن (سلسلة, String) في مستندات
[(MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string).
