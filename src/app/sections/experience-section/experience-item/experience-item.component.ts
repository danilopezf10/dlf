import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PanelModule,
  ],
})
export class ExperienceItemComponent implements OnInit {
  @Input() collapsed: boolean | undefined;
  @Input() title: string = "";
  @Input() company: string = "";
  @Input() location: string = "";
  @Input() date: string = "";
  @Input() description: string = "";
  @Input() primaryTechs: Array<string> = [];
  @Input() secondaryTechs: Array<string> = [];
  @Input() otherTechs: Array<string> = [];
  @Input() url: string | undefined;

  companyUrlHovered = false;

  constructor() { }

  ngOnInit() {
  }

}
