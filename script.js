/* تنسيقات أساسية للخلفية (تدرج لوني داكن) */
body {
    background: linear-gradient(135deg, #0a0e1b, #1e293b);
    color: white;
    font-family: 'Tajawal', sans-serif;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    min-height: 100vh;
}

.container {
    width: 100%;
    max-width: 480px;
}

/* مساحات إعلانية احتياطية */
.ad-space-placeholder {
    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.3);
    padding: 10px;
    border: 1px dashed rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    margin: 15px 0;
    font-size: 12px;
    text-align: center;
}
.ad-space-bottom {
    margin-top: 30px;
}

/* رأس الصفحة (تحديث) */
header {
    text-align: center;
    margin-bottom: 25px;
}
.header-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.header-icon {
    font-size: 32px;
}
.header-title {
    font-size: 28px;
    font-weight: 700;
}
header p {
    color: #94a3b8;
    margin: 5px 0 0 0;
}

/* الكرت الرئيسي (تأثير الزجاج الشفاف) */
.main-card {
    background: rgba(30, 41, 59, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    padding: 25px;
    border-radius: 28px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
}

/* شريط التقدم */
.timer-bar {
    background: rgba(255, 255, 255, 0.1);
    height: 6px;
    border-radius: 3px;
    margin-bottom: 20px;
    overflow: hidden;
}
#progress {
    background: linear-gradient(to right, #3b82f6, #60a5fa);
    height: 100%;
    width: 0%;
    transition: width 0.1s linear;
}

/* خانة الإيميل */
input {
    width: 100%;
    padding: 18px;
    border-radius: 16px;
    border: none;
    background: #0f172a;
    color: #3b82f6;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 25px;
    box-sizing: border-box;
}

/* الأزرار (ألوان متدرجة جذابة) */
.button-row {
    display: flex;
    gap: 15px;
}
.btn {
    flex: 1;
    padding: 15px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    transition: 0.3s;
    color: white;
}
.btn-copy {
    background: linear-gradient(135deg, #10b981, #34d399);
}
.btn-change {
    background: linear-gradient(135deg, #ef4444, #f87171);
}
.btn:active {
    transform: scale(0.97);
}

/* صندوق الوارد (تأثير الزجاج) */
.inbox {
    background: rgba(30, 41, 59, 0.6);
    backdrop-filter: blur(12px);
    border-radius: 28px;
    padding: 25px;
    margin-top: 25px;
    min-height: 180px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.08);
}
.inbox h2 {
    margin: 0 0 15px 0;
    font-size: 20px;
}

/* كروت الميزات المصممة (الميزة الجديدة) */
.features-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-top: 30px;
}
.feature-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 20px;
    text-align: center;
    transition: 0.3s;
}
.feature-card:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-5px);
}
.feature-icon {
    font-size: 36px;
    margin-bottom: 10px;
}
.feature-card h3 {
    font-size: 16px;
    margin: 0 0 5px 0;
}
.feature-card p {
    font-size: 12px;
    color: #94a3b8;
    margin: 0;
    line-height: 1.5;
}

/* تذييل الصفحة */
footer {
    margin-top: 40px;
    font-size: 14px;
    color: #64748b;
    text-align: center;
}
