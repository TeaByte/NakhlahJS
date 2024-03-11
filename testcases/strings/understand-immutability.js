const regex = /animal\s*=\s*["']فيل["']/;
if (regex.test(code)) {
    isPass = true;
} else {
    msg = "هل قمت بتغيير الحرف الأول من كلمة قيل إلى ف؟";
}