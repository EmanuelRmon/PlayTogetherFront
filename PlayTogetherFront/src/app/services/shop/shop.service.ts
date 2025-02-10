import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { localUrl } from '../../utils/localUrl';
import { amazonUrl } from '../../utils/localUrl';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
    token = sessionStorage.getItem('token')
  constructor(private http : HttpClient) { }

  getProducts () {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    return this.http.get(`${amazonUrl}/products`, {headers})
    }

    busqueda(nombre:string) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)

        return this.http.get(`${amazonUrl}/products/${nombre}`, {headers})

    }


}

