import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
    apiUrl: string = "http://localhost:3000/api"
  constructor(private http : HttpClient) { }

    getProducts () {
        return this.http.get(`${this.apiUrl}/products`,)
    }

    busqueda(nombre:string) {
        return this.http.get(`${this.apiUrl}/products/${nombre}`)

    }

}

