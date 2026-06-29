import { Component, Input } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: "app-hero-section",
  imports: [TranslatePipe],
  templateUrl: "./hero-section.component.html",
  styleUrl: "./hero-section.component.scss",
})
export class HeroSectionComponent {
  @Input() backgroundImage!: string;
  @Input() badgeIcon?: string;
  @Input() badgeTextKey?: string;
  @Input() titleKey!: string;
  @Input() subtitleKey!: string;
  @Input() customClass?: string;
}
