import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowRight className="w-4 h-4" />
              العودة للرئيسية
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">شروط الخدمة</h1>

        <div className="space-y-6 text-foreground/80">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              ١. قبول الشروط
            </h2>
            <p className="leading-relaxed">
              باستخدامك لتطبيق "مكون My food"، فإنك توافق على الالتزام بهذه
              الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى
              عدم استخدام التطبيق.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              ٢. وصف الخدمة
            </h2>
            <p className="leading-relaxed">
              "مكون My food" هو تطبيق ويب يوفر تحليلاً ذكياً لمكونات المنتجات
              الغذائية والتجميلية باستخدام تقنية الذكاء الاصطناعي. يتضمن
              التحليل:
            </p>
            <ul className="list-disc list-inside space-y-2 mr-4 mt-2">
              <li>تحليل شرعي للمكونات (حلال/حرام/مشكوك فيه)</li>
              <li>تقييم علمي للفوائد والأضرار الصحية</li>
              <li>كشف الممارسات التسويقية المضللة</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              ٣. إخلاء المسؤولية
            </h2>
            <div className="bg-warning/10 border border-warning/30 rounded-lg p-4 space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                تنويه هام:
              </h3>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li className="leading-relaxed">
                  <strong>التحليل الشرعي:</strong> المعلومات المقدمة حول الحكم
                  الشرعي للمكونات هي للإرشاد العام فقط ولا تعتبر فتوى دينية
                  رسمية. يجب استشارة عالم دين مختص للحصول على فتوى نهائية.
                </li>
                <li className="leading-relaxed">
                  <strong>التحليل الصحي:</strong> المعلومات الصحية المقدمة مبنية
                  على الأبحاث المتاحة ولا تغني عن استشارة طبيب أو أخصائي تغذية
                  مؤهل.
                </li>
                <li className="leading-relaxed">
                  <strong>الدقة:</strong> بينما نسعى لتوفير معلومات دقيقة، قد
                  تحتوي النتائج على أخطاء أو معلومات غير محدثة.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              ٤. استخدام التطبيق
            </h2>
            <p className="leading-relaxed">أنت توافق على:</p>
            <ul className="list-disc list-inside space-y-2 mr-4 mt-2">
              <li>استخدام التطبيق للأغراض القانونية فقط</li>
              <li>عدم محاولة اختراق أو إلحاق الضرر بالتطبيق</li>
              <li>عدم تحميل محتوى مسيء أو غير قانوني</li>
              <li>احترام حقوق الملكية الفكرية</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              ٥. الملكية الفكرية
            </h2>
            <p className="leading-relaxed">
              جميع حقوق الملكية الفكرية للتطبيق، بما في ذلك التصميم والشعارات
              والمحتوى، محفوظة لـ "مكون My food". لا يجوز نسخ أو توزيع أو تعديل
              أي جزء من التطبيق دون إذن كتابي مسبق.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              ٦. الدقة والموثوقية
            </h2>
            <p className="leading-relaxed">
              نستخدم تقنية الذكاء الاصطناعي (Google Gemini) لتحليل المكونات.
              بينما نسعى لتوفير نتائج دقيقة:
            </p>
            <ul className="list-disc list-inside space-y-2 mr-4 mt-2">
              <li>قد تختلف النتائج حسب جودة الصورة</li>
              <li>قد تحتوي قاعدة البيانات على معلومات قديمة</li>
              <li>الذكاء الاصطناعي قد يخطئ في التعرف على المكونات</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              ٧. الإعلانات
            </h2>
            <p className="leading-relaxed">
              قد يعرض التطبيق إعلانات من أطراف ثالثة. نحن لا نتحمل مسؤولية محتوى
              الإعلانات أو المنتجات/الخدمات المعلن عنها. استخدامك لخدمات
              المعلنين يخضع لشروطهم الخاصة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              ٨. حدود المسؤولية
            </h2>
            <p className="leading-relaxed">
              التطبيق مقدم "كما هو" دون أي ضمانات. نحن لا نتحمل المسؤولية عن:
            </p>
            <ul className="list-disc list-inside space-y-2 mr-4 mt-2">
              <li>أي قرارات تتخذها بناءً على نتائج التحليل</li>
              <li>أي أضرار صحية أو مالية ناتجة عن استخدام التطبيق</li>
              <li>انقطاع الخدمة أو أخطاء تقنية</li>
              <li>فقدان البيانات</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              ٩. التعديلات على الخدمة
            </h2>
            <p className="leading-relaxed">
              نحتفظ بالحق في تعديل أو إيقاف التطبيق (مؤقتاً أو دائماً) في أي وقت
              دون إشعار مسبق.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              ١٠. الخصوصية
            </h2>
            <p className="leading-relaxed">
              استخدامك للتطبيق يخضع أيضاً لـ{" "}
              <Link
                to="/privacy"
                className="text-primary hover:underline font-semibold"
              >
                سياسة الخصوصية
              </Link>{" "}
              الخاصة بنا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              ١١. القانون الواجب التطبيق
            </h2>
            <p className="leading-relaxed">
              تخضع هذه الشروط وتفسر وفقاً لقوانين المملكة العربية السعودية.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              ١٢. إنهاء الاستخدام
            </h2>
            <p className="leading-relaxed">
              نحتفظ بالحق في إنهاء أو تعليق وصولك إلى التطبيق فوراً، دون إشعار
              مسبق، في حالة انتهاك هذه الشروط.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              ١٣. التواصل
            </h2>
            <p className="leading-relaxed">
              للأسئلة أو الاستفسارات حول شروط الخدمة، يرجى التواصل معنا:
            </p>
            <p className="font-semibold mt-2">colab.call@gmail.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              ١٤. التغييرات على الشروط
            </h2>
            <p className="leading-relaxed">
              نحتفظ بالحق في تعديل هذه الشروط في أي وقت. استمرارك في استخدام
              التطبيق بعد التعديلات يعني موافقتك على الشروط المعدلة.
            </p>
          </section>

          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-8">
            <p className="font-semibold text-foreground">
              باستخدامك لتطبيق "مكون My food"، فإنك تقر بأنك قرأت وفهمت ووافقت
              على هذه الشروط والأحكام.
            </p>
          </div>

          <p className="text-sm text-muted-foreground mt-8 pt-8 border-t">
            آخر تحديث:{" "}
            {new Date().toLocaleDateString("ar-SA", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </main>
    </div>
  );
}
