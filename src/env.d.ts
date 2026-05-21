/// <reference path="../.astro/types.d.ts" />

declare global {
  interface Window {
    gtag?: (command: 'event' | 'config' | 'set', target: string, params?: Record<string, unknown>) => void;
    fbq?: (command: 'track' | 'trackCustom', event: string, params?: Record<string, unknown>) => void;
  }
}

export {};
