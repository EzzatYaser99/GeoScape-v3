import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Button } from "primeng/button";
import { ProgressBar } from "primeng/progressbar";
import { GeoscapeProjectsService } from "../../core/service/geoscape-projects.service";
import { TranslatePipe } from "@ngx-translate/core";
import { LanguageStateService } from "../../core/service/language-state.service";
import { LocalizedPipe } from "../../core/pipes/localized.pipe";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-projects-details",
  imports: [FormsModule, RouterLink, Button, TranslatePipe, LocalizedPipe, ProgressBar],
  templateUrl: "./projects-details.component.html",
  styleUrl: "./projects-details.component.scss",
})
export class ProjectsDetailsComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  projects: any[] = [];
  selectedProject: any;
  isLoading: boolean = true;
  lang: "en" | "ar" = "en";

  constructor(
    private readonly route: ActivatedRoute,
    private readonly _geoscapeProjectsServices: GeoscapeProjectsService,
    private readonly _languageStateService: LanguageStateService,
  ) {
    this.projects = this._geoscapeProjectsServices.getAllProjects();
    this._languageStateService.language$
      .pipe(takeUntil(this.destroy$))
      .subscribe((language) => {
        this.lang = language;
      });
  }

  ngOnInit(): void {
    this.getProjects();
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getProjects() {
    this.selectedProject = [];
    let id: string | null = this.route.snapshot.paramMap.get("id");
    this.selectedProject = this._geoscapeProjectsServices.getProjectsById(
      Number(id),
    );
  }
}
