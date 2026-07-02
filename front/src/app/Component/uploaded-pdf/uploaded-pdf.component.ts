import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { DocumentService } from "../../core/service/document.service";
import { Document } from "../../core/models";

@Component({
  selector: "app-uploaded-pdf",
  imports: [],
  templateUrl: "./uploaded-pdf.component.html",
  styleUrl: "./uploaded-pdf.component.scss",
})
export class UploadedPdfComponent implements OnInit {
  selectedDocument: Document | undefined;
  url: SafeResourceUrl | undefined;
  isLoading: boolean = true;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly _sanitizer: DomSanitizer,
    private readonly _documentService: DocumentService,
  ) {}

  ngOnInit(): void {
    this.getDocument();
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  private getDocument() {
    const id: string | null = this.route.snapshot.paramMap.get("id");
    this.selectedDocument = this._documentService.getDocumentById(Number(id));
    if (this.selectedDocument) {
      const urlString = "assets/document-approvals/" + this.selectedDocument.pdfSrc;
      this.url = this._sanitizer.bypassSecurityTrustResourceUrl(urlString);
    }
  }
}
