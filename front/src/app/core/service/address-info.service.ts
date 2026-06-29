import { Injectable } from "@angular/core";
import { AddressInfo } from "../types/contact.type";

@Injectable({
  providedIn: "root",
})
export class AddressInfoService {
  getAddressInfo(): AddressInfo[] {
    return [
      {
        id: 1,
        officeNameEN: "Saudi Arabia Office",
        officeNameAR: "مكتب المملكه العربية السعودية",
        addressNameEN: "King Fahd Rd, Al Olaya, Riyadh ",
        addressNameAR: "طريق الملك فهد، العليا، الرياض ",
        locationHref: "https://maps.app.goo.gl/tAMe31CRJtVjrR717",
        mail: "info@geoscape.net",
        mailHref: "mailto:info@geoscape.net",
        phoneEN: "+966 546644283",
        phoneAR: "546644283 966+",
        phoneHref: "https://wa.me/966546644283",
      },
    ];
  }
}
