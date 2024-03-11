const regex1 = /(var|let)\s*x\s*=\s*"JavaScript\s*"(;|)/;
const regex2 = /(const|var|let)\s*y\s*=\s*"Is fun"(;|)/;
const regex3 = /x\s*\+=+\s*y(;|)/;

if (regex1.test(code) && regex2.test(code) && regex3.test(code)) {
    isPass = true;
} else {
    msg = "لم تقم بحل السؤال بشكل صحيح";
}