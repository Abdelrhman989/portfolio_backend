# portfolio_backend

## تشغيل المشروع بخطوات سهلة

### الخطوة 1: تثبيت المتطلبات
\`\`\`bash
# MongoDB - تأكد من تثبيته
# https://docs.mongodb.com/manual/installation/

# Node.js والمكتبات
npm install
\`\`\`

### الخطوة 2: تشغيل Backend
npm run start:dev
\`\`\`
يجب أن ترى: \`Application is running on: http://localhost:3001\`
### الخطوة 4: الدخول للـ Dashboard
- **Username/Password:** \`admin123\`

---

## استكشاف الأخطاء

### مشكلة: "Failed to login"
1. تأكد من أن Backend يعمل على port 3001
2. افتح browser console (F12) وشوف الـ Network tab
3. تأكد من أن request بتروح لـ \`http://localhost:3001/api/auth/login\`

### مشكلة: MongoDB لم يتصل
\`\`\`bash
# اختبر الاتصال
mongosh mongodb://localhost:27017/portfolio-dashboard
\`\`\`

---

## المسارات الرئيسية

| المسار | الوصف |
|------|-------|
| POST /api/auth/login | تسجيل الدخول |
| GET /api/projects | جلب جميع المشاريع |
| POST /api/projects | إضافة مشروع جديد |
| PUT /api/projects/:id | تحديث مشروع |
| DELETE /api/projects/:id | حذف مشروع |
\`\`\`

