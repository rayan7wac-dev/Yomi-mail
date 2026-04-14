let user = ""; let domain = "1secmail.com";
let timeLeft = 0;

function generateEmail() {
    user = Math.random().toString(36).substring(2, 10);
    document.getElementById('emailAddr').value = `${user}@${domain}`;
    checkMail();
}

async function checkMail() {
    const res = await fetch(`https://www.1secmail.com/api/v1/?action=getMessages&login=${user}&domain=${domain}`);
    const data = await res.json();
    const list = document.getElementById('messagesList');
    if (data.length > 0) {
        list.innerHTML = data.map(m => `<div class='msg' onclick='alert("الموضوع: "+"${m.subject}")'>📩 من: ${m.from}</div>`).join('');
    }
}

function copyEmail() {
    let input = document.getElementById("emailAddr");
    input.select();
    document.execCommand("copy");
    alert("🚀 تم النسخ بنجاح!");
}

function generateNew() { generateEmail(); }
function deleteEmail() {
    if(confirm("هل تريد حذف هذا البريد؟")) {
        document.getElementById('emailAddr').value = "تم الحذف..";
        setTimeout(generateEmail, 1000);
    }
}

// العداد الذكي
setInterval(() => {
    timeLeft += 2;
    document.getElementById('progress').style.width = timeLeft + "%";
    if (timeLeft >= 100) {
        timeLeft = 0;
        checkMail();
    }
}, 100);

window.onload = generateEmail;
