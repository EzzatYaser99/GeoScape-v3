import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { GeoscapeProjectsService } from "../../core/service/geoscape-projects.service";
import { TranslatePipe } from "@ngx-translate/core";
import { LanguageStateService } from "../../core/service/language-state.service";
import { LocalizedPipe } from "../../core/pipes/localized.pipe";
import { Project } from "../../core/models/project.model";
import {
  FilterNavigationComponent,
  FilterItem,
} from "../../Shared-Component/filter-navigation/filter-navigation.component";
import { HeroSectionComponent } from "../../Shared-Component/hero-section/hero-section.component";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-projects",
  imports: [TranslatePipe, LocalizedPipe, FilterNavigationComponent, HeroSectionComponent],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent implements OnDestroy {
  private readonly destroy$ = new Subject<void>();
  
  neomProjects: Project[] = [];
  riyadhProjects: Project[] = [];
  selectedProject: Project | undefined;
  activeIndex: number = 0;
  lang: "en" | "ar" = "en";

  projectCategories: FilterItem[] = [
    {
      id: 0,
      label: "projects.neom_projects",
    },
    {
      id: 1,
      label: "projects.riyadh_projects",
    },
  ];

  get filteredProjects(): Project[] {
    return this.activeIndex === 0 ? this.neomProjects : this.riyadhProjects;
  }

  constructor(
    private readonly _router: Router,
    private readonly _geoscapeProjectsServices: GeoscapeProjectsService,
    private readonly _languageStateService: LanguageStateService,
  ) {
    this._languageStateService.language$
      .pipe(takeUntil(this.destroy$))
      .subscribe((language) => {
        this.lang = language;
      });

    this.neomProjects = this._geoscapeProjectsServices.getNeomProjects();
    this.riyadhProjects = this._geoscapeProjectsServices.getRiyadhProjects();

    if (this.neomProjects.length > 0) {
      this.selectedProject = this.neomProjects[0];
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  setActiveTab(index: number): void {
    this.activeIndex = index;
    const projects = this.filteredProjects;
    if (projects.length > 0) {
      this.selectedProject = projects[0];
    }
  }

  selectProject(project: any): void {
    this.selectedProject = project;
  }

  navigateToProjectDetails(project: any) {
    this._router.navigate(["main/projects/" + project.id]).then();
  }
}
