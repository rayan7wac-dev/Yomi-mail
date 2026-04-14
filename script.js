let user = "";
let domain = "1secmail.com";
let currentTimer = 10;
let timerInterval;

// دالة توليد الإيميل (الإيميل الثابت للاختبار كما في الصورة)
function setupEmail() {
    user = Math.random().toString(36).substring(2, 10);
    // document.getElementById('emailAddr').value = `${user}@${domain}`;
    // ملاحظة: قمت بتثبيت الإيميل كما في الصورة للاختبار، احذف هذا السطر وفعّل السطر أعلاه للاستخدام الفعلي.
    document.getElementById('emailAddr').value = "dwsb40ir@1secmail.com";
    document.getElementById('statusText').innerText = "نشط";
    resetTimer();
    checkMail();
}

async function checkMail() {
    // هذه الدالة ستحتاج لربطها بالـ API الحقيقي في خطوة متقدمة، حالياً تظهر الواجهة فقط.
    console.log("Checking for new messages...");
}

function copyEmail() {
    let input = document.getElementById("emailAddr");
    input.select();
    document.execCommand("copy");
    alert("🚀 تم نسخ البريد!");
}

function generateNew() {
    document.getElementById('statusText').innerText = "...جاري التحميل";
    setTimeout(setupEmail, 1000); // محاكاة وقت التحميل
}

function refreshManual() {
    resetTimer();
    checkMail();
    alert("🔄 تم تحديث قائمة الرسائل");
}

function deleteEmail() {
    if(confirm("هل تريد حذف هذا البريد؟")) {
        setupEmail();
    }
}

// العداد التنازلي الاحترافي
function resetTimer() {
    clearInterval(timerInterval);
    currentTimer = 10;
    updateTimerUI();
    
    if (document.getElementById('autoUpdateToggle').checked) {
        startTimer();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        currentTimer--;
        updateTimerUI();
        
        if (currentTimer <= 0) {
            checkMail();
            resetTimer();
        }
    }, 1000);
}

function updateTimerUI() {
    document.getElementById('timerDisplay').innerText = `التحديث التلقائي بعد ${currentTimer} ثانية`;
    const progressFill = document.getElementById('progressFill');
    const progressWidth = ((10 - currentTimer) / 10) * 100;
    progressFill.style.width = `${progressWidth}%`;
}

// التحكم في التحديث التلقائي
document.getElementById('autoUpdateToggle').addEventListener('change', function(e) {
    if (e.target.checked) {
        resetTimer();
    } else {
        clearInterval(timerInterval);
        document.getElementById('timerDisplay').innerText = "التحديث التلقائي متوقف";
        document.getElementById('progressFill').style.width = "0%";
    }
});

window.onload = setupEmail;
