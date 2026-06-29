import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Carousel } from "primeng/carousel";
import { PrimeTemplate } from "primeng/api";
import { NgOptimizedImage } from "@angular/common";
import { GeoscapeClientsService } from "../../core/service/geoscape-clients.service";
import { Client } from "../../core/types/client.type";
import { TranslatePipe } from "@ngx-translate/core";
import { LanguageService } from "../../core/service/language.service";

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
    this.responsiveOptions = [
      {
        breakpoint: "1199px",
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: "991px",
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "767px",
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  onClientsPage(event: any): void {
    this.currentPage = event.page;
  }
}
