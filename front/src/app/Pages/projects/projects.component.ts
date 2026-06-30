import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { GeoscapeProjectsService } from "../../core/service/geoscape-projects.service";
import { TranslatePipe } from "@ngx-translate/core";
import { LanguageService } from "../../core/service/language.service";
import { Project } from "../../core/types/project.type";
import {
  FilterNavigationComponent,
  FilterItem,
} from "../../Shared-Component/filter-navigation/filter-navigation.component";
import { HeroSectionComponent } from "../../Shared-Component/hero-section/hero-section.component";

@Component({
  selector: "app-projects",
  imports: [TranslatePipe, FilterNavigationComponent, HeroSectionComponent],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
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
    private readonly _languageService: LanguageService,
  ) {
    this._languageService.language.subscribe((language) => {
      this.lang = language;
    });

    this.neomProjects = this._geoscapeProjectsServices.getNeomProjects();
    this.riyadhProjects = this._geoscapeProjectsServices.getRiyadhProjects();

    if (this.neomProjects.length > 0) {
      this.selectedProject = this.neomProjects[0];
    }
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
