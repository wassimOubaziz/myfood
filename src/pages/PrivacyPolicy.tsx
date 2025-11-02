import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold mb-8">سياسة الخصوصية</h1>

        <div className="space-y-6 text-foreground/80">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">مقدمة</h2>
            <p className="leading-relaxed">
              نحن في تطبيق "مكون My food" نلتزم بحماية خصوصيتك. توضح سياسة
              الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك عند استخدام
              تطبيقنا لتحليل مكونات المنتجات الغذائية والتجميلية.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              المعلومات التي نجمعها
            </h2>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                ١. الصور
              </h3>
              <p className="leading-relaxed">
                عند استخدام التطبيق لتحليل منتج، يتم تحميل الصورة مؤقتاً
                لمعالجتها باستخدام تقنية الذكاء الاصطناعي. لا يتم تخزين الصور
                على خوادمنا بعد اكتمال التحليل.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-4">
                ٢. بيانات الاستخدام
              </h3>
              <p className="leading-relaxed">
                نقوم بجمع بيانات استخدام أساسية مثل نوع المتصفح، نظام التشغيل،
                وأوقات الاستخدام لتحسين الخدمة.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              كيفية استخدام المعلومات
            </h2>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>تحليل مكونات المنتجات وتقديم النتائج</li>
              <li>تحسين دقة التحليل والخدمة</li>
              <li>ضمان أمان وسلامة التطبيق</li>
              <li>الامتثال للمتطلبات القانونية</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              مشاركة المعلومات
            </h2>
            <p className="leading-relaxed">
              نحن لا نبيع أو نشارك معلوماتك الشخصية مع أطراف ثالثة، باستثناء:
            </p>
            <ul className="list-disc list-inside space-y-2 mr-4 mt-2">
              <li>
                مزودي خدمات الذكاء الاصطناعي (Google Gemini) لمعالجة الصور
              </li>
              <li>شبكات الإعلانات المعتمدة (في حال تفعيلها)</li>
              <li>عند الطلب القانوني من الجهات المختصة</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              أمان البيانات
            </h2>
            <p className="leading-relaxed">
              نستخدم تقنيات أمان متقدمة لحماية بياناتك، بما في ذلك التشفير
              وبروتوكولات الأمان الصناعية المعتمدة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              ملفات تعريف الارتباط (Cookies)
            </h2>
            <p className="leading-relaxed">
              نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل استخدام
              التطبيق. يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات
              المتصفح.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">حقوقك</h2>
            <p className="leading-relaxed">لديك الحق في:</p>
            <ul className="list-disc list-inside space-y-2 mr-4 mt-2">
              <li>الوصول إلى بياناتك الشخصية</li>
              <li>طلب تصحيح أو حذف بياناتك</li>
              <li>الاعتراض على معالجة بياناتك</li>
              <li>سحب موافقتك في أي وقت</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              الإعلانات
            </h2>
            <p className="leading-relaxed">
              قد يعرض التطبيق إعلانات من خلال شبكات إعلانية معتمدة. قد تستخدم
              هذه الشبكات ملفات تعريف الارتباط وتقنيات التتبع لعرض إعلانات
              مخصصة. يمكنك إلغاء الاشتراك في الإعلانات المخصصة من خلال إعدادات
              جهازك.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              خصوصية الأطفال
            </h2>
            <p className="leading-relaxed">
              التطبيق مخصص للأشخاص الذين تبلغ أعمارهم 13 عاماً فما فوق. نحن لا
              نجمع عمداً معلومات من الأطفال دون سن 13 عاماً.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              التغييرات على سياسة الخصوصية
            </h2>
            <p className="leading-relaxed">
              قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم إعلامك بأي تغييرات
              جوهرية من خلال التطبيق.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              اتصل بنا
            </h2>
            <p className="leading-relaxed">
              إذا كانت لديك أي أسئلة حول سياسة الخصوصية، يمكنك التواصل معنا عبر
              البريد الإلكتروني:
            </p>
            <p className="font-semibold mt-2">colab.call@gmail.com</p>
          </section>

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
