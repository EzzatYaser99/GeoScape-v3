import { Component, HostListener } from "@angular/core";
import { Tooltip } from "primeng/tooltip";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: "app-scroll",
  imports: [Tooltip, TranslatePipe],
  templateUrl: "./scroll.component.html",
  standalone: true,
  styleUrl: "./scroll.component.scss",
})
export class ScrollComponent {
  showScrollButton: boolean = false;
  lastScrollTop: number = 0;

  scrollToTop($event: MouseEvent) {
    $event.preventDefault();
    document.documentElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
    }, 500);
  }

  @HostListener("window:scroll")
  onWindowScroll() {
    const st = document.documentElement.scrollTop ?? document.body.scrollTop;
    this.showScrollButton = st > this.lastScrollTop && st > window.innerHeight;
    this.lastScrollTop = st <= 0 ? 0 : st;
  }
}
