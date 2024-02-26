// if code contain `delete fighter.operator` then isPass = true
if (code.includes("delete") && code.includes("operator") && code.includes("fighter")) {
    isPass = true;
} else {
    isPass = false;
    msg = "الله يبارك فيك ركز شوية وحاول مره ثانية"
}