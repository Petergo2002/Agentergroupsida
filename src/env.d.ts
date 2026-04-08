/// <reference types="astro/client" />

declare global {
  interface Window {
    AG_WIDGET_API_URL?: string;
    openAgenter?: () => void;
    AgenterWidget?: {
      open: () => void;
    };
  }
}

export {};
