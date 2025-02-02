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
    return this.http.get (`${localUrl}/games`, {headers})
  }

deleteGame (id: string) {
    return this.http.delete(`${localUrl}/deletegame/${id}`)
}

addGame (body: any) {
    return this.http.post(`${localUrl}/addgame`, body)
}

updateGame (id :string, body:any) {
    return this.http.put(`${localUrl}/updategame/${id}`, body)
}

getGame (id :string) {
    return this.http.get(`${localUrl}/game/${id}`)
}

searchGame (name: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    return this.http.get (`${localUrl}/games/${name}`, {headers})
}
}
