import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ],
})
export class TimelineComponent {
  @Input() events: Array<any> = [];

  constructor() { }

}
