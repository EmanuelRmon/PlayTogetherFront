import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { localUrl } from '../../utils/localUrl';
import { amazonUrl } from '../../utils/localUrl';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

    token = sessionStorage.getItem('token')
  constructor(private httpClient : HttpClient) { }

  getNews () {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    return this.httpClient.get(`${amazonUrl}/news`)
    }

}
