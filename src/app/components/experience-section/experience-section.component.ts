import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceItemComponent } from './experience-item/experience-item.component'
// import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ExperienceItemComponent,
    // ScrollPanelModule
  ],
})
export class ExperienceSectionComponent {
  @ViewChildren('title, subtitle, card') els!: QueryList<ElementRef>;

  experienceItems = [
    {
      title: "Frontend Developer",
      company: "A2 System",
      location: "Málaga, Spain",
      date: "Nov. 2023-present",
      description: "Development of web applications using Angular, TypeScript, RxJs, PrimeNG and PrimeFlex, and Firebase as backend. In charge of different tasks, from the development of new components and designing UI elements, to migration of libraries and Angular version upgrades of different projetcs. We use Sourcetree for code management.",
      primaryTechs: ["Angular", "TypeScript", "RxJs"],
      secondaryTechs: ["PrimeNG", "PrimeFlex", "Firebase"],
      otherTechs: ["Sourcetree"],
      collapsed: true,
      url: "https://www.a2system.net/es/",
    },
    {
      title: "Freelance Web Developer",
      company: "",
      location: "Remote",
      date: "2023 & 2020",
      description: "Developed an e-commerce website for a new clothing brand using React, Material-UI and Stripe for the payments infrastructure, and a responsive web page for a newly created company dedicated to neuropsychology using Vue.js and Bootstrap. Used Git for code management and Firebase in both cases.",
      primaryTechs: ["React", "Vue.js"],
      secondaryTechs: ["Material-UI", "Bootstrap", "Stripe"],
      otherTechs: ["Git"],
    },
    {
      title: "Fullstack Developer",
      company: "Kokopilot",
      location: "Remote (France)",
      date: "2021-2022",
      description: "Worked as a freelance with an international team developing and improving the onboarding function of kokopilot.com, a tool to create websites by responding a series of questions. Used React for the front end, PHP for the back end and SQL for managing the database. We used AWS CodeCommit and Bitbucket for the code management of front and back end respectively, communicated via Discord and organized our tasks using Asana.",
      primaryTechs: ["React", "PHP", "SQL"],
      secondaryTechs: ["AWS CodeCommit"],
      otherTechs: ["Bitbucket", "Discord", "Asana"],
      url: "https://www.facebook.com/kokopilotofficial/",
    },
    {
      title: "Volunteer Developer",
      company: "Rescue App / Rescue United",
      location: "Remote",
      date: "2020-2021",
      description: "Amidst the Coronavirus crisis at the beginning of March, seeing that in Spain thousands of people were lacking certain necessary health resources (masks, ventilators…), we gathered a team of 5 volunteer developers to create rescueapp.es in order to centralize offer and demand of said resources. We managed to respond quickly and develop the core app in less than a week. I was in charge of different aspects like developing JavaScript APIs (to connect our app with Typeform, Salesforce and with another app called Frena la curva) using AWS Lambda and API Gateway, and making certain improvements to the UI (developing Vue.js components).",
      primaryTechs: ["JavaScript APIs", "Vue.js"],
      secondaryTechs: ["AWS Lambda", "API Gateway"],
      otherTechs: ["Typeform", "Salesforce"],
      url: "https://rescueapp.es/",
    },
    {
      title: "C++ Developer",
      company: "Krill Audio",
      location: "Málaga, Spain",
      date: "2018-2019",
      description: "Developed Krilloud, a Windows desktop application with connection to Unity and an audio engine integrated, playing different roles from the development of DLLs to the development of the app itself, including the design of the user interface. We were a small, self-organized team using Scrum and Bitbucket. We developed the app with .NET and C++, and used C# for the DLLs and Unity integration.",
      primaryTechs: [".NET", "C++", "C#"],
      secondaryTechs: ["DLLs", "Unity"],
      otherTechs: ["Scrum", "Bitbucket"],
      url:"https://krilloud.com/",
    },
    {
      title: "Fullstack Developer",
      company: "Grupo AL",
      location: "Málaga, Spain",
      date: "2017-2018",
      description: "Development of web applications using Java EE, HTML, CSS and JavaScript. We used MySQL for the management of databases and JUnit for unit testing. Being my first job, at the end of the first week I was already fully integrated into the team and working as any other employee, being assigned tasks of increasing importance and responsibility.",
      primaryTechs: ["Java EE", "HTML", "CSS", "JavaScript"],
      secondaryTechs: ["JUnit", "MySQL"],
      otherTechs: [],
      url: "https://grupoal.es/",
    },
  ];

  constructor() { }

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
