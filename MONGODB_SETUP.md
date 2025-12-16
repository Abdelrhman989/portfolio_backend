# حل مشكلة MongoDB

## المشكلة
Backend شغال لكن MongoDB غير متصل. عندك خيارين:

## الخيار 1: استخدام MongoDB Atlas (Cloud - موصى به ⭐)

### الخطوات:
1. اذهب إلى [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. سجل حساب مجاني
3. اضغط "Create a New Cluster" → اختر Free Tier
4. بعد إنشاء الـ Cluster:
   - اضغط "Connect"
   - اختر "Connect your application"
   - انسخ الـ connection string

5. حدث ملف `.env` في `nest-backend`:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/portfolio-dashboard?retryWrites=true&w=majority
```

### المميزات:
✅ مجاني
✅ لا يحتاج تثبيت
✅ يعمل من أي مكان
✅ backup تلقائي

---

## الخيار 2: تثبيت MongoDB محلياً

### Windows:
1. حمل MongoDB من [هنا](https://www.mongodb.com/try/download/community)
2. اختر Windows MSI Installer
3. شغل الـ installer وتابع الخطوات
4. بعد التثبيت، MongoDB سيعمل تلقائياً كـ Windows Service

### التحقق من التثبيت:
```powershell
# تحقق من أن MongoDB شغال
Get-Service -Name MongoDB

# أو جرب الاتصال
mongosh
```

### إذا لم يشتغل تلقائياً:
```powershell
# شغل MongoDB Service
Start-Service MongoDB
```

---

## بعد حل المشكلة

Backend سيعيد الاتصال تلقائياً لأنه في watch mode. راقب Terminal وستشوف:

```
[Nest] ... LOG [Application is running on: http://localhost:3001]
```

---

## ملاحظة مهمة ⚠️

الملف `.env` الحالي يحتوي على:
```env
MONGODB_URI=mongodb://localhost:27017/portfolio-dashboard
```

هذا يفترض أن MongoDB مثبت محلياً على Port 3001. إذا استخدمت MongoDB Atlas، لازم تحدث الـ URI.
