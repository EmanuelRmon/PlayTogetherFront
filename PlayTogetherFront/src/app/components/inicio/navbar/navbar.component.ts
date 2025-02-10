import { Component, inject, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    constructor(private userService: UserService, private router: Router) {}

    handleNavigation(route: string) {
        if (this.userService.hasToken()) {
          this.router.navigate([route]);
        } else {
          this.router.navigate(['/login']);
        }
      }
}

