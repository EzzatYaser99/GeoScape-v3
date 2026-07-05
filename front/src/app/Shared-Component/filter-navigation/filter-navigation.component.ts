import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslatePipe } from "@ngx-translate/core";
import {LanguageStateService} from "../../core/service/language-state.service";
import { Subject, takeUntil } from "rxjs";
import { OnDestroy, inject } from "@angular/core";

export interface FilterItem {
  id: string | number;
  labelEN: string;
  labelAR: string;
}

@Component({
  selector: "app-filter-navigation",
  templateUrl: "./filter-navigation.component.html",
  styleUrl: "./filter-navigation.component.scss",
  imports: [CommonModule, TranslatePipe],
})
export class FilterNavigationComponent implements  OnDestroy{
  private readonly languageStateService = inject(LanguageStateService);
  private readonly destroy$ = new Subject<void>();

  @Input() filterItems: FilterItem[] = [];
  @Input() activeIndex: number = 0;
  @Input() titleKey: string = "common.filter_by_section";
  @Input() customClass: string = "";
  @Output() activeIndexChange = new EventEmitter<number>();
  @Output() tabClick = new EventEmitter<number>();
  lang: "en" | "ar" = "en";

  constructor() {
    this.languageStateService.language$
      .pipe(takeUntil(this.destroy$))
      .subscribe((language: "en" | "ar") => {
        this.lang = language;
      });
  }

  setActiveTab(index: number): void {
    this.activeIndexChange.emit(index);
    this.tabClick.emit(index);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
