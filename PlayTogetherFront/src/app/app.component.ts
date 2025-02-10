import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/inicio/navbar/navbar.component';
import { FooterComponent } from './components/inicio/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fixed the property name
})
export class AppComponent implements OnInit {
  title = 'PlayTogetherFront';
  loggeado!: boolean;

  ngOnInit() {
    if (sessionStorage.getItem('token')) {
      this.loggeado = true;
    } else {
      this.loggeado = false;
    }
  }
}
