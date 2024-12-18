import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
  ]
})
export class NavMenuComponent {
  sidebarVisible = false;

  closeSidebar() {
    setTimeout( () => {
      this.sidebarVisible = false
    }, 100)
  }
}
