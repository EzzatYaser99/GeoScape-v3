/**
 * Contact-related types and interfaces
 */

import { MessageResponse } from './common.model';

export interface AddressInfo {
  id: number;
  officeNameEN: string;
  officeNameAR: string;
  addressNameEN: string;
  addressNameAR: string;
  locationHref: string;
  mail: string;
  mailHref: string;
  phoneEN: string;
  phoneAR: string;
  phoneHref: string;
}

export type { MessageResponse };
