const regex = /console.log\(\s*arr\[3\]\[1\]\s*\)/  
if (regex.test(code)) {
    isPass = true
    msg = "مبروك، الجواب صحيح"
} else {
    isPass = false
    msg = "الجواب خاطئ"
}