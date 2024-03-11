let regex = /(let|var)\s+\w+\s*/g;

if (!regex.test(code)) {
    msg = "لم تقم بتعريف متغير غير المهيأة"
} else {
    regex = /(let|var)\s+(\w+)\s*/g;
    const variables = code.match(regex).map(match => match.split(' ')[1]);
    if (variables.length != 1) {
        msg = "ما حد طلب منك تعريف أكثر من متغير غير مهيأة"
    } else {
        regex = /\w+(\s+|)=(\s+|)("|'|`)عربي("|'|`)/
        if (!regex.test(code)) {
            msg = "لم تقم بتغير قيمة المتغير غير المهيأة"
        } else {
            isPass = true;
        }
    }

}