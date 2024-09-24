import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-projects-item',
  templateUrl: './other-projects-item.component.html',
  styleUrls: ['./other-projects-item.component.scss'],
  standalone: true,
  imports: [

  ],
})
export class OtherProjectsItemComponent implements OnInit {
  @Input() title: string = "";
  @Input() company: string | undefined = "";
  @Input() location: string = "";
  @Input() date: string = "";
  @Input() description: string = "";
  @Input() url: string | undefined;

  constructor() { }

  ngOnInit() {
  }

}
