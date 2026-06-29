import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { DocumentService } from "../../core/service/document.service";

@Component({
  selector: "app-uploaded-pdf",
  imports: [],
  templateUrl: "./uploaded-pdf.component.html",
  styleUrl: "./uploaded-pdf.component.scss",
})
export class UploadedPdfComponent implements OnInit {
  selectedDocument: any;
  url: any;
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
    this.selectedDocument = [];
    let id: string | null = this.route.snapshot.paramMap.get("id");
    this.selectedDocument = this._documentService.getDocumentById(Number(id));
    this.url = "assets/document-approvals/" + this.selectedDocument.pdfSrc;
    this.url = this._sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
