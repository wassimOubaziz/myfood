import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyB6nHtE2vIc-R1kARpB0tzT0-a-qlS1hm4";

const genAI = new GoogleGenerativeAI(API_KEY);

const SYSTEM_PROMPT = `أنت "خبير التحليل الشرعي والعلمي للمنتجات". دورك هو تقديم تحليل شامل للمنتجات الغذائية والاستهلاكية بناءً على مكوناتها.

المبادئ الإرشادية:
1. الأولوية الشرعية: الحكم الشرعي (حرام/مشكوك) يعلو على أي تقييم علمي
2. الدقة قبل السرعة: يجب التحقق من كل مكون يتطلب التدقيق
3. التعريب الكامل: جميع الأسماء والأوصاف باللغة العربية الفصحى

ملاحظة خاصة باللحوم: المكونات الحيوانية (الجيلاتين، الإضافات المستخلصة، اللحوم) تعتبر مشكوكاً فيها أو حراماً ما لم يثبت الحصول على شهادة حلال موثوقة. الخنزير ومشتقاته حرام قطعياً.

يجب أن يكون المخرج بصيغة JSON فقط بدون أي نص إضافي، وفق الهيكل التالي:

{
  "product_summary": {
    "ar_title": "العنوان العربي للمنتج",
    "overall_halal_status": "[حرام قطعاً | مشكوك فيه بشدة | حلال مع تحفظ | حلال وموصى به]",
    "key_warning": "أخطر مكوّن تم اكتشافه",
    "analysis_conclusion": "ملخص شامل للنتائج"
  },
  "halal_haram_audit": {
    "haram_components": [
      {
        "ar_name": "الاسم المعرّب",
        "ar_desc": "الوصف والسبب الشرعي",
        "reference": "المصدر الداعم"
      }
    ],
    "suspect_components": [
      {
        "ar_name": "الاسم المعرّب",
        "ar_desc": "سبب الشك الشرعي",
        "verification_needed": "ما يجب التحقق منه"
      }
    ],
    "halal_components": [
      {
        "ar_name": "الاسم المعرّب",
        "ar_desc": "وصف المكوّن وحكمه"
      }
    ]
  },
  "scientific_audit": {
    "negative_components": [
      {
        "ar_name": "الاسم المعرّب",
        "ar_desc": "الأضرار العلمية",
        "scientific_rating": "[عالي الضرر | متوسط الضرر | منخفض الضرر]"
      }
    ],
    "positive_components": [
      {
        "ar_name": "الاسم المعرّب",
        "ar_desc": "الفوائد العلمية",
        "scientific_rating": "[عالي النفع | متوسط النفع]"
      }
    ]
  },
  "marketing_audit": {
    "deceptive_practices": [
      {
        "ar_term": "العبارة التسويقية",
        "ar_analysis": "تحليل العبارة"
      }
    ]
  }
}`;

export interface AnalysisResult {
  product_summary: {
    ar_title: string;
    overall_halal_status: string;
    key_warning: string;
    analysis_conclusion: string;
  };
  halal_haram_audit: {
    haram_components: Array<{
      ar_name: string;
      ar_desc: string;
      reference: string;
    }>;
    suspect_components: Array<{
      ar_name: string;
      ar_desc: string;
      verification_needed: string;
    }>;
    halal_components: Array<{
      ar_name: string;
      ar_desc: string;
    }>;
  };
  scientific_audit: {
    negative_components: Array<{
      ar_name: string;
      ar_desc: string;
      scientific_rating: string;
    }>;
    positive_components: Array<{
      ar_name: string;
      ar_desc: string;
      scientific_rating: string;
    }>;
  };
  marketing_audit: {
    deceptive_practices: Array<{
      ar_term: string;
      ar_analysis: string;
    }>;
  };
}

export async function analyzeProductImage(imageData: string): Promise<AnalysisResult> {
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash-exp",
      systemInstruction: SYSTEM_PROMPT
    });

    const imagePart = {
      inlineData: {
        data: imageData.split(',')[1],
        mimeType: "image/jpeg",
      },
    };

    const prompt = "قم بتحليل هذه الصورة واستخرج قائمة المكونات الموجودة في المنتج، ثم قدم التحليل الشرعي والعلمي الكامل وفق التعليمات. تأكد من أن المخرج بصيغة JSON فقط.";

    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    const text = response.text();
    
    // Extract JSON from the response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("لم يتم العثور على بيانات JSON في الاستجابة");
    }
    
    const analysisResult: AnalysisResult = JSON.parse(jsonMatch[0]);
    return analysisResult;
  } catch (error) {
    console.error("Error analyzing image:", error);
    throw new Error("حدث خطأ أثناء تحليل الصورة. يرجى المحاولة مرة أخرى.");
  }
}
