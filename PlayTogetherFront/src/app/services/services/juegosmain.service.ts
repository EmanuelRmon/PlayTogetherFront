import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { localUrl } from '../../utils/localUrl';
import { amazonUrl } from '../../utils/localUrl';

@Injectable({
  providedIn: 'root'
})
export class JuegosmainService {

token = sessionStorage.getItem('token')

  constructor(private http: HttpClient) { }


getFavoriteGames () {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    return this.http.get (`${amazonUrl}/games`, {headers})
  }

deleteGame (id: string) {
    return this.http.delete(`${amazonUrl}/deletegame/${id}`)
}

addGame (body: any) {
    return this.http.post(`${amazonUrl}/addgame`, body)
}

productoEditado (id: string, body: any) {
    return this.http.put(`${amazonUrl}/updategame/${id}`, body)
}

updateGame (id :string, body:any) {
    return this.http.get(`${amazonUrl}/game/${id}`)
}

getGame (id :string) {
    return this.http.get(`${amazonUrl}/game/${id}`)
}

searchGame (name: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    return this.http.get (`${amazonUrl}/games/${name}`, {headers})
}
}
