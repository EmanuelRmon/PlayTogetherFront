import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NewsService } from '../../services/news/news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    news!: any
    newsService = inject(NewsService)
    busqueda = new FormControl

    constructor(private router : Router) { }

    ngOnInit () {

        if (sessionStorage.getItem('token') == undefined || null) {
            this.router.navigate(['login'])
        }
        this.newsService.getNews().subscribe({
            next:(resApi: any)=> {
                this.news = resApi
                console.log(resApi)
            },
            error:(error:any)=>{
                console.log(error);

            }
        })
    }
}
