let user = "";
let domain = "1secmail.com";
let timeLeft = 0;

// دالة لتوليد الإيميل فور تحميل الصفحة
async function generateEmail() {
    user = Math.random().toString(36).substring(2, 10);
    const email = `${user}@${domain}`;
    document.getElementById('emailAddr').value = email;
    console.log("Generated Email:", email);
    checkMail(); // فحص الرسائل فوراً
}

async function checkMail() {
    if (!user) return;
    try {
        const res = await fetch(`https://www.1secmail.com/api/v1/?action=getMessages&login=${user}&domain=${domain}`);
        const data = await res.json();
        const list = document.getElementById('messagesList');
        
        if (data.length > 0) {
            list.innerHTML = data.map(m => `
                <div class='msg-card' onclick='showFullMail(${m.id})'>
                    📩 <strong>من:</strong> ${m.from} <br>
                    📄 <strong>الموضوع:</strong> ${m.subject}
                </div>
            `).join('');
            list.style.textAlign = 'right';
        } else {
            list.innerHTML = "بانتظار وصول رسائل جديدة... ✨";
            list.style.textAlign = 'center';
        }
    } catch (e) {
        console.error("خطأ في الاتصال بالسيرفر");
    }
}

// دالة لقراءة محتوى الرسالة بالكامل
async function showFullMail(id) {
    const res = await fetch(`https://www.1secmail.com/api/v1/?action=readMessage&login=${user}&domain=${domain}&id=${id}`);
    const data = await res.json();
    alert("الرسالة من: " + data.from + "\n\nالمحتوى:\n" + (data.textBody || "لا يوجد نص"));
}

function copyEmail() {
    const input = document.getElementById("emailAddr");
    input.select();
    input.setSelectionRange(0, 99999); // للهواتف
    navigator.clipboard.writeText(input.value);
    alert("🚀 تم النسخ بنجاح!");
}

function generateNew() {
    timeLeft = 0;
    generateEmail();
}

function deleteEmail() {
    if(confirm("هل تريد حذف هذا البريد نهائياً؟")) {
        user = "";
        document.getElementById('emailAddr').value = "تم الحذف...";
        setTimeout(generateEmail, 1000);
    }
}

function refreshManual() {
    timeLeft = 0;
    checkMail();
    alert("🔄 تم التحديث يدوياً");
}

// العداد التلقائي (كل 10 ثوانٍ يتم الفحص)
setInterval(() => {
    if (!user) return;
    timeLeft += 1; 
    const progressEl = document.getElementById('progress');
    if (progressEl) {
        progressEl.style.width = (timeLeft * 10) + "%";
        if (timeLeft >= 10) {
            timeLeft = 0;
            checkMail();
        }
    }
}, 1000);

window.onload = generateEmail;
