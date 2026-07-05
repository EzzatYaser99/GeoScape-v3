import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslatePipe } from "@ngx-translate/core";

export interface FilterItem {
  id: string | number;
  label: string;
}

@Component({
  selector: "app-filter-navigation",
  templateUrl: "./filter-navigation.component.html",
  styleUrl: "./filter-navigation.component.scss",
  imports: [CommonModule, TranslatePipe],
})
export class FilterNavigationComponent {
  @Input() filterItems: FilterItem[] = [];
  @Input() activeIndex: number = 0;
  @Input() titleKey: string = "common.filter_by_section";
  @Input() customClass: string = "";
  @Output() activeIndexChange = new EventEmitter<number>();
  @Output() tabClick = new EventEmitter<number>();

  setActiveTab(index: number): void {
    this.activeIndexChange.emit(index);
    this.tabClick.emit(index);
  }
}
