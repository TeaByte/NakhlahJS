const regex = /console\.log\(.*\)/;

if (!regex.test(code)) {
    msg = "لم يتم استخدام الأمر console.log() لطباعة النص المطلوب";
} else {
    isPass = true;
}