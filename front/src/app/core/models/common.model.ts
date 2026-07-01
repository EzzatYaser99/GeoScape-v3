/**
 * Common types and interfaces shared across the application
 */

export interface LocalizedText {
  en: string;
  ar: string;
}

export interface MessageResponse {
  severity: string;
  summary?: string;
  detail?: string;
}
