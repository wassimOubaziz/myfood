import { useState, useEffect } from "react";
import { Scan, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ImageCapture from "@/components/ImageCapture";
import AnalysisResults from "@/components/AnalysisResults";
import { analyzeProductImage, AnalysisResult } from "@/lib/gemini";
import { toast } from "sonner";

export default function Index() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [showingAd, setShowingAd] = useState(false);

  useEffect(() => {
    // Register service worker for PropellerAds
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  }, []);

  const handleImageCapture = async (imageData: string) => {
    setIsAnalyzing(true);
    setShowingAd(true);
    
    try {
      const analysisResults = await analyzeProductImage(imageData);
      
      // Show interstitial ad before displaying results
      if (window.propellerads && window.propellerads.push) {
        window.propellerads.push({ 
          type: 'interstitial',
          onClose: () => {
            setResults(analysisResults);
            setShowingAd(false);
            toast.success("تم التحليل بنجاح!");
          }
        });
      } else {
        // Fallback if ad doesn't load
        setTimeout(() => {
          setResults(analysisResults);
          setShowingAd(false);
          toast.success("تم التحليل بنجاح!");
        }, 1000);
      }
    } catch (error) {
      setShowingAd(false);
      toast.error(error instanceof Error ? error.message : "حدث خطأ أثناء التحليل");
      console.error("Analysis error:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleNewAnalysis = () => {
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Scan className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">مكون</h1>
              <p className="text-xs text-muted-foreground">My food</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Top Banner Ad */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="text-center text-xs text-muted-foreground mb-2">إعلان</div>
          <div id="propeller-banner-top" className="min-h-[90px] bg-muted/20 rounded-lg flex items-center justify-center">
            <ins className="propellerads-async" data-zone="10130774"></ins>
          </div>
        </div>

        {showingAd ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-4 animate-pulse">
              <Scan className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">جاري التحليل...</h3>
            <p className="text-muted-foreground">يرجى مشاهدة الإعلان للحصول على النتائج</p>
          </div>
        ) : !results ? (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4 py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-4">
                <Scan className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                اكتشف ما في طعامك
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                تحليل ذكي ودقيق للمكونات الغذائية والتجميلية - اعرف ما هو حلال وحرام وصحي
              </p>
            </div>

            <ImageCapture onImageCapture={handleImageCapture} isAnalyzing={isAnalyzing} />

            {/* Native Ad 1 */}
            <div className="max-w-4xl mx-auto my-8">
              <div className="text-center text-xs text-muted-foreground mb-2">إعلان</div>
              <div className="bg-muted/10 rounded-lg p-4 min-h-[120px] flex items-center justify-center">
                <ins className="propellerads-async" data-zone="10130775"></ins>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold">تحليل شرعي دقيق</h3>
                <p className="text-sm text-muted-foreground">معرفة المكونات الحلال والحرام والمشكوك فيها</p>
              </div>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="font-bold">تقييم علمي</h3>
                <p className="text-sm text-muted-foreground">تحليل الفوائد والأضرار الصحية المثبتة</p>
              </div>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-bold">كشف التضليل</h3>
                <p className="text-sm text-muted-foreground">تحليل العبارات التسويقية المضللة</p>
              </div>
            </div>

            {/* Native Ad 2 */}
            <div className="max-w-4xl mx-auto mt-12">
              <div className="text-center text-xs text-muted-foreground mb-2">إعلان</div>
              <div className="bg-muted/10 rounded-lg p-4 min-h-[120px] flex items-center justify-center">
                <ins className="propellerads-async" data-zone="10130776"></ins>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">نتائج التحليل</h2>
              <Button onClick={handleNewAnalysis} variant="outline" className="gap-2">
                تحليل منتج جديد
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Side Banner Ad */}
            <div className="mb-6">
              <div className="text-center text-xs text-muted-foreground mb-2">إعلان</div>
              <div className="bg-muted/10 rounded-lg p-4 min-h-[250px] flex items-center justify-center">
                <ins className="propellerads-async" data-zone="10130777"></ins>
              </div>
            </div>

            <AnalysisResults results={results} />

            {/* Bottom Native Ad */}
            <div className="mt-8">
              <div className="text-center text-xs text-muted-foreground mb-2">إعلان</div>
              <div className="bg-muted/10 rounded-lg p-4 min-h-[120px] flex items-center justify-center">
                <ins className="propellerads-async" data-zone="10130778"></ins>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">مكون My food - تحليل ذكي للمنتجات الغذائية والتجميلية</p>
            <p className="text-xs text-muted-foreground">هذا التطبيق للإرشاد فقط ولا يغني عن استشارة المختصين</p>
            <div className="flex justify-center gap-6 text-xs">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                سياسة الخصوصية
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                شروط الخدمة
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
