import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DocumentService {
  private readonly documents: any[] = [
    {
      id: 1,
      nameEN: "GEOSCAPE Profile",
      nameAR: "ملف الشركه",
      pdfSrc: "GEOSCAPE-Profile.pdf",
      imgSrc: "GEOSCAPE-Profile.webp",
      alt: "GEOSCAPE Profile document",
    },
    {
      id: 2,
      nameEN: "ISO Certification",
      nameAR: "شهادة-الأيزو",
      pdfSrc: "شهادة-الأيزو.pdf",
      imgSrc: "شهادة-الأيزو.webp",
      alt: "ISO certification document",
    },
    {
      id: 3,
      nameEN: "The Line",
      nameAR: "شهادة ذا-لاين",
      pdfSrc: "ذا-لاين.pdf",
      imgSrc: "ذا-لاين.webp",
      alt: "The Line document",
    },
    {
      id: 4,
      nameEN: "Sports Boulevard Foundation",
      nameAR: "شهادة مؤسسة-المسار-الرياضي",
      pdfSrc: "مؤسسة-المسار-الرياضي.pdf",
      imgSrc: "مؤسسة-المسار-الرياضي.webp",
      alt: "Sports Boulevard Foundation document",
    },
    {
      id: 5,
      nameEN: "Royal Commission for AlUla",
      nameAR: " شهادةالهيئة الملكية للعلا",
      pdfSrc: "Royal-Commission-for-AlUla.pdf",
      imgSrc: "Royal-Commission-for-AlUla.webp",
      alt: "Royal Commission for AlUla document",
    },
    {
      id: 6,
      nameEN: "misk city",
      nameAR: " شهادة ميسك",
      pdfSrc: "misk-city.pdf",
      imgSrc: "misk-city.webp",
      alt: "misk city document",
    },
    {
      id: 7,
      nameEN: "WA0025",
      nameAR: "WA0025",
      pdfSrc: "WA0025.pdf",
      imgSrc: "WA0025.webp",
      alt: "WA0025 document",
    },
    {
      id: 8,
      nameEN: "MAT-000057_02",
      nameAR: "MAT-000057_02",
      pdfSrc: "MAT-000057.pdf",
      imgSrc: "MAT-000057.webp",
      alt: "MAT-000057_02 document",
    },
    {
      id: 9,
      nameEN: "GR-AUP-PQD-LAN-PLA",
      nameAR: "GR-AUP-PQD-LAN-PLA",
      pdfSrc: "GR-AUP-PQD-LAN-PLA.pdf",
      imgSrc: "GR-AUP-PQD-LAN-PLA.webp",
      alt: "GR-AUP-PQD-LAN-PLA document",
    },
    {
      id: 10,
      nameEN: "GR-AUP-MAT-LAN",
      nameAR: "GR-AUP-MAT-LAN",
      pdfSrc: "GR-AUP-MAT-LAN.pdf",
      imgSrc: "GR-AUP-MAT-LAN.webp",
      alt: "GR-AUP-MAT-LAN document",
    },
  ];

  getDocuments() {
    return this.documents;
  }

  getDocumentById(id: number) {
    return this.documents.find((document) => document.id === id);
  }
}
