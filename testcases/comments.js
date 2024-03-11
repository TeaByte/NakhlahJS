const regex = /(?<!\\)\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\/|(?<!\\)\/\/[^\n]*(?:\n|$)/

if (regex.test(code)) {
    isPass = true
} else {
    msg = "لا يوجد تعليقات في الكود"
}