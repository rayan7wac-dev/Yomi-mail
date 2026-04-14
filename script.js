// توليد اسم عشوائي
function generateRandomName() {
    return Math.random().toString(36).substring(2, 10);
}

let currentEmail = generateRandomName() + "@1secmail.com";
document.getElementById('emailAddr').value = currentEmail;

function copyEmail() {
    let emailField = document.getElementById("emailAddr");
    emailField.select();
    document.execCommand("copy");
    alert("تم نسخ البريد بنجاح!");
}

function generateNew() {
    currentEmail = generateRandomName() + "@1secmail.com";
    document.getElementById('emailAddr').value = currentEmail;
    document.getElementById('messagesList').innerHTML = "تم تغيير البريد.. بانتظار الرسائل.";
}
