# لا تشيل هم | Don't Worry 🌊

> أدوات مجانية عبر الإنترنت - بدون تسجيل

![Don't Worry Logo](public/logo_new.png)

## ✨ المميزات

### 🎥 تحميل الفيديو
- دعم منصات متعددة: Douyin, TikTok, YouTube, Twitter, Instagram, Bilibili, Xiaohongshu
- تحميل بجودات مختلفة
- دعم التحميل المتعدد

### ☁️ رفع الملفات السحابي
- 6 مزودي تخزين سحابي:
  - 🖥️ Local Server
  - ☁️ Cloudflare R2 (10GB مجاني)
  - 🪣 AWS S3 (5GB مجاني)
  - 🌐 Google Cloud Storage (5GB مجاني)
  - 💾 Backblaze B2 (10GB مجاني)
  - ⚡ Supabase Storage (1GB مجاني)
- حماية بكلمة مرور
- تحديد وقت انتهاء الصلاحية
- خيارات متقدمة (One Shot, Removable)

### 🖼️ أدوات الصور
- ضغط الصور
- تغيير الحجم
- تحويل الصيغ

### 📝 أدوات النصوص
- التشفير وفك التشفير
- ترميز Base64
- تنسيق JSON
- توليد Hash

### 🔗 مختصر الروابط
- إنشاء روابط قصيرة
- تخصيص الكود
- تتبع النقرات

### 📱 مولد QR Code
- نص، روابط، WiFi، جهات اتصال
- تخصيص الألوان والحجم

### 📄 أدوات PDF
- دمج ملفات PDF
- تقسيم PDF
- ضغط PDF

## 🛠️ التقنيات المستخدمة

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui
- **Database**: Prisma ORM, SQLite
- **Icons**: Lucide React
- **Storage**: AWS S3 SDK (متوافق مع R2, B2, GCS)

## 🚀 التثبيت

```bash
# استنساخ المشروع
git clone https://github.com/your-username/dont-worry.git
cd dont-worry

# تثبيت المتطلبات
bun install

# إعداد قاعدة البيانات
bun run db:push

# تشغيل المشروع
bun run dev
```

## ⚙️ إعدادات السحابة

أنشئ ملف `.env` وأضف المتغيرات المطلوبة:

```env
# Cloudflare R2
CLOUDFLARE_R2_ENDPOINT=https://xxx.r2.cloudflarestorage.com
CLOUDFLARE_R2_ACCESS_KEY_ID=your_key
CLOUDFLARE_R2_SECRET_ACCESS_KEY=your_secret
CLOUDFLARE_R2_BUCKET=your_bucket

# AWS S3
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_S3_BUCKET=your_bucket
AWS_REGION=us-east-1

# Supabase
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_KEY=your_key
```

## 📁 هيكل المشروع

```
dont-worry/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/             # API Routes
│   │   ├── page.tsx         # الصفحة الرئيسية
│   │   ├── layout.tsx       # التخطيط الرئيسي
│   │   └── globals.css      # الأنماط العامة
│   ├── components/          # مكونات React
│   │   ├── ui/              # مكونات shadcn/ui
│   │   ├── Header.tsx       # الهيدر
│   │   ├── VideoDownloader.tsx
│   │   ├── FileUploader.tsx
│   │   └── ...
│   └── lib/                 # المكتبات والأدوات
│       ├── cloud-storage.ts # خدمة التخزين السحابي
│       ├── translations.ts  # الترجمات
│       └── i18n.tsx         # نظام اللغات
├── public/                  # الملفات الثابتة
├── prisma/                  # مخطط قاعدة البيانات
└── package.json
```

## 🌐 اللغات المدعومة

- 🇸🇦 العربية
- 🇬🇧 English

## 👨‍💻 المطورون

- **التصميم**: [@binnoma](https://instagram.com/binnoma) من الإمارات 🇦🇪

## 📄 الترخيص

MIT License

---

صنع بـ ❤️ من الإمارات 🇦🇪
