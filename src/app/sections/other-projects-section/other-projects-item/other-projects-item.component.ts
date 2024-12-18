import { Component, Input, ViewChild } from '@angular/core';
import { Panel, PanelModule } from 'primeng/panel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-other-projects-item',
  templateUrl: './other-projects-item.component.html',
  styleUrls: ['./other-projects-item.component.scss'],
  standalone: true,
  imports: [
    PanelModule,
    CommonModule,
  ],
})
export class OtherProjectsItemComponent {
  @Input() title: string = "";
  @Input() company: string | undefined = "";
  @Input() location: string = "";
  @Input() date: string = "";
  @Input() description: string = "";
  @Input() url: string | undefined;

  @ViewChild('expandablePanel') expandablePanel: Panel | undefined;

  collapsed = true;
  companyUrlHovered = false;

  constructor() { }

  isCollapsed() {
    return this.expandablePanel?.collapsed;
  }

  collapse() {
    this.collapsed = true
  }
}
