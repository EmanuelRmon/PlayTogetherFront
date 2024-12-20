import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
    apiUrl: string = "http://localhost:3000/api"
    token = sessionStorage.getItem('token')
  constructor(private http : HttpClient) { }

  getProducts () {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    return this.http.get(`${this.apiUrl}/products`, {headers})
    }

    busqueda(nombre:string) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)

        return this.http.get(`${this.apiUrl}/products/${nombre}`, {headers})

    }


}

