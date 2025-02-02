import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { localUrl } from '../../utils/localUrl';
import { amazonUrl } from '../../utils/localUrl';

@Injectable({
  providedIn: 'root'
})

export class UserService {
    token: any = sessionStorage.getItem('token')

  constructor(private http : HttpClient) {}

    getUsers () {
        return this.http.get(`${localUrl}/users`)
    }

    deleteUser (id: string) {
        return this.http.delete(`${localUrl}/deleteUser/${id}`)
    }

    addUser (body: any) {
        return this.http.post(`${localUrl}/addUser`, body)
    }

    updateUser (id :string, body:any) {
        return this.http.put(`${localUrl}/updateUser/${id}`, body)
    }

    getOneUSer (id :string) {
        return this.http.get(`${localUrl}/user/${id}`)
    }

    session(body: any) {
        return this.http.post(`${localUrl}/validacion`, body)
    }
}
