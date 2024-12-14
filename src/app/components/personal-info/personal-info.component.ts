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
  encodedTel = "KzM0NjI1MDY0Mjg4";
  tel = "";
  encoedEmail = "ZGFuaWxvcGV6ZjEwQGdtYWlsLmNvbQ==";
  email = "";

  constructor() { }

  ngOnInit() {
    this.tel = atob(this.encodedTel);
    this.email = atob(this.encoedEmail);
  }

}
