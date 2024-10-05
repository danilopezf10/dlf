import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherProjectsItemComponent } from './other-projects-item/other-projects-item.component';

@Component({
  selector: 'app-other-projects-section',
  templateUrl: './other-projects-section.component.html',
  styleUrls: ['./other-projects-section.component.scss'],
  standalone: true,
  imports: [
    OtherProjectsItemComponent,
    CommonModule,
  ],
})
export class OtherProjectsSectionComponent {
  @ViewChildren('title, subtitle, cards') els!: QueryList<ElementRef>;

  otherProjects = [
    {
      title: "DLF website",
      location: "Remote",
      date: "September 2024",
      description: "This same website you are looking at right now! Built usig Angular, Primeflex and Primeng, hosted in Firebase. Used Sourcetree for code management.",
      //more description: I thought an interactive/web CV would be more interesting than your classical PDF
      // url: "https://www.a2system.net/es/",
    },
    {
      title: "International Graduate Consultant",
      company: "AKKA Technologies (now AKKODIS)",
      location: "Nice, France",
      date: "2020",
      description: "We were developing a Virtual Reality app for Android (using Java) when the project got on hold due to the Coronavirus crisis. Being put under partial unemployment until new projects were available, I took this time to learn new technologies and improve my French skills.",
      url: "https://akkodis.com",
    },
    {
      title: "Final thesis - Android App for Sharing Musical Resources",
      location: "University of Málaga – Málaga, Spain",
      date: "March-June 2019",
      description: "Developed an Android app that lets the user generate a video from a song and share it in social media. Used Android Studio and Java.",
      // url: "https://www.a2system.net/es/",
    },
    {
      title: "SDF-Viewer",
      location: "Remote", 
      date: "December 2019",
      description: "Developed a web app that lets the user upload structure-data files (SDFs) to visualize its contents (including the rendering of images of molecular structures), using Java, JavaScript and HTML.",
      // url: "https://www.a2system.net/es/",
    },
  ]

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
