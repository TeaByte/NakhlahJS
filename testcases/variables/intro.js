// check if code contain any var declaration 
const regex = /var\s+(\w+)\s*(?:=\s*[^;]+)?\s*;\s*/;
if (!regex.test(code)) {
    isPass = false;
    msg = "لم يتم إنشاء متغير وتعيين قيمة له";
} else {
    const matches = code.match(regex);
    const varName = matches[1];
    const assignRegex = new RegExp(varName + "\\s*=\\s*[^;]+;");
    
    if (assignRegex.test(code)) {
        isPass = true;
        msg = "اجابة صحيحة";
    } else {
        isPass = false;
        msg = "لم يتم إنشاء متغير وتعيين قيمة له";
    }
}
