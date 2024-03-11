const regex = /console.log\(\s*arr\[3\]\[1\]\s*\)/

if (regex.test(code)) {
    isPass = true
} else {
    msg = "الجواب خاطئ"
}