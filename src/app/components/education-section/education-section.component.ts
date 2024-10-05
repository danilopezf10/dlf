import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component'

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.scss'],
  standalone: true,
  imports: [
    TimelineModule,
    CardModule,
    CommonModule,
    TimelineComponent
  ],
})
export class EducationSectionComponent {
  @ViewChildren('title, subtitle, timeline') els!: QueryList<ElementRef>;

//   events = [
//     { status: 'Ordered', date: '15/10/2020', icon: 'pi pi-shopping-cart', color: 'var(--pink-600)', image: 'game-controller.jpg' },
//     { status: 'Processing', date: '15/10/2020', icon: 'pi pi-cog', color: 'var(--pink-600)' },
//     { status: 'Shipped', date: '15/10/2020', icon: 'pi pi-shopping-cart', color: 'var(--pink-600)' },
//     { status: 'Delivered', date: '16/10/2020', icon: 'pi pi-check', color: 'var(--pink-600)' }
// ];
  events = [
    // { 
    //   date: '2011 & 2012', 
    //   location: 'Tampa Bay & Detroit, USA', 
    //   title: 'Barling School', 
    //   description: 'One month-long language immersion courses in Tampa Bay, Florida and Detroit, Michigan.'
    // },
    { 
      date: '2011 & 2012', 
      location: 'Tampa Bay & Detroit, USA', 
      title: 'Barling School', 
      description: 'One month-long language immersion courses in Tampa Bay, Florida and Detroit, Michigan.'
    },
    { 
      date: '2013-2019', 
      location: 'Málaga, Spain', 
      title: 'E.T.S.I. Informática - University of Malaga', 
      description: "Bachelor's degree in Software Engineering."
    },
    { 
      date: '2016-2017', 
      location: 'Gdansk, Poland', 
      title: 'Gdansk University of Technology', 
      description: 'Erasmus student for a whole year.'
    }, 
    { 
      date: 'January 2020', 
      location: 'Geneva, Switzerland', 
      title: 'The AKKAdemy',
      description: 'One-month training in consulting and teamwork skills in Geneva with other engineers from all around the globe.'
    },
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
