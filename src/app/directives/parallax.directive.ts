import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class ParallaxDirective {
  @Input() ratio: number = 0.5;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Get the current scroll position
    const scrollPosition = window.pageYOffset;

    // Adjust the background position based on the scroll position and parallax speed
    this.el.nativeElement.style.backgroundPositionY = `${scrollPosition * this.ratio}px`;
  }

}
