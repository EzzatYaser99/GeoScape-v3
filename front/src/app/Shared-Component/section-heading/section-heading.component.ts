import { Component, Input } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: "app-section-heading",
  templateUrl: "./section-heading.component.html",
  styleUrl: "./section-heading.component.scss",
  imports: [TranslatePipe],
})
export class SectionHeadingComponent {
  @Input({ required: false }) subtitle!: string;
  @Input({ required: true }) title!: string;
  // Optional small eyebrow/label shown above subtitle (e.g. "Sectors", "This Site")
  @Input() eyebrow?: string;
  @Input() align: "left" | "center" = "center";
  @Input() theme: "light" | "dark" = "light";
}
