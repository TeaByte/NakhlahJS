const regex = /var\s+(\w+)\s*(?:=\s*[^;]+)?\s*;\s*/;

if (!regex.test(code)) {
    msg = "لم يتم إنشاء متغير وتعيين قيمة له";
} else {
    const matches = code.match(regex);
    const varName = matches[1];
    const assignRegex = new RegExp(varName + "\\s*=\\s*[^;]+;");

    if (assignRegex.test(code)) {
        isPass = true;
    } else {
        msg = "لم يتم إنشاء متغير وتعيين قيمة له";
    }
}