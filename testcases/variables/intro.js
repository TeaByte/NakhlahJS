// check if code contain any var declaration and the value of the var is string
const regex = /var\s+\w+\s*(?:\=\s*\".*\")?;/;
if (!regex.test(code)) {
    isPass = false;
    msg = "لم يتم إنشاء متغير وتعيين قيمة له";
} else {
    isPass = true;
    msg = "اجابة صحيحة";
}
