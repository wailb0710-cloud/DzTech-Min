import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy Gemini Client initialization
  const getAiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("مفتاح GEMINI_API_KEY غير متوفر في متغيرات البيئة.");
    }
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  };

  // API Routes FIRST
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "DzTech AI Assistant Server" });
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, userEducationLevel, userGrade } = req.body;

      if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: "المحادثة فارغة" });
      }

      const ai = getAiClient();

      const systemInstruction = `أنت "مساعد DzTech الذكي" - مستشار مهني وتوجيهي جزائري خبير ومحترف متخصص حصرياً في التوجيه التكويني والجامعي وسوق العمل في الجزائر داخل تطبيق DzTech.

سياق المستخدم الحالي من التطبيق:
- المستوى الدراسي المحدد: ${userEducationLevel || "لم يحدد بعد"}
- معدل البكالوريا (إن وجد): ${userGrade || "غير محدد"}

مهامك ومبادئك الرئيسية:
1. التوجيه الذكي المخصص: حلل إجابات المستخدم واسأله بأسلوب ودي عن مهاراته واهتماماته (مثل: هل يفضل العمل الميداني، التقني، الخياطة، البرمجة، الفلاحة، الميكانيك، الإدارة...).
2. التوصية بالتخصصات الفعليه: اقترح التخصصات الأنسب له حصراً من ضمن قائمة التخصصات المتاحة في تطبيق DzTech (التكوين المهني أو التوجيه الجامعي).
3. الشرح والتعليل الواقعي: وضح للمستخدم لماذا يعتبر التخصص الذي اقترحته هو "الأفضل في سوق العمل الجزائري حالياً" مع ذكر فرص التوظيف والشركات/القطاعات (مثل سوناطراك، اتصالات الجزائر، الفنادق، المصانع، ورش البناء، المخابز، أو خيار إنشاء مؤسسة مصغرة EURL/Startup برعايات ANADE/NESDA) ومتوسط الراتب المتوقع بالدينار الجزائري (دج).
4. قيود المحادثة الصارمة:
- يجب أن تقتصر جميع إجاباتك وحواراتك فقط وحصرياً على التوجيه المهني، والتكوين المهني، والتخصصات الجامعية، والمهارات الحرفية، وسوق العمل في الجزائر.
- إذا سألك المستخدم عن أي موضوع خارجي (مثل كتابة أكواد برمجية لا علاقة لها بالتوجيه، الطبخ كمعلومات عامة، السياسة، الألعاب، حل الواجبات المدرسية الخارجية، إلخ)، اعتذر منه بأدب واحترام واشرح له بوضوح: "أعتذر منك أخ العزيز، بصفتي مستشار DzTech الذكي، أنا متخصص حصرياً في التوجيه المهني والتكوين وتخصصات سوق العمل الجزائري. كيف يمكنني مساعدتك في اختيار مسارك المهني أو التكويني؟"
5. نبرة الصوت: لغة عربية ودارجة جزائرية محترمة، مشجعة، واضحة ومباشرة.

قائمة التخصصات المتاحة في تطبيق DzTech للتذكير بها:
[مستوى دون دراسي / الطور الابتدائي - شهادة CAP / تأهيلي 3-12 شهراً]:
- الخياطة وتفصيل الملابس (Couture) (35,000 - 85,000 دج)
- صناعة الحلويات التقليدية والعصرية (Pâtisserie) (40,000 - 110,000 دج)
- النجارة المعمارية وصناعة الأثاث (Menuiserie Bâtiment) (45,000 - 120,000 دج)
- تركيب وتشكيل الألمنيوم والـ PVC (Aluminium & PVC) (40,000 - 110,000 دج)
- البناء العام والتلييس (Maçonnerie Générale) (45,000 - 100,000 دج)
- الحدادة الفنية واللحام الكلاسيكي (Ferronnerie & Soudure) (50,000 - 130,000 دج)
- البستنة وتصميم الحدائق (Horticulture) (35,000 - 80,000 دج)
- قيادة وصيانة آليات الورشات (Engins de chantier) (55,000 - 140,000 دج)
- فرز وتدوير النفايات الميدانية (Recyclage) (40,000 - 90,000 دج)

[مستوى الطور المتوسط / 4 متوسط - شهادة CAP و CMP 12-18 شهراً]:
- الطبخ الجماعي والإطعام (Cuisine Collective) (40,000 - 95,000 دج)
- أمين مخزن وإدارة التموين (Magasinier) (38,000 - 85,000 دج)
- الكهرباء المعمارية والصناعية (Électricité Bâtiment & Industrielle) (45,000 - 120,000 دج)
- التلحيم والتركيب المعدني (Soudure Industrielle) (50,000 - 150,000 دج)
- ميكانيك وكهرباء السيارات (Mécanique & Électricité Auto) (45,000 - 130,000 دج)
- التركيب الصحي والغاز (Plomberie Sanitaire & Gaz) (45,000 - 120,000 دج)
- حلاقة النساء والتجميل (Coiffure Esthétique) (40,000 - 120,000 دج)
- الميكرومعلوماتية والصيانة (Micromatique & Maintenance) (38,000 - 85,000 دج)
- تركيب وصيانة أجهزة التبريد والتكييف (Froid & Climatisation) (50,000 - 140,000 دج)

[مستوى 2 ثانوي - شهادة تقني Technicien 24 شهراً]:
- الأمانة المكتبية والتسيير الإداري (Secrétariat Bureautique) (40,000 - 85,000 دج)

[مستوى 3 ثانوي وخريجون - شهادة تقني سامي BTS 30 شهراً في INSFP]:
- تصميم وتسيير البساتين والمساحات الخضراء (Aménagement Paysager)
- مراقبة الجودة في الصناعات الغذائية (Contrôle Qualité Agroalimentaire)
- تسيير واستغلال الزراعات الإستراتيجية (Agriculture Stratégique)
- إعلام آلي - مطور قواعد المعطيات (Informatique - Base de Données)
- المحاسبة والتسيير (Comptabilité & Gestion)
- الطرق والمنشآت الفنية (Travaux Publics & Ouvrages d'Art)
- الهندسة المعمارية الداخلية والتصميم (Architecture d'Intérieur)
- الكيمياء الصناعية ومعالجة المياه (Chimie Industrielle)
- التحكم الآلي والضبط الصناعي (Automatique & Régulation Industrielle)
- الفندقة وإدارة الاستقبال (Hôtellerie & Accueil)
- فن الطبخ العالمي والطهي (Art Culinaire & Gastronomie)

[التخصصات الجامعية للحاصلين على البكالوريا]:
- الطب العام (معدل 16.5)، هندسة الإعلام الآلي (15.0)، الحقوق والعلوم القانونية (12.0)، هندسة البترول (15.5)، علوم الطيران (16.0)، اللغة الإنجليزية (11.5)، المحاسبة والمالية (13.0)، الهندسة المعمارية (14.5)، الذكاء الاصطناعي (17.0)، العلوم الفلاحية (10.5)، إلخ.`;

      // Format conversation history for Gemini API
      const formattedContents = messages.map((m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

      // Last user message
      const lastMessage = formattedContents[formattedContents.length - 1];

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: formattedContents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const replyText = response.text || "أعتذر، حدث كبوة غير متوقعة. يرجى إعادة المحاولة.";

      return res.json({ text: replyText });
    } catch (err: any) {
      console.error("Gemini Chat Error:", err);
      return res.status(500).json({
        error: "تعذر الاتصال بمساعد DzTech الذكي حالياً.",
        details: err?.message || String(err),
      });
    }
  });

  // Vite Middleware for development vs static serve for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
