// check if there are any console.log() statements
const regex = /console\.log\(.*\)/;
if (!regex.test(code)) {
    isPass = false;
    msg = "لم يتم استخدام الأمر console.log() لطباعة النص المطلوب";
} else {
    isPass = true;
    msg = "اجابة صحيحة";
}