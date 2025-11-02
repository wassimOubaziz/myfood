import { AlertTriangle, CheckCircle2, HelpCircle, ShieldAlert } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AnalysisResult } from "@/lib/gemini";

interface AnalysisResultsProps {
  results: AnalysisResult;
}

export default function AnalysisResults({ results }: AnalysisResultsProps) {
  const getStatusColor = (status: string) => {
    if (status.includes("حرام")) return "gradient-haram";
    if (status.includes("مشكوك")) return "gradient-suspect";
    return "gradient-halal";
  };

  const getStatusIcon = (status: string) => {
    if (status.includes("حرام")) return <ShieldAlert className="w-6 h-6" />;
    if (status.includes("مشكوك")) return <HelpCircle className="w-6 h-6" />;
    return <CheckCircle2 className="w-6 h-6" />;
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 pb-8">
      {/* Product Summary */}
      <Card className={`${getStatusColor(results.product_summary.overall_halal_status)} text-white border-0`}>
        <CardHeader>
          <div className="flex items-start gap-4">
            {getStatusIcon(results.product_summary.overall_halal_status)}
            <div className="flex-1">
              <CardTitle className="text-2xl mb-2">{results.product_summary.ar_title}</CardTitle>
              <Badge variant="secondary" className="mb-3 bg-white/20 text-white border-0">
                {results.product_summary.overall_halal_status}
              </Badge>
              <CardDescription className="text-white/90 text-base">
                {results.product_summary.analysis_conclusion}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        {results.product_summary.key_warning && (
          <CardContent>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold mb-1">تحذير هام</h4>
                <p className="text-sm text-white/90">{results.product_summary.key_warning}</p>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Halal/Haram Audit */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <ShieldAlert className="w-5 h-5" />
            التدقيق الشرعي
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Haram Components */}
          {results.halal_haram_audit.haram_components.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-bold text-destructive flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" />
                مكونات محرّمة ({results.halal_haram_audit.haram_components.length})
              </h3>
              {results.halal_haram_audit.haram_components.map((component, idx) => (
                <div key={idx} className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 space-y-2">
                  <h4 className="font-semibold text-destructive">{component.ar_name}</h4>
                  <p className="text-sm text-foreground/80">{component.ar_desc}</p>
                  {component.reference && (
                    <p className="text-xs text-muted-foreground">المصدر: {component.reference}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Suspect Components */}
          {results.halal_haram_audit.suspect_components.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-bold text-warning flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                مكونات مشكوك فيها ({results.halal_haram_audit.suspect_components.length})
              </h3>
              {results.halal_haram_audit.suspect_components.map((component, idx) => (
                <div key={idx} className="bg-warning/10 border border-warning/20 rounded-lg p-4 space-y-2">
                  <h4 className="font-semibold text-warning-foreground">{component.ar_name}</h4>
                  <p className="text-sm text-foreground/80">{component.ar_desc}</p>
                  {component.verification_needed && (
                    <p className="text-xs text-muted-foreground">للتحقق: {component.verification_needed}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Halal Components */}
          {results.halal_haram_audit.halal_components.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-bold text-success flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                مكونات حلال ({results.halal_haram_audit.halal_components.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {results.halal_haram_audit.halal_components.map((component, idx) => (
                  <div key={idx} className="bg-success/10 border border-success/20 rounded-lg p-3">
                    <h4 className="font-semibold text-success text-sm">{component.ar_name}</h4>
                    <p className="text-xs text-foreground/70 mt-1">{component.ar_desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Scientific Audit */}
      {(results.scientific_audit.negative_components.length > 0 || 
        results.scientific_audit.positive_components.length > 0) && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">التدقيق العلمي</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Negative Components */}
            {results.scientific_audit.negative_components.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-bold text-destructive">مكونات ضارة أو مثيرة للقلق</h3>
                {results.scientific_audit.negative_components.map((component, idx) => (
                  <div key={idx} className="bg-destructive/10 rounded-lg p-4 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold">{component.ar_name}</h4>
                      <Badge variant="destructive" className="shrink-0">{component.scientific_rating}</Badge>
                    </div>
                    <p className="text-sm text-foreground/80">{component.ar_desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Positive Components */}
            {results.scientific_audit.positive_components.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-bold text-success">مكونات مفيدة</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {results.scientific_audit.positive_components.map((component, idx) => (
                    <div key={idx} className="bg-success/10 rounded-lg p-3 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-semibold text-sm">{component.ar_name}</h4>
                        <Badge variant="outline" className="shrink-0 text-xs">{component.scientific_rating}</Badge>
                      </div>
                      <p className="text-xs text-foreground/70">{component.ar_desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Marketing Audit */}
      {results.marketing_audit.deceptive_practices.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">تحليل التسويق</CardTitle>
            <CardDescription>عبارات تسويقية قد تكون مضللة</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {results.marketing_audit.deceptive_practices.map((practice, idx) => (
              <div key={idx} className="bg-muted rounded-lg p-4 space-y-2">
                <h4 className="font-semibold text-warning">{practice.ar_term}</h4>
                <p className="text-sm text-foreground/80">{practice.ar_analysis}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
