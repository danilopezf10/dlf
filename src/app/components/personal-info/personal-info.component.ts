import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
  standalone: true,
  imports: [
    ButtonModule,
  ],
})
export class PersonalInfoComponent implements OnInit {
  tel = "+34625064288";
  email = "danilopezf10@gmail.com";

  constructor() { }

  ngOnInit() {
  }

}
