import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { amazonURL } from '../../utils/localUrl';
import { localUrl } from '../../utils/localUrl';


@Injectable({
  providedIn: 'root'
})
export class JuegosmainService {


  constructor(private http: HttpClient) { }


getFavoriteGames () {
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
}
}
