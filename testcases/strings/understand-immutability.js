// code if the code contains animal[0] = "ف";
const regex = /animal\s*=\s*["']فيل["']/;
if (regex.test(code)) {
    isPass = true;
    msg = "احسنت";
} else {
    isPass = false;
    msg = "هل قمت بتغيير الحرف الأول من كلمة قيل إلى ف؟";
}