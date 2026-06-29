import { Injectable } from "@angular/core";
import { Client } from "../types/client.type";

@Injectable({
  providedIn: "root",
})
export class GeoscapeClientsService {
  geoscapeClients: Client[] = [
    {
      id: "1",
      nameEN: "Sports Boulevard",
      nameAR: "المسار الرياضي",
      image: "sports-boulevard.webp",
      alt: "Sports Boulevard image",
    },
    {
      id: "2",
      nameEN: "NEOM",
      nameAR: "نيوم",
      image: "neom.webp",
      alt: "NEOM image",
    },
    {
      id: "3",
      nameEN: "Nesma & Partners",
      nameAR: "نسما وشركاهم",
      image: "nesma.webp",
      alt: "Nesma & Partners image",
    },
    {
      id: "4",
      nameEN: "Power China",
      nameAR: "باور تشاينا",
      image: "power-china.webp",
      alt: "Power China image",
    },
    {
      id: "5",
      nameEN: "Freyssinet",
      nameAR: "فريسينه",
      image: "freyssinet.webp",
      alt: "Freyssinet image",
    },
    {
      id: "6",
      nameEN: "Royal commission",
      nameAR: "الهيئة الملكية لمدينة الرياض",
      image: "royal-commission.webp",
      alt: "Royal commission image",
    },
    {
      id: "7",
      nameEN: "Sapac",
      nameAR: "سبك",
      image: "sapac.webp",
      alt: "Sapac image",
    },
    {
      id: "8",
      nameEN: "Alyamama",
      nameAR: "اليمامه",
      image: "alyamama.webp",
      alt: "Alyamama image",
    },
    {
      id: "9",
      nameEN: "Zaid Alhussain",
      nameAR: "زيد الحسين",
      image: "zaid-alhussain.webp",
      alt: "Zaid Alhussain image",
    },
    {
      id: "10",
      nameEN: "Adwaa Al Khaleel",
      nameAR: " أضواء الخليل",
      image: "adwaa-elkhliel.webp",
      alt: "Adwaa Al Khaleel image",
    },
    {
      id: "11",
      nameEN: "Aldoliaa Investment",
      nameAR: "الضليعة للاستثمار",
      image: "aldoliaa-investment.webp",
      alt: "Aldoliaa Investment image",
    },
    {
      id: "12",
      nameEN: "Riyadh Municipality",
      nameAR: "امانة الرياض",
      image: "alriyadh.webp",
      alt: "Riyadh Municipality image",
    },
    {
      id: "13",
      nameEN: "FMSCO",
      nameAR: "شركة FMSCO",
      image: "fmsco-logo.webp",
      alt: "FMSCO image",
    },
    {
      id: "14",
      nameEN: "Green Riyadh",
      nameAR: "الرياض الخضراء",
      image: "green-riyadh.webp",
      alt: "Green Riyadh image",
    },
    {
      id: "15",
      nameEN: "Modern Building Leaders",
      nameAR: "قادة البناء الحديث",
      image: "mbl.webp",
      alt: "Modern Building Leaders image",
    },
    {
      id: "16",
      nameEN: "Ministry of Health",
      nameAR: "وزارة الصحة",
      image: "ministry-of-health.webp",
      alt: "Ministry of Health image",
    },
    {
      id: "17",
      nameEN: "Ministry of Human Resources and Social Development",
      nameAR: "وزارة الموارد البشرية والتنمية الاجتماعية",
      image: "ministry-of-human.webp",
      alt: "Ministry of Human Resources and Social Development image",
    },
    {
      id: "18",
      nameEN: "Shibh Al Jazira Contracting",
      nameAR: "شركة شبه الجزيرة للمقاولات",
      image: "shibh-aljazira.webp",
      alt: "Shibh Al Jazira Contracting image",
    },
  ];

  getGeoscapeClients() {
    return this.geoscapeClients;
  }
}
