/// <reference types="vite/client" />

interface Window {
  propellerads?: {
    push: (config: { type: string; onClose?: () => void }) => void;
  };
}
