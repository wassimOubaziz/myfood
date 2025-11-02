import { useRef, useState } from "react";
import { Camera, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ImageCaptureProps {
  onImageCapture: (imageData: string) => void;
  isAnalyzing: boolean;
}

export default function ImageCapture({ onImageCapture, isAnalyzing }: ImageCaptureProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    if (previewImage) {
      onImageCapture(previewImage);
    }
  };

  const handleClear = () => {
    setPreviewImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (cameraInputRef.current) cameraInputRef.current.value = "";
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {!previewImage ? (
        <Card className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground">التقط أو ارفع صورة المنتج</h2>
            <p className="text-muted-foreground">سنقوم بتحليل المكونات تلقائياً</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button
              size="lg"
              className="h-32 flex-col gap-3"
              onClick={() => cameraInputRef.current?.click()}
              disabled={isAnalyzing}
            >
              <Camera className="w-10 h-10" />
              <span className="text-lg font-semibold">التقط صورة</span>
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={handleFileSelect}
              />
            </Button>

            <Button
              size="lg"
              variant="secondary"
              className="h-32 flex-col gap-3"
              onClick={() => fileInputRef.current?.click()}
              disabled={isAnalyzing}
            >
              <Upload className="w-10 h-10" />
              <span className="text-lg font-semibold">ارفع صورة</span>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileSelect}
              />
            </Button>
          </div>
        </Card>
      ) : (
        <Card className="p-6 space-y-4">
          <div className="relative">
            <img
              src={previewImage}
              alt="معاينة المنتج"
              className="w-full h-auto rounded-lg"
            />
            <Button
              size="icon"
              variant="destructive"
              className="absolute top-2 left-2"
              onClick={handleClear}
              disabled={isAnalyzing}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <Button
            size="lg"
            className="w-full"
            onClick={handleAnalyze}
            disabled={isAnalyzing}
          >
            {isAnalyzing ? "جاري التحليل..." : "تحليل المكونات"}
          </Button>
        </Card>
      )}
    </div>
  );
}
