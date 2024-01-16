const regex = /(?<!\\)\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\/|(?<!\\)\/\/[^\n]*(?:\n|$)/
if (regex.test(code)) {
    isPass = true,
    msg = ""
} else {
    isPass = false;
    msg =  "لا يوجد تعليقات في الكود"
}