// check if there are uninitialized variables using regex
let regex = /(let|var)\s+\w+\s*/g;
if (!regex.test(code)) {
    isPass = false;
    msg = "لم تقم بتعريف متغير غير المهيأة"
} else {
    // get the variables name 
    regex = /(let|var)\s+(\w+)\s*/g;
    const variables = code.match(regex).map(match => match.split(' ')[1]);
    if (variables.length != 1) {
        isPass = false;
        msg = "ما حد طلب منك تعريف أكثر من متغير غير مهيأة "
    } else {
        regex = /\w+\s+=\s+("|'|`)عربي("|'|`)/
        if (!regex.test(code)) {
            isPass = false;
            msg = "لم تقم بتغير قيمة المتغير غير المهيأة"
        } else {
            isPass = true;
            msg = "احسنت"
        }
    }

}