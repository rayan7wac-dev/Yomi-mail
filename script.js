let user = "";
let domain = "1secmail.com";
let timerSeconds = 3600; // 60 دقيقة
let timerInterval;

async function generateEmail() {
    user = Math.random().toString(36).substring(2, 10);
    document.getElementById('emailAddr').value = `${user}@${domain}`;
    resetTimer(); // إعادة تشغيل العداد عند كل إيميل جديد
    checkMail();
}

function resetTimer() {
    clearInterval(timerInterval);
    timerSeconds = 3600; 
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timerSeconds--;
        let mins = Math.floor(timerSeconds / 60);
        let secs = timerSeconds % 60;
        document.getElementById('countdown').innerText = 
            `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        
        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            alert("انتهت صلاحية البريد!");
            generateEmail();
        }
    }, 1000);
}

// باقي الوظائف (نسخ، تحديث...)
function copyEmail() {
    const el = document.getElementById('emailAddr');
    el.select();
    navigator.clipboard.writeText(el.value);
    alert("🚀 تم النسخ!");
}

function refreshManual() { checkMail(); alert("🔄 تم التحديث"); }
function generateNew() { generateEmail(); }
function deleteEmail() { if(confirm("حذف؟")) generateEmail(); }

async function checkMail() {
    const res = await fetch(`https://www.1secmail.com/api/v1/?action=getMessages&login=${user}&domain=${domain}`);
    const data = await res.json();
    document.getElementById('msgCount').innerText = data.length;
    // ... كود عرض الرسائل
}

window.onload = generateEmail;
