import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegosmainService {

apiUrl = "http://localhost:3000/api"
token = sessionStorage.getItem('token')

  constructor(private http: HttpClient) { }


getFavoriteGames () {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    return this.http.get (`${this.apiUrl}/games`, {headers})
  }

deleteGame (id: string) {
    return this.http.delete(`${this.apiUrl}/deletegame/${id}`)
}

addGame (body: any) {
    return this.http.post(`${this.apiUrl}/addgame`, body)
}

updateGame (id :string, body:any) {
    return this.http.put(`${this.apiUrl}/updategame/${id}`, body)
}

getGame (id :string) {
    return this.http.get(`${this.apiUrl}/game/${id}`)
}

searchGame (name: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    return this.http.get (`${this.apiUrl}/games/${name}`, {headers})
}
}
