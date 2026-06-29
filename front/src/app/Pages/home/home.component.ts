import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { Carousel, CarouselResponsiveOptions } from "primeng/carousel";
import { PrimeTemplate } from "primeng/api";
import { DocumentService } from "../../core/service/document.service";
import { GeoscapeProjectsService } from "../../core/service/geoscape-projects.service";
import { TranslatePipe } from "@ngx-translate/core";
import { LanguageService } from "../../core/service/language.service";
import { SectionHeadingComponent } from "../../Shared-Component/section-heading/section-heading.component";
import { StatCounterComponent } from "../../Shared-Component/stat-counter/stat-counter.component";
import { FeatureCardComponent } from "../../Shared-Component/feature-card/feature-card.component";
import { FeatureCard, HomeStat } from "../../core/types/home.types";
import { HeroCarouselComponent } from "../../Shared-Component/hero-carousel/hero-carousel.component";
import { HOME_HERO_SLIDES } from "./home-hero-slides.data";
import { Subscription } from "rxjs";

interface ApprovalDocument {
  id: number;
  nameEN: string;
  nameAR: string;
  imgSrc: string;
  alt: string;
}

interface FeaturedProject {
  id: number;
  nameEN: string;
  nameAR: string;
  image: string;
  alt?: string;
  scopeOfWorkEN: string;
  scopeOfWorkAR: string;
}

@Component({
  selector: "app-home",
  imports: [
    RouterLink,
    Carousel,
    PrimeTemplate,
    TranslatePipe,
    SectionHeadingComponent,
    StatCounterComponent,
    FeatureCardComponent,
    HeroCarouselComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit, OnDestroy {
  documents: ApprovalDocument[] = [];
  featuredProjects: FeaturedProject[] = [];
  lang: "en" | "ar" = "en";
  private langSubscription?: Subscription;
  currentPage: number = 0;

  readonly heroSlides = HOME_HERO_SLIDES;

  readonly stats: HomeStat[] = [
    {
      value: 14,
      labelKey: "home.stats.years_experience",
      showPlus: false,
      icon: "assets/icons/calendar.svg",
    },
    {
      value: 92,
      labelKey: "home.stats.projects_delivered",
      showPlus: true,
      icon: "assets/icons/target.svg",
    },
    {
      value: 18,
      labelKey: "home.stats.clients",
      showPlus: false,
      icon: "assets/icons/handshake.svg",
    },
    {
      value: 9,
      labelKey: "home.stats.certifications",
      showPlus: false,
      icon: "assets/icons/badge.svg",
    },
    {
      value: 2,
      labelKey: "home.stats.global_partners",
      showPlus: false,
      icon: "assets/icons/globe.svg",
    },
    {
      value: 250,
      labelKey: "home.stats.team_members",
      showPlus: true,
      icon: "assets/icons/calendar.svg",
    },
    {
      value: 92,
      labelKey: "home.stats.awards",
      showPlus: true,
      icon: "assets/icons/badge.svg",
    },
    {
      value: 150,
      labelKey: "home.stats.buildings",
      showPlus: true,
      icon: "assets/icons/building.svg",
    },
  ];

  readonly featureCards: FeatureCard[] = [
    {
      titleKey: "home.expertise",
      descriptionKey: "home.expertise_dec",
      highlighted: false,
      icon: "fa-solid fa-award",
    },
    {
      titleKey: "home.personalized_approach",
      descriptionKey: "home.personalized_approach_dec",
      highlighted: true,
      icon: "fa-solid fa-hand-holding-heart",
    },
    {
      titleKey: "home.sustainability",
      descriptionKey: "home.sustainability_dec",
      highlighted: false,
      icon: "fa-solid fa-seedling",
    },
    {
      titleKey: "home.customer_satisfaction",
      descriptionKey: "home.customer_satisfaction_dec",
      highlighted: true,
      icon: "fa-solid fa-star",
    },
  ];

  readonly projectCarouselOptions: CarouselResponsiveOptions[] = [
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

  constructor(
    private readonly documentService: DocumentService,
    private readonly projectsService: GeoscapeProjectsService,
    private readonly languageService: LanguageService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.langSubscription = this.languageService.language.subscribe(
      (language) => {
        this.lang = language;
      },
    );

    this.documents = this.documentService
      .getDocuments()
      .slice(1, 10) as ApprovalDocument[];

    const allProjects = [
      ...this.projectsService.getNeomProjects(),
      ...this.projectsService.getRiyadhProjects(),
    ];

    this.featuredProjects = allProjects.slice(0, 12);
    this.stats[3].value = this.documents.length;
  }

  ngOnDestroy(): void {
    this.langSubscription?.unsubscribe();
  }

  getDocumentName(document: ApprovalDocument): string {
    return this.lang === "en" ? document.nameEN : document.nameAR;
  }

  getProjectName(project: FeaturedProject): string {
    return this.lang === "en" ? project.nameEN : project.nameAR;
  }

  navigateToProjectDetails(project: FeaturedProject): void {
    this.router.navigate(["main/projects/" + project.id]).then();
  }

  onProjectsPage(event: any): void {
    this.currentPage = event.page;
  }
}
