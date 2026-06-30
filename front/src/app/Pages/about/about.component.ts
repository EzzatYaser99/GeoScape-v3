import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Carousel } from "primeng/carousel";
import { PrimeTemplate } from "primeng/api";
import { NgOptimizedImage } from "@angular/common";
import { GeoscapeClientsService } from "../../core/service/geoscape-clients.service";
import { Client } from "../../core/types/client.type";
import { TranslatePipe } from "@ngx-translate/core";
import { LanguageService } from "../../core/service/language.service";
import { CAROUSEL_PRESETS } from "../../core/config/constants";

@Component({
  selector: "app-about",
  imports: [
    RouterLink,
    Carousel,
    PrimeTemplate,
    NgOptimizedImage,
    TranslatePipe,
  ],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.scss",
})
export class AboutComponent implements OnInit {
  clients: Client[];
  lang: "en" | "ar" = "en";
  responsiveOptions: any[] | undefined;
  currentPage: number = 0;

  constructor(
    private readonly _geoscapeClients: GeoscapeClientsService,
    private readonly _languageService: LanguageService,
  ) {
    this._languageService.language.subscribe((language) => {
      this.lang = language;
    });
    this.clients = this._geoscapeClients.getGeoscapeClients();
  }

  ngOnInit() {
    this.responsiveOptions = CAROUSEL_PRESETS.TWO_COLUMN;
  }

  onClientsPage(event: any): void {
    this.currentPage = event.page;
  }
}
