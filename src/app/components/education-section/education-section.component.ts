import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.scss'],
  standalone: true,
  imports: [
    TimelineModule,
    CardModule,
    CommonModule
  ],
})
export class EducationSectionComponent {
  @ViewChildren('title, cards') els!: QueryList<ElementRef>;

  events = [
    { status: 'Ordered', date: '15/10/2020', icon: 'pi pi-shopping-cart', color: 'var(--pink-600)', image: 'game-controller.jpg' },
    { status: 'Processing', date: '15/10/2020', icon: 'pi pi-cog', color: 'var(--pink-600)' },
    { status: 'Shipped', date: '15/10/2020', icon: 'pi pi-shopping-cart', color: 'var(--pink-600)' },
    { status: 'Delivered', date: '16/10/2020', icon: 'pi pi-check', color: 'var(--pink-600)' }
];

  constructor() { }

  ngAfterViewInit(): void {
    // Animate on scroll
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
