import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { OtherProjectsSectionComponent } from './components/other-projects-section/other-projects-section.component';
import { ParallaxDirective } from './directives/parallax.directive';
import { EducationSectionComponent } from './components/education-section/education-section.component';
import { AboutmeSectionComponent } from './components/aboutme-section/aboutme-section.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { StarsBackgroundComponent } from './components/stars-background/stars-background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PersonalInfoComponent,
    ExperienceSectionComponent, 
    OtherProjectsSectionComponent, 
    ParallaxDirective, 
    EducationSectionComponent,
    AboutmeSectionComponent,
    ScrollTopModule,
    NavMenuComponent,
    StarsBackgroundComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
