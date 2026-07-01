/**
 * Home page related types and interfaces
 */

import { LocalizedText } from './common.model';

export type { LocalizedText };

export interface HeroSlide {
  image: string;
  title: LocalizedText;
  /** @deprecated Use title/description instead. Kept for translate-key based slides. */
  titleKey?: string;
  subtitleKey?: string;
  ariaLabelKey?: string;
}

export interface HomeStat {
  value: number;
  labelKey: string;
  suffix?: string;
  prefix?: string;
  showPlus?: boolean;
  icon?: string;
}

export interface FeatureCard {
  titleKey: string;
  descriptionKey: string;
  highlighted: boolean;
  icon?: string;
}
