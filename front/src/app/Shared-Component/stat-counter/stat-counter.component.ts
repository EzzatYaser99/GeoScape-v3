import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-stat-counter",
  standalone: true,
  templateUrl: "./stat-counter.component.html",
  styleUrl: "./stat-counter.component.scss",
})
export class StatCounterComponent implements AfterViewInit {
  @Input({ required: true }) value!: number;
  @Input({ required: true }) label!: string;
  @Input() suffix = "";
  @Input() prefix = "";
  @Input() showPlus = false;
  @Input() icon?: string;

  @ViewChild("counterRef") counterRef!: ElementRef<HTMLElement>;

  displayValue = 0;

  ngAfterViewInit(): void {
    this.animateCounter();
  }

  private animateCounter(): void {
    const duration = 1500;
    const start = performance.now();
    const target = this.value;

    const step = (timestamp: number) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.displayValue = Math.floor(eased * target);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        this.displayValue = target;
      }
    };

    requestAnimationFrame(step);
  }
}
