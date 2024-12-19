import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from '../../services/shop/shop.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

    products!: any
    shopService = inject(ShopService)
    busqueda = new FormControl

    constructor(private router : Router){

    }

    ngOnInit () {
        this.shopService.getProducts().subscribe({
            next:(resApi: any)=> {
                this.products = resApi
                console.log(resApi);
                console.log(this.products);



            },
            error:(error:any)=>{
                console.log(error);

            }
        })
    }

    buscar () {
        console.log(this.busqueda.value);

        this.shopService.busqueda(this.busqueda.value).subscribe({
            next:(resApi:any)=> {
                this.products = resApi
            },
            error:(error:any)=> {
                console.log(error);

            }
        })
    }


}
