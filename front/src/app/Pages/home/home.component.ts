import { Component, OnInit, OnDestroy, inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { Carousel, CarouselResponsiveOptions } from "primeng/carousel";
import { PrimeTemplate } from "primeng/api";
import { DocumentService } from "../../core/service/document.service";
import { GeoscapeProjectsService } from "../../core/service/geoscape-projects.service";
import { CarouselConfigService } from "../../core/service/carousel-config.service";
import { TranslatePipe } from "@ngx-translate/core";
import { LanguageStateService } from "../../core/service/language-state.service";
import { SectionHeadingComponent } from "../../Shared-Component/section-heading/section-heading.component";
import { StatCounterComponent } from "../../Shared-Component/stat-counter/stat-counter.component";
import { FeatureCardComponent } from "../../Shared-Component/feature-card/feature-card.component";
import { FeatureCard, HomeStat } from "../../core/models/home.model";
import { HeroCarouselComponent } from "../../Shared-Component/hero-carousel/hero-carousel.component";
import { HOME_HERO_SLIDES } from "./home-hero-slides.data";
import { Subject, takeUntil } from "rxjs";
import { ASSET_PATHS, COMPANY_STATS } from "../../core/config/constants";
import { PaginatorStateChangeEvent } from "../../core/types/paginator.type";

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
  private readonly documentService = inject(DocumentService);
  private readonly projectsService = inject(GeoscapeProjectsService);
  private readonly carouselConfigService = inject(CarouselConfigService);
  private readonly languageStateService = inject(LanguageStateService);
  private readonly router = inject(Router);
  private readonly destroy$ = new Subject<void>();

  documents: ApprovalDocument[] = [];
  featuredProjects: FeaturedProject[] = [];
  lang: "en" | "ar" = "en";
  currentPage: number = 0;

  readonly heroSlides = HOME_HERO_SLIDES;

  readonly stats: HomeStat[] = [
    {
      value: COMPANY_STATS.YEARS_EXPERIENCE,
      labelKey: "home.stats.years_experience",
      showPlus: false,
      icon: ASSET_PATHS.ICONS.CALENDAR,
    },
    {
      value: COMPANY_STATS.PROJECTS_DELIVERED,
      labelKey: "home.stats.projects_delivered",
      showPlus: true,
      icon: ASSET_PATHS.ICONS.TARGET,
    },
    {
      value: COMPANY_STATS.CLIENTS,
      labelKey: "home.stats.clients",
      showPlus: false,
      icon: ASSET_PATHS.ICONS.HANDSHAKE,
    },
    {
      value: COMPANY_STATS.CERTIFICATIONS,
      labelKey: "home.stats.certifications",
      showPlus: false,
      icon: ASSET_PATHS.ICONS.BADGE,
    },
    {
      value: COMPANY_STATS.GLOBAL_PARTNERS,
      labelKey: "home.stats.global_partners",
      showPlus: false,
      icon: ASSET_PATHS.ICONS.GLOBE,
    },
    {
      value: COMPANY_STATS.TEAM_MEMBERS,
      labelKey: "home.stats.team_members",
      showPlus: true,
      icon: ASSET_PATHS.ICONS.CALENDAR,
    },
    {
      value: COMPANY_STATS.AWARDS,
      labelKey: "home.stats.awards",
      showPlus: true,
      icon: ASSET_PATHS.ICONS.BADGE,
    },
    {
      value: COMPANY_STATS.BUILDINGS,
      labelKey: "home.stats.buildings",
      showPlus: true,
      icon: ASSET_PATHS.ICONS.BUILDING,
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

  projectCarouselOptions: CarouselResponsiveOptions[] = [];

  ngOnInit(): void {
    this.projectCarouselOptions = this.carouselConfigService.getResponsiveOptions('TWO_COLUMN');

    this.languageStateService.language$
      .pipe(takeUntil(this.destroy$))
      .subscribe((language: 'en' | 'ar') => {
        this.lang = language;
      });

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
    this.destroy$.next();
    this.destroy$.complete();
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

  onProjectsPage(event: PaginatorStateChangeEvent): void {
    this.currentPage = event.page ?? 0;
  }
}
