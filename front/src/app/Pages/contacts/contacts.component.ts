import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { InputText } from "primeng/inputtext";
import { Textarea } from "primeng/textarea";
import { ButtonDirective } from "primeng/button";
import { Ripple } from "primeng/ripple";
import { HttpClient } from "@angular/common/http";
import { MultiSelect } from "primeng/multiselect";
import { PrimeTemplate } from "primeng/api";
import { GeoscapeServicesService } from "../../core/service/geoscape-services.service";
import { TranslatePipe } from "@ngx-translate/core";
import { LanguageStateService } from "../../core/service/language-state.service";
import { LocalizedPipe } from "../../core/pipes/localized.pipe";
import { GeoscapeService, MessageResponse } from "../../core/models";
import { AddressInfoService } from "../../core/service/address-info.service";
import { HeroSectionComponent } from "../../Shared-Component/hero-section/hero-section.component";
import { catchError, finalize, tap, takeUntil } from "rxjs/operators";
import { of, Subject, Observable } from "rxjs";
import { FORM_PATTERNS } from "../../core/config/constants";
import type { AddressInfo } from "../../core/models";

@Component({
  selector: "app-contacts",
  imports: [
    FormsModule,
    InputText,
    Textarea,
    ButtonDirective,
    Ripple,
    MultiSelect,
    PrimeTemplate,
    ReactiveFormsModule,
    TranslatePipe,
    LocalizedPipe,
    HeroSectionComponent,
  ],
  templateUrl: "./contacts.component.html",
  styleUrl: "./contacts.component.scss",
})
export class ContactsComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  getTouchForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern(FORM_PATTERNS.EMAIL),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(FORM_PATTERNS.PHONE),
    ]),
    selectedServices: new FormControl(null),
    message: new FormControl(null),
  });
  geoscapeServices: GeoscapeService[];
  successMessage: MessageResponse[] = [];
  errorMessage: MessageResponse[] = [];
  showMessage: boolean = false;
  isLoading: boolean = false;
  addressInfo: AddressInfo[] = [];
  lang: "en" | "ar" = "en";

  constructor(
    private readonly _http: HttpClient,
    private readonly _geoscapeServices: GeoscapeServicesService,
    private readonly _languageStateService: LanguageStateService,
    private readonly _addressInfoService: AddressInfoService,
  ) {
    this.geoscapeServices = this._geoscapeServices.getGeoscapeServices();
    this._languageStateService.language$
      .pipe(takeUntil(this.destroy$))
      .subscribe((language) => {
        this.lang = language;
      });
  }

  ngOnInit(): void {
    this.addressInfo = this._addressInfoService.getAddressInfo();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm(): void {
    this.isLoading = true;
    const selectedServiceNames = this.getTouchForm.controls[
      "selectedServices"
      ].value?.map((item: GeoscapeService) => item.nameEN);
    const data = {
      name: this.getTouchForm.controls["name"].value || "",
      phone: this.getTouchForm.controls["phone"].value || "",
      email: this.getTouchForm.controls["email"].value || "",
      service: selectedServiceNames || "",
      message: this.getTouchForm.controls["message"].value || "",
    };

    this.sendEmail(data)
      .pipe(
        tap(() => {
          this.showMessage = true;
          this.successMessage = [
            { severity: "success", summary: "Email sent successfully!" },
          ];
        }),
        catchError(() => {
          this.showMessage = true;
          this.errorMessage = [
            { severity: "error", detail: "Error sending email" },
          ];
          return of(null);
        }),
        finalize(() => {
          setTimeout(() => {
            this.showMessage = false;
            this.isLoading = false;
          }, 3000);
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  sendEmail(data: { name: string; email: string; phone: string; service: string[]; message: string }): Observable<any> {
    const emailUrl = "send-email";
    return this._http.post(emailUrl, data);
  }
}
