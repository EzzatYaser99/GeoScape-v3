import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Button } from "primeng/button";
import { ProgressBar } from "primeng/progressbar";
import { GeoscapeProjectsService } from "../../core/service/geoscape-projects.service";
import { TranslatePipe } from "@ngx-translate/core";
import { LanguageService } from "../../core/service/language.service";

@Component({
  selector: "app-projects-details",
  imports: [FormsModule, RouterLink, Button, TranslatePipe, ProgressBar],
  templateUrl: "./projects-details.component.html",
  styleUrl: "./projects-details.component.scss",
})
export class ProjectsDetailsComponent implements OnInit {
  projects: any[] = [];
  selectedProject: any;
  isLoading: boolean = true;
  lang: "en" | "ar" = "en";

  constructor(
    private readonly route: ActivatedRoute,
    private readonly _geoscapeProjectsServices: GeoscapeProjectsService,
    private readonly _languageService: LanguageService,
  ) {
    this.projects = this._geoscapeProjectsServices.getAllProjects();
    this._languageService.language.subscribe((language) => {
      this.lang = language;
    });
  }

  ngOnInit(): void {
    this.getProjects();
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  private getProjects() {
    this.selectedProject = [];
    let id: string | null = this.route.snapshot.paramMap.get("id");
    this.selectedProject = this._geoscapeProjectsServices.getProjectsById(
      Number(id),
    );
  }
}
