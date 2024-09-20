import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-other-projects-section',
  templateUrl: './other-projects-section.component.html',
  styleUrls: ['./other-projects-section.component.scss'],
  standalone: true,
  imports: [

  ],
})
export class OtherProjectsSectionComponent implements OnInit {
  @ViewChildren('title, cards') els!: QueryList<ElementRef>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('fadein');
        }
      });
    },
    {
      rootMargin: '0px 0px -200px 0px' // Trigger when 100px of the element is in view
    });

    this.els.forEach((elementRef: ElementRef) => {
      observer.observe(elementRef.nativeElement);
    });
  }

}
