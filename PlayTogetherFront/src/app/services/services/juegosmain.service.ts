import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { amazonURL } from '../../utils/localUrl';
import { localUrl } from '../../utils/localUrl';

=======
import { localUrl } from '../../utils/localUrl';
import { amazonUrl } from '../../utils/localUrl';
>>>>>>> main2

@Injectable({
  providedIn: 'root'
})
export class JuegosmainService {

<<<<<<< HEAD
=======
token = sessionStorage.getItem('token')
>>>>>>> main2

  constructor(private http: HttpClient) { }


getFavoriteGames () {
<<<<<<< HEAD
    return this.http.get (`${amazonURL}/games`)
  }

deleteGame (id: string) {
    return this.http.delete(`${amazonURL}/deletegame/${id}`)
}

addGame (body: any) {
    return this.http.post(`${amazonURL}/addgame`, body)
}

updateGame (id :string, body:any) {
    return this.http.put(`${amazonURL}/updategame/${id}`, body)
}

getGame (id :string) {
    return this.http.get(`${amazonURL}/game/${id}`)
}

searchGame (name: string) {
    return this.http.get (`${amazonURL}/games/${name}`)
=======
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
>>>>>>> main2
}
}
